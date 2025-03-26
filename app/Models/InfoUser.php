<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InfoUser extends Model
{
    protected $table = 'dossier';

    protected $fillable = [
        'full_name',
        'email',
        'phone',
        'date_birth',
        'adresse',
        'job',
        'sexe',
        'insuranceProvider',
        'insurancePolicy',
        'allergies',
        'currentMedications',
        'familyMedicalHistory',
        'pastMedicalHistory',
        'indetificationType',
        'indetificationNumber',
        'file',
    ];
   

}