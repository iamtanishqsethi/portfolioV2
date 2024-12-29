const ProjectsS=({data})=>{

    return (
        <div
            className="bg-black opacity-75 flex flex-col items-center justify-start m-4 w-[250px] h-[300px] md:w-[300px] md:h-[350px] p-5 md:p-8 rounded-xl border-amber-400 border-2
            hover:shadow-lg hover:scale-105 transition ease-in-out hover:shadow-amber-500">
            <i className="fas fa-folder text-4xl md:text-6xl m-2 text-amber-500 "></i>
            <h1 className="text-xl md:text-2xl font-bold  font-orbitron text-amber-500  my-2.5 md:my-4">{data.name}</h1>
            <p className="text-sm text-gray-400">{data.desc}</p>
            <a href={data.gitHub}
               className=" text-2xl text-gray-400 p-2 transition ease-in-out hover:text-amber-400 hover:scale-125"><i
                className="fab fa-github"></i></a>
        </div>
    )
}
export default ProjectsS;