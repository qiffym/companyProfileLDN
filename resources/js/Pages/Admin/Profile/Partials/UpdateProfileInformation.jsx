import { useForm, usePage } from '@inertiajs/react';
import Input from '@/Components/Input';
import foto from '../../../../../../public/assets/img/user.png';

const UpdateProfileInformation = ({ mustVerifyEmail, status }) => {
    const user = usePage().props.auth.user;

    const { data, setData, patch, processing, errors } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('profile.update'));
    };

    return (
        <section className="flex flex-col space-y-5">
            <header>
                <h2 className="text-lg font-medium text-base-content">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-base-content opacity-75">
                    Update your account's profile information and email address.
                </p>
            </header>

            <div className="flex space-x-5">
                <div>
                    <div className="avatar">
                        <div className="w-28 mask mask-squircle">
                            <img src={foto} />
                        </div>
                    </div>
                </div>
                <div className="grow">
                    <form className="w-full" onSubmit={submit}>
                        <div className="form-control w-full max-w-lg">
                            <Input
                                label="Your name"
                                type="text"
                                name="name"
                                placeholder="Enter your name!"
                                value={data.name}
                                onChange={(e) =>
                                    setData('name', e.target.value)
                                }
                                iserror={errors.name}
                            />

                            <Input
                                label="Your email"
                                type="email"
                                name="email"
                                placeholder="Enter your email address!"
                                value={data.email}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                                iserror={errors.email}
                            />

                            {mustVerifyEmail &&
                                user.email_verified_at === null && (
                                    <div>
                                        <p className="text-sm mt-2 text-base-content">
                                            Your email address is unverified.
                                            <Link
                                                href={route(
                                                    'verification.send'
                                                )}
                                                method="post"
                                                as="button"
                                                className="btn btn-primary"
                                            >
                                                Click here to re-send the
                                                verification email.
                                            </Link>
                                        </p>

                                        {status ===
                                            'verification-link-sent' && (
                                            <div className="mt-2 font-medium text-sm text-green-600">
                                                A new verification link has been
                                                sent to your email address.
                                            </div>
                                        )}
                                    </div>
                                )}
                        </div>

                        {/* <div className="divider max-w-lg"></div> */}

                        <div className="flex max-w-lg justify-end">
                            <button
                                className="btn btn-primary btn-wide"
                                disabled={processing}
                            >
                                Update Profile
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default UpdateProfileInformation;
