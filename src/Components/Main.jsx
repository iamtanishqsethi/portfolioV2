import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import {useRef} from "react";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Main=()=>{
    const heroRef = useRef(null);
    const aboutRef=useRef(null);
    const projectsRef=useRef(null);
    const contactRef=useRef(null);
    return (
        <div>
            <Header scrollToRef={{heroRef, aboutRef, projectsRef, contactRef}}/>
            <div ref={heroRef}><Hero/></div>
            <div className=" mx-auto mb-8 bg-gray-700 w-3/4 rounded-full h-0.5"></div>
            <div ref={aboutRef}><About/></div>
            <div className=" mx-auto mb-8 bg-gray-700 w-3/4 rounded-full h-0.5"></div>
            <div ref={projectsRef}><Projects/></div>
            <div className=" mx-auto mb-8 bg-gray-700 w-3/4 rounded-full h-0.5"></div>
            <div ref={contactRef}><Contact/></div>
            <Footer/>
        </div>
    )
}
export default Main