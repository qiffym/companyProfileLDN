import foto from '../../../../../public/assets/img/companyLogo.png';

const Vision = () => {
    return (
        <section id="vision" className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col xl:px-28 lg:flex-row lg:mx-24 items-center lg:items-start justify-between lg:border-2 lg:border-primary bg-base-200 lg:bg-base-100 lg:shadow  rounded-box p-10">
                <div className="shrink">
                    <img
                        src={foto}
                        alt="Image"
                        className="w-52 lg:w-64 xl:max-w-sm"
                    />
                </div>
                <div className="flex flex-col space-y-5">
                    <div className="vision text-center">
                        <h3 className="mb-3 text-3xl uppercase font-bold">
                            Visi
                        </h3>
                        <q className="text-base lg:text-xl text-justify">
                            Menjadi Perusahaan Inovatif, Berintegritas & Berdaya
                            Saing Tinggi Untuk Pembangunan Berkelanjutan
                        </q>
                    </div>
                    <div className="mission ">
                        <h3 className="mb-3 text-3xl uppercase font-bold text-center">
                            Misi
                        </h3>
                        <div className="container mx-auto pl-5 text-base lg:text-lg">
                            <ol className="list-decimal">
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
                                    Mewujudkan generasi yang unggul,
                                    berkualitas, professional & amanah
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
                                    Meningkatkan kapabilitas internal sesuai
                                    dengan nilai inti <strong>pilar</strong>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
