const ProjectsB=({data})=>{
    return(
        <div className="relative p-4 m-4 ">
            <div className={`   transition ease-in-out bg-black absolute  w-1/2 ${data.id%2===0?"right-1/2 top-1/3 text-left hover:translate-y-2 hover:translate-x-2":"left-1/2 top-1/3 text-right hover:-translate-y-2 hover:-translate-x-2"}  py-8 px-6 rounded-xl bg-opacity-80`}>
                <h1
                    className=" p-2 text-3xl font-orbitron font-bold  bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">
                    {data.name}</h1>
                <p className="text-left py-2">{data.desc} </p>
                <div>
                    {data.tags.map((tag,index)=>(<span className="text-sm  px-2 text-gray-400">{tag}</span>))}
                </div>
                <a href={data.link}
                   className=" text-lg text-gray-400 p-2 transition ease-in-out hover:text-amber-400 hover:scale-125"><i className="fa-solid fa-link"></i></a>
                <a href={data.gitHub}
                   className=" text-lg text-gray-400 p-2 transition ease-in-out hover:text-amber-400 hover:scale-125"><i
                    className="fab fa-github"></i></a>

            </div>
            <div className={`flex ${data.id%2===0?"justify-end":"justify-start"}`}>
                <img src={data.img} alt="img"
                     className="w-3/4 rounded-xl border-2 border-amber-400"/>
            </div>


        </div>
    )
}
export default ProjectsB