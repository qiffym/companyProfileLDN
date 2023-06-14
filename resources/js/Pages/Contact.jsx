import { useState } from 'react';
import { Head } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import { Wave, PhoneSVG, EmailSVG } from '@/Components/svg';
import { InformationIcon } from '@iconicicons/react';
import parse from 'html-react-parser';

const Contact = ({ title, auth, faqs }) => {
    const [check, setCheck] = useState('');

    const handleChange = (e) => {
        setCheck(e.target.value);
    };

    return (
        <Guest auth={auth.user}>
            <Head title={title} />
            <main className="relative min-h-screen w-full pt-32 bg-base-200">
                <div className="flex w-full justify-center items-center lg:pb-32">
                    <div className="flex flex-col w-full 2k:max-w-7xl max-w-4xl px-5 lg:px-0 gap-4">
                        <h1 className="text-3xl lg:text-5xl font-bold text-center">
                            Frequently Asked Questions
                        </h1>
                        {faqs.length === 0 ? (
                            <div className="alert bg-base-100 shadow-md">
                                <InformationIcon />
                                <span>FAQ belum tersedia</span>
                            </div>
                        ) : (
                            faqs.map((faq, i) => (
                                <div
                                    key={faq.id}
                                    className="collapse collapse-plus bg-base-100 shadow-md"
                                >
                                    <input
                                        type="radio"
                                        value={`faq-${i}`}
                                        id={`faq-${i}`}
                                        name={`faq-${i}`}
                                        onChange={handleChange}
                                        checked={check === `faq-${i}`}
                                    />
                                    <div className="relative collapse-title text-xl font-medium">
                                        <label
                                            htmlFor={`faq-${i}`}
                                            className="block top-0 w-full cursor-pointer"
                                        >
                                            {faq.question}
                                        </label>
                                    </div>
                                    <div className="collapse-content">
                                        {parse(faq.answer)}
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="h-[95vh] bg-primary text-primary-content mt-24 md:mt-0 relative">
                    <Wave className="fill-base-200" />
                    <div className="flex flex-wrap w-full justify-between px-[8%] 2xl:px-[20%] lg:-mt-10 2xl:-mt-36 gap-4 lg:gap-0">
                        <div className="max-w-lg">
                            <h1 className="text-4xl font-bold mb-3">
                                PT Lovina Dhea Nusantara
                            </h1>
                            <span className="text-lg">
                                Terima kasih sudah berkunjung! jika Anda
                                mempunyai pertanyaan seputar PT LDN, silahkan
                                hubungi kami melalui kontak di laman ini.
                            </span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3">
                                Alamat Kantor
                            </h3>
                            <span className="text-lg">
                                Jl. Bendul Merisi Selatan Airdas No. 2, Surabaya
                            </span>
                            <div className="flex items-center space-x-3 mt-5">
                                <PhoneSVG className="mask mask-circle bg-error p-3 fill-error-content w-12 h-1w-12 md:w-14 md:h-14" />
                                <div className="flex flex-col">
                                    <small>Telepon</small>
                                    <span className="font-medium">
                                        (+62) 823 3173 2068
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 mt-5">
                                <EmailSVG className="mask mask-circle bg-success p-3 fill-success-content w-12 h-1w-12 md:w-14 md:h-14" />
                                <div className="flex flex-col">
                                    <small>Email</small>
                                    <span className="font-medium">
                                        ptlovinadheanusantara22@email.com
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Guest>
    );
};

export default Contact;
