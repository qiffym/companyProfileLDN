import Header from './Partials/Header';
import Footer from './Partials/Footer';

export default function Guest({ children, auth }) {
    return (
        <>
            <Header auth={auth} />
            <div>{children}</div>
            <Footer />
        </>
    );
}
