import NewsCard from '../Partials/NewsCard';

const News = ({ news }) => {
    return (
        <section
            id="news"
            className="relative bg-base-100 w-full px-6 md:px-[8%] 2xl:px-[15%] md:py-10 py-10 z-20"
        >
            <h2 className="text-4xl font-semibold text-center mb-5">
                Berita <span className="text-primary">Kegiatan</span>
            </h2>
            <div className="flex flex-wrap xl:gap-9 gap-5 justify-center">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </section>
    );
};

export default News;
