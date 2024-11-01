const About=()=>{
    return <div className="text-white px-32 mb-12">
        <div className="my-4 bg-black bg-opacity-70 grid grid-cols-12  p-8">
            <div className="col-span-5 p-6 relative group">

                <div className="absolute top-3 left-3 w-80 h-4/5 border-4 border-amber-500  bg-amber-500 rounded-xl transition-transform ease-in-out group-hover:-translate-x-2 group-hover:-translate-y-2 "></div>
                <img src="https://i.ibb.co/0C10yfv/img.png" alt="img"
                     className="relative w-80  rounded-xl transition-transform ease-in-out group-hover:translate-x-2 group-hover:translate-y-2   "/>
            </div>

            <div className="col-span-6 m-2">
               <h1 className="text-4xl font-orbitron font-bold text-right bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">About Me...</h1>
                <p className="text-right p-2">
                    Hi, I'm Tanishq Sethi, an 18-year-old web developer currently pursuing a B.Tech degree at Maharaja
                    Agrasen Institute of Technology, New Delhi.
                    <br></br>
                    <br></br>
                    I am in my second year of studies and actively enhancing my skills in data structures and algorithms
                    using <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text font-bold">Java</span>.
                    I have a strong foundation in <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text font-bold">HTML</span>, <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text font-bold">CSS</span>, and I am currently
                    learning <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text font-bold">React JS</span>.
                    Additionally, I am proficient in other programming languages such
                    as <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text font-bold">C</span>, <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text font-bold">Python</span>, and <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text font-bold">JavaScript</span>.
                    <br></br>
                    <br></br>
                    Feel free to connect with me for any collaboration or opportunities.</p>
            </div>
        </div>
    </div>;
}
export default About