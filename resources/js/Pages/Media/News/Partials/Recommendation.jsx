import NewsCard from '@/Pages/Home/Partials/NewsCard';

const Recommendation = ({ recommends }) => {
    return (
        <aside className="lg:w-[35%] w-full py-5">
            <div className="container mx-auto p-5 rounded-box drop-shadow bg-base-100">
                <div className="divider before:bg-primary after:bg-primary">
                    <span className="text-2xl font-bold hover:cursor-default">
                        Rekomendasi{' '}
                        <span className="hidden md:inline">Berita</span>
                    </span>
                </div>
                <div className="flex flex-col justify-center items-center space-y-5">
                    {recommends.map((item) => (
                        <NewsCard key={item.id} news={item} maxWidth="full" />
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Recommendation;
