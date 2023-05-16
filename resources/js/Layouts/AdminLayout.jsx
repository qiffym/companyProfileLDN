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
            <div className="p-6 md:ml-64">
                <div className="mt-20">{children}</div>
                {/* <FooterAdmin /> */}
            </div>
        </>
    );
};

export default AdminLayout;
