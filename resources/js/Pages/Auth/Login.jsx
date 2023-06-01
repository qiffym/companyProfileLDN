import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import CompanyLogo from '@/Components/CompanyLogo';
import { ArrowDown, ArrowRight } from '@/Components/svg';

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
        <div className="flex bg-slate-300 justify-center items-center min-h-screen">
            <Head title="Log in" />
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
                    <div className="pl-8">
                        <Link
                            as="button"
                            href={route('home')}
                            className="btn btn-xs btn-ghost normal-case text-primary-content mb-10 hover:scale-110"
                        >
                            <ArrowDown className="rotate-90 scale-75" />
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
                                        <span className="label-text-alt text-red-500">
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
                                        <span className="label-text-alt text-red-500">
                                            {errors.password}
                                        </span>
                                    </label>
                                )}
                            </div>

                            <div className="form-control w-full max-w-lg">
                                <label className="label cursor-pointer">
                                    <span className="label-text text-primary-content">
                                        Remember me
                                    </span>
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-accent"
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
        </div>
    );
}
