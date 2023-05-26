import { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import { WarningTriangle } from '@/Components/svg';

const NewsTable = ({ news }) => {
    const [openModal, setOpenModal] = useState(false);
    const handleDelete = (news) => {
        router.delete(route('news.destroy', news));
    };

    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Excerpt</th>
                        <th>Image</th>
                        <th>Author</th>
                        <th>Publish At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {news.length !== 0 ? (
                        news.map((item, index) => (
                            <tr key={item.id}>
                                <th>{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.slug}</td>
                                <td>{item.excerpt}</td>
                                <td>{item.img}</td>
                                <td>{item.author}</td>
                                <td>{item.publish_at}</td>
                                <td>
                                    <div className="flex justify-center items-center space-x-2">
                                        <Link
                                            as="button"
                                            href={route('news.show', item)}
                                            className="btn btn-sm btn-info"
                                        >
                                            Show
                                        </Link>
                                        <Link
                                            as="button"
                                            href={route('news.edit', item)}
                                            className="btn btn-sm btn-warning"
                                        >
                                            Edit
                                        </Link>
                                        <button className="btn btn-sm btn-error">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <th colSpan={8}>
                                <div className="alert alert-warning">
                                    <p className="text-lg">
                                        <WarningTriangle />
                                        Data belum tersedia
                                    </p>
                                </div>
                            </th>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Excerpt</th>
                        <th>Image</th>
                        <th>Author</th>
                        <th>Publish At</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default NewsTable;
