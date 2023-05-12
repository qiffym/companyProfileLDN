import { Link } from '@inertiajs/react';
import CompanyInfoMenu from '@/Components/CompanyInfoMenu';
import { HomeOutline } from '@/Components/svg/HomeOutline';
import { InfoCircleOutline } from '@/Components/svg/InfoCircleOutline';

const SidebarAdmin = () => {
    return (
        <aside
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-base-300 text-base-content border-r"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto">
                <ul className="menu bg-base-300 text-base-content w-full ">
                    <li className="hover-bordered">
                        <Link href={route('dashboard')}>
                            <HomeOutline />
                            Dashboard
                        </Link>
                    </li>

                    <CompanyInfoMenu />

                    <li className="hover-bordered">
                        <Link href={route('users.index')}>
                            <InfoCircleOutline />
                            Manage Users
                        </Link>
                    </li>

                    <li className="hover-bordered">
                        <Link href="/">
                            <InfoCircleOutline />
                            Public Area
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default SidebarAdmin;
