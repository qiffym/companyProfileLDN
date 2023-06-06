import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import CompanyLogo from '@/Components/CompanyLogo';
import FooterAdmin from '@/Layouts/Partials/FooterAdmin';
import { ArrowLeftIcon } from '@iconicicons/react';

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
        <div className="flex flex-col bg-base-300 justify-center items-center min-h-screen">
            <Head title="Log in" />
            {flash.success && (
                <div className="alert alert-info absolute top-0 rounded-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-current shrink-0 w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span>{flash.success}</span>
                </div>
            )}

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <div className="flex w-full max-w-5xl">
                <div className="w-full bg-base-100 rounded-xl relative z-10 left-8 border-2 border-primary drop-shadow-2xl">
                    <div className="flex justify-center items-center">
                        <CompanyLogo className="w-full max-w-sm object-contain" />
                    </div>
                </div>
                <div className="w-full flex flex-col p-10 bg-primary rounded-r-xl border-2 border-l-0 border-primary drop-shadow-2xl">
                    <div className="ml-8">
                        <Link
                            as="button"
                            href={route('home')}
                            className="btn btn-xs btn-ghost normal-case text-primary-content mb-10 hover:scale-110"
                        >
                            <ArrowLeftIcon className="scale-75" />
                            Back to website
                        </Link>
                        <h1 className="text-3xl text-primary-content font-light">
                            Welcome!
                        </h1>
                        <div className="divider text-primary-content before:bg-primary-content after:bg-primary-content">
                            ADMIN
                        </div>
                        <form onSubmit={submit} className="w-full">
                            {/* Email */}
                            <div className="form-control w-full max-w-lg">
                                <label className="label" htmlFor="email">
                                    <span className="label-text text-primary-content">
                                        Email
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={data.email}
                                    placeholder="Enter your email address!"
                                    className="input input-bordered w-full max-w-lg"
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                />
                                {errors.email && (
                                    <label className="label">
                                        <span className="label-text-alt text-red-300">
                                            {errors.email}
                                        </span>
                                    </label>
                                )}
                            </div>

                            {/* Password */}
                            <div className="form-control w-full max-w-lg">
                                <label className="label" htmlFor="password">
                                    <span className="label-text text-primary-content">
                                        Password
                                    </span>
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
                                {errors.password && (
                                    <label className="label">
                                        <span className="label-text-alt text-red-300">
                                            {errors.password}
                                        </span>
                                    </label>
                                )}
                            </div>

                            <div className="form-control w-full max-w-lg">
                                <label className="label cursor-pointer group">
                                    <span className="label-text text-primary-content group-hover:text-accent-content group-hover:scale-105">
                                        Remember me
                                    </span>
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-accent group-hover:scale-105"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                'remember',
                                                e.target.checked
                                            )
                                        }
                                    />
                                </label>
                            </div>

                            <div className="flex items-center justify-end mt-5 gap-3">
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        className="link text-sm text-primary-content hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-accent px-16"
                                    disabled={processing}
                                >
                                    Log in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="ml-8">
                <FooterAdmin />
            </div>
        </div>
    );
}
