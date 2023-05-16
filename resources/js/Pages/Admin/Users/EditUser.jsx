import { Head, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import Input from '@/Components/Input';

const EditUser = ({ title, user, auth }) => {
    const { data, setData, patch, processing, errors } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('users.update', user));
    };

    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            <h1 className="text-4xl mb-4">Edit User: {user.name}</h1>
            <div className="flex w-full p-6 rounded-box border shadow bg-base-100">
                <form className="w-full" onSubmit={submit}>
                    <div className="form-control w-full max-w-lg">
                        <Input
                            label="What is your name?"
                            type="text"
                            name="name"
                            placeholder="Enter your name!"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            iserror={errors.name}
                        />

                        <Input
                            label="What is your email?"
                            type="email"
                            name="email"
                            placeholder="Enter your email address!"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            iserror={errors.email}
                        />
                    </div>

                    <div className="divider max-w-lg"></div>

                    <button
                        className="btn btn-primary btn-wide"
                        disabled={processing}
                    >
                        Update
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
};

export default EditUser;
