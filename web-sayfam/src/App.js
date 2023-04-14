import React, { useEffect, useState } from 'react'

import useLanguageEnglish from './hooks/useLanguageEnglish'

import Skills from './components/Skills'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
// import foto from './assets/foto.svg'
import Profile from './components/Profile'
import { Footer } from './components/Footer'
import data from './data/data'
import Projects from './components/Projects'

function App() {
  const [theme, setTheme] = useState(localStorage.mode)
  const [english, setEnglish] = useLanguageEnglish(true)
  const [myData, setMyData] = useState(data)

  useEffect(() => {
    if (
      localStorage.mode === 'dark' ||
      (!('mode' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const darkModeHandler = () => {
    setTheme((initialtheme) => (initialtheme === 'dark' ? 'light' : 'dark'))
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
    <div className="flex flex-col bg-[#F9F9F9] dark:bg-[#252128] box-border items-center w-screen">
      <div className=" flex flex-col items-center bg-[linear-gradient(90deg,_#4832d3_70%,#cbf281_30%)] dark:bg-[linear-gradient(90deg,_#171043_70%,#1A210B_30%)] h-[40rem] ">
        {/* <Header english={english} darkMode={darkMode}></Header> */}
        <section className="w-[960px] min-w-[800px] items-center">
          <Header
            english={english}
            languageHandler={languageHandler}
            darkModeHandler={darkModeHandler}
            theme={theme}
          ></Header>
        </section>
        <section className="max-w-[960px] min-w-[800px]">
          <Hero english={english}></Hero>
        </section>
        <section className="w-screen pt-20 items-center flex flex-col dark:bg-[#252128] bg-[#F9F9F9]">
          <Skills english={english} data={myData}></Skills>
        </section>

        <section className="flex w-screen bg-[#3730A3] dark:bg-[#171043] flex-col justify-center items-center">
          <Profile english={english}></Profile>
        </section>
        <section className="flex w-screen bg-[#3730A3] dark:bg-[#171043] flex-col justify-center items-center">
          <Projects english={english} data={myData}></Projects>
        </section>

        <section className="flex w-full bg-[#F9F9F9] dark:bg-[#171043] min-h-max pt-[84px] pb-24">
          <Footer english={english}></Footer>
        </section>
      </div>
    </div>
  )
}

export default App
