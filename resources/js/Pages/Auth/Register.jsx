import { Link } from '@inertiajs/react';
import React from 'react';
import { useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="form" onSubmit={handleSubmit}>
                {/* Título */}
                <div className="title">
                    Bienvenido,<br />
                    <span>crea una cuenta para continuar</span>
                </div>

                {/* Campo de Nombre de Usuario */}
                <input
                    className="input"
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Nombre de Usuario"
                    value={data.username}
                    onChange={(e) => setData('username', e.target.value)}
                />
                {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

                {/* Campo de Correo Electrónico */}
                <input
                    className="input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                {/* Campo de Contraseña */}
                <input
                    className="input"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                {/* Campo de Confirmación de Contraseña */}
                <input
                    className="input"
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    placeholder="Confirmar Contraseña"
                    value={data.password_confirmation}
                    onChange={(e) => setData('password_confirmation', e.target.value)}
                />

                {/* Botón de Registro */}
                <button
                    type="submit"
                    disabled={processing}
                    className="button-confirm"
                >
                    ¡Vamos! →
                </button>

                {/* Enlace para Iniciar Sesión */}
                <div className="mt-4 text-center">
                    <Link href={route('login')} className="text-black-500 hover:underline">
                        ¿Ya tienes una cuenta? Inicia sesión aquí.
                    </Link>
                </div>
            </form>
        </div>
    );
}