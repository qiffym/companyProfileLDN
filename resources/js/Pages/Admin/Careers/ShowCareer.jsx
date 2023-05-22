import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Edit } from '@/Components/svg';
import DOMPurify from 'dompurify';

const ShowCareer = ({ auth, title, data }) => {
    let description = DOMPurify.sanitize(data.description);
    let requirement = DOMPurify.sanitize(data.requirement);
    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            <div className="flex justify-between max-w-7xl">
                <h1 className="text-4xl mb-4">
                    Career Detail: {data.position_name}
                </h1>
                <Link
                    as="button"
                    href={route('careers.edit', data)}
                    className="btn btn-warning gap-2"
                >
                    <Edit className="mb-1" />
                    EDIT
                </Link>
            </div>
            <section className="bg-base-100 p-6 rounded-box max-w-7xl shadow-lg">
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
                    <div
                        className="text-base listModalCareer"
                        dangerouslySetInnerHTML={{
                            __html: description,
                        }}
                    />
                </div>
                <div id="requirement" className="space-y-2 mb-4">
                    <h2 className="text-xl font-semibold text-primary-focus">
                        Persyaratan
                    </h2>
                    <div
                        className="text-base listModalCareer"
                        dangerouslySetInnerHTML={{
                            __html: requirement,
                        }}
                    />
                </div>

                <div id="career-date" className="mb-4">
                    <h2 className="text-xl font-semibold text-primary-focus">
                        Timeline
                    </h2>
                    <div className="flex flex-col justify-start items-start ml-8">
                        <p className="">
                            <span className="mr-2 text-teal-600">
                                open date:
                            </span>{' '}
                            {data.open_date}
                        </p>
                        <p className="">
                            <span className="mr-2 text-red-600">
                                close date:
                            </span>{' '}
                            {data.close_date}
                        </p>
                    </div>
                </div>

                <div id="phase" className="space-y-2 mb-4">
                    <h2 className="text-xl font-semibold text-primary-focus">
                        Tahap Rekrutmen
                    </h2>
                    <p className="text-base">{data.phase}</p>
                </div>

                <div className="divider"></div>

                <div className="flex items-center gap-2">
                    <Link
                        href={route('careers.index')}
                        as="button"
                        className="btn btn-ghost"
                    >
                        Kembali
                    </Link>
                </div>
            </section>
        </AdminLayout>
    );
};

export default ShowCareer;
