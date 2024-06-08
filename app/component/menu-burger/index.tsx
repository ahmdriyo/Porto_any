"use client"

import { github } from '@/public';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, ReactNode, CSSProperties } from 'react';

export const HamburgerMenuPage = () => {
  const [open, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
    <div className="hidden md:flex justify-between h-16 items-center bg-[#e1efb9] border-b border-[#95a172] px-4 md:px-8">
      <div className="flex">
        <h2 className="font-mono font-semibold">Ahmad Riyo</h2>
      </div>
      <div className="hidden md:flex gap-9">
        <Link className="nav" href={"/"}>Home</Link>
        <Link className="nav" href={"/about"}>About</Link>
        <Link className="nav" href={"/portofolio"}>Portofolio</Link>
        <Link className="nav" href={"/contact"}>Contact</Link>
      </div>
    </div>
    <HamburgerMenu className='md:hidden bg-[#e1efb9] border-b border-[#95a172] pb-3' bgColor="" textColor="text-white">
      <HamburgerMenuBrand href="/">
        <p className='font-mono font-semibold text-black pl-4' style={{marginTop:6}}>Ahmad Riyo</p>
      </HamburgerMenuBrand>
      <HamburgerMenuToggler toggle={toggle} />
      <HamburgerMenuCollapse open={open}>
        <HamburgerMenuNav>
          <HamburgerMenuItem>
            <HamburgerMenuLink href="/">Home</HamburgerMenuLink>
          </HamburgerMenuItem>
          <HamburgerMenuItem>
            <HamburgerMenuLink href="/about">About</HamburgerMenuLink>
          </HamburgerMenuItem>
          <HamburgerMenuItem>
            <HamburgerMenuLink href="/portofolio">Portofolio</HamburgerMenuLink>
          </HamburgerMenuItem>
          <HamburgerMenuItem>
            <HamburgerMenuLink href="/contact">Contact</HamburgerMenuLink>
          </HamburgerMenuItem>
        </HamburgerMenuNav>
      </HamburgerMenuCollapse>
    </HamburgerMenu>
    </>
  );
};

const style = {
  nav: `block pl-0 mb-0`,
  navbar: ` shadow py-2 px-4`,
  collapse: `transition-height ease duration-300`,
  toggler: `float-right pt-2 text-3xl focus:outline-none text-black`,
  link: `font-mono font-semibold text-black block cursor-pointer py-1.5 px-4  hover:text-gray-400 font-medium`,
  brand: `inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer nowrap hover:text-gray-400`,
};

interface HamburgerMenuProps {
  children: ReactNode;
  bgColor: string;
  textColor: string;
  className:string
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ children,textColor,className }) => {
  return (
    <nav className={` ${textColor} ${style.navbar} ${className}`}>
      {children}
    </nav>
  );
};

interface HamburgerMenuBrandProps {
  children: ReactNode;
  href: string;
}

const HamburgerMenuBrand: React.FC<HamburgerMenuBrandProps> = ({ children, href }) => {
  return (
    <a href={href} className={style.brand}>
      <strong>{children}</strong>
    </a>
  );
};
interface HamburgerMenuTogglerProps {
  toggle: () => void; 
}

const HamburgerMenuToggler: React.FC<HamburgerMenuTogglerProps> = ({ toggle }) => {
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      className={style.toggler}
      onClick={toggle}
    >
      &#x2261;
    </button>
  );
};


interface HamburgerMenuCollapseProps {
  children: ReactNode; 
  open: boolean; 
}

const HamburgerMenuCollapse: React.FC<HamburgerMenuCollapseProps> = ({ children, open }) => {
  const ref = useRef<HTMLDivElement>(null);

  const inlineStyle: CSSProperties = open
    ? { height: ref.current?.scrollHeight }
    : { height: 0, visibility: 'hidden', opacity: 0 };

  return (
    <div className={style.collapse} style={inlineStyle} ref={ref}>
      {children}
    </div>
  );
};

interface HamburgerMenuNavProps {
  children: ReactNode;
}

const HamburgerMenuNav: React.FC<HamburgerMenuNavProps> = ({ children }) => {
  return <ul className={style.nav}>{children}</ul>;
};

interface HamburgerMenuItemProps {
  children: ReactNode;
}

const HamburgerMenuItem: React.FC<HamburgerMenuItemProps> = ({ children }) => {
  return <li>{children}</li>;
};

interface HamburgerMenuLinkProps {
  children: ReactNode;
  href: string;
}

const HamburgerMenuLink: React.FC<HamburgerMenuLinkProps> = ({ children, href }) => {
  return (
    <a href={href} className={style.link}>
      {children}
    </a>
  );
};