import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import parse from 'html-react-parser';
import moment from 'moment-with-locales-es6';
import { ToastContainer, toast } from 'react-toastify';
import { ArrowLeftIcon, EditIcon } from '@iconicicons/react';

const ShowNews = ({ auth, title, news, flash }) => {
    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            {toast.success(flash.success) && <ToastContainer />}
            <div className="flex justify-between items-center mb-4">
                <div className="space-x-5">
                    <Link
                        as="button"
                        href={route('news.index')}
                        className="btn btn-outline btn-accent"
                    >
                        <ArrowLeftIcon />
                        Kembali
                    </Link>
                    <span className="text-4xl mb-4">News Details</span>
                </div>
                <div>
                    <Link
                        href={route('news.edit', news)}
                        className="btn btn-warning px-16"
                    >
                        <EditIcon />
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
                        <div className="text-base text-justify space-y-4">
                            {parse(news.content)}
                        </div>
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
                        <p className="text-lg">
                            {moment(news.publish_at).format(
                                `dddd, D MMMM YYYY H:mm`
                            )}
                        </p>
                    </div>
                    <div className="news-updated">
                        <span className="text-primary-focus">Updated At</span>
                        <p className="text-lg">
                            {moment(news.updated_at).format(
                                `dddd, D MMMM YYYY H:mm`
                            )}
                        </p>
                    </div>
                    <div className="news-updated">
                        <span className="text-primary-focus">Hidden</span>
                        <p className="font-bold">
                            {news.hidden === 0 ? 'OFF' : 'ON'}
                        </p>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default ShowNews;
