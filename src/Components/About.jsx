import {useEffect, useState} from "react";
import {useScrollAnimation} from "../utils/useScrollAnimation";
import {useSelector} from "react-redux";

const About=()=>{
    // const [isVisible,setIsVisible]=useState(false);

    const {about}=useSelector(store=>store.portfolio.data)
    const [ref,isVisible]=useScrollAnimation()
    return <div
        ref={ref}
        className={` transition-all duration-1000 ${isVisible? 'opacity-100 translate-y-0 ':'opacity-0 translate-y-10'} min-h-screen flex items-center justify-center text-white px-6 md:px-32 mb-12`}>
        <div className="my-4 bg-black bg-opacity-70 grid grid-cols-1 lg:grid-cols-12  p-8">
            <div className="col-span-5 p-6 relative group">

                <div className="absolute top-6 md:top-3 left-6 md:left-3  md:w-80 h-4/5    bg-gradient-to-tl from-yellow-500 via-amber-500 to-orange-600 rounded-xl transition-transform ease-in-out md:group-hover:-translate-x-2 md:group-hover:-translate-y-2 "></div>
                <img src={about.aboutImage} alt="img"
                     className="relative w-60 md:w-80  rounded-xl transition-transform ease-in-out sm:translate-x-2 md:group-hover:translate-x-2 md:group-hover:translate-y-2   "/>
            </div>

            <div className="col-span-6 m-2">
               <h1 className="text-4xl font-orbitron font-bold text-center md:text-right bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">About Me...</h1>
                <p className="text-center md:text-right p-2">
                    {about.description}</p>
            </div>
        </div>
    </div>;
}
export default About