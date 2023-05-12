import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <Head title="Forgot Password" />

            <div className="flex flex-col w-full max-w-lg px-10 py-5 border rounded-box  justify-center items-center">
                <h1 className="text-4xl">Fortgot Password</h1>
                <div className="divider"></div>
                <div className="mb-4 text-sm text-gray-600">
                    Forgot your password? No problem. Just let us know your
                    email address and we will email you a password reset link
                    that will allow you to choose a new one.
                </div>

                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}
                <form onSubmit={submit} className="w-full">
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

                    <div className="flex items-center justify-end mt-4">
                        <button
                            className="ml-4 btn btn-primary"
                            disabled={processing}
                        >
                            Email Password Reset Link
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
