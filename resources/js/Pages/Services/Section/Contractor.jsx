import { usePage } from '@inertiajs/react';

const Contractor = ({
    bgImage,
    contractorLandscape,
    contractorSeaport,
    contractorHospital,
    contractorMako,
    contractorRestArea,
}) => {
    const bgStyle = {
        backgroundImage: `url('${bgImage}')`,
        backgroundRepeat: 'no-repeat',
    };

    return (
        <section
            id="contractor"
            className="min-h-screen bg-cover bg-left lg:bg-top w-full px-6 md:px-[8%] 2xl:px-[15%] md:py-36 py-24"
            style={bgStyle}
        >
            <div className="flex flex-col gap-5">
                <div className="flex flex-col justify-center items-start">
                    <h2 className="md:text-5xl text-4xl font-semibold text-primary">
                        Jasa Kontruksi
                    </h2>
                    <p className="text-base font-normal max-w-2xl mt-5">
                        Kontraktor adalah istilah yang berasal dari kata
                        "kontrak" dan memiliki arti surat kesepakatan atau
                        perjanjian. Namun, secara umum, pengertian kontraktor
                        adalah sebuah tenaga profesional dimana merekamemberikan
                        layanan serta keterampilan kepada perorangan,
                        perusahaan, atau juga negara dalam masa waktu tertentu.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-5 max-w-2xl">
                    <div className="flex flex-col justify-center items-center gap-3">
                        <img
                            src={contractorLandscape}
                            alt="Landscape"
                            className="w-52 h-52 rounded-box object-cover shadow-md shadow-black"
                        />
                        <h4 className="text-xl font-semibold">Landscape</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <img
                            src={contractorHospital}
                            alt="Rumah sakit"
                            className="w-52 h-52 rounded-box object-fill shadow-md shadow-black"
                        />
                        <h4 className="text-xl font-semibold">Rumah Sakit</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <img
                            src={contractorSeaport}
                            alt="Seaport"
                            className="w-52 h-52 rounded-box object-fill shadow-md shadow-black"
                        />
                        <h4 className="text-xl font-semibold">Dermaga</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <img
                            src={contractorRestArea}
                            alt="Rest Area"
                            className="w-52 h-52 rounded-box object-fill shadow-md shadow-black"
                        />
                        <h4 className="text-xl font-semibold">Rest Area</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3">
                        <img
                            src={contractorMako}
                            alt="Mako"
                            className="w-52 h-52 rounded-box object-cover shadow-md shadow-black"
                        />
                        <h4 className="text-xl font-semibold">Gedung Mako</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contractor;
