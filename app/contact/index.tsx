import { call, discord, email, fb, github, instagram, linkedin, location } from "@/public";
import Image from "next/image";
import React from "react";
const Contacts = () => {
  return (
    <>
      <div className="content-contact bg-[#baf1ac] pb-10 pt-20 ">
        <h2 className="font-sans font-bold ml-24 text-contact">Contact me</h2>
        <div className="container-contact ">
          <div className="direction-contact">
            <div className="mb-4 contact-links">
              <div className="flex flex-row mt-5">
                <Image alt="call" src={call} />
                <h2 className="ml-2">+6282154940857</h2>
              </div>
              <div className="flex flex-row mt-5">
                <Image alt="email" src={email} />
                <h2 className="ml-2">ahmadriyo.tbn@gmail.com</h2>
              </div>
            </div>
            <div className="contact-link ">
              <div className="flex flex-row mt-5">
                <a className="flex flex-row"href="https://github.com/ahmdriyo"  target="_blank"rel="noopener noreferrer">     
                  <Image alt="github" src={github} />
                  <h2 className="ml-2">https://github.com/ahmdriyo</h2>
                </a>
              </div>
              <div className="flex flex-row mt-5 ">
                <a  className="flex flex-row"  href="https://www.linkedin.com/in/ahmad-riyo-kusuma-9a31b0267/" target="_blank"  rel="noopener noreferrer">
                  <Image alt="linkkedlin" src={linkedin} />
                  <h2 className="ml-1 w-auto">
                    https://www.linkedin.com/in/ahmad-riyo-kusuma-9a31b0267/
                  </h2>
                </a>
              </div>
            </div>
            <div className="contact-title">
              <a href="https://www.instagram.com/ahmd_riyo" target="_blank" rel="noopener noreferrer">
                <Image className="img-icon-contact mb-1" alt="instagram" src={instagram}/> 
              </a>
              <a href="https://web.facebook.com/people/Ahmad-Riyo/pfbid02zPRaZAxpWwVdCYsyDwPqXgcffavTMHUJpFwvL1zBfabyWcVsT6wtcPyvyz5m3Tmpl/" target="_blank" rel="noopener noreferrer">
                <Image className="img-icon-contact mb-2" alt="fb" src={fb}/> 
              </a>
              <a href="https://discord.com/channels/@ahmd_riyo" target="_blank" rel="noopener noreferrer">
                <Image className="img-icon-contact" alt="discord" src={discord}/> 
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row contact-location">
            <Image alt="location" src={location} />
            <h2 className="ml-2">
              Komplek keruing indah,Jl. Gelatik Blok A18, NO 35,
              <br /> Handil Bakti, Kec. Alalak, Kabupaten Barito Kuala,
              Kalimantan Selatan
            </h2>
          </div>
      </div>
    </>
  );
};

export default Contacts;
