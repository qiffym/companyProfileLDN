import { Head } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import Hero from './Section/Hero';
import News from './Section/News';

export default function Home({ title, auth }) {
    return (
        <Guest auth={auth.user}>
            <Head title={title}></Head>
            <Hero />
            <News />
        </Guest>
    );
}
