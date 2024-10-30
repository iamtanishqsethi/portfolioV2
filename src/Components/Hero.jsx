const Hero = () => {
    return (
        <div className="flex items-center justify-between h-screen w-screen text-white px-32">
            <div>
                <h2 className="text-3xl font-semibold">
                    Hi, I am
                </h2>
                <h1 className="text-6xl font-extrabold font-orbitron py-4 px-2
                   bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text ">Tanishq
                    Sethi
                </h1>
                <h2 className="text-3xl font-semibold">
                    I am <h3 className=" inline font-bold font-orbitron bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">Front-end Developer</h3>
                </h2>
            </div>
            <div className="flex flex-col items-center justify-center ">
                <img src="https://i.ibb.co/5c0PnYx/profile.jpg" alt="profile"
                     className="rounded-full w-80 h-80 shadow-2xl shadow-amber-500"/>
            </div>
        </div>
    )
}
export default Hero