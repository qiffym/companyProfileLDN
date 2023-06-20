import { Link, router } from '@inertiajs/react';
import me from '../../../../public/assets/img/user.png';
import CompanyLogo from '@/Components/CompanyLogo';

const NavbarAdmin = ({ user }) => {
    const handleLogout = (e) => {
        e.preventDefault();
        router.post(route('logout'), user, { replace: true });
    };
    return (
        <nav className="navbar fixed top-0 left-0 bg-base-200 border-b z-50 px-4">
            <div className="flex-1">
                <CompanyLogo className="w-14" />
                <Link className="ml-2 normal-case text-xl font-semibold">
                    PT. Lovina Dhea Nusantara
                </Link>
            </div>
            <div className="flex-none space-x-3">
                <span className="italic font-medium text-lg hidden md:flex">
                    Halo👋🏼, {user.name}
                </span>
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src={me} alt="user" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <div className="px-3">
                            <p className="text-sm">{user.name}</p>
                            <small>{user.email}</small>
                        </div>
                        <div className="divider m-0 p-0"></div>
                        <li>
                            <Link
                                href={route('profile.edit')}
                                className="justify-between"
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleLogout}
                                className="hover:bg-red-400 hover:font-bold"
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarAdmin;
