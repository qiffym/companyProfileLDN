import { Link, usePage } from '@inertiajs/react';
import CompanyInfoMenu from '@/Components/CompanyInfoMenu';
import { HomeOutline } from '@/Components/svg/HomeOutline';
import { Users } from '@/Components/svg/Users';
import { Dashboard } from '@/Components/svg/Dashboard';

const SidebarAdmin = () => {
    const { url, component } = usePage();
    return (
        <aside
            className="hidden md:flex fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-base-100 text-base-content border-r"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto">
                <ul className="menu bg-base-100 text-base-content w-full">
                    <li className="hover-bordered">
                        <Link
                            href={route('dashboard')}
                            className={url === '/dashboard' ? 'active' : ''}
                        >
                            <Dashboard />
                            Dashboard
                        </Link>
                    </li>

                    <CompanyInfoMenu />

                    <li className="hover-bordered">
                        <Link
                            href={route('users.index')}
                            className={
                                component.startsWith('Admin/Users')
                                    ? 'active'
                                    : ''
                            }
                        >
                            <Users />
                            Manage Users
                        </Link>
                    </li>

                    <li className="hover-bordered">
                        <Link href="/">
                            <HomeOutline />
                            Public Area
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default SidebarAdmin;
