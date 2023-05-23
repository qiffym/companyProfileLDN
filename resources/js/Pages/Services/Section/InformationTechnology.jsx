const InformationTechnology = ({
    bgTech,
    perbankan,
    hardware,
    software,
    cyberSecurity,
}) => {
    const bgStyle = {
        backgroundImage: `url('${bgTech}')`,
    };
    return (
        <section
            id="information-technology"
            className=" min-h-screen bg-cover bg-center w-full px-6 md:px-[8%] 2xl:px-[20%] md:py-36 py-24"
            style={bgStyle}
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
            </div>
        </section>
    );
};

export default InformationTechnology;
