import CompanyLogo from '@/Components/CompanyLogo';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content flex flex-wrap md:flex-nowrap justify-around 2xl:px-[10%]">
            <div className="flex flex-col">
                <CompanyLogo className="w-24" />
                <p>
                    PT Lovina Dhea Nusantara
                    <br />
                    Copyright &copy; {year} All Right Reserved
                </p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Contractor</a>
                <a className="link link-hover">Supplier</a>
                <a className="link link-hover">Trading</a>
                <a className="link link-hover">Information Technology</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">News</a>
                <a className="link link-hover">Contact</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;
