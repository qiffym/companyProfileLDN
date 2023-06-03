import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import InputCareer from './Partials/InputCareer';
import TextareaCareer from './Partials/TextareaCareer';

const CreateCareer = ({ auth, title }) => {
    const { data, setData, post, errors, processing } = useForm({
        position_name: '',
        department: '',
        description: '',
        requirement: '',
        open_date: '',
        close_date: '',
        phase: '',
    });

    console.log(data.description);

    const submit = (e) => {
        e.preventDefault();
        post(route('careers.store'));
    };

    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            <h1 className="text-4xl mb-4">Create New Career</h1>
            <div className="flex w-full p-6 rounded-box shadow-lg bg-base-100">
                <form onSubmit={submit} className="w-full">
                    <div className="flex xl:flex-row flex-col xl:gap-10">
                        <InputCareer
                            label="Position Name"
                            type="text"
                            name="position_name"
                            id="position_name"
                            placeholder="Example: Staff IT"
                            value={data.position_name}
                            onChange={(e) =>
                                setData('position_name', e.target.value)
                            }
                            errors={errors.position_name}
                        />
                        <InputCareer
                            label="Department Name"
                            type="text"
                            name="department"
                            id="department"
                            placeholder="Example: IT"
                            value={data.department}
                            onChange={(e) =>
                                setData('department', e.target.value)
                            }
                            errors={errors.department}
                        />
                    </div>

                    <div className="flex xl:flex-row flex-col xl:gap-10">
                        <TextareaCareer
                            label="Job Description"
                            value={data.description}
                            onChange={(value) => setData('description', value)}
                            errors={errors.description}
                        />

                        <TextareaCareer
                            label="Requirement"
                            value={data.requirement}
                            onChange={(value) => setData('requirement', value)}
                            errors={errors.requirement}
                        />
                    </div>

                    <div className="flex xl:flex-row flex-col xl:gap-10 mt-16">
                        <InputCareer
                            label="Open Date"
                            type="date"
                            name="open_date"
                            id="open_date"
                            placeholder="Example: IT"
                            value={data.open_date}
                            onChange={(e) =>
                                setData('open_date', e.target.value)
                            }
                            errors={errors.open_date}
                        />
                        <InputCareer
                            label="Close Date"
                            type="date"
                            name="close_date"
                            id="close_date"
                            placeholder="Example: IT"
                            value={data.close_date}
                            onChange={(e) =>
                                setData('close_date', e.target.value)
                            }
                            errors={errors.close_date}
                        />
                    </div>

                    <div className="flex xl:flex-row flex-col mr-10 2xl:mr-0">
                        <InputCareer
                            label="Recruitment Phase"
                            type="text"
                            name="phase"
                            id="phase"
                            placeholder="Example: Administrasi, Teknikal Tes, Wawancara, Tes Kesehatan"
                            value={data.phase}
                            onChange={(e) => setData('phase', e.target.value)}
                            errors={errors.phase}
                        />
                    </div>

                    <div className="divider 2xl:w-[70%]"></div>

                    <div className="flex gap-5">
                        <Link
                            as="button"
                            href={route('careers.index')}
                            className="btn btn-ghost"
                        >
                            Cancel
                        </Link>

                        <button
                            disabled={processing}
                            className="btn btn-primary btn-wide"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default CreateCareer;
