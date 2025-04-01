<?php
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return inertia('Home');
})->name('home');

Route::get('/login', function () {
    return inertia('Auth/Login');
})->name('login');

Route::get('/register', function () {
    return inertia('Auth/Register');
})->name('register');

use App\Http\Controllers\RecipeController;

Route::get('/', function () {
    return inertia('Home'); // Página principal
})->name('home');

Route::get('/recipes', [RecipeController::class, 'index'])->name('recipes.index');
Route::post('/recipes', [RecipeController::class, 'store'])->name('recipes.store');
