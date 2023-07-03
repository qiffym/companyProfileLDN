import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';
import NewsCategoriesTable from './Partials/NewsCategoriesTable';
import InputSearch from '@/Components/InputSearch';

const Index = ({ title, items, flash, auth }) => {
    const { data, setData, get, processing } = useForm({ search: '' });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route('news-categories.index'), {
            search: data.search,
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            {toast.success(flash.success) && <ToastContainer />}
            <h1 className="text-3xl mb-4">News Categories</h1>
            <div className="flex justify-between items-center mb-4">
                <form onSubmit={handleSearch}>
                    <InputSearch
                        disabled={processing}
                        value={data.search}
                        onChange={(e) => setData('search', e.target.value)}
                    />
                </form>
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
