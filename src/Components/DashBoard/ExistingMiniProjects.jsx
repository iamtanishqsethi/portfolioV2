import {useState} from "react";

const ExistingMiniProjects=()=>{

    const [isEditable, setIsEditable] = useState(false);
    return (
        <div className="flex flex-col w-full bg-zinc-800/35 rounded border border-gray-800 p-4">
            <div className="flex flex-col w-full mb-4">
                <label className="text-lg mb-2">Title</label>
                <input
                    type="text"
                    className="rounded p-3 bg-gray-700/20 focus:outline-none w-full"
                    placeholder="Title"
                />
            </div>

            <div className="flex flex-col w-full mb-4">
                <label className="text-lg mb-2">Description</label>
                <textarea
                    className="rounded p-3 bg-gray-700/20 focus:outline-none w-full h-28"
                    placeholder="Description"
                />
            </div>



            <div className="flex flex-col sm:flex-row w-full gap-4 mb-4">
                <div className="w-full">
                    <label className="text-lg mb-2 block">Github</label>
                    <input
                        type="text"
                        className="rounded p-3 bg-gray-700/20 focus:outline-none w-full"
                        placeholder="Github"
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
                        onClick={() => setIsEditable(false)}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
                        Update
                    </button>
                }
                <button className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded text-white">
                    Delete
                </button>
            </div>

        </div>
    )
}
export default ExistingMiniProjects;