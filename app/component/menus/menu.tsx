// components/Menu.tsx
"use client"
import { useState } from 'react';
import MenuButton from './menuButton';
import Image from 'next/image';
import mobileApp2 from "../../../public/img/mobileApp2.svg";
import mobileApp1 from "../../../public/img/mobileApp1.svg";
import mobileApp3 from "../../../public/img/mobileApp3.svg";
const Menu = () => {
  const [selectedItem, setSelectedItem] = useState('Mobile App');

  
  const handleButtonClick = (itemName: string) => {
    setSelectedItem(itemName);
  };
  return (
    <div className="menu-port flex flex-row">
      <button className="flex justify-center items-center border-port" onClick={() => handleButtonClick('Mobile App')}>
        Mobile App
      </button>
      <button className="flex justify-center items-center border-port" onClick={() => handleButtonClick('Web App')}>
        Web App
      </button>
      <button className="flex justify-center items-center border-port" onClick={() => handleButtonClick('Desain App')}>
        Desain App
      </button>
      <div className=" flex flex-row justify-evenly" id="content">
        {selectedItem === 'Mobile App' && (
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
        )}
        {selectedItem === 'Web App' && (
          <div className="flex flex-col justify-center items-center card">
          <div className="card-top bg-[#FD76AF]">
            <Image alt="mobileApp1" src={mobileApp3}/>
          </div>
          <div className="card-bottom flex flex-col">
            <div className="mt-2 mb-2">
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
        )}
      </div>
      </div>
  );
};

export default Menu;
