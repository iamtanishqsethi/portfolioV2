import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import {useRef} from "react";
import Projects from "./Projects";

const Main=()=>{
    const heroRef = useRef(null);
    const aboutRef=useRef(null);
    const projectsRef=useRef(null);
    return (
        <div className="">
            <Header scrollToRef={{heroRef,aboutRef,projectsRef}}/>
            <div ref={heroRef}><Hero/></div>
            <div ref={aboutRef}><About/></div>
            <div ref={projectsRef}><Projects/></div>
        </div>
    )
}
export default Main