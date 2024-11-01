import {useEffect, useState} from "react";

const Header = ({scrollToRef}) => {
    const[isscrolled, setIsscrolled] = useState(false);

    const scrollToSection=(ref)=>{
        ref.current?.scrollIntoView({behavior: "smooth"});
    }
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY>100) {
                setIsscrolled(true)
            }
            else {
                setIsscrolled(false)
            }

        }
        window.addEventListener("scroll", handleScroll)
        return()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    }, []);
    return(
        <div
            className={`text-white w-full  px-14 fixed flex items-center justify-between transition-all duration-300 ${isscrolled ? "bg-black bg-opacity-65 backdrop-blur py-3 " : "bg-transparent py-7"} z-10`}>
            <div className="ml-8">
                <a href="Loading.jsx"><h1 className={`font-orbitron font-extrabold ${isscrolled?"text-2xl":"text-3xl"}`}>TS<span
                    className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">05</span>
                </h1></a>
            </div>
            <div className="mr-12">
                <ul className='flex items-center justify-center font-orbitron font-medium text-lg'>
                    <li onClick={()=>scrollToSection(scrollToRef.heroRef)}
                        className="mr-3.5 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-400">Home</li>
                    <li onClick={()=>scrollToSection(scrollToRef.aboutRef)}
                        className="mr-3.5 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-400">About</li>
                    <li onClick={()=>scrollToSection(scrollToRef.projectsRef)}
                        className="mr-3.5 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-400">Projects</li>
                    <li className="mr-3.5 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-400">Contact</li>
                </ul>
            </div>
        </div>
    )
}
export default Header