import foto from '../../../../../public/assets/img/meme.jpg';

const InformationTechnology = () => {
    return (
        <section
            id="information-technology"
            className="bg-base-200 w-full px-6 md:px-[8%] 2xl:px-[20%] py-24"
        >
            <div className="flex lg:flex-row flex-col">
                <div className="flex-1 flex flex-col justify-center items-start">
                    <h2 className="md:text-5xl text-4xl font-semibold text-primary">
                        Teknologi Informasi
                    </h2>
                    <p className="text-base font-normal max-w-lg mt-5">
                        IT singkatan dari Information Technology adalah suatu
                        teknologi berupa (hardware, software, brainware) yang
                        digunakan untuk memperoleh, mengirimkan, mengolah,
                        menafsirkan, menyimpan, mengorganisasikan, dan
                        menggunakan data secara bermakna untuk memperolah
                        informasi yang berkualitas.
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

export default InformationTechnology;
