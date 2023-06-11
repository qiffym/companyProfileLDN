import { Head, Link, router, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import Input from '@/Components/Input';
import Select from '@/Components/Select';
import slugify from 'slugify';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ChangeNewsImage from './Partials/ChangeNewsImage';

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
            <div className="flex gap-16 w-full p-6 rounded-box shadow-lg bg-base-100">
                <form onSubmit={submit} className="1/2">
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

                    <div className="flex flex-wrap-reverse justify-end items-center gap-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="btn btn-primary btn-wide"
                        >
                            Update
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
                <ChangeNewsImage newsImage={news.img} />
            </div>
        </AdminLayout>
    );
};

export default EditNews;
