import { Head } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import Hero from './Section/Hero';
import News from './Section/News';

export default function Home({ title, auth, news }) {
    return (
        <Guest auth={auth.user}>
            <Head title={title}></Head>
            <Hero />
            <News news={news} />
        </Guest>
    );
}
