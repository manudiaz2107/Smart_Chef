import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Home({ auth }) {
    return (
        <>
            <Head title="Smart Chef - Bienvenido" />

            {/* Encabezado */}
            <header className="bg-gray-50 py-6 dark:bg-zinc-900">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <img
                            src="/images/smart-chef-logo.svg" // Cambia esto por la ruta de tu logo
                            alt="Smart Chef Logo"
                            className="h-12 w-auto"
                        />
                    </div>

                    {/* Navegación */}
                    <nav>
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-[#FF2D20]"
                            >
                                Panel de control
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    Iniciar sesión
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="ml-4 rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-[#FF2D20]"
                                >
                                    Registrarse
                                </Link>
                            </>
                        )}
                    </nav>
                </div>
            </header>

            {/* Contenido principal */}
            <main className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-black dark:text-white sm:text-5xl">
                        Bienvenido a Smart Chef
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Tu asistente personal para crear recetas, planificar comidas y gestionar ingredientes.
                    </p>
                </div>

                {/* Sección de características */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Tarjeta 1: Ver recetas globales */}
                    <Link
                        href={route('global-recipes.index')}
                        className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/80 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                    >
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                            <svg
                                className="size-5 sm:size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#FF2D20"
                                    d="M23 4a1 1 0 0 0-1.447-.894L12.224 7.77a.5.5 0 0 1-.448 0L2.447 3.106A1 1 0 0 0 1 4v13.382a1.99 1.99 0 0 0 1.105 1.79l9.448 4.728c.14.065.293.1.447.1.154-.005.306-.04.447-.105l9.453-4.724a1.99 1.99 0 0 0 1.1-1.789V4Z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-black dark:text-white">
                                Recetas Globales
                            </h2>
                            <p className="mt-4 text-sm/relaxed">
                                Explora una colección de recetas populares compartidas por nuestra comunidad.
                            </p>
                        </div>
                    </Link>

                    {/* Tarjeta 2: Crear receta personalizada */}
                    <Link
                        href={route('custom-recipes.create')}
                        className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/80 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                    >
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                            <svg
                                className="size-5 sm:size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#FF2D20"
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-black dark:text-white">
                                Crear Receta Personalizada
                            </h2>
                            <p className="mt-4 text-sm/relaxed">
                                Diseña tus propias recetas utilizando ingredientes disponibles en tu despensa.
                            </p>
                        </div>
                    </Link>

                    {/* Tarjeta 3: Planificar comidas */}
                    <Link
                        href={route('meal-plans.index')}
                        className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/80 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                    >
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF2D20]/10 sm:size-16">
                            <svg
                                className="size-5 sm:size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="#FF2D20"
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-black dark:text-white">
                                Planificar Comidas
                            </h2>
                            <p className="mt-4 text-sm/relaxed">
                                Organiza tus comidas semanales con facilidad.
                            </p>
                        </div>
                    </Link>
                </div>
            </main>

            {/* Pie de página */}
            <footer className="bg-gray-50 py-6 text-center text-sm text-black dark:bg-zinc-900 dark:text-white/70">
                © 2023 Smart Chef. Todos los derechos reservados.
            </footer>
        </>
    );
}