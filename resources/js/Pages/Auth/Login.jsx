//import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function AuthCard() {
    const [isLogin, setIsLogin] = useState(true); // Estado para controlar si muestra Login o Registro

    const { data: loginData, setData: setLoginData, post: loginPost, processing: loginProcessing, errors: loginErrors } = useForm({
        email: '',
        password: '',
    });

    const { data: registerData, setData: setRegisterData, post: registerPost, processing: registerProcessing, errors: registerErrors } = useForm({
        name: '',
        email: '',
        password: '',
    });

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        loginPost(route('login'));
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        registerPost(route('register'));
    };

    return (
        <div className="wrapper min-h-screen flex items-center justify-center bg-gray-100">
            <div className="card-switch relative">
                <label className="switch">
                    <input type="checkbox" className="toggle" checked={!isLogin} onChange={handleToggle} />
                    <span className="slider"></span>
                    <span className="card-side"></span>
                    <div className={`flip-card__inner ${!isLogin ? 'flipped' : ''}`}>
                        {/* Front: Login Form */}
                        <div className="flip-card__front">
                            <div className="title text-2xl font-bold mb-4">Iniciar Sesión</div>
                            <form className="flip-card__form" onSubmit={handleLoginSubmit}>
                                <input
                                    className="flip-card__input block w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                                    type="email"
                                    name="email"
                                    placeholder="Correo Electrónico"
                                    value={loginData.email}
                                    onChange={(e) => setLoginData('email', e.target.value)}
                                />
                                {loginErrors.email && <p className="text-red-500 text-sm">{loginErrors.email}</p>}
                                <input
                                    className="flip-card__input block w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    value={loginData.password}
                                    onChange={(e) => setLoginData('password', e.target.value)}
                                />
                                {loginErrors.password && <p className="text-red-500 text-sm">{loginErrors.password}</p>}
                                <button
                                    type="submit"
                                    disabled={loginProcessing}
                                    className="flip-card__btn w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                                >
                                    ¡Vamos!
                                </button>
                            </form>
                        </div>

                        {/* Back: Register Form */}
                        <div className="flip-card__back">
                            <div className="title text-2xl font-bold mb-4">Registrarse</div>
                            <form className="flip-card__form" onSubmit={handleRegisterSubmit}>
                                <input
                                    className="flip-card__input block w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                                    type="text"
                                    name="name"
                                    placeholder="Nombre"
                                    value={registerData.name}
                                    onChange={(e) => setRegisterData('name', e.target.value)}
                                />
                                {registerErrors.name && <p className="text-red-500 text-sm">{registerErrors.name}</p>}
                                <input
                                    className="flip-card__input block w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                                    type="email"
                                    name="email"
                                    placeholder="Correo Electrónico"
                                    value={registerData.email}
                                    onChange={(e) => setRegisterData('email', e.target.value)}
                                />
                                {registerErrors.email && <p className="text-red-500 text-sm">{registerErrors.email}</p>}
                                <input
                                    className="flip-card__input block w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500"
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    value={registerData.password}
                                    onChange={(e) => setRegisterData('password', e.target.value)}
                                />
                                {registerErrors.password && <p className="text-red-500 text-sm">{registerErrors.password}</p>}
                                <button
                                    type="submit"
                                    disabled={registerProcessing}
                                    className="flip-card__btn w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
                                >
                                    Confirmar
                                </button>
                            </form>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    );
}