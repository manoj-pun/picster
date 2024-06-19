import React from 'react'
import profile1 from "../Images/profile1.jpeg"
import profile2 from "../Images/profile2.jpeg"
import profile3 from "../Images/profile3.jpeg"
import profile4 from "../Images/profile4.jpeg"
import profile5 from "../Images/profile5.jpeg"

const Stories = () => {
  return (
    <div className= 'ml-14 mb-6 mt-6'>
      <div className='flex p-2 space-x-5 '>
        <div className="flex flex-col items-center">
          <img src={profile1} alt="" className='w-[70px] h-[70px] rounded-full object-cover mb-2 cursor-pointer'/>
          <span className="text-sm cursor-pointer">naruto</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={profile2} alt="" className='w-[70px] h-[70px] rounded-full object-cover mb-2 cursor-pointer'/>
          <span className="text-sm cursor-pointer">rocklee</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={profile3} alt="" className='w-[70px] h-[70px] rounded-full object-cover mb-2 cursor-pointer'/>
          <span className="text-sm cursor-pointer">hinata</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={profile4} alt="" className='w-[70px] h-[70px] rounded-full object-cover mb-2 cursor-pointer'/>
          <span className="text-sm cursor-pointer">sakura</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={profile5} alt="" className='w-[70px] h-[70px] rounded-full object-cover mb-2 cursor-pointer'/>
          <span className="text-sm cursor-pointer">sakura1</span>
        </div>
      </div>
    </div>

  )
}

export default Stories
