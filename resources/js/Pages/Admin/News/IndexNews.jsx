import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import NewsTable from './Partials/NewsTable';
import { ToastContainer, toast } from 'react-toastify';
import { UserPlus } from '@/Components/svg';

const IndexNews = ({ title, items, flash, auth }) => {
    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            {toast.success(flash.success) && <ToastContainer />}

            <section className="bg-base-100 p-6 rounded-box min-h-screen">
                <h2 className="text-4xl">News</h2>
                <div className="flex justify-end mb-4">
                    <Link
                        href={route('news.create')}
                        className="btn btn-primary"
                    >
                        <UserPlus className="mr-1" />
                        Create New News
                    </Link>
                </div>

                <div className="overflow-x-auto w-full">
                    <NewsTable news={items} />
                </div>
            </section>
        </AdminLayout>
    );
};

export default IndexNews;
