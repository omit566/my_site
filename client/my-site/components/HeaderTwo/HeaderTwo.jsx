import React from 'react';
import logo from '../../img/logo.png'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaUserCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './HeaderTwo.css';
const HeaderTwo = () => {
    return (
        <>
          <div className='h-[109px] flex items-center w-full'>
            <div className='w-[800px] flex justify-between items-center h-[109px]'>
                <div><img className='ml-[50px]' src={logo} alt="" /></div>
                <div>
                  <form className='w-[400px] border h-[37px] border-[red] ml-[50px]  outline-none flex justify-start' action="">
                    <input type="search" className='relative left-[0px]  ml-[10px] outline-none w-[350px] h-[35px]' placeholder='Enter Keyword Here...' name="" id="" />
                    <div className='bg-[red] w-[50px] flex items-center justify-center'><CiSearch color='white'  className='text-2xl' /></div>
                  </form>
                </div>
            </div>
            <div className='flex gap-[50px] ml-[200px]'>
                <div>
                <div className="badge bg-[red] badge-2xl ml-[20px]"><p className='text-white '>0</p></div>
                <CiShoppingCart color='rgb(34,34,34)' className='text-3xl font-bold' />
                <h1 className='log_reg'>My Cart</h1>
                </div>
                <div>
                <div className="badge bg-[red] badge-2xl ml-[20px]"><p className='text-white '>0</p></div>
                <CiHeart  color='rgb(34,34,34)' className='text-3xl font-bold' />
                <h1 className='log_reg'>Wishlist</h1>
                </div>
                <div>
                <div className="badge bg-[red] badge-2xl ml-[20px]"><p className='text-white '>Hello Guest</p></div>
                <FaUserCheck  color='rgb(34,34,34)' className='text-3xl font-bold' />
                <div className='log_reg'><Link to='/login'>Login</Link> / <Link to='/register'>Register</Link></div>
                </div>
                
                
            </div>
            </div> 
            <hr /> 
        </>
    );
};

export default HeaderTwo;