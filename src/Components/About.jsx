const About=()=>{
    return <div className="text-white px-32">
        <div className="my-4 bg-black bg-opacity-70 grid grid-cols-12  p-8">
            <div className="col-span-5 p-6 relative group">

                <div className="absolute top-3 left-3 w-80 h-4/5 border-4 border-amber-500  bg-amber-500 rounded-xl transition-transform ease-in-out group-hover:-translate-x-2 group-hover:-translate-y-2 "></div>
                <img src="https://i.ibb.co/0C10yfv/img.png" alt="img"
                     className="relative w-80  rounded-xl transition-transform ease-in-out group-hover:translate-x-2 group-hover:translate-y-2   "/>
            </div>

            <div className="col-span-6 m-2">
               <h1 className="text-4xl font-orbitron font-bold text-right bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">About Me...</h1>
            </div>
        </div>
    </div>;
}
export default About