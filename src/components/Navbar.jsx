import { useState, useScroll } from "react";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

  return (
    <nav className="bg-transparent backdrop-blur fixed mb-5 pb-5 top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <span>
            <img src="/images/logo.png" alt="Nobi Logo" className="h-20 object-contain"/> 
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-blue pointer">
          <li><a href="#home">Home</a></li>
          <li><a href="#business">Business</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer"  onClick={() => toggleMenu()}>
           <svg xmlns="http://www.w3.org/2000/svg" 
           viewBox="0 0 640 640"
           width={24}
           height={24}
            fill={menuOpen ? "blue" : "black"}
           >
           <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>
           </svg>

           {
            menuOpen && 
            <div className="flex flex-col items-center justify-center absolute top-10 w-full right-0 bg-white shadow-lg p-4 rounded-md gap-4">
                <a href="#home">Home</a>
                <a href="#business">Business</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
           }
        </div>
      </div>
    </nav>
  );
}
