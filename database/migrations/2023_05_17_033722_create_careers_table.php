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
        Schema::create('careers', function (Blueprint $table) {
            $table->id();
            $table->string('position_name', 50)->nullable();
            $table->string('department', 50)->nullable();
            $table->text('description')->nullable();
            $table->text('requirement')->nullable();
            $table->string('phase')->nullable();
            $table->date('open_date')->nullable();
            $table->date('close_date')->nullable();
            $table->boolean('show')->default(false);
            $table->string('experience', 50)->nullable();
            $table->string('qualification', 20)->nullable();
            $table->decimal('ipk')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('careers');
    }
};
