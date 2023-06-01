import NewsCard from '../Partials/NewsCard';

const News = ({ news }) => {
    return (
        <section
            id="news"
            className="relative bg-base-100 w-full px-6 md:px-[8%] 2xl:px-[15%] md:py-10 py-10 z-20"
        >
            <h2 className="xl:text-5xl text-4xl font-bold mb-5 uppercase">
                Berita <span className="text-primary">Kegiatan</span>
            </h2>
            <div className="divider before:bg-secondary after:bg-accent text-xl ">
                <span className="tracking-widest">TERKINI</span>
            </div>
            <div className="container mx-auto">
                <div className="flex flex-wrap xl:gap-8 gap-5 justify-center">
                    {news.map((item) => (
                        <NewsCard key={item.id} news={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
