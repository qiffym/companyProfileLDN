import Hero from '@/Components/Hero';
import Guest from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Home({ title, auth, companyLogo }) {
    return (
        <Guest auth={auth.user}>
            <Head title={title}></Head>
            <Hero companyLogo={companyLogo} />
        </Guest>
    );
}
