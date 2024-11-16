import MainProjects from "./MainProjects";
import SmallProjects from "./SmallProjects";
import data from "../utils/Projects.json";

const Projects = () => {
    return (
        <div className="text-white px-6 md:px-16 lg:px-32 my-8 md:my-12">
            <h1 className="text-3xl text-center  md:text-left md:text-4xl font-orbitron font-bold bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text mb-6 md:mb-8">
                Stuff I have Build...
            </h1>
            <MainProjects projects={data.MainProjects} />
            <SmallProjects projects={data.SmallProjects} />
        </div>
    );
};

export default Projects;
