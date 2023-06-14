import { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import { Modal } from '@/Components/Modal';
import parse from 'html-react-parser';

const FAQsTable = ({ faqs }) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [deletedData, setDeletedData] = useState('');

    const handleShow = (faq) => {
        setDeletedData(faq);
        setOpenDeleteModal(true);
    };

    const handleDelete = (deletedData) => {
        router.delete(route('faqs.destroy', deletedData), {
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
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Hidden</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {faqs.map((item, index) => (
                        <tr key={item.id} className="hover">
                            <th>{index + 1}</th>
                            <td>{item.question}</td>
                            <td>{parse(item.answer)}</td>
                            <td>{item.hidden === 0 ? 'No' : 'Yes'}</td>
                            <td>
                                <div className="flex items-center space-x-2">
                                    <Link
                                        href={route('faqs.show', item)}
                                        className="btn btn-sm btn-success"
                                    >
                                        Details
                                    </Link>
                                    <Link
                                        href={route('faqs.edit', item)}
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
                        {`Are you sure you want to delete faq for question of "${deletedData.question}"`}
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
                            Yes, Delete This FAQ
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default FAQsTable;
