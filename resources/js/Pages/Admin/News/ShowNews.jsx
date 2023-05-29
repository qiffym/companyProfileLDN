import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

const ShowNews = ({ auth, title, news }) => {
    console.log(news);
    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            <h1 className="text-4xl mb-4">News: {news.title}</h1>
            <div className="flex w-full border shadow bg-base-100 rounded-box"></div>
        </AdminLayout>
    );
};

export default ShowNews;
