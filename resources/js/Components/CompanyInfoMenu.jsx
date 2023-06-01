import { Link } from '@inertiajs/react';
import { GlobeIcon, InformationIcon, PhoneCallIcon } from '@iconicicons/react';

const CompanyInfoMenu = () => {
    return (
        <li>
            <details open>
                <summary>
                    <GlobeIcon />
                    Manage Pages
                </summary>

                <ul>
                    <li className="hover-bordered">
                        <Link>
                            <InformationIcon />
                            Beranda
                        </Link>
                    </li>
                    <li className="hover-bordered">
                        <Link>
                            <InformationIcon />
                            Tentang Kami
                        </Link>
                    </li>
                    <li className="hover-bordered">
                        <a>
                            <InformationIcon />
                            Sejarah
                        </a>
                    </li>
                    <li className="hover-bordered">
                        <a>
                            <InformationIcon />
                            Visi & Misi
                        </a>
                    </li>
                    <li className="hover-bordered">
                        <a>
                            <InformationIcon />
                            Struktur Organisasi
                        </a>
                    </li>
                    <li className="hover-bordered">
                        <a>
                            <InformationIcon />
                            Karir
                        </a>
                    </li>
                    <li className="hover-bordered">
                        <a>
                            <PhoneCallIcon />
                            Alamat & Kontak
                        </a>
                    </li>
                </ul>
            </details>
        </li>
    );
};

export default CompanyInfoMenu;
