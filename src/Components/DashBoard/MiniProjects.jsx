import {useState} from "react";
import ExistingMiniProjects from "./ExistingMiniProjects";
import {useSelector} from "react-redux";
import useHandleNewMiniProject from "../../utils/useHandleNewMiniProject";

const MiniProjects=()=>{

    const [titleValue,setTitleValue]=useState("");
    const [descriptionValue,setDescriptionValue]=useState("");
    const [githubLinkValue,setGithubLinkValue]=useState('')

    const [isNew,setIsNew]=useState(false)
    const miniProjects=useSelector(store=>store.miniProjects.data)
    const addNewMiniProject=useHandleNewMiniProject()

    const handleNewProject=async ()=>{
        const newData={
            name:titleValue,
            description:descriptionValue,
            githubLink:githubLinkValue,
        }
        await addNewMiniProject(newData);
        setIsNew(false)
        setTitleValue("")
        setDescriptionValue("")
        setGithubLinkValue("")
    }

    return (
        <div
            className={'min-h-screen w-full text-white  flex flex-col items-center justify-center'}
        >
            <div className={'bg-gradient-to-br from-zinc-950/30 via-zinc-900/30 to-zinc-800/30 backdrop-blur-xl rounded-xl min-h-[90%] w-[90%] border border-gray-700 p-8 flex flex-col '}>
                <div
                    className={'flex items-center justify-between mb-8'}>

                    <h1 className={'text-4xl font-bold '}>
                        Mini Projects...
                    </h1>
                    {!isNew ?<button
                            className={'bg-blue-700 rounded py-2.5 px-5 font-bold '}
                            onClick={() => setIsNew(true)}
                        >New</button> :
                        <button
                            className={'bg-zinc-800 rounded py-2.5 px-5 font-bold '}
                            onClick={handleNewProject}
                        >Add + </button>}

                </div>
                <div
                    className={'w-full h-1 bg-gray-700 rounded my-6'}
                ></div>
                {isNew &&
                    <div className="flex flex-col ">
                        <div className="flex flex-col w-full mb-4">
                            <label className="text-lg mb-2">Title</label>
                            <input
                                type="text"
                                className="rounded p-3 bg-gray-700/20 focus:outline-none w-full"
                                placeholder="Title"
                                value={titleValue}
                                onChange={(e) => setTitleValue(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col w-full mb-4">
                            <label className="text-lg mb-2">Description</label>
                            <textarea
                                className="rounded p-3 bg-gray-700/20 focus:outline-none w-full h-28"
                                placeholder="Description"
                                value={descriptionValue}
                                onChange={(e) => setDescriptionValue(e.target.value)}
                            />
                        </div>



                        <div className="flex flex-col sm:flex-row w-full gap-4 mb-4">
                            <div className="w-full">
                                <label className="text-lg mb-2 block">Github</label>
                                <input
                                    type="text"
                                    className="rounded p-3 bg-gray-700/20 focus:outline-none w-full"
                                    placeholder="Github"
                                    value={githubLinkValue}
                                    onChange={(e) => setGithubLinkValue(e.target.value)}
                                />
                            </div>

                        </div>
                        <div
                            className={'w-full h-1 bg-gray-700 rounded my-6'}
                        ></div>

                    </div>

                }

                <div className={'flex flex-col items-center justify-center space-y-6 my-5'}>

                    {
                        miniProjects.length>0?
                            miniProjects.map((project)=>(
                                <ExistingMiniProjects key={project?._id} data={project} />
                            )):<h1>No Projects Found</h1>
                    }

                </div>
            </div>

        </div>
    )
}
export default MiniProjects;