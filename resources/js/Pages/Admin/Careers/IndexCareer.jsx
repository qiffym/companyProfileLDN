import { Head, Link } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';
import CareersTable from './Partials/CareersTable';
import AdminLayout from '@/Layouts/AdminLayout';

const IndexCareer = ({ auth, title, flash, careers }) => {
    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            {toast.success(flash.success) && <ToastContainer />}

            <section className="bg-base-100 p-6 rounded-box min-h-screen">
                <h2 className="text-4xl">Careers</h2>
                <div className="flex justify-end mb-4">
                    <Link
                        href={route('careers.create')}
                        className="btn btn-primary"
                    >
                        Create New Career
                    </Link>
                </div>

                <div className="overflow-x-auto w-full">
                    <CareersTable careers={careers} />
                </div>
            </section>
        </AdminLayout>
    );
};

export default IndexCareer;
