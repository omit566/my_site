import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const SectionNine = () => {
    return (
        <div className='w-[100%] mt-[50px] h-[120px] bg-[#bd0007]'>
            <h1 className='ml-[50px] text-white leading-[120px] text-2xl font-bold '>Follow Socials</h1>
            <div className='flex gap-[9px] mt-[-80px] ml-[200px]'>
                <div className='w-[45px] h-[45px] rounded-xs bg-[#5e0003] flex items-center justify-center hover:bg-[red] ml-[50px]'><FaFacebookF color='white' className='text-2xl' /></div>
                <div className='w-[45px] h-[45px] rounded-xs bg-[#5e0003] flex items-center justify-center hover:bg-[red] ml-[0px]'><FaGoogle color='white' className='text-2xl' /></div>
                <div className='w-[45px] h-[45px] rounded-xs bg-[#5e0003] flex items-center justify-center hover:bg-[red] ml-[0px]'><FaInstagram color='white' className='text-2xl' /></div>
                <div className='w-[45px] h-[45px] rounded-xs bg-[#5e0003] flex items-center justify-center hover:bg-[red] ml-[0px]'><FaYoutube color='white' className='text-2xl' /></div>
                <div className='w-[45px] h-[45px] rounded-xs bg-[#5e0003] flex items-center justify-center hover:bg-[red] ml-[0px]'><FaTwitter color='white' className='text-2xl' /></div>
                <div className='w-[45px] h-[45px] rounded-xs bg-[#5e0003] flex items-center justify-center hover:bg-[red] ml-[0px]'><MdEmail color='white' className='text-2xl' />
</div>
            </div>
            <h1 className='text-[#fff] mt-[-40px] ml-[600px] text-2xl font-bold '>Sign Up For Newsletter</h1>
            <div className='ml-[850px] mt-[-30px]'>
                  <form className='w-[400px] border h-[37px]  ml-[50px]  outline-none flex justify-start' action="">
                    <input type="search" className='relative left-[0px]  ml-[10px] outline-none w-[350px] h-[35px]' placeholder='Enter Keyword Here...' name="" id="" />
                    <div className='bg-[red] w-[50px] flex items-center justify-center'><button className='text-xs text-white font-bold text-center'>Click here</button></div>
                  </form>
                </div>
        </div>
    );
};

export default SectionNine;