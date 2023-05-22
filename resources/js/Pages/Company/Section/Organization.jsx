import foto from '../../../../../public/assets/img/struktur-organisasi-pt-ldn.jpg';
import fotoMobile from '../../../../../public/assets/img/struktur-organisasi-mobile.jpg';

const Organization = () => {
    return (
        <section
            id="contractor"
            className="bg-base-100 w-full px-6 md:px-[8%] 2xl:px-[20%] md:py-36 py-24"
        >
            <div className="flex flex-col gap-5">
                <h2 className="md:text-5xl text-4xl font-semibold text-primary uppercase">
                    Struktur Organisasi
                </h2>
                <div className="w-full">
                    <img
                        src={foto}
                        alt="foto"
                        className="hidden md:block object-contain rounded-box shadow-lg"
                    />
                    <img
                        src={fotoMobile}
                        alt="foto"
                        className="md:hidden object-contain rounded-box shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Organization;
