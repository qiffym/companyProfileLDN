import { Head, Link, router, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import Input from '@/Components/Input';
import Select from '@/Components/Select';
// import InputFile from '@/Components/InputFile';
import slugify from 'slugify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditNews = ({ auth, title, news, categories }) => {
    const { data, setData, patch, processing, errors } = useForm({
        title: news.title,
        news_category_id: news.news_category_id,
        slug: news.slug,
        content: news.content,
        author: news.author.id,
        publish_at: news.publish_at,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('news.update', news));
    };

    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            <h1 className="text-4xl mb-4">Edit News</h1>
            <div className="flex w-full p-6 rounded-box shadow-lg bg-base-100">
                <form onSubmit={submit} className="w-full">
                    <Select
                        items={categories}
                        label={'News Category'}
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
                    {/* <div className="form-control">
                        <InputFile
                            label={'Image'}
                            id={'img'}
                            onChange={(e) => setData('img', e.target.files[0])}
                            errors={errors.img}
                        />
                        <label className="label">
                            <span className="label-text-alt text-yellow-500">
                                *keep it empty if not gonna change the image
                            </span>
                        </label>
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
                    </div> */}
                    <Input
                        label={'Author'}
                        type={'text'}
                        id={'author'}
                        value={news.author.name}
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
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
};

export default EditNews;
