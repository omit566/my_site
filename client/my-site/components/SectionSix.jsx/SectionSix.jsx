import React from 'react';
import img1 from '../../img/banner_4.jpg';
import img2 from '../../img/banner_5.jpg';
import img3 from '../../img/banner_6.jpg';
import img4 from '../../img/banner_7.jpg';

const SectionSix = () => {
    return (
        <>
        <div className='flex justify-evenly'>
            <img className='w-[400px] h-[250px]' src={img1} alt="" />
            <img className='w-[400px] h-[250px]' src={img2} alt="" />
            <img className='w-[400px] h-[250px]' src={img3} alt="" />
        </div>
        <div>
            <img className='w-[90%] ml-[50px]' src={img4} alt="" />
        </div>
        <div className='flex'>
            <div className='w-[150px] h-[150px] border ml-[50px] flex flex-col items-center gap-[2px] mt-[2px]'><img src="https://i.ibb.co/5FWKM05/colection-1.jpg" alt="" /><p>Smart Phone</p></div>
            <div className='w-[150px] h-[150px] border ml-[50px] flex flex-col items-center gap-[2px] mt-[2px]'><img src="https://i.ibb.co/wyspzFn/colection-4.jpg" alt="" /><p>Chair</p></div>
            <div className='w-[150px] h-[150px] border ml-[50px] flex flex-col items-center gap-[2px] mt-[2px]'><img src="https://i.ibb.co/YcYjG8q/colection-6.jpg" alt="" /><p>HeadPhone</p></div>
            <div className='w-[150px] h-[150px] border ml-[50px] flex flex-col items-center gap-[2px] mt-[2px]'><img src="https://i.ibb.co/0YM7cWM/gift-f67e77a4-475e-44c5-8694-ce633ac49d65.jpg" alt="" /><p>Gifts</p></div>
           </div>
           <div className='flex'>
            <div className='w-[150px] h-[150px] border ml-[50px] flex flex-col items-center gap-[2px] mt-[2px]'><img src="https://i.ibb.co/VB4Lsk3/colection-9.jpg" alt="" /><p>Game Controllers</p></div>
            <div className='w-[150px] h-[150px] border ml-[50px] flex flex-col items-center gap-[2px] mt-[2px]'><img src="https://i.ibb.co/QKRqDvb/colection-2.jpg" alt="" /><p>Laptop</p></div>
            <div className='w-[150px] h-[150px] border ml-[50px] flex flex-col items-center gap-[2px] mt-[2px]'><img src="https://i.ibb.co/25jzkFg/light-5c79d674-e5dc-42dd-947f-2a9eacf98e9b.jpg" alt="" /><p>Light</p></div>
            <div className='w-[150px] h-[150px] border ml-[50px] flex flex-col items-center gap-[2px] mt-[2px]'><img src="https://i.ibb.co/54YxgPm/colection-8.jpg" alt="" /><p>Smart Watch</p></div>
        </div>
        <div className='ml-[850px] mt-[-300px] gap-[50px] flex-col flex'>
            <img className='w-[450px]' src="https://i.ibb.co/znv362C/banner-1.jpg" alt="" />
            <img className='w-[450px]' src="https://i.ibb.co/y0d9fSQ/banner-2.jpg" alt="" />
        </div>
        </>
    );
};


export default SectionSix;







