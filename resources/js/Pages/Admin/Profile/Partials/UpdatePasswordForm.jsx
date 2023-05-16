import { useForm } from '@inertiajs/react';
import { useRef } from 'react';
import Input from '@/Components/Input';

const UpdatePasswordForm = () => {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <section className="flex flex-col space-y-5 w-full">
            <header>
                <h2 className="text-lg font-medium text-base-content">
                    Update Password
                </h2>

                <p className="mt-1 text-sm text-base-content opacity-75">
                    Ensure your account is using a long, random password to stay
                    secure.
                </p>
            </header>

            <form onSubmit={updatePassword}>
                <div className="form-control w-full max-w-lg">
                    <Input
                        label="Current password"
                        type="password"
                        name="current_password"
                        value={data.current_password}
                        onChange={(e) =>
                            setData('current_password', e.target.value)
                        }
                        iserror={errors.current_password}
                    />

                    <Input
                        label="New Password"
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        iserror={errors.password}
                    />

                    <Input
                        label="Confirm password"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        iserror={errors.password_confirmation}
                    />
                </div>
                {/* <div className="divider max-w-lg"></div> */}

                <div className="flex max-w-lg justify-end">
                    <button
                        className="btn btn-primary btn-wide"
                        disabled={processing}
                    >
                        Update Password
                    </button>
                </div>
            </form>
        </section>
    );
};

export default UpdatePasswordForm;
