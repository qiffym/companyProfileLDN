import companyLogo from '../../../public/assets/img/companyLogo.png';
import SwapTheme from './SwapTheme';

const Hero = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col text-center">
                <img
                    className="mask mask-circle w-72"
                    src={companyLogo}
                    alt="CompanyLogo"
                />
                <div className="max-w-2xl">
                    <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                        PT. Lovina Dhea Nusantara
                    </h1>
                    <p className="py-6 text-base-content">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi. Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Quia, minus!
                        Accusantium repellat quis a dicta dolor nobis nesciunt.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
