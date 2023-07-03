import { useEffect } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import FAQsTable from './Partials/FAQsTable';
import { Head, Link, useForm } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';
import InputSearch from '@/Components/InputSearch';

const Index = ({ title, faqs, flash, auth }) => {
    const { data, setData, get, processing } = useForm({ search: '' });

    useEffect(() => {
        if (flash.success !== null || flash.info !== null) {
            toast.success(flash.success);
            toast.info(flash.info);
        }
    }, [flash.success, flash.info]);

    const handleSearch = (e) => {
        e.preventDefault();
        get(route('faqs.index'), {
            search: data.search,
            preserveScroll: true,
            preserveState: true,
        });
    };

    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            <ToastContainer />
            <h1 className="text-3xl mb-4">Frequently Asked Questions</h1>
            <div className="flex justify-between items-center mb-4">
                <form onSubmit={handleSearch}>
                    <InputSearch
                        disabled={processing}
                        value={data.search}
                        onChange={(e) => setData('search', e.target.value)}
                    />
                </form>
                <Link href={route('faqs.create')} className="btn btn-primary">
                    Create New FAQ
                </Link>
            </div>

            <section className="bg-base-100 p-6 rounded-box min-h-screen">
                <div className="overflow-x-auto w-full">
                    <FAQsTable faqs={faqs} />
                </div>
            </section>
        </AdminLayout>
    );
};

export default Index;
