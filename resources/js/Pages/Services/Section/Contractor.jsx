import foto from '../../../../../public/assets/img/meme.jpg';

const Contractor = () => {
    return (
        <section
            id="contractor"
            className="bg-base-200 w-full px-6 md:px-[8%] 2xl:px-[20%] md:py-36 py-24"
        >
            <div className="flex lg:flex-row flex-col">
                <div className="flex-1 flex flex-col justify-center items-start">
                    <h2 className="md:text-5xl text-4xl font-semibold text-primary">
                        Jasa Konstruksi
                    </h2>
                    <p className="text-base font-normal max-w-lg mt-5">
                        Kontraktor adalah istilah yang berasal dari kata
                        "kontrak" dan memiliki arti surat kesepakatan atau
                        perjanjian. Namun, secara umum, pengertian kontraktor
                        adalah sebuah tenaga profesional dimana merekamemberikan
                        layanan serta keterampilan kepada perorangan,
                        perusahaan, atau juga negara dalam masa waktu tertentu.
                    </p>
                </div>
                <div className="mb-5 lg:mb-0">
                    <img
                        src={foto}
                        alt="foto"
                        className="lg:max-w-sm object-contain rounded-box"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contractor;
