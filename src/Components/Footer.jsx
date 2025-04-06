import {useSelector} from "react-redux";

const Footer = () => {

    const {socials}=useSelector(store=>store.portfolio.data)
    return (
        <div className="flex flex-col items-center justify-center text-center bg-black bg-opacity-50 backdrop-blur text-white py-6 md:py-9">
            <h1 className="text-gray-400 font-bold text-sm md:text-lg">Created by : Tanishq Sethi (2024)</h1>
            <div className="flex items-center mt-4 text-gray-400">
                <a
                    href={socials.github}
                    className="text-lg md:text-xl p-2 transition ease-in-out hover:text-amber-400 hover:scale-125"
                >
                    <i className="fab fa-github"></i>
                </a>
                <a
                    href={socials.twitter}
                    className="text-lg md:text-xl p-2 transition ease-in-out hover:text-amber-400 hover:scale-125"
                >
                    <i className="fab fa-x-twitter"></i>
                </a>
                <a
                    href={socials.linkedin}
                    className="text-lg md:text-xl p-2 transition ease-in-out hover:text-amber-400 hover:scale-125"
                >
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
};

export default Footer;
