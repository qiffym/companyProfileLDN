import Input from '@/Components/Input';
import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import slugify from 'slugify';

const Edit = ({ auth, title, item }) => {
    const { data, setData, put, processing, errors } = useForm({
        name: item.name,
        slug: item.slug,
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('news-categories.update', item));
    };

    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            <h1 className="text-4xl mb-4">Edit News Category</h1>
            <div className="flex w-full p-6 rounded-box shadow-lg bg-base-100">
                <form onSubmit={submit} className="w-1/2">
                    <Input
                        label="Name"
                        type="text"
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        errors={errors.name}
                    />
                    <Input
                        label="Slug"
                        type="text"
                        id="slug"
                        value={
                            (data.slug = slugify(data.name, { lower: true }))
                        }
                        onChange={(e) => setData('slug', e.target.value)}
                        readOnly={true}
                        errors={errors.slug}
                    />

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
                            href={route('news-categories.index')}
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

export default Edit;
