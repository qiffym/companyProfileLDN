import { useEffect } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import FAQsTable from './Partials/FAQsTable';
import { Head, Link } from '@inertiajs/react';
import { SearchIcon } from '@iconicicons/react';
import { ToastContainer, toast } from 'react-toastify';

const Index = ({ title, faqs, flash, auth }) => {
    useEffect(() => {
        if (flash.success !== null || flash.info !== null) {
            toast.success(flash.success);
            toast.info(flash.info);
        }
    }, [flash.success, flash.info]);

    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            <ToastContainer />
            <h1 className="text-3xl mb-4">Frequently Asked Questions</h1>
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
