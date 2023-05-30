import { Head, Link } from '@inertiajs/react';
import { ArrowRight, Edit } from '@/Components/svg';
import AdminLayout from '@/Layouts/AdminLayout';
import parse from 'html-react-parser';
import moment from 'moment';

const ShowNews = ({ auth, title, news }) => {
    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            <div className="flex justify-between items-center mb-4">
                <div>
                    <Link
                        as="button"
                        href={route('news.index')}
                        className="btn btn-ghost gap-2"
                    >
                        <ArrowRight className="rotate-180" />
                        Back
                    </Link>
                </div>
                <div className="flex-1 ml-5">
                    <span className="text-4xl mb-4">News Details</span>
                </div>
                <div>
                    <Link
                        href={route('news.edit', news)}
                        className="btn btn-wide btn-warning gap-2"
                    >
                        <Edit />
                        Edit
                    </Link>
                </div>
            </div>

            <div className="flex w-full h-full border shadow-lg bg-base-100 rounded-lg p-6">
                <div className="flex flex-col w-1/2 gap-5">
                    <div className="news-img">
                        <span className="text-primary-focus">Image</span>
                        <img
                            src={`/storage/${news.img}`}
                            alt={news.slug}
                            className="w-full object-contain"
                        />
                    </div>
                    <div className="news-title">
                        <span className="text-primary-focus">Title</span>
                        <h1 className="text-3xl">{news.title}</h1>
                    </div>
                    <div className="news-content">
                        <span className="text-primary-focus">Content</span>
                        <div className="text-base">{parse(news.content)}</div>
                    </div>
                </div>

                <div className="divider divider-horizontal" />

                <div className="flex flex-col w-1/2 gap-5">
                    <div className="news-category">
                        <span className="text-primary-focus">Category</span>
                        <p className="text-lg">{news.news_category.name}</p>
                    </div>
                    <div className="news-author">
                        <span className="text-primary-focus">Author</span>
                        <p className="text-lg">{news.author.name}</p>
                    </div>
                    <div className="news-slug">
                        <span className="text-primary-focus">Slug</span>
                        <p className="text-lg">{news.slug}</p>
                    </div>
                    <div className="news-publish">
                        <span className="text-primary-focus">Publish At</span>
                        <div className="text-lg">
                            {moment(news.publish_at).format(
                                `dddd, D MMMM YYYY : hh.mm`
                            )}
                        </div>
                    </div>
                    <div className="news-updated">
                        <span className="text-primary-focus">Updated At</span>
                        <div className="text-lg">
                            {moment(news.updated_at).format(
                                `dddd, D MMMM YYYY : hh.mm`
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default ShowNews;
