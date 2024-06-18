import React from 'react';
import profile from "../Images/images.jpeg"
import upload from "../Images/upload.jpg"
import like from "../Images/heart.png"
import comment from "../Images/comment.png"
import send from "../Images/send.png"
import save from "../Images/save.png"

const Feed = () => {
  return (
    <div className="ml-28 w-[470px]">
      <div className='profile-container font-sans mb-6'>
        <div className=' flex mb-4'>
          <div className='flex items-center cursor-pointer'>
            <img src={profile} alt="" className='w-10 h-10 rounded-full object-cover ml-2' />
            <h1 className='ml-2 mr-2 font-semibold'>manojpun</h1>
            <p className='daysSinceUpload'> &#183; 5d</p>
          </div>
          <div className='ml-72 cursor-pointer'>
            <p>&#8230;</p>
          </div>
        </div>
        <div className='mb-3'>
          <img src={upload} alt="" />
        </div>
        <div className='w-6 flex mb-3 cursor-pointer'>
          <img src={like} alt="" className='' />
          <img src={comment} alt="" className='ml-3'/>
          <img src={send} alt="" className='ml-3'/>
          <img src={save} alt="" className='ml-[350px]' />
        </div>
        <div className='mb-3'>
          <p className='font-semibold cursor-pointer'>2,101,200 likes</p>
        </div>
        <div className='flex'>
          <p className='font-semibold cursor-pointer'>manojpun</p>
          <p className='ml-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt itaque nesciunt laboriosam? Sequi laudantium odio.</p>
        </div>
        <div>
          <p className='cursor-pointer'>View all 20k comments</p>
        </div>
        <div className='mb-4'>
          <input type="text" placeholder='Add a comment...' className='comment-section w-full p-1 pl-0 outline-none' />
        </div>
      </div>

      <div className='profile-container font-sans mb-6'>
        <div className=' flex mb-4'>
          <div className='flex items-center cursor-pointer'>
            <img src={profile} alt="" className='w-10 h-10 rounded-full object-cover ml-2' />
            <h1 className='ml-2 mr-2 font-semibold'>manojpun</h1>
            <p className='daysSinceUpload'> &#183; 5d</p>
          </div>
          <div className='ml-72 cursor-pointer'>
            <p>&#8230;</p>
          </div>
        </div>
        <div className='mb-3'>
          <img src={upload} alt="" />
        </div>
        <div className='w-6 flex mb-3 cursor-pointer'>
          <img src={like} alt="" className='' />
          <img src={comment} alt="" className='ml-3'/>
          <img src={send} alt="" className='ml-3'/>
          <img src={save} alt="" className='ml-[350px]' />
        </div>
        <div className='mb-3'>
          <p className='font-semibold cursor-pointer'>2,101,200 likes</p>
        </div>
        <div className='flex'>
          <p className='font-semibold cursor-pointer'>manojpun</p>
          <p className='ml-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt itaque nesciunt laboriosam? Sequi laudantium odio.</p>
        </div>
        <div>
          <p className='cursor-pointer'>View all 20k comments</p>
        </div>
        <div className='mb-4'>
          <input type="text" placeholder='Add a comment...' className='comment-section w-full p-1 pl-0 outline-none' />
        </div>
      </div>
    </div>
  );
};

export default Feed;
