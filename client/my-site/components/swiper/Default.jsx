import { Swiper, SwiperSlide } from 'swiper/react';
import One from '../../img/F_30_b634e086-58b6-45b5-b17e-872db6e5a116_500x_crop_center.png'
import Two from '../../img/F_33_713a7a43-6138-45c7-bc46-5ff945bc40c3_500x_crop_center.png'
import Three from '../../img/F_35_2b009b81-59ff-4c23-9cff-954c32fd8ed9_500x_crop_center.png'
import Four from '../../img/F_36_ce16022c-7c48-4d3f-90f8-78ef7aa2422d_500x_crop_center.png'
import Five from '../../img/F_39_500x_crop_center.png'
import Six from '../../img/gift_f67e77a4-475e-44c5-8694-ce633ac49d65.png'
import Seven from '../../img/Fu_13_500x_crop_center.png'
import Eight from '../../img/Fu_12_717752a3-cd0f-4918-9a37-fddbfe5364a9_500x_crop_center.png'
import Nine from '../../img/Fu_11_0e7cb5dc-66db-4414-866c-51d60df65721_500x_crop_center.png'
import Ten from '../../img/E_49_500x_crop_center.png'
import Eleven from '../../img/F_17_500x_crop_center.png'
import Twelve from '../../img/E_54_ad1d365f-9d5b-4289-a36f-f708d1caafb5_500x_crop_center.png'
import Thirteen from '../../img/E_48_ad94c065-e278-4c2f-ae84-80dbcb7409ae_500x_crop_center.png'

import 'swiper/css';

export const Default= () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className='w-[150px] h-[150px] mt-[30px]' src={One} alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-[150px] h-[150px] mt-[30px]' src={Two} alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-[150px] h-[150px] mt-[30px]' src={Three} alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-[150px] h-[150px] mt-[30px]' src={Four} alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-[150px] h-[150px] mt-[30px]' src={Five} alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-[150px] h-[150px] mt-[30px]' src={Six} alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-[150px] h-[150px] mt-[30px]' src={Seven} alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-[150px] h-[150px] mt-[30px]' src={Eight} alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-[150px] h-[150px] mt-[30px]' src={Nine} alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-[150px] h-[150px] mt-[30px]' src={Ten} alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-[150px] h-[150px] mt-[30px]' src={Eleven} alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-[150px] h-[150px] mt-[30px]' src={Twelve} alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-[150px] h-[150px] mt-[30px]' src={Thirteen} alt="" /></SwiperSlide>
     
    </Swiper>
  );
};