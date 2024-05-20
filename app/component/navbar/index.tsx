"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between h-16 items-center bg-[#e1efb9] border-b border-[#95a172] px-4 md:px-8">
      <div className="flex">
        <h2 className="font-mono font-semibold">Ahmad Riyo</h2>
      </div>
      <div className="hidden md:flex gap-9">
        <Link className="nav" href={"/"}>Home</Link>
        <Link className="nav" href={"/about"}>About</Link>
        <Link className="nav" href={"/portofolio"}>Portofolio</Link>
        <Link className="nav" href={"/contact"}>Contact</Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#e1efb9] flex flex-col items-start pl-2">
          <Link className="nav py-2" href={"/"} onClick={toggleMenu}>Home</Link>
          <Link className="nav py-2" href={"/about"} onClick={toggleMenu}>About</Link>
          <Link className="nav py-2" href={"/portofolio"} onClick={toggleMenu}>Portofolio</Link>
          <Link className="nav py-2" href={"/contact"} onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
