import Guest from '@/Layouts/GuestLayout';
import { SearchIcon } from '@iconicicons/react';
import { Head, router, useForm } from '@inertiajs/react';
import NewsCompactCard from './Partials/NewsCompactCard';

const News = ({ news, auth }) => {
    const { data, setData, get, processing } = useForm({ search: '' });

    const handleSearch = (e) => {
        e.preventDefault();
        get(route('media.news.index'), {
            s: data.search,
            preserveScroll: true,
            preserveState: true,
        });
    };
    return (
        <Guest auth={auth.user}>
            <Head title="Berita" />
            <div className="flex flex-col w-full md:px-[8%] 2xl:px-[15%] 2k:px-[20%] py-36 bg-base-200">
                <div className="flex w-full justify-between items-center uppercase">
                    <div className="flex-1">
                        <h1 className="text-5xl font-bold">Berita</h1>
                    </div>
                    <form onSubmit={handleSearch}>
                        <div className="join">
                            <input
                                type="search"
                                value={data.search}
                                onChange={(e) =>
                                    setData('search', e.target.value)
                                }
                                placeholder="Cari..."
                                className="input input-bordered join-item w-72"
                            />
                            <button
                                disabled={processing}
                                className="btn btn-neutral join-item"
                            >
                                <SearchIcon />
                            </button>
                        </div>
                    </form>
                </div>

                <div className="divider">SEMUA</div>

                <div className="flex flex-wrap xl:gap-8 gap-5 justify-between">
                    {news.map((item) => (
                        <NewsCompactCard key={item.id} news={item} />
                    ))}
                </div>
            </div>
        </Guest>
    );
};

export default News;
