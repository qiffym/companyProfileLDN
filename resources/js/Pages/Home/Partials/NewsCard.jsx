import { Link } from '@inertiajs/react';
import moment from 'moment-with-locales-es6';

moment.locale('id');

const NewsCard = ({ news }) => {
    return (
        <article className="card 2k:w-[25rem] 2xl:w-[20rem] lg:w-[31%] md:w-[45%] w-full bg-base-100 shadow shadow-base-content image-full">
            <figure>
                <img src={`/storage/${news.img}`} alt={news.slug} />
            </figure>
            <div className="card-body">
                <time className="text-xs">
                    {moment(news.publish_at).format('dddd, D MMMM YYYY')}
                </time>
                <h3 className="card-title lg:line-clamp-2 line-clamp-3 capitalize">
                    {news.title}
                </h3>
                <p className="">{news.excerpt}</p>
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
