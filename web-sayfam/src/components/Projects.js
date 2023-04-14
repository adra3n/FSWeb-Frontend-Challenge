import React, { useContext } from 'react'
import data from '../data/data'
import { myContext } from '../context/myContext'

const Projects = () => {
  const { english, myData } = useContext(myContext)
  const projects = myData.projects.map((e, idx) => {
    const skills = e.skills.map((skill, index) => (
      <span
        key={index}
        className="text-lg rounded-3xl px-5 flex justify-center bg-[#4731D3] dark:bg-[#8173DA] text-white py-2 "
      >
        {skill}
      </span>
    ))
    return (
      <div
        key={idx}
        className="bg-white dark:bg-[#252128] flex  gap-x-4 flex-row rounded-xl shadow-2xl"
      >
        <img
          src={e.image}
          alt="project image"
          className=" rounded-l-xl object-cover w-[360px] "
        />
        <div className=" px-8 gap-6 flex flex-col py-[56.5px]">
          <h4 className="text-[32px] text-[#4338CA] dark:text-[#BAB2E7] font-bold">
            {e.name}
          </h4>
          <p className="text-[16px] text-[#383838] dark:text-white leading-tight">
            {english ? e.text.en : e.text.tr}
          </p>
          <div className="flex flex-wrap gap-[6px] ">{skills}</div>
          <div className="flex gap-x-9">
            <a
              href={e.website}
              target="_blank"
              className="text-[16px] text-[#120B39] dark:text-[#CBF281] font-medium underline hover:text-[#17086e] hover:ease-in-out hover:font-bold"
            >
              {english ? 'View Site' : 'Siteye git'}
            </a>
            <a
              href={e.git}
              target="_blank"
              className="text-[16px] text-[#120B39] dark:text-[#CBF281] font-medium underline hover:text-[#17086e] hover:ease-in-out hover:font-bold"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    )
  })

  return (
    <section
      id="projects"
      className="w-full bg-[#CBF281]  min-h-max  pt-24 pb-24 dark:bg-[#1A210B]"
    >
      <div className=" px-5  flex flex-col gap-y-7 p-0 w-[960px] lg:mx-auto">
        <h2 className="text-[48px] text-[#4731D3] dark:text-[#CBF281]  font-bold">
          {' '}
          {english ? 'Projects' : 'Projeler'}
        </h2>
        <div className="flex flex-col gap-y-9">{projects}</div>
      </div>
    </section>
  )
}

export default Projects
