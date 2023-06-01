import { Head, Link } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import ArrowDown from '@/Components/svg/ArrowDown';
import { JobPositions } from './Partials/JobPositions';

const Career = ({ auth, title, careers }) => {
    return (
        <Guest auth={auth.user}>
            <Head title={title} />
            <main>
                <section className="hero min-h-screen bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-2xl">
                            <h1 className="text-6xl font-extralight">Karir</h1>
                            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text">
                                PT. Lovina Dhea Nusantara
                            </h2>
                            <p className="py-6 max-w-xl">
                                Terus bertumbuhnya PT Lovina Dhea Nusantara
                                membawa konsekuensi pada Perseroan untuk
                                menerapkan pengelolaan sumber daya manusia (SDM)
                                sebagai <i>asset</i> perusahaan (
                                <i>human capital</i>). Penerapan manajemen{' '}
                                <i>human capital</i> akan mendukung pencapaian
                                Visi Perseroan menjadi perusahaan terbaik di
                                bidang{' '}
                                <i>General Contractor, Supplier, and Trading</i>
                            </p>
                            <Link
                                as="button"
                                href="#career-more"
                                className="btn btn-primary gap-2"
                            >
                                Lihat Lowongan
                                <ArrowDown className="animate-bounce" />
                            </Link>
                        </div>
                    </div>
                </section>

                <section id="career-more">
                    <div className="hero py-32 bg-base-100">
                        <div className="hero-content text-center">
                            <div className="max-w-4xl">
                                <h1 className="text-2xl md:text-5xl font-bold uppercase">
                                    Raih{' '}
                                    <span className="text-primary">
                                        Kesempatanmu
                                    </span>
                                </h1>
                                <p className="py-6 text-base">
                                    Mari gabung bersama PT. Lovina Dhea
                                    Nusantara. Karena pekerjaan ada untuk
                                    dinikmati, bukan untuk dicari
                                </p>
                                <JobPositions careers={careers} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Guest>
    );
};

export default Career;
