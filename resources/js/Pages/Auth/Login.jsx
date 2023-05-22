import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword, flash }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            replace: true,
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <div className="flex flex-col w-full max-w-lg px-10 py-5 border rounded-box justify-center items-center bg-base-300 shadow">
                {flash.success && (
                    <div className="alert alert-success shadow-lg mb-5">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current flex-shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{flash.success}</span>
                        </div>
                    </div>
                )}
                <h1 className="text-4xl">Login</h1>
                <div className="divider"></div>
                <form onSubmit={submit} className="w-full">
                    {/* Email */}
                    <div className="form-control w-full max-w-lg">
                        <label className="label" htmlFor="email">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={data.email}
                            placeholder="Enter your email address!"
                            className="input input-bordered w-full max-w-lg"
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <label className="label">
                            <span className="label-text-alt text-red-500">
                                {errors.email}
                            </span>
                        </label>
                    </div>

                    {/* Password */}
                    <div className="form-control w-full max-w-lg">
                        <label className="label" htmlFor="password">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={data.password}
                            placeholder="Enter your password!"
                            className="input input-bordered w-full"
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                        />
                        <label className="label">
                            <span className="label-text-alt text-red-500">
                                {errors.password}
                            </span>
                        </label>
                    </div>

                    <div className="form-control w-full max-w-lg">
                        <label className="label cursor-pointer">
                            <span className="label-text">Remember me</span>
                            <input
                                type="checkbox"
                                className="checkbox checkbox-primary"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData('remember', e.target.checked)
                                }
                            />
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <button
                            className="btn btn-primary w-40 ml-4"
                            disabled={processing}
                        >
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
