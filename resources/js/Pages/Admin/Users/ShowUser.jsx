import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { ToastContainer, toast } from 'react-toastify';
import { ArrowLeftIcon, EditIcon } from '@iconicicons/react';

const ShowUser = ({ title, user, auth, flash }) => {
    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            {toast.success(flash.success) && <ToastContainer />}
            <div className="flex justify-between mb-4">
                <div className="space-x-5">
                    <Link
                        as="button"
                        href={route('users.index')}
                        className="btn btn-outline btn-accent"
                    >
                        <ArrowLeftIcon />
                        Kembali
                    </Link>
                    <span className="text-4xl">User ID: {user.id}</span>
                </div>

                <div>
                    <Link
                        href={route('users.edit', user)}
                        className="btn btn-warning px-16"
                    >
                        <EditIcon />
                        Edit
                    </Link>
                </div>
            </div>
            <div className="flex w-full border shadow bg-base-100 rounded-box p-6">
                <div className="flex flex-col w-1/2">
                    <div className="form-control">
                        <span>Name</span>
                        <p>{user.name}</p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default ShowUser;
