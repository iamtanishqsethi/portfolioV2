import ProjectsS from "./ProjectsS";

const SmallProjects = ({projects}) => {

    return (
        <div className="text-center ">
            <h1 className="text-3xl font-orbitron font-bold  bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">Some Small Projects</h1>
            <div className="flex flex-wrap justify-center items-center">
                {projects.map((project)=>(<ProjectsS data={project}/>))}
            </div>


        </div>
    )

}
export default SmallProjects;