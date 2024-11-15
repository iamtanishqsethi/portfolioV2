import {useEffect, useState} from "react";

const Hero = () => {

    const proffArr=["2nd Year B.Tech Student", "Front-End Developer", "Tech Enthusiast"]
    const [currentWord, setCurrentWord] = useState("")
    const [isVisible, setIsVisible] = useState(false);
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
        setIsVisible(true)
        return () => clearTimeout();

    }, []);
    return (
        <div className={`transition-opacity duration-500 ${isVisible?'opacity-100 fade-in':'opacity-0'} flex flex-col md:flex-row items-center justify-between h-screen w-screen text-white px-24 md:px-32 pt-20`}>
            <div className="text-center md:text-left">
                <h2 className=" text-xl md:text-3xl font-semibold">
                    Hi, I am
                </h2>
                <h1 className=" text-4xl md:text-6xl font-extrabold font-orbitron py-4 px-2
                   bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text ">Tanishq
                    Sethi
                </h1>
                <h2 className="text-xl md:text-3xl font-semibold">
                    I am a <h3
                    className=" inline font-bold font-orbitron bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">
                    {currentWord}</h3>
                </h2>
                <a href="https://docs.google.com/document/d/10M3aMD443VUMO3qyScs54o6BDZ3Kp5y4/edit?usp=sharing&ouid=104947448407113642183&rtpof=true&sd=true">
                <button className="px-2 md:px-5 py-1 text-sm md:py-3 m-3 text-amber-400 rounded-full border-2 border-amber-400 transition ease-in-out hover:-translate-x-1 hover:-translate-y-1 ">
                    Download Resume
                </button></a>
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
                     className="rounded-full  md:w-80  md:h-80 shadow-2xl shadow-amber-500"/>
            </div>
        </div>
    )
}
export default Hero