import { useState } from 'react';
import { Head, Link, router, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import InputCareer from './Partials/InputCareer';
import TextareaCareer from './Partials/TextareaCareer';

const CreateCareer = ({ auth, title, errors }) => {
    const { processing } = useForm();

    const [values, setValues] = useState({
        position_name: '',
        department: '',
        description: '',
        requirement: '',
        open_date: '',
        close_date: '',
        phase: '',
    });

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(route('careers.store'), values);
    };

    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            <h1 className="text-4xl mb-4">Create New Career</h1>
            <div className="flex w-full p-6 rounded-box shadow-lg bg-base-100">
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="flex xl:flex-row flex-col xl:gap-10">
                        <InputCareer
                            label="Position Name"
                            type="text"
                            name="position_name"
                            id="position_name"
                            placeholder="Example: Staff IT"
                            value={values.position_name}
                            onChange={handleChange}
                            iserror={errors.position_name}
                        />
                        <InputCareer
                            label="Department Name"
                            type="text"
                            name="department"
                            id="department"
                            placeholder="Example: IT"
                            value={values.department}
                            onChange={handleChange}
                            iserror={errors.department}
                        />
                    </div>

                    <div className="flex xl:flex-row flex-col xl:gap-10">
                        <TextareaCareer
                            label="Job Description"
                            name="description"
                            id="description"
                            value={values.description}
                            onChange={handleChange}
                            iserror={errors.description}
                        />

                        <TextareaCareer
                            label="Requirement"
                            name="requirement"
                            id="requirement"
                            value={values.requirement}
                            onChange={handleChange}
                            iserror={errors.requirement}
                        />
                    </div>

                    <div className="flex xl:flex-row flex-col xl:gap-10">
                        <InputCareer
                            label="Open Date"
                            type="date"
                            name="open_date"
                            id="open_date"
                            placeholder="Example: IT"
                            value={values.open_date}
                            onChange={handleChange}
                            iserror={errors.open_date}
                        />
                        <InputCareer
                            label="Close Date"
                            type="date"
                            name="close_date"
                            id="close_date"
                            placeholder="Example: IT"
                            value={values.close_date}
                            onChange={handleChange}
                            iserror={errors.close_date}
                        />
                    </div>

                    <div className="flex xl:flex-row flex-col mr-10 2xl:mr-0">
                        <InputCareer
                            label="Recruitment Phase"
                            type="text"
                            name="phase"
                            id="phase"
                            placeholder="Example: Administrasi, Teknikal Tes, Wawancara, Tes Kesehatan"
                            value={values.phase}
                            onChange={handleChange}
                            iserror={errors.phase}
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
