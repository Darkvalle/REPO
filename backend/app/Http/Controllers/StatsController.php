<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StatsController extends Controller
{
    /**
     * Retorna as estatísticas agregadas do repositório.
     */
    public function index()
    {
        // Contagem real de usuários e arquivos do banco de dados
        $userCount = User::count();
        $fileCount = File::count();

        // Para a apresentação, vamos criar números fictícios e dinâmicos para os outros stats
        // para que eles mudem a cada vez que a página é recarregada.
        $stats = [
            'users' => $userCount,
            'files' => $fileCount,
            'books' => 1400000 + rand(-5000, 5000), // Número base + variação aleatória
            'audio' => 3200000 + rand(-10000, 10000),
            'software' => 280000 + rand(-1000, 1000)
        ];

        return response()->json($stats);
    }
}w
