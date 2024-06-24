import React from 'react'
import LeftSidebar from './LeftSidebar'
import images from "../Images/images.jpeg"
import profile1 from "../Images/profile1.jpeg"
import profile2 from "../Images/profile2.jpeg"
import profile3 from "../Images/profile3.jpeg"
import profile4 from "../Images/profile4.jpeg"
import "../CSS/style.css"



const Profile = () => {
  return (
    <div className="profile-dashboard ">
        <div className='fixed top-0 left-0'>
            <LeftSidebar/>
        </div>
        <div className='user-profile ml-[350px] mr-[130px]'>
            <div className="profile-header flex mt-24 mb-16">
                <div className='profile-picture ml-10'>
                    <img src={images} alt="" className='w-40 h-40 rounded-full object-cover '/>
                </div>
                <div className="user-profile-section ml-16 mt-[-45px] p-2 font-sans">
                    <div className="user-header-actions flex items-center mb-4">
                        <span className='font-semibold'>manojpun</span>
                        <button className='follow-button'>Follow</button>
                        <button className='message-button'>Message</button>
                    </div>
                    <div className="profile-stats mb-4">
                        <span className='font-semibold'>20</span>
                        <span className='ml-1 mr-8'>posts</span>

                        <span className='font-semibold'>300</span>
                        <span className='ml-1 mr-8'>followers</span>

                        <span className='font-semibold'>150</span>
                        <span className='ml-1 mr-8'>following</span>
                    </div>
                    <div className="profile-name mb-4">
                        <span className='font-semibold'>Manoj Pun</span>
                    </div>
                    <div className="profile-bio w-96 h-32 mb-8">
                        <span>probably dead.</span>
                    </div>
                </div>
            </div>
            <div className="media-gallery">
                <div>
                    <img src={profile1} alt="" className='w-[320px] h-[250px]'/>
                </div>
                <div>
                    <img src={profile1} alt="" className='w-[320px] h-[250px]'/>
                </div>
                <div>
                    <img src={profile1} alt="" className='w-[320px] h-[250px]'/>
                </div>
                <div>
                    <img src={profile1} alt="" className='w-[320px] h-[250px]'/>
                </div>
                <div>
                    <img src={profile1} alt="" className='w-[320px] h-[250px]'/>
                </div>
                <div>
                    <img src={profile1} alt="" className='w-[320px] h-[250px]'/>
                </div>
                <div>
                    <img src={profile1} alt="" className='w-[320px] h-[250px]'/>
                </div>
                <div>
                    <img src={profile1} alt="" className='w-[320px] h-[250px]'/>
                </div>
                <div>
                    <img src={profile1} alt="" className='w-[320px] h-[250px]'/>
                </div>
            </div>
        </div>
    </div>
        
    
  )
}

export default Profile
