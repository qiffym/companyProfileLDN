import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import CompanyLogo from '@/Components/CompanyLogo';
import ChevronBottom from '@/Components/svg/ChevronBottom';
import { Hamburger } from '@/Components/svg/Hamburger';
import SwapTheme from '@/Components/SwapTheme';

const Navbar = ({ auth }) => {
    const currentLocation = window.location.pathname;
    const [navbarFixed, setNavbarFixed] = useState(false);
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ?? 'light'
    );

    const toggleTheme = (e) => {
        e.target.checked ? setTheme('dark') : setTheme('light');
    };

    const handleScroll = () => {
        if (window.scrollY !== 0) {
            setNavbarFixed(true);
        } else {
            setNavbarFixed(false);
        }
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`navbar bg-transparent fixed left-0 md:px-[8%] 2xl:px-[20%] z-50 ${
                navbarFixed && 'navbar-fixed'
            }`}
        >
            <div className="navbar-start">
                {/* Mobile view */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <Hamburger />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link href={route('home')}>Beranda</Link>
                        </li>
                        <li>
                            <Link
                                href={route('company.profile')}
                                className="justify-between"
                            >
                                Profil Perusahaan
                            </Link>
                        </li>
                        <li tabIndex={0}>
                            <a>
                                Layanan
                                <ChevronBottom />
                            </a>
                            <ul className="p-2 bg-base-100 shadow">
                                <li>
                                    <Link>Layanan 1</Link>
                                </li>
                                <li>
                                    <Link>Layanan 2</Link>
                                </li>
                                <li>
                                    <Link>Layanan 3</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href={route('company.contact-us')}>
                                Kontak
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link href="/">
                    <CompanyLogo className="w-16" />
                </Link>
            </div>

            {/* Large view */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href={route('home')}>Beranda</Link>
                    </li>
                    <li tabIndex={0}>
                        <Link href={route('company.profile')}>
                            Profil Perusahaan
                            <ChevronBottom />
                        </Link>
                        {currentLocation !== '/profil' ? (
                            <ul className="p-2 bg-base-100 shadow">
                                <li>
                                    <Link href="/profil#about-us">
                                        Tentang Perusahaan
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/profil#history">Sejarah</Link>
                                </li>
                                <li>
                                    <Link href="/profil#vision">
                                        Visi dan Misi
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/profil#struktur-organisasi">
                                        Struktur Organisasi
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <ul className="p-2 bg-base-100 shadow">
                                <li>
                                    <a href="#about-us">Tentang Perusahaan</a>
                                </li>
                                <li>
                                    <a href="#history">Sejarah</a>
                                </li>
                                <li>
                                    <a href="#vision">Visi dan Misi</a>
                                </li>
                                <li>
                                    <a href="#struktur-organisasi">
                                        Struktur Organisasi
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li tabIndex={0}>
                        <a>
                            Layanan
                            <ChevronBottom />
                        </a>
                        <ul className="p-2 bg-base-100 shadow">
                            <li>
                                <Link href="#sejarah">Layanan 1</Link>
                            </li>
                            <li>
                                <Link href="#visi-misi">Layanan 2</Link>
                            </li>
                            <li>
                                <Link href="#struktur-organisasi">
                                    Layanan 3
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link>Karir</Link>
                    </li>
                    <li>
                        <Link href={route('company.contact-us')}>Kontak</Link>
                    </li>
                    {auth && (
                        <li>
                            <Link
                                className="text-primary"
                                href={route('dashboard')}
                            >
                                {auth.name}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>

            {/* Lang */}
            <div className="navbar-end pr-4 lg:pr-0">
                <SwapTheme
                    onChange={toggleTheme}
                    checked={theme === 'light' ? false : true}
                />
            </div>
        </nav>
    );
};

export default Navbar;
