import Image from "next/image";
import Link from "next/link";
import Navbar from "./component/navbar";
import vercel from "../public/vercel.svg";

export default function Home() {
  return (
    <div className="flex-1">
      <Navbar />
      <div className="bg-[#d0f0c8] h-80 flex flex-row justify-around pt-32">
        <div>
          <div className="flex w-20 h-10 bg-[#c7efbd] justify-center items-center rounded-md border-2 border-[#6db15c] font-sans font-semibold">
            🖐Hallo
          </div>
          <h2 className="font-sans font-bold">I'm Ahmad Riyo, A</h2>
          <h2 className="font-sans font-bold">Frontend Developer & Mobile Developer</h2>
        </div>
        <div>
          <Image alt="vercel" src={vercel} />
        </div>
      </div>
      <div className="bg-[#baf1ac] h-auto pb-10 flex flex-row justify-around pt-20">
        <div className=" w-1/2"> 
          <h2 className="mb-2 font-sans font-bold">About</h2>
          <p>Ahmad Riyo Kusuma Front End Engineer <br />Hi, I am Farih, a Professional Software Developer.</p>
          <br />
          <p>I commenced my professional journey in 2020 as a Web Front End programmer, engaging in a multitude of projects and contributing to the development of diverse applications. My expertise primarily revolves around the Front End aspect, encompassing web, and mobile applications.</p>
          <br />
          <p>I have a strong passion for technology and science. I enjoy coding and constantly seek opportunities to expand my knowledge and skills in building innovative solutions. It is this passion that drives my determination to excel and become a proficient engineer.</p>
        </div>
        <div className="justify-start items-start w-96">
          <h2 className="mb-2 font-sans font-bold">Skill</h2>
          <div className="flex flex-wrap w-96">
            <p className="skil-border border-[#3e6534]">#Node JS</p>
            <p className="skil-border border-[#6bec4b]">#React Native</p>
            <p className="skil-border border-[#7faaef]">#React JS</p>
            <p className="skil-border border-[#78b06a]">#MongoDB</p>
            <p className="skil-border border-[#e63737]">#RES API</p>
            <p className="skil-border border-[#f78ccb]">#MYSQL</p>
            <p className="skil-border border-[#882c9a]">#MERN</p>
          </div>
        </div>
      </div>
      <div className="bg-[#c1f3b4] h-80 flex flex-row justify-around pt-32">
        <h2>Portofolio</h2>
      </div>
      <div className="bg-[#9ad88b] h-80 flex flex-row justify-around pt-32">
        <h2>Contact</h2>
      </div>
    </div>
  );
}