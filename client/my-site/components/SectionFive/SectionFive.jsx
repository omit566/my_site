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

export default function SectionFive() {
  const [value, setValue] = React.useState(0);
  const [data, setData] = useState([]);
  const [seconddata, setSecondData] = useState([]);
  useEffect(()=>{
  fetch("http://localhost:3000/FirstData")
  .then(res=>res.json())
  .then(data=>setData(data))
  },[])
  useEffect(()=>{
  fetch("http://localhost:3000/SecondData")
  .then(res=>res.json())
  .then(data=>setSecondData(data))
  },[])
  console.log(data)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
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
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(2,3).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(3,4).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(4,5).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(5,6).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(6,7).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(7,8).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
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
        seconddata.slice(0,1).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }
      </SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(1,2).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(2,3).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(3,4).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(4,5).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(5,6).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(6,7).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(7,8).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
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
        seconddata.slice(7,8).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
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
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(5,6).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(3,4).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(2,3).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(1,2).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(0,1).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(4,5).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
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
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
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
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(6,7).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(7,8).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(0,1).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(1,2).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(2,3).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(3,4).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
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
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
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
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(5,6).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(3,4).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(2,3).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(1,2).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(0,1).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        seconddata.slice(4,5).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
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
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
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
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(2,3).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(3,4).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(4,5).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(5,6).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(6,7).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      <SwiperSlide> {
        data.slice(7,8).map(d=>
          <div className='w-[500px] h-[400px] border'>
          <img className='w-[200px] h-[150px]' src={d.img} alt="" />
          <h1 className='font-bold text-2xl ml-[20px]'>{d.title}</h1>
            <p className='font-bold text-xl ml-[20px]'>Price: <span className='text-red-500 text-lg font-bold'>${d.price}</span></p>
            <h1 className=' w-[400px] text-xs ml-[20px]'>{d.para}</h1>
            <button className='mt-[20px] ml-[20px] text-white hover:text-red hover:bg-[#000] hover:opacity-[0.5] rounded-[0px] bg-red-500 w-[150px] h-[50px] flex items-center justify-evenly'>Add To Cart <CiShoppingCart className='text-2xl' /></button>
        </div>)
       }</SwiperSlide>
      
    </Swiper>
      </CustomTabPanel>
    </Box>
  );
}
