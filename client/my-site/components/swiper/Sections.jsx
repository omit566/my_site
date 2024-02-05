import React from 'react';
import { Default } from './default';
import itemOne from '../../img/item-23.jpg'; 
import itemTwo from '../../img/item-24.jpg'; 
import itemThree from '../../img/item-25.jpg'; 
import itemFour from '../../img/item-26.jpg'; 
import itemFive from '../../img/item-27.jpg';
import './Sections.css'; 
const Sections = () => {
    return (
        <>
        <div>
            <div className='w-[600px] h-[60px] ml-[50px] mt-[50px] bg-[#f9f9f9]'><h1 className='new'>Top Categories</h1></div>
        <div className='w-[600px] h-[200px] border mt-[0px] ml-[50px]'>
           <Default></Default> 
        </div>
        </div>
        <div className='ml-[700px] mt-[-300px]'>
            <div className='flex gap-[50px] mt-[50px]'><img src={itemOne} alt="" />
            <img src={itemTwo} alt="" /></div>
            <div className='flex gap-[50px] mt-[50px]'><img src={itemThree} alt="" />
            <img src={itemFour} alt="" /></div>
        </div>
        <div><img className='w-[600px] ml-[50px] h-[50px] mt-[-100px]' src={itemFive} alt="" /></div>
    </>
    );
};

export default Sections;