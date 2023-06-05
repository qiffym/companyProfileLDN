import { FacebookIcon, LinkedInIcon, WhatsUpIcon } from '@/Components/svg';
import { LinkIcon } from '@iconicicons/react';

const ShareNews = () => {
    return (
        <div className="flex justify-center items-center space-x-3 text-sm">
            <span className="badge badge-secondary">Share:</span>
            <a href="#!" className="tooltip" data-tip="WhatsUp">
                <WhatsUpIcon className="w-5 h-5" />
            </a>

            <a href="#!" className="tooltip" data-tip="Facebook">
                <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="#!" className="tooltip" data-tip="Linkedin">
                <LinkedInIcon className="w-5 h-5" />
            </a>
            <a href="#!" className="tooltip" data-tip="Copy Link">
                <LinkIcon className="w-6 h-6" />
            </a>
        </div>
    );
};

export default ShareNews;
