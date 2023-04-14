import React, { useContext } from 'react'
import { myContext } from '../context/myContext'

const Header = () => {
  const { english, languageHandler, darkModeHandler, theme } =
    useContext(myContext)
  return (
    <div className="items-center justify-end text-xs flex flex-row pt-[2rem]">
      <div className="flex justify-end flex-row ps-3 pe-6 ">
        <p
          onClick={languageHandler}
          className=" font-inter font-bold text-base leading-5 tracking-wider  text-white "
        >
          {english && (
            <span className="dark:text-[#777777]">
              <span className="font-inter font-bold text-base leading-5 tracking-wider  text-[#CBF281] dark:text-[#BAB2E7]">
                TÜRKÇE
              </span>
              'YE GEÇ
            </span>
          )}
          {!english && (
            <span className="dark:text-[#777777]">
              {'SET TO '}
              <span className="font-inter font-bold text-base leading-5 tracking-wider  text-[#CBF281] dark:text-[#BAB2E7]">
                ENGLISH
              </span>
            </span>
          )}
        </p>
      </div>
      <div className="dark-mode flex items-center ps-5">
        <input
          defaultChecked={theme === 'dark' ? true : false}
          type="checkbox"
          id="dark-mode__switch"
          onClick={darkModeHandler}
        />
        <label htmlFor="dark-mode__switch"> </label>
        <p className="font-inter font-bold text-base leading-4 tracking-wider pl-1 min-w-min text-[#4731D3] dark:text-[#D9D9D9]">
          {!english ? 'DARK MODE' : 'GECE MODU'}
        </p>
      </div>
    </div>
  )
}

export default Header
