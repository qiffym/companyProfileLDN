<?php

use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\CompanyContactPageController;
use App\Http\Controllers\CompanyProfilePageController;
use App\Http\Controllers\HomeController;
// use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('profil', CompanyProfilePageController::class)->name('company.profile');
Route::get('kontak', CompanyContactPageController::class)->name('company.contact-us');

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->prefix('admin/resources')->group(function () {
    Route::resource('users', UserController::class);
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


require __DIR__ . '/auth.php';
