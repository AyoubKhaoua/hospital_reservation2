<?php

use Inertia\Inertia;
use App\Models\Admin;
use PhpParser\Comment\Doc;
use App\Http\Middleware\Authenticate;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AdminController;
use App\Http\Middleware\AdminMiddeleware;
use Illuminate\Container\Attributes\Auth;
use App\Http\Controllers\DoctorController;
use App\Http\Middleware\DoctorMiddeleware;
use App\Http\Middleware\MaladeMiddeleware;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\InfoUserController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/ayoub',[PostController::class,'index'])->name('ayoub.index');

Route::get('/dashboard', [InfoUserController::class, 'dashboard'])->middleware(['auth', 'verified', MaladeMiddeleware::class])->name('dashboard');//patient

Route::get('/dashboard/doctor', [DoctorController::class, 'index'])
    ->middleware('doctor')->name('dashboard-doctor');//doctor

Route::get('/dashboard/Admin', [AdminController::class, 'index'])
    ->middleware('admin')->name('dashboard-admin');//admin


//////////
Route::post('malade',[InfoUserController::class,'create'])->name('malade');
Route::get('Appointement',[InfoUserController::class,'Appointement'])->name('Appointement');
Route::post('prendreRendez-vous',[InfoUserController::class,'successPage'])->name('prendreRendez');
Route::get('success',[InfoUserController::class,'Success'])->name('success');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
