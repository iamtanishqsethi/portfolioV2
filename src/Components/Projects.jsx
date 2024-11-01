import MainProjects from "./MainProjects";
import SmallProjects from "./SmallProjects";
import data from "../utils/Projects.json"

const Projects=()=>{

    return (
        <div className="text-white px-32 my-12">
            <h1
                className="text-4xl font-orbitron font-bold  bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">
                Stuff I have Build...</h1>
            <MainProjects projects={data.MainProjects}/>
            <SmallProjects projects={data.SmallProjects}/>
        </div>
    )
}
export default Projects;