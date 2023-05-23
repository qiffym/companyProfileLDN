const Supplier = ({ supplierImg, plumbing, materials, electrical }) => {
    return (
        <section
            id="supplier"
            className="bg-base-300 w-full px-6 md:px-[8%] 2xl:px-[20%] py-24"
        >
            <div className="flex justify-around lg:flex-row flex-col w-full gap-5">
                <div className="">
                    <img
                        src={supplierImg}
                        alt="foto"
                        className="2xl:max-w-2xl max-w-sm lg:h-full lg:object-cover object-contain rounded-box shadow-lg shadow-neutral-focus"
                    />
                </div>
                <div className="flex flex-col justify-start items-start ">
                    <h2 className="md:text-5xl text-4xl font-semibold text-primary">
                        Supplier
                    </h2>
                    <p className="text-base font-normal max-w-lg mt-5">
                        Supplier adalah pihak perorangan atau perusahan yang
                        memasok atau menjual bahan mentah ke pihak lain, baik
                        itu ke perorangan atau perusahaan agar bisa dijadikan
                        produk barang atau jasa matang.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-5">
                        <div className="flex flex-col justify-center items-center gap-3">
                            <img
                                src={plumbing}
                                alt="Plumbing"
                                className="w-52 h-52 rounded-box object-fill shadow-md shadow-neutral-focus"
                            />
                            <h4 className="text-xl font-semibold">Plumbing</h4>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3">
                            <img
                                src={electrical}
                                alt="Electical"
                                className="w-52 h-52 rounded-box object-fill shadow-md shadow-neutral-focus"
                            />
                            <h4 className="text-xl font-semibold">
                                Electrical
                            </h4>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3">
                            <img
                                src={materials}
                                alt="Materials"
                                className="w-52 h-52 rounded-box object-fill shadow-md shadow-neutral-focus"
                            />
                            <h4 className="text-xl font-semibold">
                                Bahan Bangunan
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Supplier;
