import Navbar from './Navbar';

const Header = ({ Children }) => {
    return (
        <header className="container mx-auto">
            <Navbar>{Children}</Navbar>
        </header>
    );
};

export default Header;
