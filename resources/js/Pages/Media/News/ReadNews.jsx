import { Head } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import Recommendation from './Partials/Recommendation';
import ShareNews from './Partials/ShareNews';
import { CalendarIcon } from '@iconicicons/react';
import moment from 'moment-with-locales-es6';
import parse from 'html-react-parser';

moment.locale('id');

const ReadNews = ({ auth, title, news, recommends }) => {
    return (
        <Guest auth={auth.user}>
            <Head title={title} />
            <main className="bg-base-100 w-full px-6 md:px-[8%] 2xl:px-[15%] 2k:px-[20%] md:py-24 py-16">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="lg:w-[60%] w-full py-5 lg:pr-6 space-y-5">
                        <h1 className="text-4xl font-bold capitalize mb-10">
                            {news.title}
                        </h1>
                        <div className="flex flex-wrap-reverse md:flex-nowrap justify-between items-center gap-2">
                            <time className="flex items-end gap-1 text-sm ">
                                <CalendarIcon />
                                {moment(news.publish_at).format(
                                    'dddd, D MMMM YYYY'
                                )}
                            </time>
                            <ShareNews title={title} />
                        </div>
                        <figure>
                            <img
                                src={`/storage/${news.img}`}
                                alt={news.slug}
                                className="w-full h-full rounded-box object-contain shadow-lg"
                            />
                        </figure>
                        <div className="xl:text-lg font-serif text-base/7 text-justify font-normal space-y-4 pl-4">
                            {parse(news.content)}
                        </div>
                    </div>

                    <Recommendation recommends={recommends} />
                </div>
            </main>
        </Guest>
    );
};

export default ReadNews;
