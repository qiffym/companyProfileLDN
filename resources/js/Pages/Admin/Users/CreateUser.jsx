import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import Input from '@/Components/Input';

const CreateUser = ({ title, auth }) => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('users.store'));
    };

    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            <h1 className="text-4xl mb-4">Create New User</h1>
            <div className="flex w-full p-6 rounded-box shadow-lg bg-base-100">
                <form className="w-full" onSubmit={submit}>
                    <div className="form-control w-full max-w-lg">
                        <Input
                            label="What is your name?"
                            type="text"
                            name="name"
                            placeholder="Enter your name!"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            errors={errors.name}
                        />

                        <Input
                            label="What is your email?"
                            type="email"
                            name="email"
                            placeholder="Enter your email address!"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            errors={errors.email}
                        />
                    </div>

                    <div className="divider max-w-lg"></div>

                    <div className="flex justify-end flex-row-reverse gap-5">
                        <button
                            type="submit"
                            disabled={processing}
                            className="btn btn-primary btn-wide"
                        >
                            Submit
                        </button>
                        <Link
                            as="button"
                            href={route('users.index')}
                            className="btn btn-ghost"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default CreateUser;
