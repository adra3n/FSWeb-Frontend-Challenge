import React from 'react'
import './Skills.css'
// import jslogo from '../assets/logo-js.png'
// import reactlogo from '../assets/logo-react.png'
// import reduxlogo from '../assets/logo-redux.png'
// import vscodelogo from '../assets/logo-vscode.png'
// import nodejslogo from '../assets/logo-nodejs.png'
// import figmalogo from '../assets/logo-figma.png'

const Skills = ({ english, data }) => {
  return (
    <section className="w-[970px] flex flex-row justify-between items-center">
      <h2 className="w-1/3 flex self-start font-inter font-bold text-4xl leading-16  tracking-wider text-[#4832D3] dark:text-[#CBF281]">
        {english ? 'Skills' : 'Yetenekler'}
      </h2>
      <div className="w-2/3 object-cover flex flex-row flex-wrap">
        {data.skills.map((e, i) => (
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

    // <div className="w-full flex flex-row justify-between items-center ">
    //   <h2 className="w-1/3 font-inter font-bold text-4xl leading-16 text-start flex self-start tracking-wider text-[#4832D3] dark:text-[#CBF281]">
    //     Skills
    //   </h2>

    //   <div className="flex flex-col items-start w-1/3">
    //     <div className="flex flex-row items-center justify-between pb-6">
    //       <img className="pe-2" src={jslogo} />
    //       <h4 className=" pe-5 font-mediumtext-base  leading-6 uppercase text-gray-500 dark:text-white font-inter">
    //         Java Script
    //       </h4>
    //     </div>
    //     <div className="flex flex-row items-center justify-between pb-6">
    //       <img className="pe-2" src={reactlogo} />
    //       <h4 className=" pe-5 font-mediumtext-base md:text-lg leading-6 md:leading-7 uppercase text-gray-500 dark:text-white font-inter">
    //         React
    //       </h4>
    //     </div>
    //     <div className="flex flex-row items-center justify-between pb-6">
    //       <img className="pe-2" src={reduxlogo} />
    //       <h4 className=" pe-5 font-mediumtext-base md:text-lg leading-6 md:leading-7 uppercase text-gray-500 dark:text-white font-inter">
    //         Redux
    //       </h4>
    //     </div>
    //   </div>
    //   <div className="flex flex-col items-start w-1/3">
    //     <div className="flex flex-row items-center justify-between pb-6">
    //       <img className="pe-2" src={nodejslogo} />
    //       <h4 className=" pe-5 font-mediumtext-base md:text-lg leading-6 md:leading-7 uppercase text-gray-500 dark:text-white font-inter">
    //         Node
    //       </h4>
    //     </div>
    //     <div className="flex flex-row items-center justify-between pb-6">
    //       <img className="pe-2" src={vscodelogo} />
    //       <h4 className=" pe-5 font-mediumtext-base md:text-lg leading-6 md:leading-7 uppercase text-gray-500 dark:text-white font-inter">
    //         VS Code
    //       </h4>
    //     </div>
    //     <div className="flex flex-row items-center justify-between pb-6">
    //       <img className="pe-2" src={figmalogo} />
    //       <h4 className=" pe-5 font-mediumtext-base md:text-lg leading-6 md:leading-7 uppercase text-gray-500 dark:text-white font-inter">
    //         Figma
    //       </h4>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Skills
