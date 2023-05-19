import { Head } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import { AboutUs, History, Vision, Organization, OurTeam } from './Section';

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
