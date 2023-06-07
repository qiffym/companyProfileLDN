import NewsCard from '@/Pages/Home/Partials/NewsCard';

const Recommendation = ({ recommends }) => {
    return (
        <aside className="lg:w-[35%] w-full py-5">
            <div className="container mx-auto p rounded-box shadow-md bg-base-100">
                <h2 className="text-2xl font-bold">Rekomendasi Berita</h2>
                <div className="divider before:bg-primary after:bg-primary my-2"></div>
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
