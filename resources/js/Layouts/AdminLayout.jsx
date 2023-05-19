import NavbarAdmin from './Partials/NavbarAdmin';
import SidebarAdmin from './Partials/SidebarAdmin';
import FooterAdmin from './Partials/FooterAdmin';
import { Head } from '@inertiajs/react';

const AdminLayout = ({ children, auth }) => {
    return (
        <>
            <Head title="Dashboard" />
            <NavbarAdmin user={auth} />
            <SidebarAdmin />
            <main className="p-6 md:ml-64 bg-base-200 min-h-screen">
                <div className="mt-16">{children}</div>
                <FooterAdmin />
            </main>
        </>
    );
};

export default AdminLayout;
