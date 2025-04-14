import {useState} from "react";
import ExistingProject from "./ExistingProject";
import {useSelector} from "react-redux";
import useHandleNewProject from "../../utils/useHandleNewProject";

const Projects=()=>{

    const [isNew,setIsNew]=useState(false)
    const [titleValue,setTitleValue]=useState('')
    const [descriptionValue,setDescriptionValue]=useState('')
    const [githubLinkValue,setGithubLinkValue]=useState('')
    const [deployedLinkValue,setDeployedLinkValue]=useState('')
    const [tagValue,setTagValue]=useState('')
    const [imageUrl, setImageUrl] = useState('');

    const handleImageChange = (e) => {
        setImageUrl(e.target.value);
    };
    const addNewProject=useHandleNewProject()
    const projects=useSelector(store=>store.projects.data);

    const handleAddNew=async ()=>{
        const newData={
            title:titleValue,
            description:descriptionValue,
            githubLink:githubLinkValue,
            deployedLink:deployedLinkValue,
            tags:tagValue,
            imageLink:imageUrl,
        }
        // console.log(newData)
        await addNewProject(newData);
        setTitleValue('')
        setDescriptionValue('')
        setGithubLinkValue('')
        setDeployedLinkValue('')
        setTagValue([])
        setImageUrl('')
        setIsNew(false)
    }


    return (
        <div
            className={'min-h-screen w-full text-white  flex flex-col items-center justify-center'}>
            <div className={'bg-gradient-to-br from-zinc-950/30 via-zinc-900/30 to-zinc-800/30 backdrop-blur-xl rounded-xl min-h-[90%] w-[90%] border border-gray-700 p-8 flex flex-col '}>
                <div
                    className={'flex items-center justify-between mb-8'}>

                    <h1 className={'text-4xl font-bold '}>
                        Projects...
                    </h1>
                    {!isNew ?<button
                            className={'bg-blue-700 rounded py-2.5 px-5 font-bold '}
                            onClick={() => setIsNew(true)}
                        >New</button> :
                        <button
                            className={'bg-zinc-800 rounded py-2.5 px-5 font-bold '}
                            onClick={handleAddNew}
                        >Add + </button>}

                </div>
                <div
                    className={'w-full h-1 bg-gray-700 rounded my-6'}
                ></div>
                {isNew &&
                    <div className="flex flex-col md:flex-row gap-6">

                        <div className="w-full md:w-1/3 flex flex-col items-center justify-start">
                            <div className="w-full aspect-square bg-gray-700/20 rounded flex items-center justify-center overflow-hidden">
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        alt="Project preview"
                                        className="w-full h-3/4 object-cover object-center"

                                    />
                                ) : (
                                    <span className="text-gray-400">Image Preview</span>
                                )}
                            </div>
                            <div className="w-full mt-4">
                                <label className="text-lg mb-2 block">Image Link</label>
                                <input
                                    type="text"
                                    className="rounded p-3 bg-gray-700/20 focus:outline-none w-full"
                                    placeholder="Image Link"
                                    value={imageUrl}
                                    onChange={handleImageChange}

                                />
                            </div>
                        </div>


                        <div className="w-full md:w-2/3 flex flex-col">
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

                            <div className="flex flex-col w-full mb-4">
                                <label className="text-lg mb-2">Tags</label>
                                <input
                                    type="text"
                                    className="rounded p-3 bg-gray-700/20 focus:outline-none w-full"
                                    placeholder='Tech stack separated by ","'
                                    value={tagValue}
                                    onChange={(e) => setTagValue(e.target.value.split(','))}
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
                                <div className="w-full">
                                    <label className="text-lg mb-2 block">Deployed URL</label>
                                    <input
                                        type="text"
                                        className="rounded p-3 bg-gray-700/20 focus:outline-none w-full"
                                        placeholder="Deployed"
                                        onChange={(e) => setDeployedLinkValue(e.target.value)}
                                        value={deployedLinkValue}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                }
                <div className={'flex flex-col items-center justify-center space-y-6 my-5'}>
                    {
                        projects.length>0 ?
                            projects.map((project)=>(
                                <ExistingProject key={project?._id} data={project} />
                            )):<h1>No Projects Found</h1>
                    }
                </div>

            </div>
        </div>
    )
}
export default Projects