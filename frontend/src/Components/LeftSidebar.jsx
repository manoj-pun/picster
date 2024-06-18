import React from 'react'
import "../CSS/style.css"
import logo from "../Images/picster.png"
import homeIcon from "../Images/home.png"
import searchIcon from "../Images/search.png"
import exploreIcon from "../Images/explore.png"
import reelsIcon from "../Images/reels.png"
import messengerIcon from "../Images/messenger.png"
import notificationIcon from "../Images/heart.png"
import createIcon from "../Images/add.png"
import userIcon from "../Images/user.png"
import moreIcon from "../Images/menu.png"


const LeftSidebar = () => {
  return (
    <div>
      <div className='left-sidebar w-20% fixed h-full' >
        <div className='mb-5 mt-7 ml-5'>
          <img width={ "90px" } src={ logo } alt="" />
        </div>
        <div className="space-y-4">
          <div className=' home-button flex items-center hover:cursor-pointer pt-2 pb-2 pl-2 ml-5 rounded-lg'>
            <img width={ "25px"} src={homeIcon} alt="" />
            <h1 className='ml-2 font-semibold'>Home</h1>
          </div>
          <div className='search-icon flex items-center hover:cursor-pointer pt-2 pb-2 pl-2 pr-20 ml-5 rounded-lg'>
            <img width={ "25px"} src={searchIcon} alt="" />
            <h1 className='ml-2 font-semibold'>Search</h1>
          </div>
          <div className='explore-icon flex items-center hover:cursor-pointer pt-2 pb-2 pl-2 pr-20 ml-5 rounded-lg'>
            <img width={ "25px"} src={exploreIcon} alt="" />
            <h1 className='ml-2 font-semibold'>Explore</h1>
          </div>
          <div className='reels-icon flex items-center hover:cursor-pointer pt-2 pb-2 pl-2 pr-20 ml-5 rounded-lg'>
            <img width={ "25px"} src={reelsIcon} alt="" />
            <h1 className='ml-2 font-semibold'>Reels</h1>
          </div>
          <div className='messenger-icon flex items-center hover:cursor-pointer pt-2 pb-2 pl-2 pr-20 ml-5 rounded-lg'>
            <img width={ "25px"} src={messengerIcon} alt="" />
            <h1 className='ml-2 font-semibold'>Messages</h1>
          </div>
          <div className='notifications-icon flex items-center hover:cursor-pointer pt-2 pb-2 pl-2 pr-20 ml-5 rounded-lg'>
            <img width={ "25px"} src={notificationIcon} alt="" />
            <h1 className='ml-2 font-semibold'>Notifications</h1>
          </div>
          <div className='create-icon flex items-center hover:cursor-pointer pt-2 pb-2 pl-2 pr-20 ml-5 rounded-lg'>
            <img width={ "25px"} src={createIcon} alt="" />
            <h1 className='ml-2 font-semibold'>Create</h1>
          </div>
          <div className='profile-icon flex items-center hover:cursor-pointer pt-2 pb-2 pl-2 pr-20 ml-5 rounded-lg'>
            <img width={ "25px"} src={userIcon} alt="" />
            <h1 className='ml-2 font-semibold'>Profile</h1>
          </div>
          <div className='more-icon flex items-center hover:cursor-pointer pt-2 pb-2 pl-2 pr-20 ml-5 rounded-lg'>
            <img width={ "35px"} src={moreIcon} alt="" />
            <h1 className='ml-3 font-semibold text-xl'>More</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar
