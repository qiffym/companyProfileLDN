import { ArrowDown } from '@/Components/svg';
import { Link } from '@inertiajs/react';

const AboutUs = ({ aboutImg }) => {
    return (
        <section
            id="about-us"
            className="hero min-h-screen bg-base-200 text-base-content md:px-14 xl:px-0"
        >
            <div className="hero-content flex-col lg:flex-row-reverse relative">
                <img
                    src={aboutImg}
                    className="w-full hover:scale-125 hover:skew-y-6 transition-transform lg:max-w-sm xl:max-w-sm 2xl:max-w-xl rounded-box shadow-2xl"
                />
                <div className="xl:mr-10">
                    <h1 className="text-2xl md:text-5xl lg:text-4xl 2xl:text-5xl font-extrabold bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text">
                        <span className="text-base-content">Tentang</span>
                        <br />
                        <span className="">PT. Lovina Dhea Nusantara</span>
                    </h1>
                    <p className="py-6 w-full lg:max-w-2xl text-base lg:text-xl">
                        Perusahaan yang berdiri sebagai bentuk respon dari
                        kebutuhan setiap klien dalam bidang Perencanaan,
                        Konstruksi, Teknologi Informasi, Supplier, dan Trading
                        yang semakin terbuka dan berkembang di Indonesia
                    </p>
                    <Link
                        as="button"
                        href="#history"
                        className="btn btn-primary gap-2"
                    >
                        Baca Selengkapnya
                        <ArrowDown className="animate-bounce" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
