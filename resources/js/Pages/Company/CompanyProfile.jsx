import Guest from '@/Layouts/GuestLayout';
import AboutUs from './Section/AboutUs';
import History from './Section/History';
import Vision from './Section/Vision';
import { Head } from '@inertiajs/react';
import Organization from './Section/Organization';

const CompanyProfile = ({ title }) => {
    return (
        <Guest>
            <Head title={title} />
            <AboutUs />
            <History />
            <Vision />
            <Organization />
        </Guest>
    );
};

export default CompanyProfile;
