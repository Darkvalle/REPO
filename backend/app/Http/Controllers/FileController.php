<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;

class FileController extends Controller
{
    /**
     * Lista arquivos (GET /api/files)
     */
    public function index()
    {
        $files = File::orderBy('created_at', 'desc')->paginate(10);

        return response()->json([
            'success' => true,
            'data' => $files,
        ]);
    }

    /**
     * Cria um arquivo via rota REST (POST /api/files)
     * Faz upload do arquivo + grava no banco.
     */
    public function store(Request $request)
    {
        // 1) Validação
        $request->validate([
            'file'        => 'required|file|max:51200|mimes:pdf,zip,docx,txt,png,jpg,jpeg',
            'title'       => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
            'tags'        => 'nullable|string|max:255',
        ]);

        if (!$request->hasFile('file')) {
            return response()->json([
                'success' => false,
                'message' => 'Nenhum arquivo foi enviado.',
            ], 400);
        }

        $uploadedFile = $request->file('file');

        // Infos do arquivo original
        $originalName = $uploadedFile->getClientOriginalName();
        $mimeType     = $uploadedFile->getClientMimeType();
        $size         = $uploadedFile->getSize();

        // Gera nome único pro arquivo salvo
        $extension  = $uploadedFile->getClientOriginalExtension();
        $storedName = time() . '_' . uniqid() . '.' . $extension;

        // Caminho da pasta pública: public/uploads
        $uploadPath = public_path('uploads');

        // Garante que a pasta existe
        if (!is_dir($uploadPath)) {
            mkdir($uploadPath, 0777, true);
        }

        // Move o arquivo pro disco (public/uploads/...)
        $uploadedFile->move($uploadPath, $storedName);

        // Caminho relativo que vamos guardar no banco
        $filePath = 'uploads/' . $storedName;

        // Converte tags string -> array (pra bater com o casts do model)
        $tagsArray = [];
        if ($request->filled('tags')) {
            $tagsArray = array_filter(
                array_map('trim', explode(',', $request->input('tags')))
            );
        }

        // Cria registro no banco
        $file = File::create([
            'user_id'     => null, // depois a gente liga com usuário autenticado
            'title'       => $request->input('title'),
            'description' => $request->input('description'),
            'file_name'   => $originalName,
            'file_path'   => $filePath,
            'file_type'   => $mimeType,
            'file_size'   => $size,
            'tags'        => $tagsArray,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Upload realizado com sucesso.',
            'data' => $this->fileResource($file),
        ], 201);
    }

    /**
     * Mostra detalhes de um arquivo (GET /api/files/{file})
     */
    public function show(File $file)
    {
        return response()->json([
            'success' => true,
            'data' => $this->fileResource($file),
        ]);
    }

    /**
     * Atualiza metadados (PUT/PATCH /api/files/{file})
     * Não troca o arquivo físico aqui, só título/descrição/tags.
     */
    public function update(Request $request, File $file)
    {
        $request->validate([
            'title'       => 'sometimes|required|string|max:255',
            'description' => 'nullable|string|max:1000',
            'tags'        => 'nullable|string|max:255',
        ]);

        if ($request->filled('title')) {
            $file->title = $request->input('title');
        }

        if ($request->filled('description')) {
            $file->description = $request->input('description');
        }

        if ($request->has('tags')) {
            $tagsArray = [];
            if ($request->filled('tags')) {
                $tagsArray = array_filter(
                    array_map('trim', explode(',', $request->input('tags')))
                );
            }
            $file->tags = $tagsArray;
        }

        $file->save();

        return response()->json([
            'success' => true,
            'message' => 'Arquivo atualizado com sucesso.',
            'data' => $this->fileResource($file),
        ]);
    }

    /**
     * Deleta um arquivo (DELETE /api/files/{file})
     */
    public function destroy(File $file)
    {
        // tenta apagar o arquivo físico em public/uploads
        if ($file->file_path && file_exists(public_path($file->file_path))) {
            @unlink(public_path($file->file_path));
        }

        $file->delete();

        return response()->json([
            'success' => true,
            'message' => 'Arquivo excluído com sucesso.',
        ]);
    }

    /**
     * Download do arquivo físico (GET /api/files/{file}/download)
     */
    public function download(File $file)
    {
        $fullPath = public_path($file->file_path);

        if (!$file->file_path || !file_exists($fullPath)) {
            return response()->json([
                'success' => false,
                'message' => 'Arquivo físico não encontrado no servidor.',
            ], 404);
        }

        return response()->download($fullPath, $file->file_name);
    }

    /**
     * Padroniza como um "File" é retornado em JSON.
     */
    private function fileResource(File $file): array
    {
        return [
            'id'          => $file->id,
            'title'       => $file->title,
            'description' => $file->description,
            'file_name'   => $file->file_name,
            'file_path'   => $file->file_path,
            'file_type'   => $file->file_type,
            'file_size'   => $file->file_size,
            'tags'        => $file->tags,
            'created_at'  => $file->created_at,
            'updated_at'  => $file->updated_at,
        ];
    }
}
