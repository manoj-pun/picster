import React from 'react'
import profile from "../Images/images.jpeg"
import profile1 from "../Images/profile1.jpeg"
import profile2 from "../Images/profile2.jpeg"
import profile3 from "../Images/profile3.jpeg"
import profile4 from "../Images/profile4.jpeg"
import profile5 from "../Images/profile5.jpeg"
const RightSidebar = () => {
  return (
    <div className=' p-4 mr-20 mt-9'>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <img src={profile} alt="" className="w-10 h-10 rounded-full object-cover cursor-pointer" />
          <div>
            <h1 className=" font-semibold cursor-pointer">manojpun</h1>
            <p className="text-sm text-gray-500">878</p>
          </div>
        </div>
        <span className=" cursor-pointer text-blue-600 font-semibold">Switch</span>
      </div>
      <div className='flex items-center justify-between mb-3'>
        <h1 className='text-gray-500 font-semibold'>Suggested for you</h1>
        <span className="text-sm font-semibold cursor-pointer">See All</span>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-4">
          <img src={profile1} alt="" className="w-10 h-10 rounded-full object-cover cursor-pointer" />
          <div>
            <h1 className=" font-semibold cursor-pointer">naruto</h1>
            <p className="text-sm text-gray-500">Suggested for you</p>
          </div>
        </div>
        <span className=" cursor-pointer text-blue-600">Follow</span>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-4">
          <img src={profile2} alt="" className="w-10 h-10 rounded-full object-cover cursor-pointer" />
          <div>
            <h1 className=" font-semibold cursor-pointer">rocklee</h1>
            <p className="text-sm text-gray-500">Suggested for you</p>
          </div>
        </div>
        <span className=" cursor-pointer text-blue-600">Follow</span>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-4">
          <img src={profile3} alt="" className="w-10 h-10 rounded-full object-cover cursor-pointer" />
          <div>
            <h1 className=" font-semibold cursor-pointer">hinata</h1>
            <p className="text-sm text-gray-500 ">Suggested for you</p>
          </div>
        </div>
        <span className=" cursor-pointer text-blue-600">Follow</span>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-4">
          <img src={profile4} alt="" className="w-10 h-10 rounded-full object-cover cursor-pointer" />
          <div>
            <h1 className=" font-semibold cursor-pointer">sakura</h1>
            <p className="text-sm text-gray-500">Suggested for you</p>
          </div>
        </div>
        <span className=" cursor-pointer text-blue-600">Follow</span>
      </div>

      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-4">
          <img src={profile5} alt="" className="w-10 h-10 rounded-full object-cover cursor-pointer" />
          <div>
            <h1 className=" font-semibold cursor-pointer">sakura1</h1>
            <p className="text-sm text-gray-500">Suggested for you</p>
          </div>
        </div>
        <span className=" cursor-pointer text-blue-600">Follow</span>
      </div>

    </div>
  )
}

export default RightSidebar
