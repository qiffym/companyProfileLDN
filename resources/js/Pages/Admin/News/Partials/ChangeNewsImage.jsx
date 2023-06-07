import { Modal } from '@/Components/Modal';
import { useState } from 'react';

const ChangeNewsImage = ({ newsImage }) => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => setShowModal(false);

    return (
        <>
            <div className="w-1/2 flex flex-col">
                <div>
                    <figure>
                        <label className="label">
                            <span>Image</span>
                        </label>
                        <img
                            src={`/storage/${newsImage}`}
                            alt={'News Image'}
                            className="w-full h-full object-contain rounded-box"
                        />
                    </figure>
                </div>
                <button
                    onClick={() => setShowModal(true)}
                    className="btn btn-secondary -mt-5"
                >
                    Change Image
                </button>
            </div>
            <Modal show={showModal} onClose={closeModal}>
                <form></form>
            </Modal>
        </>
    );
};

export default ChangeNewsImage;
