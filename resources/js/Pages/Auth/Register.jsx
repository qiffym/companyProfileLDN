import { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Head title="Register" />

            <div className="flex flex-col w-full max-w-lg px-10 py-5 border rounded-box justify-center items-center bg-base-300 shadow">
                <h1 className="text-4xl">Register</h1>
                <div className="divider"></div>

                <form onSubmit={submit} className="w-full">
                    {/* Name */}
                    <div className="form-control w-full max-w-lg">
                        <label className="label" htmlFor="name">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={data.name}
                            placeholder="Enter your name!"
                            className="input input-bordered w-full max-w-lg"
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        <label className="label">
                            <span className="label-text-alt text-red-500">
                                {errors.name}
                            </span>
                        </label>
                    </div>

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

                    {/* Password  Confirmation*/}
                    <div className="form-control w-full max-w-lg">
                        <label
                            className="label"
                            htmlFor="password_confirmation"
                        >
                            <span className="label-text">
                                Password Confirmation
                            </span>
                        </label>
                        <input
                            type="password"
                            name="password_confirmation"
                            id="password_confirmation"
                            value={data.password_confirmation}
                            placeholder="Enter the password confirmation!"
                            className="input input-bordered w-full"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                        />
                        <label className="label">
                            <span className="label-text-alt text-red-500">
                                {errors.password_confirmation}
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href={route('login')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Already registered?
                        </Link>

                        <button
                            className="ml-4 btn btn-primary w-40"
                            disabled={processing}
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
