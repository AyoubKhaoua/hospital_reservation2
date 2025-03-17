<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Doctor;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;

class AdminController extends Controller
{
    public function index()
    {
        $doctors = User::where('role','doctor')->get();
        return Inertia::render('Admin/Admdashboard',['doctors'=>$doctors]);
    }
}
