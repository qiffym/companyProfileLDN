import { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Hamburger, ChevronBottom } from '@/Components/svg';
import CompanyLogo from '@/Components/CompanyLogo';
import SwapTheme from '@/Components/SwapTheme';

const Navbar = ({ auth }) => {
    const { url } = usePage();
    const [navbarFixed, setNavbarFixed] = useState(false);
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ?? 'winter'
    );

    const toggleTheme = (e) => {
        e.target.checked ? setTheme('night') : setTheme('winter');
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
            className={`navbar bg-transparent fixed left-0 md:px-[8%] 2xl:px-[15%] z-50 ${
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
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link href={route('home')}>Beranda</Link>
                        </li>
                        <li>
                            <a>Profil Perusahaan</a>
                            {url !== '/profil' ? (
                                <ul className="p-2">
                                    <li>
                                        <Link href="/profil#about-us">
                                            Tentang Perusahaan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/profil#history">
                                            Sejarah
                                        </Link>
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
                                <ul className="p-2">
                                    <li>
                                        <a href="#about-us">
                                            Tentang Perusahaan
                                        </a>
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
                            <a>Layanan Kami</a>
                            <ul className="p-2 ">
                                <li>
                                    <Link href={route('company.service')}>
                                        Jasa Konstruksi
                                    </Link>
                                </li>
                                <li>
                                    <Link>Supplier</Link>
                                </li>
                                <li>
                                    <Link>Teknologi Informasi</Link>
                                </li>
                                <li>
                                    <Link>Trading</Link>
                                </li>
                            </ul>
                        </li>
                        <li tabIndex={0}>
                            <a>Media & Informasi</a>
                            <ul className="p-2">
                                <li>
                                    <Link href={route('media.news.index')}>
                                        Berita
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#!">Vidio Terkait</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href={route('company.career')}>Karir</Link>
                        </li>
                        <li>
                            <Link href={route('company.contact-us')}>
                                Kontak
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link href="/">
                    <CompanyLogo className="w-14 object-contain -m-1" />
                </Link>
            </div>

            {/* Large view */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href={route('home')}>Beranda</Link>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Profil Perusahaan</summary>
                            {url !== '/profil' ? (
                                <ul className="p-2 bg-base-100 shadow">
                                    <li>
                                        <Link href="/profil#about-us">
                                            Tentang Perusahaan
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/profil#history">
                                            Sejarah
                                        </Link>
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
                                        <a href="#about-us">
                                            Tentang Perusahaan
                                        </a>
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
                        </details>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Layanan Kami</summary>

                            <ul className="p-2 bg-base-100 shadow">
                                <li>
                                    <Link href={route('company.service')}>
                                        Jasa Konstruksi
                                    </Link>
                                </li>
                                <li>
                                    <Link>Supplier</Link>
                                </li>
                                <li>
                                    <Link>Teknologi Informasi</Link>
                                </li>
                                <li>
                                    <Link>Trading</Link>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Media & Informasi</summary>
                            <ul className="p-2 bg-base-100 shadow">
                                <li>
                                    <Link href={route('media.news.index')}>
                                        Berita
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="#!">Vidio Terkait</Link>
                                </li> */}
                            </ul>
                        </details>
                    </li>

                    <li>
                        <Link href={route('company.career')}>Karir</Link>
                    </li>
                    <li>
                        <Link href={route('company.contact-us')}>Kontak</Link>
                    </li>
                    {auth && (
                        <li>
                            <Link
                                className="text-primary font-semibold"
                                href={route('dashboard')}
                            >
                                Dashboard
                            </Link>
                        </li>
                    )}
                </ul>
            </div>

            {/* Lang */}
            <div className="navbar-end pr-4 lg:pr-0">
                <div className="flex justify-center items-end gap-2">
                    <span className="font-medium">Tema</span>
                    <SwapTheme
                        onChange={toggleTheme}
                        checked={theme === 'winter' ? false : true}
                    />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
