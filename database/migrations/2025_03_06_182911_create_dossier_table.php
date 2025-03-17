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
        Schema::create('dossier', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('email')->unique();
            $table->string('phone');
            $table->date('date_birth');
            $table->string('adresse');
            $table->string('job');
            $table->enum('sexe', ['male', 'female']);
            $table->string('insuranceProvider');
            $table->string('insurancePolicy');
            $table->string('allergies')->nullable();
            $table->string('currentMedications')->nullable();
            $table->string('familyMedicalHistory')->nullable();
            $table->string('pastMedicalHistory')->nullable();
            $table->enum('indetificationType', ['passport', 'cart national']);
            $table->string('indetificationNumber');
            $table->binary('file')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dossier');
    }
};


