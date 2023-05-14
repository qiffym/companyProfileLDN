import { Head } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';

const Contact = ({ title }) => {
    return (
        <Guest>
            <Head title={title} />
        </Guest>
    );
};

export default Contact;
