import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import MiniProjects from "./MiniProjects";
import {useRef} from "react";
import {Toaster} from "react-hot-toast";

const DashBoard=()=>{
    const portfolioRef=useRef(null);
    const projectsRef=useRef(null);
    const miniProjectsRef=useRef(null);

    return (
        <div className={'text-white relative flex flex-col items-center'}>
            <NavBar scrollToRef={{portfolioRef,projectsRef,miniProjectsRef}} />
            <Toaster/>
            <div ref={portfolioRef} className={'w-full'}><Portfolio/></div>
            <div
                className={'w-[90%] h-1 bg-gray-700 rounded my-12 flex items-center justify-center'}>
            </div>
            <div ref={projectsRef}  className={'w-full'}><Projects/></div>

            <div
                className={'w-[90%] h-1 bg-gray-700 rounded my-12 flex items-center justify-center'}>
            </div>
            <div ref={miniProjectsRef}  className={'w-full'}><MiniProjects/></div>

        </div>
    )
}
export default DashBoard;