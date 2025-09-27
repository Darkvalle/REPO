<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FileController;

// Adicione esta linha para registar a rota para o nosso FileController
Route::apiResource('files', FileController::class);

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

use App\Http\Controllers\StatsController; // Adicione esta linha no topo do arquivo, junto aos outros 'use'

// ... outras rotas ...

Route::get('/stats', [StatsController::class, 'index']); // Adicione esta linha no final
