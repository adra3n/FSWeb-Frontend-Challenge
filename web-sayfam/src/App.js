import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Skills from './components/Skills'
import Header from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'

import useLanguageEnglish from './hooks/useLanguageEnglish'
import data from './data/data'
import { myContext } from './context/myContext'

import './App.css'

function App() {
  const [theme, setTheme] = useState(
    !localStorage.mode ? 'light' : localStorage.mode
  )
  const [english, setEnglish] = useLanguageEnglish(true)

  const [myData, setMyData] = useState(data)

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
    console.log(myData)
  }

  useEffect(() => {
    //dark mode local check
    if (
      localStorage.mode === 'dark' ||
      (!('mode' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    //english local check
    if (localStorage.getItem('english') === 'true') {
      setEnglish(true)
    } else {
      setEnglish(false)
    }

    //axios
    axios
      .post('https://reqres.in/api/orders', data)
      .then((res) => {
        console.log('axios post>', res.data)
        setMyData(res.data)
      })
      .catch((err) => {
        console.log('axios err>', err)
      })
  }, [])

  return (
    <myContext.Provider
      value={{ english, languageHandler, darkModeHandler, theme, myData }}
    >
      <div className="flex flex-col bg-[#F9F9F9] dark:bg-[#252128] box-border items-center w-screen">
        {/* <div className=" flex flex-col items-center bg-[linear-gradient(90deg,_#4832d3_71%,#cbf281_29%)] dark:bg-[linear-gradient(90deg,_#171043_70%,#1A210B_30%)] h-[42rem] "> */}
        <div className=" flex flex-col items-center bg-[#3730A3] dark:bg-[#171043] ">
          <section className="w-[960px]  items-center">
            <Header></Header>
          </section>

          <section className="w-[960px] ">
            <Hero></Hero>
          </section>

          <section className="flex flex-col w-screen pt-20 items-center  dark:bg-[#252128] bg-[#F9F9F9]">
            <Skills></Skills>
          </section>

          <section className="flex w-screen bg-[#3730A3] dark:bg-[#171043] flex-col justify-center items-center">
            <Profile></Profile>
          </section>

          <section className="flex w-screen bg-[#3730A3] dark:bg-[#171043] flex-col justify-center items-center">
            <Projects></Projects>
          </section>

          <section className="flex justify-center w-screen bg-[#F9F9F9] dark:bg-[#171043] min-h-max pt-[84px] pb-24">
            <Footer></Footer>
          </section>
        </div>
      </div>
    </myContext.Provider>
  )
}

export default App
