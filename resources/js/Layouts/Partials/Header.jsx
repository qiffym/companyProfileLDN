import Navbar from './Navbar';

const Header = ({ children, auth }) => {
    return (
        <header className="container mx-auto">
            <Navbar auth={auth}>{children}</Navbar>
        </header>
    );
};

export default Header;
