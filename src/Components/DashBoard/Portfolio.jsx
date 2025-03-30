import {useState} from "react";

const Portfolio=()=>{
    const [isEdit, setIsEdit] = useState(false);

    return (
        <div
            className={'min-h-screen w-full text-white  pt-20 flex flex-col items-center justify-center'}>

            <div className={'bg-gradient-to-br from-zinc-950/30 via-zinc-900/30 to-zinc-800/30 backdrop-blur-xl rounded-xl min-h-[90%] w-[90%] border border-gray-700 p-8 flex flex-col '}>
                <div
                    className={'flex items-center justify-between mb-8'}>

                    <h1 className={'text-4xl font-bold '}>
                        Portfolio
                    </h1>
                    {!isEdit ?<button
                        className={'bg-blue-700 rounded py-2.5 px-5 font-bold '}
                        onClick={() => setIsEdit(true)}
                    >Edit</button> :
                        <button
                            className={'bg-zinc-800 rounded py-2.5 px-5 font-bold '}
                            onClick={() => setIsEdit(false)}
                        >Update</button>}

                </div>

                <input type="text" className={'rounded p-3 bg-gray-700/20 mx-2 my-4 w-full focus:outline-none'} placeholder={'Name'}/>
                <div className={'flex items-center  w-full'}>
                    <label className={'text-xl mx-4'}>
                        Image
                    </label>
                    <input type="text" className={'rounded p-3 bg-gray-700/20 mx-2 my-4  focus:outline-none w-full'} placeholder={'Image Link'}/>
                </div>
                <h2
                    className={'text-xl mx-4'}
                >Bio</h2>
                <div className={'flex items-center justify-center'}>
                    <input type="text" className={'rounded p-3 bg-gray-700/20 mx-2 my-4 w-full focus:outline-none'} placeholder={'Value 1'}/>
                    <input type="text" className={'rounded p-3 bg-gray-700/20 mx-2 my-4 w-full focus:outline-none'} placeholder={'Value 2'}/>
                    <input type="text" className={'rounded p-3 bg-gray-700/20 mx-2 my-4 w-full focus:outline-none'} placeholder={'Value 3'}/>
                </div>
                <h2
                    className={'text-xl mx-4'}
                >Socials
                </h2>
                <div className={'flex items-center justify-center'}>
                    <input type="text" className={'rounded p-3 bg-gray-700/20 mx-2 my-4 w-full focus:outline-none'} placeholder={'Github'}/>
                    <input type="text" className={'rounded p-3 bg-gray-700/20 mx-2 my-4 w-full focus:outline-none'} placeholder={'LinkedIn'}/>
                    <input type="text" className={'rounded p-3 bg-gray-700/20 mx-2 my-4 w-full focus:outline-none'} placeholder={'Twitter'}/>
                </div>
                <div className={'flex items-center w-full'}>
                    <label className={'text-xl mx-4'}>
                        Resume
                    </label>
                    <input type="text" className={'rounded p-3 bg-gray-700/20 mx-2 my-4  focus:outline-none w-full'} placeholder={'Resume Link'}/>
                </div>

                <div
                    className={'w-full h-1 bg-gray-700 rounded my-6'}
                ></div>
                <h1 className={'text-4xl font-bold '}>
                    About
                </h1>
                <textarea
                    className={'rounded p-3 bg-gray-700/20 mx-2 my-4  focus:outline-none w-full h-40'}
                    placeholder={'About Description'}>
                ></textarea>
                <div className={'flex items-center  w-full'}>
                    <label className={'text-xl mx-4'}>
                        Image
                    </label>
                    <input type="text" className={'rounded p-3 bg-gray-700/20 mx-2 my-4  focus:outline-none w-full'} placeholder={'Image Link'}/>
                </div>
                <div className={'flex items-center  w-full'}>
                    <label className={'text-xl mx-4'}>
                        Tech
                    </label>
                    <input type="text" className={'rounded p-3 bg-gray-700/20 mx-2 my-4  focus:outline-none w-full'} placeholder={'Tech stack seperated by "," '}/>
                </div>


            </div>

        </div>
    )
}
export default Portfolio