import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import MiniProjects from "./MiniProjects";

const DashBoard=()=>{


    return (
        <div className={'text-white relative flex flex-col items-center'}>
            <NavBar/>
            <Portfolio/>
            <div
                className={'w-[90%] h-1 bg-gray-700 rounded my-12 flex items-center justify-center'}>
            </div>
            <Projects/>
            <div
                className={'w-[90%] h-1 bg-gray-700 rounded my-12 flex items-center justify-center'}>
            </div>
            <MiniProjects/>

        </div>
    )
}
export default DashBoard;