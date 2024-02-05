import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import One from '../../img/01.png';
import Two from '../../img/02.png';
import Three from '../../img/03.png';
import Four from '../../img/04.png';
import Five from '../../img/05.png';
import Six from '../../img/06.png';
import Seven from '../../img/07.png';
import Eight from '../../img/08.png';
import './SwiperTwo.css';
export const SwiperTwo= () => {


return (
<Swiper
spaceBetween={10}
slidesPerView={2}
onSlideChange={() => console.log('slide change')}
onSwiper={(swiper) => console.log(swiper)}
>








<SwiperSlide>
    <div className='w-[500px] h-[300px] border'>
      <img className='w-[200px] h-[150px]' src={One} alt="" />
      <h1 className='font-bold text-2xl ml-[20px]'>Vestibulum vehicula vel turpis et</h1>
        <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-xl font-bold'>$303</span></p>
        <h1 className='text-[#5f5d98] w-[400px]  ml-[20px]'>Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis, sagittis aliquet leo. Nunc ornare metus urna, eu luctus velit placerat ut.</h1>
    </div>
</SwiperSlide>
<SwiperSlide> <div className='w-[500px] h-[300px] border'>
       <img className='w-[200px] h-[150px]' src={Two} alt="" />
       <h1 className='font-bold text-2xl ml-[20px]'>Sed viverra nec purus ut ornare</h1>
        <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-xl font-bold'>$203</span></p>
        <h1 className='text-[#5f5d98] w-[400px]  ml-[20px]'>Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis, sagittis aliquet leo. Nunc ornare metus urna, eu luctus velit placerat ut.</h1> 
    </div></SwiperSlide>
<SwiperSlide> <div className='w-[500px] h-[300px] border'>
        <img className='w-[200px] h-[150px]' src={Three} alt="" />
        <h1 className='font-bold text-2xl ml-[20px]'>hac habitasse platea shoes maximus</h1>
        <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-xl font-bold'>$73</span></p>
        <h1 className='text-[#5f5d98] w-[400px]  ml-[20px]'>Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis, sagittis aliquet leo. Nunc ornare metus urna, eu luctus velit placerat ut.</h1>
        </div></SwiperSlide>
<SwiperSlide> <div className='w-[500px] h-[300px] border'>
        <img className='w-[200px] h-[150px]' src={Four} alt="" />
        <h1 className='font-bold text-2xl ml-[20px]'>-15% Filet mignon capico ehicula vel turpis</h1>
        <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-xl font-bold'>$93</span></p>
        <h1 className='text-[#5f5d98] w-[400px]  ml-[20px]'>Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis, sagittis aliquet leo. Nunc ornare metus urna, eu luctus velit placerat ut.</h1>
        </div></SwiperSlide>
<SwiperSlide> <div className='w-[500px] h-[300px] border'>
        <img className='w-[200px] h-[150px]' src={Five} alt="" />
        <h1 className='font-bold text-2xl ml-[20px]'>-18% Spicy jalapeno ad short pharetra ultrices</h1>
        <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-xl font-bold'>$83</span></p>
        <h1 className='text-[#5f5d98] w-[400px]  ml-[20px]'>Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis, sagittis aliquet leo. Nunc ornare metus urna, eu luctus velit placerat ut.</h1>
        </div></SwiperSlide>
<SwiperSlide> <div className='w-[500px] h-[300px] border'>
        <img className='w-[200px] h-[150px]' src={Six} alt="" />
        <h1 className='font-bold text-2xl ml-[20px]'>Integer facilisis eleifend vehicula ornare</h1>
        <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-xl font-bold'>$203</span></p>
        <h1 className='text-[#5f5d98] w-[400px]  ml-[20px]'>Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis, sagittis aliquet leo. Nunc ornare metus urna, eu luctus velit placerat ut.</h1>
        </div></SwiperSlide>
<SwiperSlide> <div className='w-[500px] h-[300px] border'>
        <img className='w-[200px] h-[150px]' src={Seven} alt="" />
        <h1 className='font-bold text-2xl ml-[20px]'>Salami cow tri-tip at tortor finibus pharetra</h1>
        <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-xl font-bold'>$103</span></p>
        <h1 className='text-[#5f5d98] w-[400px]  ml-[20px]'>Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis, sagittis aliquet leo. Nunc ornare metus urna, eu luctus velit placerat ut.</h1>
        </div></SwiperSlide>
<SwiperSlide> <div className='w-[500px] h-[300px] border'>
        <img className='w-[100px] h-[150px]' src={Eight} alt="" />
        <h1 className='font-bold text-2xl ml-[20px]'>Golden Circle Apple Fruit Drink Multipack</h1>
        <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-xl font-bold'>$123</span></p>
        <h1 className='text-[#5f5d98] w-[400px]  ml-[20px]'>Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a malesuada sem rutrum. Sed quam odio, porta a finibus quis, sagittis aliquet leo. Nunc ornare metus urna, eu luctus velit placerat ut.</h1>
        </div></SwiperSlide> 


</Swiper>
);
};