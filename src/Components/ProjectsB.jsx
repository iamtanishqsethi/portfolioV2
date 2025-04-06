import {useScrollAnimation} from "../utils/useScrollAnimation";

const ProjectsB=({data,index})=>{
    const [ref,isVisible]=useScrollAnimation()
    return(
        <div
            ref={ref}
            className={`group transition-all duration-1000 ${isVisible?'opacity-100 translate-x-0':'opacity-0'} ${ index%2===0?' -translate-x-10 ':' translate-x-30 '} relative p-4 m-8 md:my-28 lg:mb-0`}>
            <div className={`   transition ease-in-out bg-black md:absolute  my-2 md:my-0 w-full md:w-1/2  ${index%2===0?"md:right-1/2 md:top-1/3 text-center md:text-left  md:group-hover:translate-x-2":"md:left-1/2 md:top-1/3 text-center md:text-right  md:group-hover:-translate-x-2"}  py-8 px-6 rounded-xl bg-opacity-80`}>
                <h1
                    className=" p-2 text-3xl font-orbitron font-bold  bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">
                    {data.title}</h1>
                <p className={` text-center ${index%2===0?"md:text-left":"md:text-right"} py-2`}>{data.description} </p>
                <div className={`flex flex-wrap justify-center ${index%2===0?"md:justify-start":"md:justify-end"}`}>
                    {data.tags.map((tag,index)=>(<span key={index} className="text-sm  px-2 text-gray-400">{tag}</span>))}
                </div>
                <a href={data.deployedLink}
                   className=" text-lg text-gray-400 p-2 transition ease-in-out hover:text-amber-400 hover:scale-125"><i className="fa-solid fa-link"></i></a>
                <a href={data.githubLink}
                   className=" text-lg text-gray-400 p-2 transition ease-in-out hover:text-amber-400 hover:scale-125"><i
                    className="fab fa-github"></i></a>

            </div>
            <div className={`hidden  md:flex  ${index%2===0?"justify-end":"justify-start"}`}>
                <img src={data.imageLink} alt="img"
                     className="md:w-full object-cover group-hover:scale-105 -z-20 transition-all duaration-1000 lg:w-3/4 rounded-xl border-2 border-amber-400"/>
            </div>


        </div>
    )
}
export default ProjectsB