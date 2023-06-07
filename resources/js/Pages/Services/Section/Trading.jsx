const Trading = ({ tradingImg, medical, shoes, towel, blanket }) => {
    return (
        <section
            id="supplier"
            className="bg-base-300 w-full px-6 md:px-[8%] 2xl:px-[15%] 2k:px-[20%] py-24"
        >
            <div className="flex justify-around lg:flex-row flex-col w-full xl:gap-28 gap-5">
                <div>
                    <img
                        src={tradingImg}
                        alt="foto"
                        className="2xl:w-full max-w-[350px] lg:object-cover object-contain rounded-box shadow-lg shadow-neutral-focus"
                    />
                </div>
                <div className="flex flex-col justify-start items-start ">
                    <h2 className="md:text-5xl text-4xl font-semibold text-primary">
                        Trading
                    </h2>
                    <p className="text-base font-normal max-w-lg mt-5">
                        Trading adalah suatu proses traksaksi yang berlangsung
                        dalam pasar di mana sistem kerjanya adalah sering-sering
                        menjual dan membeli aset dalam waktu yang singkat.
                    </p>
                    <div className=" flex flex-wrap justify-center md:justify-start max-w-2xl gap-5 mt-5">
                        <div className="flex flex-col justify-center items-center gap-3">
                            <img
                                src={medical}
                                alt="Medical"
                                className="w-48 h-48 rounded-box object-fill shadow-md shadow-neutral-focus"
                            />
                            <h4 className="text-xl font-semibold">
                                Alat Kesehatan
                            </h4>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3">
                            <img
                                src={shoes}
                                alt="Shoes"
                                className="w-48 h-48 rounded-box object-fill shadow-md shadow-neutral-focus"
                            />
                            <h4 className="text-xl font-semibold">Sepatu</h4>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3">
                            <img
                                src={towel}
                                alt="Handuk"
                                className="w-48 h-48 rounded-box object-fill shadow-md shadow-neutral-focus"
                            />
                            <h4 className="text-xl font-semibold">Handuk</h4>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3">
                            <img
                                src={blanket}
                                alt="Selimut"
                                className="w-48 h-48 rounded-box object-fill shadow-md shadow-neutral-focus"
                            />
                            <h4 className="text-xl font-semibold">Selimut</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trading;
