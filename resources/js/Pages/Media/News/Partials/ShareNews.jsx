import { FacebookIcon, LinkedInIcon, WhatsUpIcon } from '@/Components/svg';
import { LinkIcon } from '@iconicicons/react';
import { useState } from 'react';

const ShareNews = ({ title }) => {
    const [copy, setCopy] = useState('Copy Link');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(location.href);
        setCopy('Copied!');
    };

    const shareToWA = `https://api.whatsapp.com/send?text=${title}%0A${location.href}`;

    return (
        <div className="flex justify-center items-center space-x-3 text-sm">
            <span className="badge badge-secondary cursor-default">Share:</span>
            <a
                href={shareToWA}
                target="_blank"
                rel="noopener noreferrer"
                className="tooltip"
                data-tip="WhatsUp"
            >
                <WhatsUpIcon className="w-5 h-5" />
            </a>

            <a href="#!" className="tooltip" data-tip="Facebook">
                <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="#!" className="tooltip" data-tip="Linkedin">
                <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
                onClick={copyToClipboard}
                className="tooltip cursor-pointer"
                data-tip={copy}
            >
                <LinkIcon className="w-6 h-6" />
            </a>
        </div>
    );
};

export default ShareNews;
