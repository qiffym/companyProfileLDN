import { Modal } from '@/Components/Modal';
import ScrollableModal from '@/Components/ScrollableModal';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

export const JobPositions = () => {
    const [openModal, setOpenModal] = useState(false);

    const closeModal = () => {
        setOpenModal(false);
    };

    return (
        <>
            <div className="flex justify-between items-center">
                <div className="text-lg lg:text-2xl font-medium">Staff IT</div>
                <div className="">
                    <button
                        onClick={() => setOpenModal(true)}
                        className="btn btn-sm lg:btn-md btn-outline btn-secondary rounded-box normal-case"
                    >
                        Lihat Selengkapnya
                    </button>
                </div>
            </div>
            <div className="divider"></div>

            <ScrollableModal show={openModal} onClose={closeModal}>
                <div className="p-6 lg:p-12">
                    <h1 className="md:text-5xl text-3xl text-center font-bold text-primary-focus">
                        Staff IT
                    </h1>
                    <h3 className="md:text-xl text-lg text-center opacity-75">
                        Departemen IT
                    </h3>
                    <div className="divider"></div>
                    <div id="description" className="space-y-2 mb-4">
                        <h2 className="md:text-3xl text-xl font-medium text-primary-focus">
                            Deskripsi Pekerjaan
                        </h2>
                        <ol className="list-decimal ml-10 text-base md:text-lg">
                            <li>
                                <p>
                                    Melakukan pemasangan dan perawatan perangkat
                                    jaringan dalam area unit kerja
                                </p>
                            </li>
                            <li>
                                <p>
                                    Melakukan pengecekan dan perawatan access
                                    point dalam area unit kerja
                                </p>
                            </li>
                        </ol>
                    </div>
                    <div id="requirement" className="space-y-2 mb-4">
                        <h2 className="md:text-3xl text-xl font-medium text-primary-focus">
                            Persyaratan
                        </h2>
                        <ol className="list-decimal ml-10 text-base md:text-lg">
                            <li>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </li>
                            <li>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </li>
                        </ol>
                    </div>
                    <div id="phase" className="space-y-2 mb-4">
                        <h2 className="md:text-3xl text-xl font-medium text-primary-focus">
                            Tahap Rekrutmen
                        </h2>
                        <p className="md:text-lg text-base">
                            Seleksi administrasi, Wawancara, Tes Kesehatan
                        </p>
                    </div>

                    <div className="divider"></div>

                    <div className="flex justify-end items-center gap-2">
                        <button
                            type="button"
                            className="btn btn-ghost rounded-box"
                            onClick={closeModal}
                        >
                            Tutup
                        </button>
                        <a
                            href="mailto:qiffyamuhammad11@gmail.com"
                            className="btn btn-primary rounded-box"
                        >
                            Kirim Lamaran
                        </a>
                    </div>
                </div>
            </ScrollableModal>
        </>
    );
};
