import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import Input from '@/Components/Input';
import InputFile from '@/Components/InputFile';
import slugify from 'slugify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateNews = ({ auth, title }) => {
    const { data, setData, post, processing, progress, errors } = useForm({
        title: '',
        news_category_id: null,
        slug: null,
        excerpt: null,
        content: null,
        img: null,
        author: auth.user.name,
        publish_at: null,
    });

    console.log(data.img);

    const submit = (e) => {
        e.preventDefault();
        post(route('news.store'));
    };

    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            <h1 className="text-4xl mb-4">Create New News</h1>
            <div className="flex w-full p-6 rounded-box shadow-lg bg-base-100">
                <form onSubmit={submit} className="w-full">
                    <Input
                        label={'Title'}
                        type={'text'}
                        id={'title'}
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        errors={errors.title}
                    />
                    <Input
                        label={'Slug'}
                        type={'text'}
                        id={'slug'}
                        value={slugify(data.title, { lower: true })}
                        onChange={(e) => setData('slug', e.target.value)}
                        disabled={true}
                        errors={errors.slug}
                    />
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text">Content</span>
                        </label>
                        <ReactQuill
                            value={data.content}
                            onChange={(value) => setData('content', value)}
                            placeholder="Type content here..."
                            className="bg-base-200 max-w-2xl"
                        />
                    </div>
                    <div className="form-control">
                        <InputFile
                            label={'Image'}
                            id={'img'}
                            onChange={(e) => setData('img', e.target.files[0])}
                            errors={errors.img}
                        />
                        {progress && (
                            <progress
                                className="progress progress-primary w-56"
                                id={'img'}
                                value={progress.percentage}
                                max="100"
                            >
                                {progress.percentage}%
                            </progress>
                        )}
                    </div>
                    <Input
                        label={'Author'}
                        type={'text'}
                        id={'author'}
                        value={data.author}
                        disabled={true}
                        errors={errors.author}
                    />
                    <Input
                        label={'Publish At'}
                        type={'datetime-local'}
                        value={data.publish_at}
                        errors={errors.publish_at}
                    />

                    <div className="divider" />

                    <div className="flex justify-end items-center gap-4">
                        <Link
                            as="button"
                            href={route('news.index')}
                            className="btn btn-ghost"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={processing}
                            className="btn btn-primary btn-wide"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default CreateNews;
