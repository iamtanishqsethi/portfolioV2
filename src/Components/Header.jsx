import { useEffect, useState } from "react";

const Header = ({ scrollToRef }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); 
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`text-white w-full px-6 md:px-14 fixed flex items-center justify-between transition-all duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-65 backdrop-blur py-3"
          : "bg-transparent py-7"
      } z-20`}
    >
      
      <div className="ml-4">
        <a href="Loading.jsx">
          <h1
            className={`font-orbitron font-extrabold ${
              isScrolled ? "text-2xl" : "text-3xl"
            }`}
          >
            TS
            <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 text-transparent bg-clip-text">
              05
            </span>
          </h1>
        </a>
      </div>

      
      <div className="hidden md:flex mr-6">
        <ul className="flex items-center justify-center font-orbitron font-medium text-lg">
          <li
            onClick={() => scrollToSection(scrollToRef.heroRef)}
            className="mr-5 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-400"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection(scrollToRef.aboutRef)}
            className="mr-5 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-400"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection(scrollToRef.projectsRef)}
            className="mr-5 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-400"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection(scrollToRef.contactRef)}
            className="mr-5 cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-400"
          >
            Contact
          </li>
        </ul>
      </div>

      
      <div className="md:hidden mr-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-xl transition-transform duration-300 hover:text-yellow-400"
        >
          {isMobileMenuOpen ? (
            <i className="fas fa-times"></i> 
          ) : (
            <i className="fas fa-bars"></i> 
          )}
        </button>
      </div>

      
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 m-0 w-screen h-screen bg-black bg-opacity-80 backdrop-blur text-white py-4 z-10 md:hidden">
          <ul className="flex flex-col items-center justify-center h-3/4 space-y-4 font-orbitron font-medium text-lg">
            <li
              onClick={() => scrollToSection(scrollToRef.heroRef)}
              className="cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-400"
            >
              <span className={'bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 bg-clip-text text-transparent font-bold'}>01.</span> Home
            </li>
            <li
                onClick={() => scrollToSection(scrollToRef.aboutRef)}
                className="cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-400"
            >
              <span
                  className={'bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 bg-clip-text text-transparent font-bold'}>02.</span> About
            </li>
            <li
                onClick={() => scrollToSection(scrollToRef.projectsRef)}
                className="cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-400"
            >
              <span
                  className={'bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 bg-clip-text text-transparent font-bold'}>03.</span> Projects
            </li>
            <li
                onClick={() => scrollToSection(scrollToRef.contactRef)}
                className="cursor-pointer transition ease-in-out hover:scale-110 hover:text-yellow-400"
            >
              <span
                  className={'bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-600 bg-clip-text text-transparent font-bold'}>04.</span> Contact
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;