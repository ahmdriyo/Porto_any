import React from 'react'

const About = () => {
  return (
    <>
      <div className="content-about bg-[#baf1ac] pb-10 pt-20">
        <div className="border-content-about">
          <h2 className="mb-2 font-sans font-bold">About</h2>
          <p>
            Ahmad Riyo Kusuma Front End Engineer <br />
            Hi, I am Farih, a Professional Software Developer.
          </p>
          <br />
          <p>
            I commenced my professional journey in 2020 as a Web Front End
            programmer, engaging in a multitude of projects and contributing to
            the development of diverse applications. My expertise primarily
            revolves around the Front End aspect, encompassing web, and mobile
            applications.
          </p>
          <br />
          <p>
            I have a strong passion for technology and science. I enjoy coding
            and constantly seek opportunities to expand my knowledge and skills
            in building innovative solutions. It is this passion that drives my
            determination to excel and become a proficient engineer.
          </p>
        </div>
        <div className="skil-content ">
          <h2 className="mb-2 font-sans font-bold border-b-4 border-[#8ca079]">
            Skill
          </h2>
          <div className="flex flex-wrap w-96 skil-border-content">
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