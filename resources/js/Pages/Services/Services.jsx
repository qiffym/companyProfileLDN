import { Head, usePage } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import {
    Contractor,
    Supplier,
    InformationTechnology,
    Trading,
} from './Section';

const Services = ({ auth, title }) => {
    const {
        bgContractor,
        contractorLandscape,
        contractorSeaport,
        contractorHospital,
        contractorMako,
        contractorRestArea,
        supplierImg,
        supplierPlumbing,
        supplierMaterials,
        supplierElectrical,
        bgTech,
        techHardware,
        techSoftware,
        techPerbankan,
        techCyber,
        tradingImg,
        tradMedical,
        tradBlanket,
        tradTowel,
        tradShoes,
    } = usePage().props;
    return (
        <Guest auth={auth.user}>
            <Head title={title} />
            <main className="w-full overflow-hidden">
                <Contractor
                    bgImage={bgContractor}
                    contractorLandscape={contractorLandscape}
                    contractorSeaport={contractorSeaport}
                    contractorHospital={contractorHospital}
                    contractorMako={contractorMako}
                    contractorRestArea={contractorRestArea}
                />

                <Supplier
                    supplierImg={supplierImg}
                    plumbing={supplierPlumbing}
                    materials={supplierMaterials}
                    electrical={supplierElectrical}
                />

                <InformationTechnology
                    bgTech={bgTech}
                    hardware={techHardware}
                    software={techSoftware}
                    perbankan={techPerbankan}
                    cyber={techCyber}
                />
                <Trading
                    tradingImg={tradingImg}
                    towel={tradTowel}
                    shoes={tradShoes}
                    medical={tradMedical}
                    blanket={tradBlanket}
                />
            </main>
        </Guest>
    );
};

export default Services;
