import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { EmailSVG } from '@/Components/svg';
import DOMPurify from 'dompurify';

const ScrollableModalCareer = ({
    show = false,
    closeable = true,
    data,
    onClose = () => {},
}) => {
    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    const listStyle = {
        listStyleType: 'decimal',
    };

    let description = DOMPurify.sanitize(data.description);
    let requirement = DOMPurify.sanitize(data.requirement);

    return (
        <Transition show={show} as={Fragment} leave="duration-200">
            <Dialog
                as="div"
                id="modal"
                onClose={close}
                className="relative z-50"
            >
                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                {/* Full-screen scrollable container */}
                <div className="fixed inset-0 overflow-y-auto">
                    {/* Container to center the panel */}
                    <div className="flex min-h-full items-center justify-center p-5">
                        {/* The actual dialog panel  */}
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="mx-auto w-full sm:max-w-xl lg:max-w-2xl rounded-box bg-base-100">
                                <div className="p-6">
                                    <h1 className="text-4xl text-center font-bold text-primary-focus">
                                        {data.position_name}
                                    </h1>
                                    <h3 className="text-lg text-center opacity-70">
                                        Departemen: {data.department}
                                    </h3>
                                    <div className="divier" />
                                    <div
                                        id="description"
                                        className="space-y-2 mb-4"
                                    >
                                        <h2 className="text-xl font-semibold text-primary-focus">
                                            Deskripsi Pekerjaan
                                        </h2>
                                        <div
                                            className="text-base listModalCareer"
                                            dangerouslySetInnerHTML={{
                                                __html: description,
                                            }}
                                        />
                                        {/* <ol className="list-decimal ml-10 text-base">
                                                <li>
                                                    <p>
                                                        Melakukan pemasangan dan perawatan
                                                        perangkat jaringan dalam area unit
                                                        kerja
                                                    </p>
                                                </li>
                                                <li>
                                                    <p>
                                                        Melakukan pengecekan dan perawatan
                                                        access point dalam area unit kerja
                                                    </p>
                                                </li>
                                            </ol> */}
                                    </div>
                                    <div
                                        id="requirement"
                                        className="space-y-2 mb-4"
                                    >
                                        <h2 className="text-xl font-semibold text-primary-focus">
                                            Persyaratan
                                        </h2>
                                        <div
                                            className="text-base listModalCareer"
                                            dangerouslySetInnerHTML={{
                                                __html: requirement,
                                            }}
                                        />
                                        {/* <ol className="list-decimal ml-10 text-base">
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
                                            </ol> */}
                                    </div>

                                    <div id="career-date" className="mb-4">
                                        <h2 className="text-xl font-semibold text-primary-focus">
                                            Timeline
                                        </h2>
                                        <div className="flex flex-col justify-start items-start ml-8">
                                            <p className="">
                                                <span className="mr-2 text-teal-600 -indent-4">
                                                    open date:
                                                </span>
                                                {data.open_date}
                                            </p>
                                            <p className="">
                                                <span className="mr-2 text-red-600 -indent-4">
                                                    close date:
                                                </span>
                                                {data.close_date}
                                            </p>
                                        </div>
                                    </div>

                                    <div id="phase" className="space-y-2 mb-4">
                                        <h2 className="text-xl font-semibold text-primary-focus">
                                            Tahap Rekrutmen
                                        </h2>
                                        <p className="text-base">
                                            {data.phase}
                                        </p>
                                    </div>

                                    <div className="divider"></div>

                                    <div className="flex justify-end items-center gap-2">
                                        <button
                                            type="button"
                                            className="btn btn-ghost"
                                            onClick={close}
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
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default ScrollableModalCareer;
