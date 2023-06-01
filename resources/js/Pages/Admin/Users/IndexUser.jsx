import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';
import UsersTable from '@/Pages/Admin/Users/Partials/UsersTable';
import { SearchIcon, UserPlusIcon } from '@iconicicons/react';

const IndexUser = ({ title, users, flash, auth }) => {
    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            {toast.success(flash.success) && <ToastContainer />}

            <h1 className="text-3xl mb-4">Users</h1>
            <div className="flex justify-between items-center mb-4">
                <div className="join">
                    <button className="btn btn-warning join-item rounded-l-full shadow">
                        <SearchIcon />
                    </button>
                    <input
                        type="search"
                        placeholder="Search..."
                        className="input focus:outline-none w-72 join-item rounded-r-full shadow-lg"
                    />
                </div>
                <Link href={route('users.create')} className="btn btn-primary">
                    <UserPlusIcon className="mr-1" />
                    Create New User
                </Link>
            </div>

            <section className="bg-base-100 p-6 rounded-box min-h-screen drop-shadow-md">
                <div className="overflow-x-auto w-full">
                    <UsersTable users={users} />
                </div>
            </section>
        </AdminLayout>
    );
};

export default IndexUser;
