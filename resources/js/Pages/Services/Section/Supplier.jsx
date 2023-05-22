import foto from '../../../../../public/assets/img/meme.jpg';

const Supplier = () => {
    return (
        <section
            id="supplier"
            className="bg-base-100 w-full px-6 md:px-[8%] 2xl:px-[20%] py-24"
        >
            <div className="flex lg:flex-row flex-col-reverse w-full gap-5">
                <div className="grow ">
                    <img
                        src={foto}
                        alt="foto"
                        className="lg:max-w-sm object-contain rounded-box"
                    />
                </div>
                <div className="flex flex-col justify-start items-start xl:pr-10">
                    <h2 className="md:text-5xl text-4xl font-semibold text-primary">
                        Supplier
                    </h2>
                    <p className="text-base font-normal max-w-lg mt-5">
                        Supplier adalah pihak perorangan atau perusahan yang
                        memasok atau menjual bahan mentah ke pihak lain, baik
                        itu ke perorangan atau perusahaan agar bisa dijadikan
                        produk barang atau jasa matang.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Supplier;
