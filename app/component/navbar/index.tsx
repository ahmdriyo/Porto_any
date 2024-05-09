import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-around h-16 items-center bg-[#e1efb9] border-b border-[#95a172]" >
      <div className="flex">
        <h2 className="font-mono font-semibold">Ahmad Riyo</h2>
      </div>
      <div className="flex gap-9">
        <Link className="nav" href={"/"}>Home</Link>
        <Link className="nav" href={"/about"}>About</Link>
        <Link className="nav" href={"/portofolio"}>Portofolio</Link>
        <Link className="nav" href={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
