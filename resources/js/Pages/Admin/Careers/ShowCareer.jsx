import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { ArrowLeftIcon, EditIcon } from '@iconicicons/react';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment-with-locales-es6';
import parse from 'html-react-parser';

moment.locale('id');

const ShowCareer = ({ auth, title, data, flash }) => {
    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            {toast.success(flash.success) && <ToastContainer />}
            <div className="flex justify-between mb-4">
                <div className="space-x-5">
                    <Link
                        as="button"
                        href={route('news.index')}
                        className="btn btn-outline btn-accent"
                    >
                        <ArrowLeftIcon />
                        Kembali
                    </Link>
                    <span className="text-4xl">Career Details</span>
                </div>

                <div>
                    <Link
                        href={route('careers.edit', data)}
                        className="btn btn-warning px-16"
                    >
                        <EditIcon />
                        Edit
                    </Link>
                </div>
            </div>
            <section className="bg-base-100 p-6 rounded-box mx-96 shadow-lg">
                <h1 className="text-4xl text-center font-bold text-primary-focus">
                    {data.position_name}
                </h1>
                <h3 className="text-lg text-center opacity-70">
                    Departemen: {data.department}
                </h3>
                <div className="divier" />
                <div id="description" className="space-y-2 mb-4">
                    <h2 className="text-xl font-semibold text-primary-focus">
                        Deskripsi Pekerjaan
                    </h2>
                    <div className="text-base listModalCareer">
                        {data.description && parse(data.description)}
                    </div>
                </div>
                <div id="requirement" className="space-y-2 mb-4">
                    <h2 className="text-xl font-semibold text-primary-focus">
                        Persyaratan
                    </h2>
                    <div className="text-base listModalCareer">
                        {data.requirement && parse(data.requirement)}
                    </div>
                </div>

                <div id="career-date" className="mb-4">
                    <h2 className="text-xl font-semibold text-primary-focus">
                        Timeline
                    </h2>
                    <div className="flex justify-start items-start gap-3 ml-8">
                        <div className="flex flex-col">
                            <p className="text-success text-base font-medium">
                                Open Date
                            </p>
                            <p className="text-error text-base font-medium">
                                Close Date
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p>
                                :{' '}
                                {data.open_date &&
                                    moment(data.open_date).format(
                                        'dddd, D MMMM YYYY'
                                    )}
                            </p>
                            <p>
                                :{' '}
                                {data.close_date &&
                                    moment(data.close_date).format(
                                        'dddd, D MMMM YYYY'
                                    )}
                            </p>
                        </div>
                    </div>
                </div>

                <div id="phase" className="space-y-2 mb-4">
                    <h2 className="text-xl font-semibold text-primary-focus">
                        Tahap Rekrutmen
                    </h2>
                    <p className="text-base">{data.phase}</p>
                </div>
            </section>
        </AdminLayout>
    );
};

export default ShowCareer;
