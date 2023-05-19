import foto from '../../../../../public/assets/img/ptldnmockup.jpg';

const AboutUs = () => {
    return (
        <section
            id="about-us"
            className="hero min-h-screen bg-base-200 text-base-content md:px-14 xl:px-0"
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={foto}
                    className="w-full lg:max-w-sm xl:max-w-sm 2xl:max-w-xl rounded-box shadow-2xl"
                />
                <div className="xl:mr-10">
                    <h1 className="text-2xl md:text-5xl lg:text-4xl font-bold ">
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
                        Baca Selengkapnya
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
