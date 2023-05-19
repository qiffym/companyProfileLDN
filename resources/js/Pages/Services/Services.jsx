import { Head } from '@inertiajs/react';
import {
    Contractor,
    Supplier,
    InformationTechnology,
    Trading,
} from './Section';
import Guest from '@/Layouts/GuestLayout';

const Services = ({ auth, title }) => {
    return (
        <Guest auth={auth.user}>
            <Head title={title} />
            <main className="w-full overflow-hidden">
                <Contractor />
                <Supplier />
                <InformationTechnology />
                <Trading />
            </main>
        </Guest>
    );
};

export default Services;
