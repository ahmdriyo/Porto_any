"use client";
import Image from 'next/image'
import {useState} from 'react';
import mobileApp2 from "../../public/img/mobileApp2.svg";
import mobileApp1 from "../../public/img/mobileApp1.svg";
import mobileApp3 from "../../public/img/mobileApp3.svg";
import Card from './card';
const Portofolio = () => {
  const [selectedItem, setSelectedItem] = useState('Mobile App');

  
  const handleButtonClick = (itemName: string) => {
    setSelectedItem(itemName);
  };
  return (
  <div className=" bg-[#c6f7ba] pb-20 justify-center items-center  pt-10 gap-2">
    <div className="flex flex-row menu-port">
      <h2 className="flex justify-center items-center border-ports">Portofolio</h2>
      <div className='menus-port flex-1 flex-row'>
        <button className={`flex justify-center items-center border-port ${selectedItem === 'Mobile App' ? 'active' : ''}`} onClick={() => handleButtonClick('Mobile App')}>Mobile App</button>
        <button className={`flex justify-center items-center border-port ${selectedItem === 'Web App' ? 'active' : ''}`} onClick={() => handleButtonClick('Web App')}> Web App</button>
        <button className={`flex justify-center items-center border-port ${selectedItem === 'Desain App' ? 'active' : ''}`} onClick={() => handleButtonClick('Desain App')}>Desain App</button>
      </div>
    </div>
    <div className="grid-portofolio" id="content">
      {selectedItem === "Mobile App" && (
      <>
      <Card
        title="Health Fit Aplikasi Kesehatan(2024)"
        image={mobileApp1}
        tags={['#typscipt', '#react', '#node-js', '#res-api', '#tailwind']}
        backgroundColor="#8ea1f7"
      />
      <Card
        title="Aplikasi Kuis Pisikologi(2024)"
        image={mobileApp2}
        tags={['#typscipt', '#react native', '#data-json','#expo']}
        backgroundColor="#81eb75"
      />
      <Card
        title="Kalori Fit Aplikasi penghitung asupan makan versi 2(2023)"
        image={mobileApp3}
        tags={['#javascript', '#react native', '#data-json', '#rexpo', '#axios','#crud']}
        backgroundColor="#FD76AF"
      />
      </>
      )}
      {selectedItem === "Web App" && (
      <>
      <Card
        title="Health Fit Aplikasi Kesehatan(2022)"
        image={mobileApp2}
        tags={['#typscipt', '#react', '#node-js', '#res-api', '#tailwind']}
        backgroundColor="#81eb75"
      />
      <Card
        title="Health Fit Aplikasi Kesehatan(2022)"
        image={mobileApp1}
        tags={['#typscipt', '#react', '#node-js', '#res-api', '#tailwind']}
        backgroundColor="#8ea1f7"
      />
      <Card
        title="Health Fit Aplikasi Kesehatan(2022)"
        image={mobileApp3}
        tags={['#typscipt', '#react', '#node-js', '#res-api', '#tailwind']}
        backgroundColor="#FD76AF"
      />
      </>
      )}
      {selectedItem === "Desain App" && (
      <>
      <Card
        title="Health Fit Aplikasi Kesehatan(2022)"
        image={mobileApp2}
        tags={['#typscipt', '#react', '#node-js', '#res-api', '#tailwind']}
        backgroundColor="#81eb75"
      />
      <Card
        title="Health Fit Aplikasi Kesehatan(2022)"
        image={mobileApp3}
        tags={['#typscipt', '#react', '#node-js', '#res-api', '#tailwind']}
        backgroundColor="#FD76AF"
      />
      <Card
        title="Health Fit Aplikasi Kesehatan(2022)"
        image={mobileApp2}
        tags={['#typscipt', '#react', '#node-js', '#res-api', '#tailwind']}
        backgroundColor="#81eb75"
      />      
      </>
      )}
    </div>
  </div>
  )
}

export default Portofolio