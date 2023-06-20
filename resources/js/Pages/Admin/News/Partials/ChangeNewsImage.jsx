import { useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import { Modal } from '@/Components/Modal';
import InputFile from '@/Components/InputFile';

const ChangeNewsImage = ({ news }) => {
    const [showModal, setShowModal] = useState(false);
    const [img, setImg] = useState('');
    const { errors } = usePage().props;

    const handleChange = (e) => {
        setImg(e.target.files[0]);
    };

    const updateImage = (e) => {
        e.preventDefault();
        router.post(
            route('news.update-image', news),
            {
                _method: 'patch',
                img: img,
            },
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => closeModal(),
            }
        );
    };

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
                            src={`/storage/${news.img}`}
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
                <form onSubmit={updateImage} className="p-10">
                    <h2 className="text-center text-2xl font-medium">
                        Upadate News Image
                    </h2>
                    <div className="form-control">
                        <InputFile
                            label={'Image'}
                            id={'img'}
                            onChange={handleChange}
                            errors={errors.img}
                        />
                    </div>
                    <div className="divider" />

                    <div className="flex flex-row-reverse items-center gap-4">
                        <button
                            type="submit"
                            className="btn btn-primary btn-wide"
                        >
                            Update Image
                        </button>
                        <button
                            type="button"
                            onClick={closeModal}
                            className="btn btn-ghost"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default ChangeNewsImage;
