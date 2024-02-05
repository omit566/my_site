import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiShoppingCart } from "react-icons/ci";
// Import Swiper styles
import 'swiper/css';
import { useState } from 'react';
import { useEffect } from 'react';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Eight() {
  const [value, setValue] = React.useState(0);
  const [data, setData] = useState([]);
  const [seconddata, setSecondData] = useState([]);
  useEffect(()=>{
  fetch("http://localhost:3000/today")
  .then(res=>res.json())
  .then(data=>setData(data))
  },[])
  useEffect(()=>{
  fetch("http://localhost:3000/today")
  .then(res=>res.json())
  .then(data=>setSecondData(data))
  },[])
  console.log(data)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box className='ml-[50px]' sx={{ width: '90%'  }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="
For Men" {...a11yProps(0)} />
          <Tab label="For Women" {...a11yProps(1)} />
          <Tab label="Clothing" {...a11yProps(2)} />
          <Tab label="Shoes" {...a11yProps(3)} />
          <Tab label="Bags" {...a11yProps(4)} />
          <Tab label="Accessories" {...a11yProps(5)} />






        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
       {
        data.slice(0,1).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$100</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }
      </SwiperSlide>
      <SwiperSlide> {
        data.slice(1,2).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$100</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(2,3).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$110</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(3,4).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$120</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(4,5).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$130</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(5,6).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$140</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(6,7).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$150</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(7,8).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$160</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      
    </Swiper>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
       {
        seconddata.slice(9,10).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$170</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }
      </SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(10,11).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$180</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(11,10).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$190</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(1,2).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$200</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(3,1).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$210</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(4,5).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$220</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(5,6).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$230</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(10,11).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$240</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      
    </Swiper>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
       {
        seconddata.slice(0,1).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$250</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }
      </SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(4,3).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$260</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(9,8).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$270</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(0,1).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$280</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(1,2).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$290</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(2,3).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$300</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(3,4).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$310</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(4,5).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$320</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      
    </Swiper>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
       {
       data.slice(4,5).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$330</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }
      </SwiperSlide>
      <SwiperSlide> {
        data.slice(5,6).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$340</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(6,7).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$350</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(7,8).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$360</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(0,1).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$370</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(1,2).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$380</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(2,3).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$390</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(3,4).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$400</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      
    </Swiper>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
       {
        seconddata.slice(7,8).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$410</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }
      </SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(6,7).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$420</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(5,6).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$430</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(3,4).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$440</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(2,3).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$450</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(1,2).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$460</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(0,1).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>470</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(4,5).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$480</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      
    </Swiper>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
      <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
       {
        data.slice(0,1).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$500</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }
      </SwiperSlide>
      <SwiperSlide> {
        data.slice(1,2).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$510</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(2,3).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$520</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(3,4).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$530</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(4,5).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$540</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(5,6).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$550</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(6,7).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$560</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(7,8).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>$570</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      
    </Swiper>
      </CustomTabPanel>
    </Box>
    <div className='flex  gap-[10px] ml-[50px]'>
        <img className='w-[350px] h-[200px]' src="https://i.ibb.co/znv362C/banner-1.jpg" alt="" />
        <img className='w-[350px] h-[200px]' src="https://i.ibb.co/y0d9fSQ/banner-2.jpg" alt="" />
    </div>
    <div className='flex gap-[20px] mt-[50px] ml-[700px]'>
        <img className='w-[300px] h-[200px]' src="https://i.ibb.co/DpRkzxv/banner-11.png" alt="" />
        <img className='w-[300px] h-[200px]' src="https://i.ibb.co/LvBNDrw/banner-10.jpg" alt="" />
        </div>
        <div className='flex gap-[20px] ml-[50px] mt-[-200px]'>
        <img className='w-[300px] h-[200px]' src="https://i.ibb.co/XtsD0n6/banner-9.jpg" alt="" />
        <img className='w-[300px] h-[200px]' src="https://i.ibb.co/2NHxvd0/banner-8.jpg" alt="" />
    </div>
    <div>
        <img src="https://i.ibb.co/0yVMJXH/banner-3.jpg" alt="" />
    </div>
    </>
  );
}
