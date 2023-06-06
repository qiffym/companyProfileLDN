import { useState } from 'react';
import ModalCareer from './ModalCareer';

export const JobPositions = ({ careers }) => {
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState(null);

    const handleShow = (career) => {
        setData(career);
        setOpenModal(true);
    };

    const closeModal = () => {
        setOpenModal(false);
    };

    return (
        <div>
            {careers.map((career) => (
                <div key={career.id}>
                    <div className="flex justify-between items-center">
                        <h4 className="text-xl font-bold">
                            {career.position_name}
                        </h4>
                        <button
                            onClick={() => handleShow(career)}
                            className="btn btn-sm btn-outline btn-primary normal-case"
                        >
                            Lihat Persyaratan
                        </button>
                    </div>
                    <div className="divider" />
                </div>
            ))}

            {openModal === true && data !== null && (
                <ModalCareer
                    data={data}
                    show={openModal}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};
