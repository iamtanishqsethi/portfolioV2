import ProjectsB from "./ProjectsB";

const MainProjects = ({projects}) => {

    return <div>
        {projects.map((project, index) => (<ProjectsB data={project} key={index} />))}


    </div>
}
export default MainProjects;