import React from 'react';
import Card from './components/Card';
import Cards from './components/Cards';
import data from './assets/data';
import data2 from './assets/data2';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const App = () => {

  // Slider settings for Italian Dishes (data2.js)
  const italianSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 3,       
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,   
  };

  // Slider settings for Normal Dishes (data.js)
  const normalSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 4,       
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,  
  };

  return (
    <div className='p-10'>

     
      <h2 className='text-3xl mb-5'>Italian Dishes</h2>
      <Slider {...italianSettings}>
        {data2.map((item, index) => (
          <Card key={index} img={item.img} name={item.name} content={item.content} />
        ))}
      </Slider>

     
      <h2 className='text-3xl mt-10 mb-5'>Our Special Dishes</h2>
      <Slider {...normalSettings}>
        {data.map((item, index) => (
          <Cards key={index} img={item.img} name={item.name} price={item.price} />
        ))}
      </Slider>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
