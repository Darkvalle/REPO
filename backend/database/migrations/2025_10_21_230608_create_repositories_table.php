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
        Schema::create('repositories', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Nome do repositório
            $table->text('description')->nullable(); // Descrição opcional
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Dono do repositório
            $table->boolean('is_public')->default(true); // Visibilidade
            $table->timestamps(); // created_at e updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('repositories');
    }
};
    