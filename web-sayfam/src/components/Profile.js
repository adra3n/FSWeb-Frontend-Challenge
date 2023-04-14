import React from 'react'
import profilePhoto from '../assets/profile-1.png'

const Profile = ({ english }) => {
  return (
    <div className=" flex flex-col w-[960px] py-12 px-0">
      <h2 className="text-5xl text-[#CBF281] font-bold pb-7">
        {!english ? 'Profil' : 'Profile'}
      </h2>
      <div className="flex justify-between flex-row">
        <div className="flex flex-col justify-between">
          <h3 className="text-3xl text-white font-normal w-[300px] text-left">
            {!english ? 'Temel Bilgiler' : 'Basic Information'}
          </h3>
          <div className="h-60 flex flex-col justify-between text-base leading-[1.5]">
            <div className="flex justify-between">
              <p className="w-1/3 font-semibold text-[#CBF281] ">
                {!english ? 'Doğum Tarihi' : 'Basic Information'}
              </p>
              <p className="w-48 text-white">
                {!english ? '10.05.1986' : '05.10.1986'}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/3 font-semibold text-[#CBF281] ">
                {!english ? 'İkamet Şehri' : 'City of Residence'}
              </p>
              <p className="w-48 text-white">İstanbul</p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/3 font-semibold text-[#CBF281]">
                {!english ? 'Eğitim Durumu' : 'Education Info'}
              </p>
              <p className="w-48 text-white">
                {!english
                  ? 'Ege Universitesi - Astronomi ve Uzay Bilimleri'
                  : 'Ege University - Astronomy and Space Sciences'}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="w-1/3 font-semibold text-[#CBF281] ">
                {!english ? 'Tercih Ettiği Rol' : 'Preferred Role'}
              </p>
              <p className="w-48 text-white">Frontend, UI</p>
            </div>
          </div>
        </div>
        <div>
          <img className="w-[300px]" src={profilePhoto}></img>
        </div>

        <div className="flex flex-col gap-y-6  w-[300px]">
          <h3 className="text-3xl text-white font-normal w-[300px]">
            {english ? 'About Me' : 'Hakkımda'}
          </h3>
          <div className="h-60 flex flex-col justify-between text-white text-lg leading-[1.5] text-left">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p>
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile
