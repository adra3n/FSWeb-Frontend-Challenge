import React, { useContext } from 'react'
import { myContext } from '../context/myContext'

const Skills = () => {
  const { english, myData } = useContext(myContext)
  return (
    <section className="w-[970px] flex flex-row justify-between items-center pb-16">
      <h2 className="w-1/3 flex self-start font-inter font-bold text-4xl leading-16  tracking-wider text-[#4832D3] dark:text-[#CBF281]">
        {english ? 'Skills' : 'Yetenekler'}
      </h2>
      <div className="w-2/3 object-cover flex flex-row flex-wrap">
        {myData.skills.map((e, i) => (
          <div
            className="flex flex-row items-center justify-start pb-6 w-1/2 mx-auto"
            key={i}
          >
            <img className="pe-2" src={e.logo} />
            <h4 className=" pe-5 font-medium text-start text-base md:text-lg leading-6 md:leading-7 uppercase text-gray-500 dark:text-white font-inter">
              {e.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
