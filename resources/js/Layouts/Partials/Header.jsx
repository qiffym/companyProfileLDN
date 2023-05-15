import Navbar from './Navbar';

const Header = ({ Children, auth }) => {
    return (
        <header className="container mx-auto">
            <Navbar auth={auth}>{Children}</Navbar>
        </header>
    );
};

export default Header;
