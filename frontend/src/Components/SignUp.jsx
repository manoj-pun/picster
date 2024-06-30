import React from 'react'
import screenshotHolder from "../Images/home-phones-2x.png"
import logo from "../Images/picster.png"
import googleStore from "../Images/c5Rp7Ym-Klz.png"
import appleStore from "../Images/Yfc020c87j0.png" 
import "../CSS/style.css"
import sc1 from "../Images/screenshot1-2x.png"
import { Link } from "react-router-dom"


const SignUp = () => {
  return (
    <div className='signup-container mt-4'>
        <div className="signup-form w-[350px] p-8 h-[550px] m-auto">
            <div className='w-32 mx-auto mt-3 mb-2 cursor-pointer'>
                <img src={logo} alt="" />
            </div>
            <div className='font-medium text-gray-600 mb-5'>
                <span className='block ml-5'>Sign up to see photos and videos</span>
                <span className='ml-16'>from your friends.</span>
            </div>

            <div className='space-y-2 mb-4'>
                <input type="text" placeholder='Mobile Number or Email' className='email w-full p-1.5 rounded-sm outline-none'/>
                <input type="text" placeholder='Full Name' className='fullname w-full p-1.5 rounded-sm outline-none'/>
                <input type="text" placeholder='Username'className='username w-full p-1.5 rounded-sm outline-none'/>
                <input type="password" placeholder='Password' className='password w-full p-1.5 rounded-sm outline-none'/>
            </div>
            <div className='text-sm leading-tight mb-2'>
                <span>People who use our service may have uploaded your contact information to Instagram. <Link className='text-blue-900' to="https://www.facebook.com/help/instagram/261704639352628">Learn More</Link></span>
            </div>
            <div className='text-sm leading-tight mb-4'>
                <span>By signing up, you agree to our <Link className='text-blue-900' to="https://help.instagram.com/581066165581870/?locale=en_US">Terms</Link> , <Link className='text-blue-900' to="https://www.facebook.com/privacy/policy">Privacy Policy</Link>  and <Link className='text-blue-900' to="https://privacycenter.instagram.com/policies/cookies/">Cookies Policy .</Link></span>
            </div>

            <div className='signup-button bg-blue-400'>
                <button >Sign up</button>
            </div>
        </div>

        <div className='login-link mt-3 w-[350px] text-center p-4 m-auto'>
            <span>Have an account?</span>
            <Link to="/login" ><span className='text-blue-600 font-semibold ml-2 cursor-pointer'>Log in</span></Link>
        </div>

        <div className='flex flex-col items-center justify-center mt-2'>
            <span className='text-sm'>Get the app.</span>
            <div className='flex w-32 mt-3 cursor-pointer justify-center'>
                <img src={googleStore} alt="Google Play Store" />
                <img src={appleStore} alt="Apple App Store" className='ml-3'/>
            </div>
        </div>

    </div>



    
  )
}

export default SignUp
