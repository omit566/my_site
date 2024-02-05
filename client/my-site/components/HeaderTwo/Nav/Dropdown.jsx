import React from 'react';
import { MdMenu } from "react-icons/md";
import { PiWindowsLogoThin } from "react-icons/pi";
import './Dropdown.css';
import { Link } from 'react-router-dom';
const Dropdown = () => {
    return (
        <>
        <li className='list-none aa'>
        <div className='border border-[#c1c2c1] w-full h-[45px] '>
        <div className='w-[300px] ml-[50px] outline-none border-[2px] border-b-[red] bg-[#f9f9f9] gap-[100px] flex items-center justify-evenly h-[45px]'>
        <h1 className='text-[#222222] text-one text-[14px] hover:text-red-500 cursor-pointer all'>ALL DEPARTMENTS</h1>
        <MdMenu className='text-2xl hover:text-red-500 cursor-pointer' />
            </div>  
        </div>
        <ul className='w-[300px]  h-[350px] border ml-[50px] list-none'>
            <Link to='/' className='flex mt-[10px] cursor-pointer hover:underline hover:text-red-500 cursor-pointer text-one ml-[10px] gap-[10px]'><PiWindowsLogoThin /> Men's Clothing</Link>
            <Link to='/' className='flex mt-[10px] cursor-pointer hover:underline hover:text-red-500 cursor-pointer text-one ml-[10px] gap-[10px]'><PiWindowsLogoThin /> Women's Clothing</Link>
            <Link to='/' className='flex mt-[10px] cursor-pointer hover:underline hover:text-red-500 cursor-pointer text-one ml-[10px] gap-[10px]'><PiWindowsLogoThin /> Phone & Accessories</Link>
            <Link to='/' className='flex mt-[10px] cursor-pointer hover:underline hover:text-red-500 cursor-pointer text-one ml-[10px] gap-[10px]'><PiWindowsLogoThin /> Computer & Office</Link>
            <Link to='/' className='flex mt-[10px] cursor-pointer hover:underline hover:text-red-500 cursor-pointer text-one ml-[10px] gap-[10px]'><PiWindowsLogoThin /> Consumer Electronics</Link>
            <Link to='/' className='flex mt-[10px] cursor-pointer hover:underline hover:text-red-500 cursor-pointer text-one ml-[10px] gap-[10px]'><PiWindowsLogoThin /> Watches & Jewelry</Link>
            <Link to='/' className='flex mt-[10px] cursor-pointer hover:underline hover:text-red-500 cursor-pointer text-one ml-[10px] gap-[10px]'><PiWindowsLogoThin /> Home, Garden & Furniture</Link>
            <Link to='/' className='flex mt-[10px] cursor-pointer hover:underline hover:text-red-500 cursor-pointer text-one ml-[10px] gap-[10px]'><PiWindowsLogoThin /> Bags & Shoes</Link>
            <Link to='/' className='flex mt-[10px] cursor-pointer hover:underline hover:text-red-500 cursor-pointer text-one ml-[10px] gap-[10px]'><PiWindowsLogoThin /> Toys, Kids & Baby</Link>
            <Link to='/' className='flex mt-[10px] cursor-pointer hover:underline hover:text-red-500 cursor-pointer text-one ml-[10px] gap-[10px]'><PiWindowsLogoThin /> Health & Beayty, Hair</Link>
            
        </ul>
       
        </li>
        
       <div>
       <div className='mt-[-380px] ml-[400px] text-sm'>
           <ul className='flex gap-[25px]'>
            <li className='hover:text-red-500 cursor-pointer hover:underline'>HOME</li>
            <li className='hover:text-red-500 cursor-pointer hover:underline'>FEATURES</li>
            <li className='hover:text-red-500 cursor-pointer hover:underline'>SHOP</li>
            <li className='hover:text-red-500 cursor-pointer hover:underline'>ABOUT US</li>
            <li className='hover:text-red-500 cursor-pointer hover:underline'>PAGES</li>
            <li className='hover:text-red-500 cursor-pointer hover:underline'>NEWS</li>
            </ul> 
        </div>
       </div>
       <div className='border border-[red] w-[150px] mt-[-30px] mr-[50px] float-right h-[35px]'>
          <h1 className='text-red-500 text-center leading-[35px] font-bold'>SPECIAL OFFER</h1>
       </div>
        </>
    );
};

export default Dropdown;