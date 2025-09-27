<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('files', function (Blueprint $table) {
            $table->id(); // Coluna de ID auto-incremental (chave primária)
            $table->foreignId('user_id')->constrained('users'); // Chave estrangeira que aponta para o ID na tabela 'users'
            $table->string('title'); // Coluna para o título do ficheiro
            $table->text('description')->nullable(); // Coluna para a descrição (pode ser opcional)
            $table->boolean('is_public')->default(true); // Coluna para definir se o ficheiro é público ou privado
            $table->timestamps(); // Cria as colunas 'created_at' e 'updated_at' automaticamente
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('files');
    }
};
