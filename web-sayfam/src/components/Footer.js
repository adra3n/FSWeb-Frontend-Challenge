import React, { useContext } from 'react'
import { myContext } from '../context/myContext'

import { CgInstagram } from 'react-icons/cg'
import { FiTwitter } from 'react-icons/fi'
import { DiCodepen } from 'react-icons/di'
import { MdAlternateEmail } from 'react-icons/md'

const Footer = () => {
  const { english } = useContext(myContext)
  return (
    <div className="px-5 pt-16 pb-16 flex flex-col items-center text-center gap-y-6 lg:p-0 lg:mx-auto">
      <h4 className="text-[48px] text-[#4731D3] dark:text-[#8F88FF] font-bold">
        {english ? 'Send me a message!' : 'Bana mesaj gönder!'}
      </h4>
      <p className="text-[24px] text-[#120B39] dark:text-white leading-normal">
        {english
          ? 'Got a question or proposal, or just want to say hello? Go ahead.'
          : 'Bir sorunuz ya da teklifiniz mi var? Lütfen bana yazın.'}
      </p>
      <div className="flex flex-col gap-y-4">
        <a
          href="mailto:sertackocagil@gmail.com"
          className="text-xl text-[#4731D3] dark:text-[#8F88FF] hover:text-[#8F88FF] dark:hover:text-lime-400 font-medium underline cursor-pointer "
        >
          sertackocagil@gmail.com
        </a>
      </div>
      <div className="flex gap-x-6 text-[#4731D3] dark:text-[#8F88FF] ">
        <a href="https://twitter.com/" target="_blank">
          <FiTwitter
            className="cursor-pointer dark:hover:text-lime-400 hover:text-[#8F88FF]"
            size={35}
          />
        </a>

        <a href="https://codepen.io/adra3n" target="_blank">
          <DiCodepen
            className="cursor-pointer dark:hover:text-lime-400 hover:text-[#8F88FF]"
            size={35}
          />
        </a>
        <a href="mailto:sertackocagil@gmail.com">
          <MdAlternateEmail
            className="cursor-pointer dark:hover:text-lime-400 hover:text-[#8F88FF]"
            size={35}
          />
        </a>

        <a href="https://instagram.com/" target="_blank">
          <CgInstagram
            className="cursor-pointer dark:hover:text-lime-400 hover:text-[#8F88FF]"
            size={35}
          />
        </a>
      </div>
    </div>
  )
}

export default Footer
