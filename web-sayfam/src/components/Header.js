import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="text-xs flex flex-row items-center justify-end pt-[2rem]">
      <div className="flex justify-end flex-row ps-[3vw] pe-[3vw]">
        <a
          href="/"
          className=" font-inter font-bold text-base leading-5 tracking-wider  text-white "
        >
          <span className="font-inter font-bold text-base leading-5 tracking-wider  text-lime-300">
            TÜRKÇE
          </span>
          'YE GEÇ
        </a>
      </div>

      <div className="flex flex-row ps-5 pe-9">
        <label
          htmlFor="toggleDark"
          className="flex cursor-pointer select-none items-center"
        >
          <div className="relative">
            <input type="checkbox" id="toggleDark" className="sr-only" />
            <div className="box bg-[#4731D3] block h-7 w-14 rounded-full"></div>
            <div className="dot absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white transition"></div>
          </div>
          <p className="font-inter font-bold text-lg leading-4 tracking-wider pl-1 min-w-min text-purple-700">
            DARK MODE
          </p>
        </label>
      </div>
    </div>
  )
}

export default Header
