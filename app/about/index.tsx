import React from 'react'

const About = () => {
  return (
    <>
      <div className="content-about bg-[#baf1ac] pb-10 pt-20">
        <div className="border-content-about">
          <h2 className="mb-2 font-sans font-bold">About</h2>
          <p>
            Ahmad Riyo Kusuma Front End Engineer <br />
            Hi, I am Ahmad Riyo, a Professional Software Developer.
          </p>
          <br />
          <p>
          My professional journey started in 2021 as a Front End Web programmer.
          Since then, I have participated in various projects and contributed to
          the development of various applications. My main expertise lies
          in Front End development, both for web and mobile applications.
          </p>
          <br />
          <p>
          I am very enthusiastic about the world of technology and science. 
          Coding is my passion, and I am always looking for opportunities 
          to improve my knowledge and skills in creating innovative solutions. 
          This passion is what drives me to continue to develop and become a reliable engineer.
          </p>
        </div>
        <div className="skil-content ">
          <h2 className="mb-2 font-sans font-bold border-b-4 border-[#8ca079]">
            Skill
          </h2>
          
          <div className="flex flex-wrap w-96 skil-border-content">
            <p className="skil-border border-[#3b3730]">#Java Script</p>
            <p className="skil-border border-[#aa77e8]">#Tailwind</p>
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
    </>
  )
}

export default About;