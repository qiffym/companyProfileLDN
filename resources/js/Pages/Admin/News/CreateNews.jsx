import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import Input from '@/Components/Input';
import Select from '@/Components/Select';
import InputFile from '@/Components/InputFile';
import slugify from 'slugify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CreateNews = ({ auth, title, categories }) => {
    const { data, setData, post, processing, progress, errors } = useForm({
        title: '',
        news_category_id: '',
        slug: '',
        excerpt: '',
        content: '',
        img: '',
        author: auth.user.id,
        publish_at: '',
    });

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
                    <Select
                        label={'News Category'}
                        items={categories}
                        id={'news_category'}
                        value={data.news_category_id}
                        onChange={(e) =>
                            setData('news_category_id', e.target.value)
                        }
                        errors={errors.news_category_id}
                    />
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
                        value={
                            (data.slug = slugify(data.title, { lower: true }))
                        }
                        onChange={(e) => setData('slug', e.target.value)}
                        readOnly={true}
                        errors={errors.slug}
                    />
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Content</span>
                        </label>
                        <ReactQuill
                            value={data.content}
                            onChange={(value) => setData('content', value)}
                            placeholder="Type content here..."
                            className="bg-base-200 max-w-2xl"
                        />
                        <label className="label">
                            <span className="label-text-alt text-red-500">
                                {errors.content}
                            </span>
                        </label>
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
                                className="progress progress-primary w-full max-w-lg"
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
                        value={auth.user.name}
                        readOnly={true}
                        errors={errors.author}
                    />
                    <Input
                        label={'Publish At'}
                        type={'datetime-local'}
                        value={data.publish_at}
                        onChange={(e) => setData('publish_at', e.target.value)}
                        errors={errors.publish_at}
                    />

                    <div className="divider" />

                    <div className="flex flex-row-reverse justify-end items-center gap-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="btn btn-primary btn-wide"
                        >
                            Create
                        </button>
                        <Link
                            as="button"
                            href={route('news.index')}
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

export default CreateNews;
