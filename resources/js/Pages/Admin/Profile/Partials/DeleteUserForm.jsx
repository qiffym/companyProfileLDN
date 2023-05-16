import Input from '@/Components/Input';
import { Modal } from '@/Components/Modal';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export const DeleteUserForm = () => {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className="flex flex-col space-y-5 w-full">
            <header>
                <h2 className="text-lg font-medium text-base-content">
                    Delete Account
                </h2>

                <p className="mt-1 text-sm text-base-content opacity-75">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </p>
            </header>
            <button
                onClick={confirmUserDeletion}
                className="btn btn-error btn-wide text-error-content"
            >
                Delete Account
            </button>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-base-content">
                        Are you sure you want to delete your account?
                    </h2>

                    <p className="mt-1 text-sm text-base-content opacity-75">
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Please enter your
                        password to confirm you would like to permanently delete
                        your account.
                    </p>

                    <div className="form-control w-full max-w-lg">
                        <Input
                            type="password"
                            name="password"
                            value={data.password}
                            placeholder="Password"
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            iserror={errors.password}
                        />
                    </div>

                    <div className="flex justify-end max-w-lg">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="btn btn-ghost"
                        >
                            Cancel
                        </button>
                        <button
                            className="btn btn-error btn-wide"
                            disabled={processing}
                        >
                            Delete Account
                        </button>
                    </div>
                </form>
            </Modal>
        </section>
    );
};
