import React, { useContext } from 'react'
import { myContext } from '../context/myContext'
import { SiGithub } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'

import foto from '../assets/foto.svg'

const Hero = () => {
  const { english } = useContext(myContext)
  return (
    <section className="flex flex-col w-full justify-center items-start pt-8 pb-24">
      <div className="flex justify-start items-start">
        <h2 className="text-[#CBF281] font-bold text-2xl font-inter pb-16">
          Sertaç Kocagil
        </h2>
      </div>
      <div className=" w-full flex  items-end">
        <div className="flex flex-col gap-y-9">
          <h1 className="text-5xl text-[#CBF281]  font-bold leading-[110%] text-left">
            {english
              ? 'I am a Frontend Developer...'
              : 'Ben bir Frontend Geliştiricisiyim...'}
          </h1>
          {english ? (
            <p className="flex text-2xl text-white font-light text-left pe-10">
              ...who likes to craft solid and scalable frontend products with
              great user experiences.
            </p>
          ) : (
            <p className="flex text-2xl text-white font-light text-left pe-10">
              ...ve harika kullanıcı deneyimleriyle sağlam <br />
              ve ölçeklenebilir ürünler oluşturmayı seviyorum.
            </p>
          )}

          <div className="flex gap-x-3">
            <a
              href="https://github.com/adra3n"
              target="_blank"
              className="py-3 px-3 flex items-center gap-x-[10px] bg-white text-[#3730A3] dark:bg-[#252128] dark:text-[#FFFFFF] rounded-md cursor-pointer hover:text-[#0a0558]"
            >
              <SiGithub size={30} className="w-[2rem]" />
              <p className="text-lg font-medium">GitHub</p>
            </a>
            <a
              href="https://www.linkedin.com/in/serta%C3%A7-kocagil-904290272/"
              target="_blank"
              className="py-3 px-3 flex items-center gap-x-[10px] bg-white text-[#3730A3] dark:bg-[#252128] dark:text-[#FFFFFF] rounded-md cursor-pointer hover:text-[#0a0558]"
            >
              {/* <img
                className="w-[2rem]"
                src={require('../assets/logo-li.png')}
              /> */}
              <FaLinkedinIn size={30} className="w-[2rem]" />
              <p className="text-lg font-medium">LinkedIn</p>
            </a>
          </div>
        </div>
        <div className="p-0 min-w-fit object-cover relative">
          <img src={foto} className=" object-cover shadow-md rounded-3xl " />
        </div>
      </div>
    </section>
  )
}

export default Hero
