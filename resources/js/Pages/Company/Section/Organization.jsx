const Organization = ({ structuralImg, structuralImgMobile }) => {
    return (
        <section
            id="struktur-organisasi"
            className="bg-base-100 w-full px-6 md:px-[8%] 2xl:px-[20%] md:py-36 py-24"
        >
            <div className="flex flex-col gap-5">
                <h2 className="md:text-5xl text-4xl font-semibold text-primary uppercase">
                    Struktur Organisasi
                </h2>
                <div className="w-full">
                    <img
                        src={structuralImg}
                        alt="Struktur Organisasi"
                        className="hidden md:block object-contain rounded-box shadow-lg"
                    />
                    <img
                        src={structuralImgMobile}
                        alt="Struktur Organisasi"
                        className="md:hidden object-contain rounded-box shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Organization;
