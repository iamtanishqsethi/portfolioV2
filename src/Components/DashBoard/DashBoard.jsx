import {useState} from "react";
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import MiniProjects from "./MiniProjects";

const DashBoard=()=>{


    return (
        <div className={'text-white relative'}>
            <NavBar/>
            <Portfolio/>
            <Projects/>
            <MiniProjects/>

        </div>
    )
}
export default DashBoard;