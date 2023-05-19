import { Head } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import { AboutUs, History, Vision, Organization, OurTeam } from './Section';

const CompanyProfile = ({ title, auth }) => {
    return (
        <Guest auth={auth.user}>
            <Head title={title} />
            <div className="w-full overflow-hidden">
                <AboutUs />
                <History />
                <Vision />
                <Organization />
                <OurTeam />
            </div>
        </Guest>
    );
};

export default CompanyProfile;
