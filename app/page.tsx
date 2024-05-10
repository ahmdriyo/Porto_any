import Image from "next/image";
import Link from "next/link";
import Navbar from "./component/navbar";
import vercel from "../public/vercel.svg";
import About from "./about";
import mobileApp1 from '../public/img/mobileApp1.svg';
import mobileApp2 from '../public/img/mobileApp2.svg';
import mobileApp3 from '../public/img/mobileApp3.svg';
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
          <h2 className="font-sans font-bold">
            Frontend Developer & Mobile Developer
          </h2>
        </div>
        <div>
          <Image alt="vercel" src={vercel} />
        </div>
      </div>
      <About/>
      <div className="content-port bg-[#c1f3b4] pb-20 justify-start pt-10 gap-2">
        <div className="menu-port flex flex-row">
          <h2 className="flex justify-center items-center border-ports">Portofolio</h2>
          <button className="flex justify-center items-center border-port">Mobile App</button>
          <button className="flex justify-center items-center border-port">Web App</button>
          <button className="flex justify-center items-center border-port">Desain App</button>
        </div>
        <div className=" flex flex-row justify-evenly">
          <div className="flex flex-col justify-center items-center card">
            <div className="card-top bg-[#81eb75]">
              <Image alt="mobileApp1" src={mobileApp2}/>
            </div>
            <div className="card-bottom flex flex-col">
              <div className="mt-2 mb-1">
                <h1 className="font-sans font-bold">Health Fit Aplikasi Kesehatan(2022) </h1>
              </div>
              <div className="card-item-bottom flex flex-wrap gap-2">
                <p className="border-item-card">#typscipt</p>
                <p className="border-item-card">#react native</p>
                <p className="border-item-card">#node-js</p>
                <p className="border-item-card">#res-api</p>
                <p className="border-item-card">#tailwind</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center card">
            <div className="card-top bg-[#8ea1f7]">
              <Image alt="mobileApp1" src={mobileApp1}/>
            </div>
            <div className="card-bottom flex flex-col">
              <div className="mt-2 mb-1">
                <h1 className="font-sans font-bold">Health Fit Aplikasi Kesehatan(2022) </h1>
              </div>
              <div className="card-item-bottom flex flex-wrap gap-2">
                <p className="border-item-card">#typscipt</p>
                <p className="border-item-card">#react native</p>
                <p className="border-item-card">#node-js</p>
                <p className="border-item-card">#res-api</p>
                <p className="border-item-card">#tailwind</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center card">
            <div className="card-top bg-[#FD76AF]">
              <Image alt="mobileApp1" src={mobileApp3}/>
            </div>
            <div className="card-bottom flex flex-col">
              <div className="mt-2 mb-1">
                <h1 className="font-sans font-bold">Health Fit Aplikasi Kesehatan(2022) </h1>
              </div>
              <div className="card-item-bottom flex flex-wrap gap-2">
                <p className="border-item-card">#typscipt</p>
                <p className="border-item-card">#react native</p>
                <p className="border-item-card">#node-js</p>
                <p className="border-item-card">#res-api</p>
                <p className="border-item-card">#tailwind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#9ad88b] h-80 flex flex-row justify-around pt-32">
        <h2>Contact</h2>
      </div>
    </div>
  );
}
