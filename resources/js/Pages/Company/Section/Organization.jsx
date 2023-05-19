import foto from '../../../../../public/assets/img/struktur-organisasi-pt-ldn.jpg';
import fotoMobile from '../../../../../public/assets/img/struktur-organisasi-mobile.jpg';

const Organization = () => {
    return (
        <section
            id="struktur-organisasi"
            className="container mx-auto min-h-screen py-10 lg:py-32 px-4 lg:px-24 bg-base-100  md:px-14 xl:px-0"
        >
            <h1 className="relative ml-20 text-2xl lg:text-5xl font-bold z-10 mb-5">
                Struktur Organisasi
            </h1>

            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src={foto}
                        alt="img"
                        className="w-full rounded-box hidden md:flex"
                    />
                    <img
                        src={fotoMobile}
                        alt="img"
                        className="w-full rounded-box md:hidden"
                    />
                </div>
            </div>
            {/* <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">
                    1
                </a>
            </div> */}
        </section>
    );
};

export default Organization;
