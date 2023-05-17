import { Link } from '@inertiajs/react';
import { Map } from './svg/Map';
import { InfoCircleOutline } from './svg/InfoCircleOutline';

const CompanyInfoMenu = () => {
    return (
        <>
            <li className="menu-title">
                <span>Manage Pages</span>
            </li>

            <li className="hover-bordered">
                <Link>
                    <InfoCircleOutline />
                    Beranda
                </Link>
            </li>
            <li className="hover-bordered">
                <Link>
                    <InfoCircleOutline />
                    Tentang Kami
                </Link>
            </li>
            <li className="hover-bordered">
                <a>
                    <InfoCircleOutline />
                    Sejarah
                </a>
            </li>
            <li className="hover-bordered">
                <a>
                    <InfoCircleOutline />
                    Visi & Misi
                </a>
            </li>
            <li className="hover-bordered">
                <a>
                    <InfoCircleOutline />
                    Struktur Organisasi
                </a>
            </li>
            <li className="hover-bordered">
                <a>
                    <InfoCircleOutline />
                    Karir
                </a>
            </li>
            <li className="hover-bordered">
                <a>
                    <Map />
                    Alamat & Kontak
                </a>
            </li>
            <div className="divider"></div>
        </>
    );
};

export default CompanyInfoMenu;
