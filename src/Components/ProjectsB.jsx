const ProjectsB=({data})=>{
    return(
        <div className="relative p-4 m-4 md:mb-36 lg:mb-0">
            <div className={`   transition ease-in-out bg-black md:absolute  my-2 md:my-0 w-full md:w-1/2  ${data.id%2===0?"md:right-1/2 md:top-1/3 text-center md:text-left md:hover:translate-y-2 md:hover:translate-x-2":"md:left-1/2 md:top-1/3 text-center md:text-right md:hover:-translate-y-2 md:hover:-translate-x-2"}  py-8 px-6 rounded-xl bg-opacity-80`}>
                <h1
                    className=" p-2 text-3xl font-orbitron font-bold  bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">
                    {data.name}</h1>
                <p className={` text-center ${data.id%2===0?"md:text-left":"md:text-right"} py-2`}>{data.desc} </p>
                <div className={`flex flex-wrap justify-center ${data.id%2===0?"md:justify-start":"md:justify-end"}`}>
                    {data.tags.map((tag,index)=>(<span key={index} className="text-sm  px-2 text-gray-400">{tag}</span>))}
                </div>
                <a href={data.link}
                   className=" text-lg text-gray-400 p-2 transition ease-in-out hover:text-amber-400 hover:scale-125"><i className="fa-solid fa-link"></i></a>
                <a href={data.gitHub}
                   className=" text-lg text-gray-400 p-2 transition ease-in-out hover:text-amber-400 hover:scale-125"><i
                    className="fab fa-github"></i></a>

            </div>
            <div className={`hidden  md:flex ${data.id%2===0?"justify-end":"justify-start"}`}>
                <img src={data.img} alt="img"
                     className="md:w-full lg:w-3/4 rounded-xl border-2 border-amber-400"/>
            </div>


        </div>
    )
}
export default ProjectsB