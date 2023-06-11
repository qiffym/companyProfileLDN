import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { SearchIcon } from '@iconicicons/react';
import { ToastContainer, toast } from 'react-toastify';
import NewsCategoriesTable from './Partials/NewsCategoriesTable';

const Index = ({ title, items, flash, auth }) => {
    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            {toast.success(flash.success) && <ToastContainer />}
            <h1 className="text-3xl mb-4">News Categories</h1>
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
                <Link
                    href={route('news-categories.create')}
                    className="btn btn-primary"
                >
                    Create New News Category
                </Link>
            </div>

            <section className="bg-base-100 p-6 rounded-box min-h-screen">
                <div className="overflow-x-auto w-full">
                    <NewsCategoriesTable news_categories={items} />
                </div>
            </section>
        </AdminLayout>
    );
};

export default Index;
