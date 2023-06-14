import Input from '@/Components/Input';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Create = ({ auth, title }) => {
    const { data, setData, post, processing, errors } = useForm({
        question: '',
        answer: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('faqs.store'));
    };

    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            <h1 className="text-4xl mb-4">Create New FAQ</h1>
            <div className="flex w-full p-6 rounded-box shadow-lg bg-base-100">
                <form onSubmit={submit} className="w-1/2">
                    <Input
                        label="Question"
                        type="text"
                        id="question"
                        value={data.question}
                        onChange={(e) => setData('question', e.target.value)}
                        errors={errors.question}
                    />
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Answer</span>
                        </label>
                        <ReactQuill
                            value={data.answer}
                            onChange={(value) => setData('answer', value)}
                            placeholder="Type answer here..."
                            className="bg-base-200 max-w-2xl"
                        />
                        <label className="label">
                            <span className="label-text-alt text-red-500">
                                {errors.answer}
                            </span>
                        </label>
                    </div>

                    <div className="divider" />

                    <div className="flex flex-row-reverse justify-end items-center gap-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="btn btn-primary btn-wide"
                        >
                            Update Data
                        </button>
                        <Link
                            as="button"
                            href={route('faqs.index')}
                            className="btn btn-ghost"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default Create;
