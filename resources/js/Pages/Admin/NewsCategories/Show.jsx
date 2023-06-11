import AdminLayout from '@/Layouts/AdminLayout';
import { ArrowLeftIcon, EditIcon } from '@iconicicons/react';
import { Head, Link } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';

const Show = ({ title, auth, data, flash }) => {
    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            {toast.success(flash.success) && <ToastContainer />}
            <div className="flex justify-between mb-4">
                <div className="space-x-5">
                    <Link
                        as="button"
                        href={route('news-categories.index')}
                        className="btn btn-outline btn-accent"
                    >
                        <ArrowLeftIcon />
                        Kembali
                    </Link>
                    <span className="text-3xl">
                        News Category ID: {data.id}
                    </span>
                </div>

                <div>
                    <Link
                        href={route('news-categories.edit', data)}
                        className="btn btn-warning px-16"
                    >
                        <EditIcon />
                        Edit
                    </Link>
                </div>
            </div>
            <div className="flex w-full border shadow bg-base-100 rounded-box p-6">
                <div className="flex flex-col w-1/2 text-base">
                    <div className="flex flex-row">
                        <label className="w-1/3">Name</label>
                        <p className="w-full">: {data.name}</p>
                    </div>
                    <div className="divider" />

                    <div className="flex flex-row">
                        <label className="w-1/3">Slug</label>
                        <p className="w-full">: {data.slug}</p>
                    </div>
                    <div className="divider" />

                    <div className="flex flex-row">
                        <label className="w-1/3">Created_at</label>
                        <time className="w-full">
                            : {moment(data.created_at).calendar()}
                        </time>
                    </div>
                    <div className="divider" />

                    <div className="flex flex-row">
                        <label className="w-1/3">Updated_at</label>
                        <time className="w-full">
                            : {moment(data.updated_at).calendar()}
                        </time>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Show;
