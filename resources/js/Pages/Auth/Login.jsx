import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password_hash: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password_hash'),
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6">Iniciar Sesión</h1>

                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit}>
                    {/* Campo de Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>

                    {/* Campo de Contraseña */}
                    <div className="mb-4">
                        <label htmlFor="password_hash" className="block text-sm font-medium text-gray-700">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password_hash"
                            value={data.password_hash}
                            onChange={(e) => setData('password_hash', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        />
                        {errors.password_hash && <p className="text-red-500">{errors.password_hash}</p>}
                    </div>

                    {/* Recordarme */}
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                className="rounded border-gray-300 text-indigo-600 shadow-sm"
                            />
                            <span className="ml-2 text-sm text-gray-600">Recordarme</span>
                        </label>
                    </div>

                    {/* Botón de Inicio de Sesión */}
                    <div className="flex items-center justify-end">
                        {canResetPassword && (
                            <Link href={route('password.request')} className="text-sm text-gray-600 underline">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        )}
                        <button
                            type="submit"
                            className="ml-4 inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-indigo-700 active:bg-indigo-900 focus:outline-none focus:border-indigo-900 focus:ring ring-indigo-300 disabled:opacity-25 transition ease-in-out duration-150"
                            disabled={processing}
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}