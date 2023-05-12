import { Head } from '@inertiajs/react';
import Header from './Partials/Header';
import Footer from './Partials/Footer';
import favicon from '../../../public/favicon.ico';

export default function Guest({ children }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href={favicon} type="image/x-icon" />
            </Head>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    );
}
