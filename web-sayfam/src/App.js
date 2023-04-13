import React, { useEffect } from 'react'
import useTheme from './hooks/useDarkMode'
import useLanguageEnglish from './hooks/useLanguageEnglish'

import Skills from './components/Skills'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import foto from './assets/foto.svg'
import Profile from './components/Profile'
import { Footer } from './components/Footer'

function App() {
  const [theme, setTheme] = useTheme('light')
  const [english, setEnglish] = useLanguageEnglish(true)

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const darkModeHandler = () => {
    setTheme((initialtheme) => (initialtheme === 'light' ? 'dark' : 'light'))
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('mode', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('mode', 'dark')
    }
  }
  const languageHandler = () => {
    setEnglish(!english)
  }

  return (
    <div className="flex flex-col bg-white box-border w-screen">
      <div className=" flex flex-col items-center bg-[linear-gradient(90deg,_#4832d3_67rem,#cbf281_33rem)] dark:bg-[linear-gradient(90deg,_#171043_67rem,#1A210B_33rem)] h-[40rem] ">
        <div className="w-2/3 max-w-[960px] min-w-[660px]">
          {/* <Header english={english} darkMode={darkMode}></Header> */}
          <div className="text-xs flex flex-row items-center justify-end pt-[2rem] relative">
            <div className="flex justify-end flex-row ps-5 pe-4 ">
              <p
                onClick={() => {
                  languageHandler()
                }}
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
            <input
              type="checkbox"
              id="dark-mode__switch"
              onClick={darkModeHandler}
            />
            <label htmlFor="dark-mode__switch"> </label>
            <p className="font-inter font-bold text-base leading-4 tracking-wider pl-1 min-w-min text-[#4731D3] dark:text-[#D9D9D9]">
              {!english ? 'DARK MODE' : 'GECE MODU'}
            </p>
          </div>
          {/* <Hero english={english} darkMode={darkMode}></Hero> */}
          <div className="flex flex-col w-full justify-center items-start pt-8">
            <div className="flex justify-start items-start">
              <h2 className="text-[#CBF281] font-bold text-2xl font-inter pb-28">
                Sertaç Kocagil
              </h2>
            </div>{' '}
            <div className=" w-full flex  items-center pb-5">
              <div className="max-w-[600px] min-w-[500px] flex flex-col gap-y-9">
                <h1 className="text-5xl text-[#CBF281]  font-bold leading-[110%] text-left">
                  {!english
                    ? 'I am a Frontend Developer...'
                    : 'Ben bir Frontend Geliştiricisiyim...'}
                </h1>
                {!english ? (
                  <p className="flex text-2xl text-white font-light text-left">
                    ...who likes to craft solid and scalable frontend products
                    with great user experiences.
                  </p>
                ) : (
                  <p className="flex text-2xl text-white font-light text-left">
                    ...ve harika kullanıcı deneyimleriyle sağlam <br />
                    ve ölçeklenebilir ürünler oluşturmayı seviyorum.
                  </p>
                )}

                <div className="flex gap-x-3">
                  <a
                    href="https://github.com/adra3n"
                    target="_blank"
                    className="py-3 px-3 flex items-center gap-x-[10px] bg-white text-[#3730A3] rounded-md cursor-pointer hover:text-[#0a0558]"
                  >
                    <img
                      className="w-[2rem]"
                      src={require('./assets/logo-github.png')}
                    />
                    <p className="text-lg font-medium">GitHub</p>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/serta%C3%A7-kocagil-904290272/"
                    target="_blank"
                    className="py-3 px-3 flex items-center gap-x-[10px] bg-white text-[#3730A3] rounded-md cursor-pointer hover:text-[#0a0558]"
                  >
                    <img
                      className="w-[2rem]"
                      src={require('./assets/logo-li.png')}
                    />
                    <p className="text-lg font-medium">LinkedIn</p>
                  </a>
                </div>
              </div>
              <div className="pe-5 min-w-fit">
                <img src={foto} className="shadow-md rounded-3xl" />
              </div>
            </div>
            {/* hero sonu */}
          </div>
          <div className="w-full pt-20  flex flex-col self-center justify-center items-center">
            <Skills english={english}></Skills>
          </div>
        </div>
        <div className="flex w-screen bg-[#3730A3] dark:bg-[#171043] flex-col justify-center items-center">
          <Profile english={english}></Profile>
        </div>
        <div className="w-full bg-[#F9F9F9] lg:relative lg:min-h-max lg:pt-[84px] lg:pb-24">
          <Footer english={english}></Footer>
        </div>
      </div>
    </div>
  )
}

export default App
