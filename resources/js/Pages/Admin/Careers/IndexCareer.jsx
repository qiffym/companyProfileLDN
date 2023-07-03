import { Head, Link, useForm } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';
import CareersTable from './Partials/CareersTable';
import AdminLayout from '@/Layouts/AdminLayout';
import { UserPlusIcon } from '@iconicicons/react';
import InputSearch from '@/Components/InputSearch';

const IndexCareer = ({ auth, title, flash, careers }) => {
    const { data, setData, get, processing } = useForm({ search: '' });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route('careers.index'), {
            search: data.search,
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            {toast.success(flash.success) && <ToastContainer />}

            <h1 className="text-3xl mb-4">Careers</h1>
            <div className="flex justify-between items-center mb-4">
                <form onSubmit={handleSearch}>
                    <InputSearch
                        disabled={processing}
                        value={data.search}
                        onChange={(e) => setData('search', e.target.value)}
                    />
                </form>
                <Link
                    href={route('careers.create')}
                    className="btn btn-primary"
                >
                    <UserPlusIcon />
                    Create New Career
                </Link>
            </div>

            <section className="bg-base-100 p-6 rounded-box min-h-screen">
                <div className="overflow-x-auto w-full">
                    <CareersTable careers={careers.data} />
                </div>
            </section>
        </AdminLayout>
    );
};

export default IndexCareer;
