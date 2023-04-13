import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    // <div className="w-2/3 justify-center items-center pt-8">
    //   <div className="header__title">
    //     <h2 className="header-title__h2">Sertaç Kocagil</h2>
    //   </div>

    //   <div className="flex flex-row items-center">
    //     <div className="hero-content___left">
    //       <h1>I am a Frontend Developer... </h1>
    //       <p>
    //         ...who likes to craft solid and scalable frontend products with
    //         great user experiences.
    //       </p>
    //       <div></div>
    //     </div>
    //     <div className="hero-content__right"></div>
    //   </div>
    // </div>
    <div className="px-5 gap-y-2 pt-[18%] w-full flex flex-col items-center lg:pt-0 lg:px-0 lg:flex-row lg:items-end lg:w-[960px] lg:mx-auto">
      <div className="flex flex-col gap-y-9">
        <h1 className="text-[54px] text-[#CBF281] font-bold text-center leading-[110%] lg:text-left">
          I am a Frontend Developer...
        </h1>

        <p className="text-[24px] text-white font-light text-center lg:text-left">
          ...who likes to craft solid and scalable frontend <br /> products with
          great user experiences.
        </p>
        <div className="flex gap-x-3 mx-auto lg:mx-0">
          <a
            href="https://github.com/adra3n"
            target="_blank"
            className="py-3 px-3 flex items-center gap-x-[10px] bg-white text-[#3730A3] rounded-md cursor-pointer hover:text-[#0a0558]"
          >
            <img src="../assets/logo-github.png" />
            <p className="text-[18px] font-medium">GitHub</p>
          </a>
          <a
            href="https://www.linkedin.com/in/serta%C3%A7-kocagil-904290272/"
            target="_blank"
            className="py-3 px-3 flex items-center gap-x-[10px] bg-white text-[#3730A3] rounded-md cursor-pointer hover:text-[#0a0558]"
          >
            <img src="../assets/logo-github.png" />
            <p className="text-[18px] font-medium">LinkedIn</p>
          </a>
        </div>
      </div>
      <div className="hero-content__right"></div>
    </div>
  )
}

export default Hero
