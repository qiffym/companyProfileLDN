import { Link, usePage } from '@inertiajs/react';
import CompanyInfoMenu from '@/Components/CompanyInfoMenu';
import {
    DashboardIcon,
    HomeIcon,
    // BriefcaseIcon,
    // BroadcastIcon,
    // UsersIcon,
} from '@iconicicons/react';

const SidebarAdmin = () => {
    const { component } = usePage();
    return (
        <aside
            className="hidden md:flex fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-base-100 text-base-content border-r"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pb-4 overflow-y-auto">
                <ul className="menu bg-base-100 text-base-content w-56 rounded-box">
                    <li>
                        <h2 className="menu-title">CORE</h2>
                        <ul>
                            <li className="hover-bordered">
                                <Link href={route('dashboard')}>
                                    <DashboardIcon />
                                    Dashboard
                                </Link>
                            </li>
                            <li className="hover-bordered">
                                <Link href={route('home')}>
                                    <HomeIcon />
                                    Public Area
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <div className="divider opacity-70" />

                    <li className="hover-bordered">
                        <Link
                            href={route('users.index')}
                            className={
                                component.startsWith('Admin/Users')
                                    ? 'active'
                                    : ''
                            }
                        >
                            {/* <UsersIcon /> */}
                            Manage Users
                        </Link>
                    </li>

                    <li className="hover-bordered">
                        <Link
                            href={route('news.index')}
                            className={
                                component.startsWith('Admin/News/')
                                    ? 'active'
                                    : ''
                            }
                        >
                            {/* <BroadcastIcon /> */}
                            Manage News
                        </Link>
                    </li>

                    <li className="hover-bordered">
                        <Link
                            href={route('news-categories.index')}
                            className={
                                component.startsWith('Admin/NewsCategories/')
                                    ? 'active'
                                    : ''
                            }
                        >
                            {/* <BroadcastIcon /> */}
                            Manage News Categories
                        </Link>
                    </li>

                    <li className="hover-bordered">
                        <Link
                            href={route('careers.index')}
                            className={
                                component.startsWith('Admin/Careers')
                                    ? 'active'
                                    : ''
                            }
                        >
                            {/* <BriefcaseIcon /> */}
                            Manage Careers
                        </Link>
                    </li>

                    <li className="hover-bordered">
                        <Link
                            href={route('faqs.index')}
                            className={
                                component.startsWith('Admin/FAQs')
                                    ? 'active'
                                    : ''
                            }
                        >
                            Manage FAQs
                        </Link>
                    </li>

                    <CompanyInfoMenu />
                </ul>
            </div>
        </aside>
    );
};

export default SidebarAdmin;
