import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';
import UsersTable from '@/Components/UsersTable';
import UserPlus from '@/Components/svg/UserPlus';

const IndexUser = ({ title, users, flash, auth }) => {
    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            {toast.success(flash.success) && <ToastContainer />}

            <section className="bg-base-100 p-6 rounded-box min-h-screen">
                <h1 className="text-4xl">Users</h1>
                <div className="flex justify-end mb-4">
                    <Link
                        href={route('users.create')}
                        className="btn btn-primary"
                    >
                        <UserPlus className="mr-1" />
                        Create New User
                    </Link>
                </div>

                <div className="overflow-x-auto w-full">
                    <UsersTable users={users} />
                </div>
            </section>
        </AdminLayout>
    );
};

export default IndexUser;
