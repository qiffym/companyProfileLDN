import { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import moment from 'moment-with-locales-es6';
import { WarningTriangleIcon } from '@iconicicons/react';

moment.locale('id');

const NewsTable = ({ news }) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const handleDelete = (news) => {
        router.delete(route('news.destroy', news));
    };

    return (
        <div className="overflow-x-auto">
            <table className="table table-compact">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Excerpt</th>
                        <th>Author</th>
                        <th>Publish At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {news.length !== 0 ? (
                        news.map((item, index) => (
                            <tr key={item.id} className="hover">
                                <th>{index + 1}</th>
                                <td>{item.title}</td>
                                <td>{item.slug}</td>
                                <td>{item.excerpt}</td>
                                <td>{item.author.name}</td>
                                <td>
                                    {moment(item.publish_at).format(
                                        'dddd, D MMMM YYYY'
                                    )}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-2">
                                        <Link
                                            href={route('news.show', item)}
                                            className="btn btn-sm btn-success"
                                        >
                                            Details
                                        </Link>
                                        <Link
                                            href={route('news.edit', item)}
                                            className="btn btn-sm btn-warning"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(item)}
                                            className="btn btn-sm btn-error"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <th colSpan={7}>
                                <div className="alert alert-warning text-base">
                                    <WarningTriangleIcon />
                                    <span>You don't have any news</span>
                                </div>
                            </th>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Slug</th>
                        <th>Excerpt</th>
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
