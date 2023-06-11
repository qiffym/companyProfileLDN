import { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import { Modal } from '@/Components/Modal';

const NewsCategoriesTable = ({ news_categories }) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [deletedData, setDeletedData] = useState('');

    const handleShow = (news_category) => {
        setDeletedData(news_category);
        setOpenDeleteModal(true);
    };

    const handleDelete = (news_category) => {
        router.delete(route('news-categories.destroy', news_category), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
        });
    };

    const closeModal = () => {
        setOpenDeleteModal(false);
    };

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Slug</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {news_categories.map((item, index) => (
                        <tr key={item.id} className="hover">
                            <th>{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.slug}</td>
                            <td>
                                <div className="flex items-center space-x-2">
                                    <Link
                                        href={route(
                                            'news-categories.show',
                                            item
                                        )}
                                        className="btn btn-sm btn-success"
                                    >
                                        Details
                                    </Link>
                                    <Link
                                        href={route(
                                            'news-categories.edit',
                                            item
                                        )}
                                        className="btn btn-sm btn-warning"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleShow(item)}
                                        className="btn btn-sm btn-error"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal show={openDeleteModal} onClose={closeModal}>
                <form
                    onSubmit={() => handleDelete(deletedData)}
                    className="p-6"
                >
                    <h2 className="text-lg font-medium text-base-content">
                        {`Are you sure you want to delete ${deletedData.name} category?`}
                    </h2>
                    <div className="divider" />
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="btn btn-ghost"
                        >
                            Cancel
                        </button>
                        <button className="btn btn-error btn-wide">
                            Yes, Delete This Category
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default NewsCategoriesTable;
