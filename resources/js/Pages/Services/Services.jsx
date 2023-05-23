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

                <InformationTechnology bgTech={bgTech} />
                <Trading />
            </main>
        </Guest>
    );
};

export default Services;
