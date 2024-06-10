import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const data = [
    {
      img: `./painter.jpeg`,
      discount: `20%`,
    },
    {
      img: `./sofaclean.jpeg`,
      discount: `20%`
    },
    {
      img: `./door.jpeg`,
      discount: `20%`
    },
    {
      img: `./painter.jpeg`,
      discount: `20%`
    },
    {
      img: `./sofaclean.jpeg`,
      discount: `20%`
    },
    {
      img: `./door.jpeg`,
      discount: `20%`
    },
  ];
const Discount = () => {

    const settings = {
        dots: true,
        autoplay: true,
         autoplaySpeed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        
      };
  return (
    <div className=' w-full md:w-2/3 flex flex-col mx-auto'>
     <Slider {...settings}>
          {data.map((d) => (
            <div className="  py-10 ">
              <div className="  rounded-xl flex justify-center items-center relative">
                <img src={d.img} className=" w-full h-[500px] rounded-xl" />
              </div>
              <div className=" absolute bg-green-600 top-10 w-[100px]">
                <p className=" text-xl text-slate-200 px-5">{d.discount}</p>
              </div>
            </div>
          ))}
        </Slider>
    </div>
  )
}

export default Discount