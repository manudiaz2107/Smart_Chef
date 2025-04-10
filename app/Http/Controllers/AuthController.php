<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    // Mostrar formulario combinado de login/register
    public function showLoginForm()
    {
        if (Auth::check()) {
            return redirect()->route('dashboard');
        }
        return view('auth.combined');
    }

    // Procesar inicio de sesión
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('dashboard');
        }

        return back()->withErrors(['email' => 'Credenciales inválidas']);
    }

    // Procesar registro
    public function register(Request $request)
    {
        try {
            $data = $request->validate([
                'username' => ['required', 'string', 'max:50', 'unique:users'], // Validación para username
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'string', 'min:8', 'confirmed'],
            ]);

            $user = \App\Models\User::create([
                'username' => $data['username'],
                'email' => $data['email'],
                'password' => bcrypt($data['password']),
                'role_id' => 2, // Rol predeterminado : estandar
            ]);

            Auth::login($user);

            return redirect('/');
        } catch (\Exception $e) {
            // Manejar errores
            dd($e->getMessage()); // Muestra el mensaje de error
        }
    }

    // Cerrar sesión
    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
