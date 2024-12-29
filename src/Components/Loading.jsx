import {useEffect, useState} from "react";

const Loading=()=>{
    const [isLoading,setIsLoading]=useState(false)
    useEffect(() => {
        setIsLoading(true)
    }, []);
    return(
        <div className={`${isLoading?"opacity-100 fade-in translate-y-0": "opacity-0 translate-y-10"} transition-all duration1000 flex flex-col items-center justify-center  `}>
            <div className="my-64 flex flex-col items-center justify-center ">
                <h1 className="text-5xl md:text-7xl text-white font-orbitron font-extrabold">TS<span
                    className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">05</span>
                </h1>
                <div className=" animate-bounce my-6 flex items-center justify-center">
                    <div className="  m-2 h-4  w-4 rounded-full bg-gradient-to-r from-yellow-300 to-amber-500"></div>
                    <div className="  m-2 h-4 w-4 rounded-full bg-gradient-to-r from-yellow-300 to-amber-500"></div>
                    <div className="  m-2  h-4 w-4 rounded-full bg-gradient-to-r from-yellow-300 to-amber-500"></div>
                </div>

            </div>

        </div>
    )
}
export default Loading;
