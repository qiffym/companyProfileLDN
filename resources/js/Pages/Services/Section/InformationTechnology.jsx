const InformationTechnology = ({
    bgTech,
    perbankan,
    hardware,
    software,
    cyber,
}) => {
    const bgStyle = {
        backgroundImage: `url('${bgTech}')`,
    };
    return (
        <section
            id="information-technology"
            className="min-h-screen bg-cover bg-center w-full px-6 md:px-[8%] 2xl:px-[20%] md:py-36 py-24"
            style={bgStyle}
        >
            <div className="flex flex-col gap-5">
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
                <div className="flex flex-wrap justify-center md:justify-start gap-5 max-w-7xl">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <img
                            src={hardware}
                            alt="Hardware"
                            className="w-48 h-48 rounded-box object-fill shadow-md shadow-black"
                        />
                        <h4 className="text-xl font-semibold">Hardware</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <img
                            src={software}
                            alt="Software"
                            className="w-48 h-48 rounded-box object-fill shadow-md shadow-black"
                        />
                        <h4 className="text-xl font-semibold">Software</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <img
                            src={perbankan}
                            alt="Digital Banking"
                            className="w-48 h-48 rounded-box object-fill shadow-md shadow-black"
                        />
                        <h4 className="text-xl font-semibold">
                            Digital Banking
                        </h4>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <img
                            src={cyber}
                            alt="Cyber"
                            className="w-48 h-48 rounded-box object-fill shadow-md shadow-black"
                        />
                        <h4 className="text-xl font-semibold">Cyber</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InformationTechnology;
