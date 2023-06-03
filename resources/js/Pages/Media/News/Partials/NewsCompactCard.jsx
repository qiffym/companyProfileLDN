import { Link } from '@inertiajs/react';
import moment from 'moment-with-locales-es6';

moment.locale('id');

const NewsCompactCard = ({ news }) => {
    return (
        <div className="card card-compact 2k:w-[25rem] lg:w-[31%] md:w-[45%] w-full bg-base-100 shadow-md shadow-base-content">
            <figure>
                <img
                    src={`/storage/${news.img}`}
                    alt={news.slug}
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body">
                <time className="text-xs">
                    {moment(news.publish_at).format('dddd, D MMMM YYYY')}
                </time>
                <h3 className="card-title lg:line-clamp-2 line-clamp-3 capitalize">
                    {news.title}
                </h3>
                <p>
                    <span className="line-clamp-3">{news.excerpt}</span>
                </p>
                <div className="card-actions justify-end">
                    <Link
                        href={route('media.news.read', news)}
                        className="btn btn-primary btn-sm"
                    >
                        SELENGKAPNYA
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCompactCard;
