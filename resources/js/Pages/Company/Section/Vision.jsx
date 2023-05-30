import CompanyLogo from '@/Components/CompanyLogo';

const Vision = () => {
    return (
        <section
            id="vision"
            className="bg-base-200 w-full px-6 md:px-[8%] 2xl:px-[20%] py-24"
        >
            <div className="flex lg:flex-row justify-around items-start flex-col w-full gap-5 lg:gap-0 border border-base-300 p-10 rounded-box bg-base-100 shadow-md shadow-base-content">
                <div className="lg:self-start self-center">
                    <CompanyLogo className="w-full" />
                </div>
                <div className="flex flex-col justify-start items-start gap-5">
                    <div className="flex flex-col text-center mx-auto">
                        <h2 className="md:text-5xl text-4xl font-semibold text-primary">
                            VISI
                        </h2>
                        <q className="text-lg font-medium max-w-2xl mt-5">
                            Menjadi Perusahaan Inovatif, Berintegritas & Berdaya
                            Saing Tinggi Untuk Pembangunan Berkelanjutan
                        </q>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="md:text-5xl text-4xl text-center font-semibold text-primary">
                            MISI
                        </h2>
                        <ol className="list-decimal text-base ml-6 mt-5 max-w-2xl space-y-2">
                            <li>
                                Mengembangkan kompetensi dalam bidang
                                konstruksi, teknologi informasi, pengadaan
                                barang dan/atau jasa alutsista, dan alat
                                kesehatan
                            </li>
                            <li>
                                Menjalankan perusahaan yang berkomitmen pada
                                kepuasan pelanggan
                            </li>
                            <li>
                                Mewujudkan generasi yang unggul, berkualitas,
                                professional & amanah
                            </li>
                            <li>
                                Menghasilkan output produk yang berkualitas,
                                ekonomis, efisien & efektif serta menjalin
                                kemitraan yang berkesinambungan
                            </li>
                            <li>
                                Memastikan pemanfaatan aset secara optimal &
                                pembangunan infrastruktur pendukung relevan
                                dengan investasi yang efektif
                            </li>
                            <li>
                                Meningkatkan kapabilitas internal sesuai dengan
                                nilai inti <strong>pilar</strong>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
