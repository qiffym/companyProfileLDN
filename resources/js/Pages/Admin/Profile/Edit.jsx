import { Head } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import UpdateProfileInformation from './Partials/UpdateProfileInformation';
import { ToastContainer, toast } from 'react-toastify';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import { DeleteUserForm } from './Partials/DeleteUserForm';

const Edit = ({ auth, title, status, mustVerifyEmail, flash }) => {
    return (
        <AdminLayout auth={auth.user}>
            {toast.success(flash.success) && <ToastContainer />}
            <Head title={title} />
            <main className="flex flex-col space-x-4 w-full p-10 rounded-box shadow-lg bg-base-100">
                <UpdateProfileInformation
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                />
                <div className="divider "></div>
                <UpdatePasswordForm />
                <div className="divider "></div>
                <DeleteUserForm />
            </main>
        </AdminLayout>
    );
};

export default Edit;
