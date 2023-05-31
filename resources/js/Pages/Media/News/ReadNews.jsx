import { Head } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import parse from 'html-react-parser';

const ReadNews = ({ auth, title, news }) => {
    return (
        <Guest auth={auth.user}>
            <Head title={title} />
            <main className="flex flex-col justify-center items-center py-36">
                <div className="w-full max-w-5xl">
                    <div className="flex justify-center">
                        <img
                            src={`/storage/${news.img}`}
                            alt={news.slug}
                            className="max-w-sm object-contain"
                        />
                    </div>
                    <div>
                        <h1 className="text-5xl font-semibold">{news.title}</h1>
                        <p className="text-base">{parse(news.content)}</p>
                    </div>
                </div>
            </main>
        </Guest>
    );
};

export default ReadNews;
