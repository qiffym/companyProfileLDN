import { Head } from '@inertiajs/react';
import Header from './Partials/Header';
import Footer from './Partials/Footer';
import favicon from '../../../public/favicon.ico';

export default function Guest({ children, auth }) {
    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    type="image/x-icon"
                    sizes="32x32"
                    href={favicon}
                />
            </Head>
            <Header auth={auth} />
            <div>{children}</div>
            <Footer />
        </>
    );
}
