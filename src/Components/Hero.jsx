import {useEffect, useState} from "react";

const Hero = () => {

    const proffArr=["2nd Year B.Tech Student", "Front-End Developer", "Tech Enthusiast"]
    const [currentWord, setCurrentWord] = useState("")
    useEffect(() => {
        let arrIndex=0;
        let charIndex=0
        const writeText=()=>{
            const current=proffArr[arrIndex];
            const word=current.slice(0,charIndex)
            setCurrentWord(word)
            charIndex++;
            if(charIndex>current.length){
                charIndex=0;
                arrIndex=(arrIndex+1)%proffArr.length
                setTimeout(writeText,250)

            }
            else{
                setTimeout(writeText,150)
            }
        }
        writeText()
        return () => clearTimeout();

    }, []);
    return (
        <div className="flex items-center justify-between h-screen w-screen text-white px-32 pt-20">
            <div>
                <h2 className="text-3xl font-semibold">
                    Hi, I am
                </h2>
                <h1 className="text-6xl font-extrabold font-orbitron py-4 px-2
                   bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text ">Tanishq
                    Sethi
                </h1>
                <h2 className="text-3xl font-semibold">
                    I am a <h3
                    className=" inline font-bold font-orbitron bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">
                    {currentWord}</h3>
                </h2>
                <button className="px-5 py-3 m-3 text-amber-400 rounded-full border-2 border-amber-400 transition ease-in-out hover:-translate-x-1 hover:-translate-y-1 hover:bg-amber-500 hover:text-white hover:border-amber-300 hover:border-b-8 hover:border-t-0 hover:border-l-0 hover:border-r-8">Get in Touch</button>
                <div className="flex items-center  text-gray-400 ">
                    <a href="https://github.com/iamtanishqsethi" className="text-2xl p-2 transition ease-in-out hover:text-amber-400 hover:scale-125"><i
                        className="fab fa-github"></i></a>
                    <a href="https://x.com/TanishqSethi13" className="text-2xl p-2 transition ease-in-out hover:text-amber-400 hover:scale-125"><i
                        className="fab fa-x-twitter"></i></a>
                    <a href="https://www.linkedin.com/in/tanishq-sethi-229914259/" className="text-2xl p-2 transition ease-in-out hover:text-amber-400 hover:scale-125"><i
                        className="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center ">
                <img src="https://i.ibb.co/5c0PnYx/profile.jpg" alt="profile"
                     className="rounded-full w-80 h-80 shadow-2xl shadow-amber-500"/>
            </div>
        </div>
    )
}
export default Hero