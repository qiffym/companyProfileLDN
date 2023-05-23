import { Link } from '@inertiajs/react';
import ArrowRight from './svg/ArrowRight';

const Hero = ({ companyLogo }) => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col text-center">
                <img
                    className="mask mask-circle 2xl:w-72 xl:w-56 w-52 object-contain "
                    src={companyLogo}
                    alt="CompanyLogo"
                />
                <div className="max-w-2xl">
                    <h1 className="text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-secondary to-accent text-transparent bg-clip-text">
                        PT. Lovina Dhea Nusantara
                    </h1>
                    <div className="divider -m-1 xl:px-10 opacity-25 before:bg-base-content after:bg-base-content" />
                    <h4 className="md:text-2xl font-extralight text-sm bg-gradient-to-l from-secondary to-accent text-transparent bg-clip-text  tracking-wide">
                        GENERAL CONTRACTOR, SUPPLIER, and TRADING
                    </h4>
                    <p className="py-6 text-base-content">
                        Perusahaan yang berdiri sebagai bentuk respon dari
                        kebutuhan setiap klien dalam bidang Perencanaan,
                        Konstruksi, Teknologi Informasi, Supplier, dan Trading
                        yang semakin terbuka dan berkembang di Indonesia.
                        Didukung oleh sumber daya manusia Bangsa Indonesia yang
                        profesional dalam memberikan pelayanan terbaik untuk
                        menjamin kepuasan <i>client</i> kami.
                    </p>
                    <Link
                        as="button"
                        href={route('company.profile')}
                        className="btn btn-primary gap-2"
                    >
                        Yuk Kenalan
                        <ArrowRight className="animate-pulse" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
