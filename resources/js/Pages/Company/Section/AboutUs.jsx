import { Link } from '@inertiajs/react';
import foto from '../../../../../public/assets/img/meme.jpg';

const AboutUs = () => {
    return (
        <section
            id="about-us"
            className="hero min-h-screen bg-base-200 text-base-content pt-12 lg:pt-0"
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={foto}
                    className="w-full md:max-w-sm rounded-lg shadow-2xl"
                />
                <div className="mr-10">
                    <h1 className="text-2xl md:text-5xl font-bold ">
                        Tentang <br />
                        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                            PT. Lovina Dhea Nusantara
                        </span>
                    </h1>
                    <p className="py-6 w-full lg:max-w-2xl text-base lg:text-xl">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <a href="#history" className="btn btn-primary">
                        Lanjut bos!
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
