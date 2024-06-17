import React from 'react'
import LeftSideBar from '../../Components/LeftSidebar.jsx'
import MiddleContent from '../../Components/MiddelContent.jsx'
import RightSideBar from '../../Components/RightSidebar.jsx'


const Home = () => {
  return (
    <div className='grid grid-cols-12 gap-4 h-screen flex justify-between'>
      <div className='col-span-2'>
        <LeftSideBar/>  
      </div>
      <div className="col-span-6 flex flex-col">
        <MiddleContent/>
      </div>
      <div className="col-span-4">
       <RightSideBar/>
      </div>
    </div>
  )
}

export default Home