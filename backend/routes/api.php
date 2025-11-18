<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\StatsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
| Todas as rotas da API passam por aqui.
*/

// rota pra pegar o usuário autenticado (via Sanctum)
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// ---------- AUTENTICAÇÃO ----------
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// ---------- ESTATÍSTICAS ----------
Route::get('/stats', [StatsController::class, 'index']);

// ---------- ARQUIVOS ----------
// CRUD REST: GET /files, POST /files, GET /files/{id}, PUT/PATCH /files/{id}, DELETE /files/{id}
Route::apiResource('files', FileController::class);

// Download físico (GET /api/files/{id}/download)
Route::get('/files/{file}/download', [FileController::class, 'download']);


// ---------- TESTE RÁPIDO ----------
Route::get('/ping', function () {
    return response()->json(['pong' => true]);
});

Route::post('/debug-test', function (Request $request) {
    return response()->json([
        'ok' => true,
        'method' => $request->method(),
        'path' => $request->path(),
    ]);
});
