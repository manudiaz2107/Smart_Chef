// resources/js/Pages/Home.jsx
import React from 'react';
import { Link } from '@inertiajs/react';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-4xl font-bold text-center mb-4">Smart Chef</h1>
            <p className="text-lg text-center mb-8">
                Organiza tu cocina, planifica comidas y descubre nuevas recetas.
            </p>
            <div className="space-y-4">
                <Link href={route('login')} className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
                    Iniciar Sesión
                </Link>
                <Link href={route('register')} className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition">
                    Registrarse
                </Link>
                <Link href={route('recipes.index')} className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition">
                    Explorar Recetas Globales
                </Link>
            </div>
        </div>
    );
}