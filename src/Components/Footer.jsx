const Footer=()=>{
    return(
        <div className=" flex flex-col items-center justify-center text-center bg-black bg-opacity-50 backdrop-blur text-white py-9">
            <h1 className="text-gray-400 font-bold text-lg">Created by : Tanishq Sethi (2024)</h1>
            <div className="flex items-center  text-gray-400 ">
                <a href="https://github.com/iamtanishqsethi"
                   className="text-xl p-2 transition ease-in-out hover:text-amber-400 hover:scale-125"><i
                    className="fab fa-github"></i></a>
                <a href="https://x.com/TanishqSethi13"
                   className="text-xl p-2 transition ease-in-out hover:text-amber-400 hover:scale-125"><i
                    className="fab fa-x-twitter"></i></a>
                <a href="https://www.linkedin.com/in/tanishq-sethi-229914259/"
                   className="text-xl p-2 transition ease-in-out hover:text-amber-400 hover:scale-125"><i
                    className="fab fa-linkedin"></i></a>
            </div>
        </div>
    )
}
export default Footer;