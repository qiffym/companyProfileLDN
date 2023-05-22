import { useState } from 'react';
import ScrollableModalCareer from '@/Components/ScrollableModalCareer';

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
        <>
            {careers.map((career) => (
                <div
                    key={career.id}
                    className="flex justify-between items-center"
                >
                    <h4 className="text-xl font-bold">
                        {career.position_name}
                    </h4>
                    <div className="">
                        <button
                            onClick={() => handleShow(career)}
                            className="btn btn-sm btn-outline btn-secondary normal-case"
                        >
                            Lihat Persyaratan
                        </button>
                    </div>
                </div>
            ))}

            <div className="divider" />

            {openModal === true && data !== null && (
                <ScrollableModalCareer
                    data={data}
                    show={openModal}
                    onClose={closeModal}
                />
            )}
        </>
    );
};
