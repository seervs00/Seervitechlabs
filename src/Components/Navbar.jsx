import React, { useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {

  const navLinks = [
    { name: 'Software Development Services',
      children:[
        { name: 'Product Development Services', path: '/software/productdevelopment' },
        { name: 'Web Development Services', path: '/software/webdevelopment' },
        { name: 'Webside Designing Services', path: '/software/webdesign' },
        { name: 'Hire a Development Team', path: '/software/developerteam' },

      ]
     },
    { 
      name: 'Studio Solutions', 
      
      children: [
        { name: 'Sports Presentation', path: '/sports/presentation' },
        { name: 'Education Experience', path: '/sports/education ' },
        { name: 'Healthcare Visualization', path: '/sports/healthcare' },
      ] 
    },
    { name: 'Hosting Services',
      children: [
        { name: "Web Hosting Services", path: "/web/hosting" },
        { name: "Domain Registration", path: "/domain/registration" },
  
      ]
     },
];
const [openIndex, setOpenIndex] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };


const location =useLocation()

const [isScrolled, setIsScrolled] =useState(false)
const [isMenuOpen, setIsMenuOpen] =useState(false);

useEffect(() => {
  const handleScroll = () => {
    const activepath = ['/', '/sports/presentation']
    setIsScrolled(window.scrollY > 10 || !activepath.includes(location.pathname));
  };

  handleScroll(); 

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [location.pathname]);

return (

        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

            {/* Logo */}
            <Link to="/" className="flex items-center ">
                <img src={assets.logo} alt="logo" className={`h-9 `} />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
         <div key={i} className="relative group " >
          <div
          
        className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}
           >
       {link.name}
       <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
        </div>

        {link.children && (
    <div className="absolute top-full left-0 z-50">
      <div className="pt-2 group-hover:block hidden">
        <div className="bg-white text-gray-800 shadow-md rounded-md min-w-max transition-opacity duration-200" 
        >
          {link.children.map((child, j) => (
            <Link
            
              key={j}
              to={child.path}
              className="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap"
              
            >
              {child.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )}
  </div>
)
)}
             <div className="relative group "> 
             <Link
          to='/#contact'
        className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}
           >
             Contact Us
       <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
        </Link>
             </div>
             <div className="relative group "> 
             <Link
          to='/about'
        className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}
           >
             About Us
       <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
        </Link>
             </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-8 cursor-pointer text-white text-3xl ${isScrolled ? "invert" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-screen bg-gray-300 text-base flex flex-col md:hidden items-center justify-start pt-16 gap-4 font-medium text-gray-800 transition-transform duration-500 z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Navigation Links */}
        {navLinks.map((link, i) => (
          <div key={i} className="w-full flex flex-col items-center relative">
            <div
              onClick={() => toggleSubmenu(i)}
              className="flex items-center justify-between w-full px-6 py-2 cursor-pointer"
            >
              <span>{link.name}</span>
              {link.children && (
                <span>
                  {openIndex === i ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </span>
              )}
            </div>

            {/* Submenu */}
            {link.children && (
              <div
                className={`flex flex-col w-full items-center overflow-hidden transition-all duration-300 border border-gray-100  ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                {link.children.map((child, j) => (
                  <Link
                    key={j}
                    to={child.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-sm text-gray-600 py-1 hover:bg-gray-200 w-full px-6"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Extra static links */}
        <Link
          to="/#contact"
          onClick={() => setIsMenuOpen(false)}
          className="py-2 px-6 w-full border-b-3 border-gray-100  hover:bg-gray-200 "
        >
          Contact Us
        </Link>
        <Link
          to="/about"
          
          onClick={() => setIsMenuOpen(false)}
          className="py-2 px-6 w-full border-b-3 border-gray-100  hover:bg-gray-200"
        >
          About Us
        </Link>
      </div>
        </nav>
   
);

};

export default Navbar;
