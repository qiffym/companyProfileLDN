import { Head } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import { Wave } from '@/Components/svg/Wave';
import { PhoneSVG } from '@/Components/svg/phoneSVG';
import { EmailSVG } from '@/Components/svg/EmailSVG';

const Contact = ({ title }) => {
    return (
        <Guest>
            <Head title={title} />
            <main className="relative min-h-screen w-full pt-32 bg-base-200">
                <div className="absolute w-full z-10">
                    <h1 className="text-5xl xl:text-6xl font-bold text-center">
                        Ada yang bisa kami bantu?
                    </h1>
                </div>
                <div className="h-[95vh] bg-primary text-primary-content mt-24 md:mt-0 ">
                    <Wave className="fill-base-200" />
                    <div className="flex flex-wrap w-full justify-between px-[8%] 2xl:px-[20%] lg:-mt-10 2xl:-mt-36">
                        <div className="max-w-lg">
                            <h1 className="text-4xl font-bold mb-3">
                                PT Lovina Dhea Nusantara
                            </h1>
                            <span className="text-base">
                                Terima kasih sudah berkunjung! jika Anda
                                mempunyai pertanyaan seputar PT LDN, silahkan
                                hubungi kami melalui kontak di laman ini.
                            </span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-3">
                                Alamat Kantor
                            </h3>
                            <span className="text-base">
                                Jl. Bendul Merisi Selatan Airdas No. 2, Surabaya
                            </span>
                            <div className="flex items-center space-x-3 mt-5">
                                <PhoneSVG className="mask mask-circle bg-secondary p-3 fill-success-content w-14 h-14" />
                                <div className="flex flex-col">
                                    <small>Telepon</small>
                                    <span className="font-medium">
                                        (031) xxxxxxx
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 mt-5">
                                <EmailSVG className="mask mask-circle bg-success p-3 fill-success-content w-14 h-14" />
                                <div className="flex flex-col">
                                    <small>Email</small>
                                    <span className="font-medium">
                                        lovina@email.com
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
