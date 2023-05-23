const Trading = () => {
    return (
        <section
            id="supplier"
            className="bg-base-300 w-full px-6 md:px-[8%] 2xl:px-[20%] py-24"
        >
            <div className="flex lg:flex-row flex-col-reverse w-full">
                <div className="flex-1 mt-5 lg:mt-0">
                    <div className="w-72 h-60 border rounded-box shadow-lg">
                        <img
                            src=""
                            alt="foto"
                            className="lg:max-w-sm object-contain rounded-box"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start lg:mr-10">
                    <h2 className="md:text-5xl text-4xl font-semibold text-primary">
                        Trading
                    </h2>
                    <p className="text-base font-normal max-w-lg mt-5">
                        Trading adalah suatu proses traksaksi yang berlangsung
                        dalam pasar di mana sistem kerjanya adalah
                        serinig-sering menjual dan membeli aset dalam waktu yang
                        singkat.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Trading;
