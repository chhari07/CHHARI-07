import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 w-full bg-white/80 shadow-md backdrop-blur-lg md:top-6 md:mx-auto md:max-w-screen-md md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
          
            <span className="sr-only">Website Title</span>
          </Link>

          {/* Desktop Navigation */}
     {/* Desktop Navigation */}

      <nav className="hidden md:flex md:items-center md:justify-center flex-grow md:gap-5">
                  <Link to="/home" className="nav-link">
                  Home
              </Link>
            
                  <Link to="/about" className="nav-link">
                  About Us
              </Link>
              <Link to="/Contactus" className="nav-link">
                  Contact us 
              </Link>
             <Link to="/strength" className="nav-link">
                Strength
             </Link>
            <Link to="/projects" className="nav-link">
             Projects
            </Link>
           </nav>

          


          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`absolute left-0 top-full w-full bg-white shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
      >
        <nav className="flex flex-col gap-3 p-4">
        <Link to="/home" className="nav-link" onClick={() => setIsOpen(false)}>
            HOME
          </Link>
          <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/strength" className="nav-link" onClick={() => setIsOpen(false)}>
            Strength
          </Link>
          <Link to="/Contactus" className="nav-link" onClick={() => setIsOpen(false)}>
           Contact us
          </Link>
          <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
