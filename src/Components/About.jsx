import {useEffect, useState} from "react";
import {useScrollAnimation} from "../utils/useScrollAnimation";

const About=()=>{
    // const [isVisible,setIsVisible]=useState(false);
    const [ref,isVisible]=useScrollAnimation()
    return <div
        ref={ref}
        className={` transition-all duration-1000 ${isVisible? 'opacity-100 translate-y-0 ':'opacity-0 translate-y-10'} min-h-screen flex items-center justify-center text-white px-6 md:px-32 mb-12`}>
        <div className="my-4 bg-black bg-opacity-70 grid grid-cols-1 lg:grid-cols-12  p-8">
            <div className="col-span-5 p-6 relative group">

                <div className="absolute top-6 md:top-3 left-6 md:left-3  md:w-80 h-4/5    bg-gradient-to-tl from-yellow-500 via-amber-500 to-orange-600 rounded-xl transition-transform ease-in-out md:group-hover:-translate-x-2 md:group-hover:-translate-y-2 "></div>
                <img src="https://i.ibb.co/0C10yfv/img.png" alt="img"
                     className="relative w-60 md:w-80  rounded-xl transition-transform ease-in-out sm:translate-x-2 md:group-hover:translate-x-2 md:group-hover:translate-y-2   "/>
            </div>

            <div className="col-span-6 m-2">
               <h1 className="text-4xl font-orbitron font-bold text-center md:text-right bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">About Me...</h1>
                <p className="text-center md:text-right p-2">
                    Hi, I'm Tanishq Sethi, an 18-year-old web developer currently pursuing a B.Tech degree at Maharaja
                    Agrasen Institute of Technology, New Delhi.
                    <br></br>
                    <br></br>
                    I am in my second year of studies and actively enhancing my skills in data structures and algorithms
                    using <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text font-bold">Java</span>.
                    I have a strong foundation in <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text font-bold">HTML</span>, <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text font-bold">CSS</span>, and I am currently
                    learning <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text font-bold">React JS</span>.
                    Additionally, I am proficient in other programming languages such
                    as <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text font-bold">C</span>, <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text font-bold">Python</span>, and <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text font-bold">JavaScript</span>.
                    <br></br>
                    <br></br>
                    Feel free to connect with me for any collaboration or opportunities.</p>
            </div>
        </div>
    </div>;
}
export default About