import { useState } from 'react';
import ScrollableModal from '@/Components/ScrollableModal';
import { EmailSVG } from '@/Components/svg';

export const JobPositions = () => {
    const [openModal, setOpenModal] = useState(false);

    const closeModal = () => {
        setOpenModal(false);
    };

    return (
        <>
            <div className="flex justify-between items-center">
                <h4 className="text-xl font-bold">Staff IT</h4>
                <div className="">
                    <button
                        onClick={() => setOpenModal(true)}
                        className="btn btn-sm btn-outline btn-secondary normal-case"
                    >
                        Lihat Persyaratan
                    </button>
                </div>
            </div>
            <div className="divider"></div>

            <ScrollableModal show={openModal} onClose={closeModal}>
                <div className="p-6">
                    <h1 className="text-4xl text-center font-bold text-primary-focus">
                        Staff IT
                    </h1>
                    <h3 className="text-lg text-center opacity-70">
                        Departemen IT
                    </h3>
                    <div className="divider"></div>
                    <div id="description" className="space-y-2 mb-4">
                        <h2 className="text-xl font-semibold text-primary-focus">
                            Deskripsi Pekerjaan
                        </h2>
                        <ol className="list-decimal ml-10 text-base">
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
                        <h2 className="text-xl font-semibold text-primary-focus">
                            Persyaratan
                        </h2>
                        <ol className="list-decimal ml-10 text-base">
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
                        <h2 className="text-xl font-semibold text-primary-focus">
                            Tahap Rekrutmen
                        </h2>
                        <p className="text-base">
                            Seleksi administrasi, Wawancara, Tes Kesehatan
                        </p>
                    </div>

                    <div className="divider"></div>

                    <div className="flex justify-end items-center gap-2">
                        <button
                            type="button"
                            className="btn btn-ghost"
                            onClick={closeModal}
                        >
                            Kembali
                        </button>
                        <a
                            href="mailto:hrdptlovinadheanusantara@gmail.com"
                            className="btn btn-primary gap-2 items-center"
                        >
                            <EmailSVG className="w-6 h-6 fill-primary-content animate-bounce" />
                            Kirim Lamaran
                        </a>
                    </div>
                </div>
            </ScrollableModal>
        </>
    );
};
