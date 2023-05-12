import AdminLayout from '@/Layouts/AdminLayout';
import { Link, router } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';
import UsersTable from '@/Components/UsersTable';

const IndexUser = ({ users, flash, auth }) => {
    return (
        <AdminLayout auth={auth.user}>
            {toast.success(flash.success) && <ToastContainer />}

            <h1 className="text-4xl">Users</h1>
            <div className="flex justify-end mb-4">
                <Link href={route('users.create')} className="btn btn-primary">
                    Create new user
                </Link>
            </div>

            <div className="overflow-x-auto w-full">
                <UsersTable users={users} />
            </div>
        </AdminLayout>
    );
};

export default IndexUser;
