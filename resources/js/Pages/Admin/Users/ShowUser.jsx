import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

const ShowUser = ({ title, user, auth }) => {
    return (
        <AdminLayout auth={auth.user}>
            <Head title={title} />
            <h1 className="text-4xl mb-4">User: {user.name}</h1>
            <div className="flex w-full border shadow bg-base-200 rounded-box"></div>
        </AdminLayout>
    );
};

export default ShowUser;
