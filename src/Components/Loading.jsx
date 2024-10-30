const Loading=()=>{
    return(
        <div className="flex flex-col items-center justify-center ">
            <div className="my-64 flex flex-col items-center justify-center ">
                <h1 className="text-7xl text-white font-orbitron font-extrabold">TS<span
                    className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">05</span>
                </h1>
                <div className=" animate-bounce my-6 flex items-center justify-center">
                    <div className="  m-2 h-4  w-4 rounded-full bg-gradient-to-r from-gray-100 to-yellow-400"></div>
                    <div className="  m-2 h-4 w-4 rounded-full bg-gradient-to-r from-gray-100 to-yellow-400"></div>
                    <div className="  m-2  h-4 w-4 rounded-full bg-gradient-to-r from-gray-100 to-yellow-400"></div>
                </div>

            </div>

        </div>
    )
}
export default Loading;
