import Image from "next/image";
import Navbar from "./component/navbar";
import vercel from "../public/vercel.svg";
import About from "./about";
import Button from "./component/button";
import Portofolio from "./portofolio";
import Contacts from "./contact";
import Footer from "./component/footer";
export default function Home() {
  return (
    <div className="flex-1">
      <Navbar />
      <div className="bg-[#d0f0c8] h-80 pt-32 home-container">
        <div className="home-content">
          <div className="flex w-20 h-10 bg-[#c7efbd] justify-center items-center rounded-md border-2 border-[#6db15c] font-sans font-semibold">
            🖐Hallo
          </div>
          <h2 className="font-sans font-bold">I`m Ahmad Riyo, A</h2>
          <h2 className="font-sans font-bold">
            Frontend Developer & Mobile Developer
          </h2>
        </div>
        <div className="img-content">
          <Image alt="vercel" src={vercel} />
        </div>
      </div>
      <About/>
      <Portofolio/>
      <Button/>
      <Contacts/>
      <Footer/>
    </div>
  );
}
