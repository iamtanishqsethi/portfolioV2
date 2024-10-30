const Header = () => {
    return(
        <div className="text-white w-full bg-transparent bg-opacity-50 py-7 px-14 fixed flex items-center justify-between">
            <div className="ml-8">
                <h1 className="font-orbitron font-extrabold text-3xl">TS<span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">05</span></h1>
            </div>
            <div className="mr-12">
                <ul className='flex items-center justify-center font-orbitron font-medium text-lg'>
                    <li className="mr-3.5 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-400">Home</li>
                    <li className="mr-3.5 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-400">About</li>
                    <li className="mr-3.5 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-400">Projects</li>
                    <li className="mr-3.5 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-400">Contact</li>
                </ul>
            </div>
        </div>
    )
}
export default Header