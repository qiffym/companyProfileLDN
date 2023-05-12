import Hero from '@/Components/Hero';
import Guest from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Home({ title }) {
    return (
        <Guest>
            <Head title={title}></Head>
            <Hero />
        </Guest>
    );
}
