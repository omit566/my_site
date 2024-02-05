import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import './HeaderOne.css'
const HeaderOne = () => {
    return (
        <>
          <div className='w-full h-[37px] flex items-center bg-[#f9f9f9]'>
            <div className='flex items-center w-[1000px] '>
            <div className='ml-[50px]'>
            <h1>Wellcome Our Online Store!</h1>
            </div>
            <div className='flex items-center absolute gap-[5px] left-[300px]'>
                <MdOutlineEmail color='red' />
                <h1>Email: Design@domain.com</h1>
            </div>
            <div className='flex items-center absolute gap-[5px] left-[550px]'>
                <FaPhone color='red' />  
                <h1>Hotline: (888) 4344 6000 - (888) 1338 8193</h1>
            </div>
            </div>
            <div className='flex ml-[200px] gap-[20px]'>
            <div>
                <h1>Englsh</h1>

            </div>
            <div>
                <h1>USD</h1>
            </div>
            </div>
            
            </div>  
        </>
    );
};

export default HeaderOne;