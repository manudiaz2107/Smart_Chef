<?php

use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Rutas Públicas (Sin Autenticación)
|--------------------------------------------------------------------------
*/

// Página de inicio
Route::get('/', function () {
    return view('home'); // Muestra la vista "home"
})->name('home');

/*
|--------------------------------------------------------------------------
| Rutas Protegidas (Requieren Autenticación)
|--------------------------------------------------------------------------
*/
