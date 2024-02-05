import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Data = ({d}) => {
    const {_id, img, title, para, price} = d;
    return (
        <div>
            <Swiper
spaceBetween={10}
slidesPerView={2}
onSlideChange={() => console.log('slide change')}
onSwiper={(swiper) => console.log(swiper)}
>
            <SwiperSlide>
                
    <div className='w-[500px] h-[300px] border'>
      <img className='w-[200px] h-[150px]' src={img} alt="" />
      <h1 className='font-bold text-2xl ml-[20px]'>{title}</h1>
        <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-xl font-bold'>${price}</span></p>
        <h1 className='text-[#5f5d98] w-[400px]  ml-[20px]'>{para}</h1>
    </div>
   
</SwiperSlide>
</Swiper>
        </div>
    );
};

export default Data;