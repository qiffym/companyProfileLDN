import AdminLayout from '@/Layouts/AdminLayout';
import { ArrowLeftIcon, EditIcon } from '@iconicicons/react';
import { Head, Link } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';
import parse from 'html-react-parser';

const Show = ({ title, auth, data, flash }) => {
    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            {toast.success(flash.success) && <ToastContainer />}
            <div className="flex justify-between mb-4">
                <div className="space-x-5">
                    <Link
                        as="button"
                        href={route('faqs.index')}
                        className="btn btn-outline btn-accent"
                    >
                        <ArrowLeftIcon />
                        Kembali
                    </Link>
                    <span className="text-3xl">FAQ ID: {data.id}</span>
                </div>

                <div>
                    <Link
                        href={route('faqs.edit', data)}
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
                        <label className="w-1/3">Question</label>
                        <p className="w-full">: {data.question}</p>
                    </div>
                    <div className="divider" />

                    <div className="flex flex-row">
                        <label className="w-1/3">Answer</label>
                        <span className="shrink mr-1">:</span>
                        <div className="w-full">{parse(data.answer)}</div>
                    </div>
                    <div className="divider" />

                    <div className="flex flex-row">
                        <label className="w-1/3">Show</label>
                        <p className="w-full">
                            :{' '}
                            {data.hidden !== 0 ? (
                                <span className="badge badge-error">
                                    Non-active
                                </span>
                            ) : (
                                <span className="badge badge-success">
                                    Active
                                </span>
                            )}
                        </p>
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
