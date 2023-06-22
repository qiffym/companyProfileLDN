import { Link } from '@inertiajs/react';
import parse from 'html-react-parser';

const Pagination = ({ links }) => {
    return (
        <div className="join justify-center items-center mt-16">
            {links.map((link, i) => (
                <Link
                    key={i}
                    as="button"
                    href={link.url}
                    disabled={link.url === null}
                    className={`join-item btn btn-neutral normal-case ${
                        link.active === true ? 'btn-active' : ''
                    }`}
                >
                    {parse(link.label)}
                </Link>
            ))}
        </div>
    );
};

export default Pagination;
