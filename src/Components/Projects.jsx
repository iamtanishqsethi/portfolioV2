import MainProjects from "./MainProjects";
import SmallProjects from "./SmallProjects";
import {useSelector} from "react-redux";

const Projects = () => {

    const projects=useSelector(store=>store.projects.data)
    const miniProjects=useSelector(store=>store.miniProjects.data)
    return (
        <div className="text-white px-6 md:px-16 lg:px-32 my-8 md:my-12">
            <h1 className="text-4xl text-center  md:text-left md:text-4xl font-orbitron font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text mb-6 md:mb-8">
                Stuff I have Build...
            </h1>
            <MainProjects projects={projects} />
            <SmallProjects projects={miniProjects} />
        </div>
    );
};

export default Projects;
