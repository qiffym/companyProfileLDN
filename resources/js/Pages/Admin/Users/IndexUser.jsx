import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';
import UsersTable from '@/Pages/Admin/Users/Partials/UsersTable';
import { UserPlusIcon } from '@iconicicons/react';
import InputSearch from '@/Components/InputSearch';

const IndexUser = ({ title, users, flash, auth }) => {
    const { data, setData, get, processing } = useForm({ search: '' });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route('users.index'), {
            search: data.search,
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            {toast.success(flash.success) && <ToastContainer />}

            <h1 className="text-3xl mb-4">Users</h1>
            <div className="flex justify-between items-center mb-4">
                <form onSubmit={handleSearch}>
                    <InputSearch
                        disabled={processing}
                        value={data.search}
                        onChange={(e) => setData('search', e.target.value)}
                    />
                </form>
                <Link href={route('users.create')} className="btn btn-primary">
                    <UserPlusIcon className="mr-1" />
                    Create New User
                </Link>
            </div>

            <section className="bg-base-100 p-6 rounded-box min-h-screen drop-shadow-md">
                <div className="overflow-x-auto w-full">
                    <UsersTable
                        authRole={auth.user.roles[0].id}
                        users={users.data}
                    />
                </div>
            </section>
        </AdminLayout>
    );
};

export default IndexUser;
