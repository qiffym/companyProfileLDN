import { CalendarIcon } from '@iconicicons/react';
import { Link } from '@inertiajs/react';
import moment from 'moment-with-locales-es6';

moment.locale('id');

const NewsCompactCard = ({ news }) => {
    return (
        <article className="card card-compact 2k:w-[25rem] lg:w-[31%] md:w-[45%] w-full bg-base-100 shadow-md shadow-base-content">
            <figure>
                <img
                    src={`/storage/${news.img}`}
                    alt={news.slug}
                    className="w-full h-64 object-fill"
                />
            </figure>
            <div className="card-body">
                <time className="text-sm flex items-end gap-1">
                    <CalendarIcon />
                    {moment(news.publish_at).format('dddd, D MMMM YYYY')}
                </time>
                <h3 className="card-title lg:line-clamp-2 line-clamp-3 capitalize">
                    {news.title}
                </h3>
                <p>
                    <span className="text-base line-clamp-3">
                        {news.excerpt}
                    </span>
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
        </article>
    );
};

export default NewsCompactCard;
