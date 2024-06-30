import React from 'react'
import logo from "../Images/picster.png"
import padlock from "../Images/padlock.png"
import "../CSS/style.css"
import { Link } from 'react-router-dom'

const PasswordReset = () => {
  return (
    <div>
      <div className='password-reset-logo'>
        <img src={logo} alt="" className=' w-32 ml-64'/>
      </div>
      <div className='password-reset-container w-[350px] m-auto mt-10 text-center p-4'>
        <div className='mb-3'>
          <img src={padlock} alt="" className='w-28 mx-auto'/>
        </div>
        <div className='font-semibold mb-2'>
          <span>Trouble loggin in?</span>
        </div>
        <div className='text-color leading-tight mb-3'>
          <span>Enter your email, phone, or username and we'll send you a link to get back into your account.</span>
        </div>
        <div className='mb-4'>
          <input type="text" placeholder='Email, Phone, or Username' className='email w-72 p-1.5 rounded-sm outline-none '/>
        </div>
        <div className='bg-blue-400 w-72 ml-4 p-1 rounded-md cursor-pointer mb-4'>
          <button>Send login link</button>
        </div>
        <div className='mb-16'>
          <Link to="/signup"><span className='hover:text-gray-600 cursor-pointer font-semibold'>Create new account</span></Link>
        </div>
      </div>
      <div className='back-to-login-button bg-gray-100 p-3 w-[347px] m-auto rounded-sm mt-[-49px] font-semibold hover:text-gray-600'>
          <Link to="/login"><button className='w-full text-center'>Back to login</button></Link>
      </div>
    </div>
  )
}

export default PasswordReset
