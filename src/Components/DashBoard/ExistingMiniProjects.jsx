import {useState} from "react";
import useUpdateSingleMiniProject from "../../utils/useUpdateSingleMiniProject";
import useDeleteMiniProject from "../../utils/useDeleteMiniProject";

const ExistingMiniProjects=({data})=>{

    const updateMiniProject=useUpdateSingleMiniProject();
    const deleteMiniProject=useDeleteMiniProject();

    const [nameValue,setNameValue]=useState(data?.name);
    const [descriptionValue,setDescriptionValue]=useState(data?.description);
    const [githubValue,setGithubValue]=useState(data?.githubLink);
    const [isEditable, setIsEditable] = useState(false);

    const handleUpdate=async ()=>{
        try{
            const updatedMiniProject={
                name:nameValue,
                description:descriptionValue,
                githubLink:githubValue,
            }
            console.log(updatedMiniProject);
            await updateMiniProject(updatedMiniProject,data._id)
            setIsEditable(false)
        }catch (e) {
            console.log(e)
        }
    }
    const handleDelete=async ()=>{
        await deleteMiniProject(data._id)
    }

    return (
        <div className="flex flex-col w-full bg-zinc-800/35 rounded border border-gray-800 p-4">
            <div className="flex flex-col w-full mb-4">
                <label className="text-lg mb-2">Title</label>
                <input
                    type="text"
                    className="rounded p-3 bg-gray-700/20 focus:outline-none w-full"
                    placeholder="Title"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}

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
                        value={githubValue}
                        onChange={(e) => setGithubValue(e.target.value)}
                    />
                </div>

            </div>
            <div className="flex justify-end gap-4 mt-6">
                {!isEditable?<button
                        onClick={() => setIsEditable(true)}
                        className="px-6 py-2 bg-zinc-700 hover:bg-zinc-800 rounded text-white">
                        Edit
                    </button>:
                    <button
                        onClick={handleUpdate}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
                        Update
                    </button>
                }
                <button
                    onClick={handleDelete}
                    className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white">
                    Delete
                </button>
            </div>

        </div>
    )
}
export default ExistingMiniProjects;