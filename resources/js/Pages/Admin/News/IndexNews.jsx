import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import NewsTable from './Partials/NewsTable';
import { ToastContainer, toast } from 'react-toastify';
import { SearchIcon, UserPlusIcon } from '@iconicicons/react';

const IndexNews = ({ title, items, flash, auth }) => {
    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            {toast.success(flash.success) && <ToastContainer />}

            <h1 className="text-3xl mb-4">News</h1>
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
                <Link href={route('news.create')} className="btn btn-primary">
                    <UserPlusIcon />
                    Create New News
                </Link>
            </div>

            <section className="bg-base-100 p-6 rounded-box min-h-screen">
                <div className="overflow-x-auto w-full">
                    <NewsTable news={items} />
                </div>
            </section>
        </AdminLayout>
    );
};

export default IndexNews;
