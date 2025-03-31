import {useState} from "react";
import ExistingMiniProjects from "./ExistingMiniProjects";

const MiniProjects=()=>{

    const [isNew,setIsNew]=useState(false)
    return (
        <div
            className={'min-h-screen w-full text-white  flex flex-col items-center justify-center'}
        >
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
                            onClick={() => setIsNew(false)}
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
                        <div
                            className={'w-full h-1 bg-gray-700 rounded my-6'}
                        ></div>

                    </div>

                }

                <div className={'flex flex-col items-center justify-center space-y-6 my-5'}>
                    <ExistingMiniProjects/>
                    <div
                        className={'w-full h-1 bg-gray-700 rounded my-6'}
                    ></div>
                    <ExistingMiniProjects/>
                </div>
            </div>

        </div>
    )
}
export default MiniProjects;