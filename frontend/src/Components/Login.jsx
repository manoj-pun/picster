import React from 'react'
import screenshotHolder from "../Images/home-phones-2x.png"
import logo from "../Images/picster.png"
import googleStore from "../Images/c5Rp7Ym-Klz.png"
import appleStore from "../Images/Yfc020c87j0.png" 
import "../CSS/style.css"
import sc1 from "../Images/screenshot1-2x.png"
import { Link } from 'react-router-dom'




const Login = () => {
  return (
    <div className='flex mt-8'>
        <div className='h-[450px] w-[470px] ml-72'>
            <img src={screenshotHolder} alt="" />
            <img src={sc1} alt=""  className='ml-[148px] mt-[-616px] h-[556px] w-[272px]'/>
        </div>

        <div className='login-container h-96 w-[330px] mx-auto text-center ml-[-2px] mt-4 rounded-sm'>
            <div className='inline-block'>
                <div className='w-32 mx-auto mb-8 mt-10 cursor-pointer'>
                    <img src={logo} alt=""/>
                </div>
                <div className='space-y-2 mb-5 mx-auto'>
                    <input type="text" placeholder='Phone number, username, or email' className='username block w-64 p-1.5 outline-none rounded-sm' />
                    <input type="password" placeholder='Password' className='password block w-64 p-1.5 outline-none rounded-sm'/> 
                </div>
                <div className='mx-auto mb-10'>
                    <button className='bg-blue-400 text-white w-64 font-bold py-1 rounded-lg'>Log In</button>
                </div>
                <div className='mx-auto'>
                    <Link to="/passwordreset"><span className='text-blue-900 text-sm cursor-pointer'>Forget Password ?</span></Link>
                </div>
            </div>

            <div className="signup-link mt-14 p-4 mb-2 rounded-sm">
                <span>Don't have an account?</span>
                <Link to="/SignUp" ><span className='text-blue-600 font-semibold ml-2 cursor-pointer'>Sign up</span></Link>
            </div>

            <div>
                <span className='text-sm'>Get the app.</span>
                <div className=' flex w-32 ml-9 mt-3 cursor-pointer'>
                    <img src={googleStore} alt="" />
                    <img src={appleStore} alt="" className='ml-3'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Login
