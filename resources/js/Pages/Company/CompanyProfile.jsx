import Guest from '@/Layouts/GuestLayout';
import AboutUs from './Section/AboutUs';
import History from './Section/History';
import Vision from './Section/Vision';
import { Head } from '@inertiajs/react';
import Organization from './Section/Organization';
import OurTeam from './Section/OurTeam';

const CompanyProfile = ({ title, auth }) => {
    return (
        <Guest auth={auth.user}>
            <Head title={title} />
            <AboutUs />
            <History />
            <Vision />
            <Organization />
            <OurTeam />
        </Guest>
    );
};

export default CompanyProfile;
