import { CalendarIcon } from '@iconicicons/react';
import { Link } from '@inertiajs/react';
import moment from 'moment-with-locales-es6';

moment.locale('id');

const NewsCard = ({ news, maxWidth = 'lg' }) => {
    const maxWidthClass = {
        full: '',
        lg: 'lg:w-[31%] md:w-[45%]',
    }[maxWidth];

    return (
        <article
            className={`card ${maxWidthClass} w-full bg-base-100 shadow shadow-base-content image-full`}
        >
            <figure>
                <img src={`/storage/${news.img}`} alt={news.slug} />
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
                    <span className="text-base font-serif line-clamp-3">
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

export default NewsCard;
