import React from "react";
import { BsPeople } from "react-icons/bs";
import { PiStarThin } from "react-icons/pi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Main.css";

import { Discount } from "../index";
import { Link, Outlet } from "react-router-dom";


const data = [
  {
    img: `./painter.jpeg`,
    name: `Panater`,
    url:`/painter`
  },
  {
    img: `./sofaclean.jpeg`,
    name: `Cleaning`,
    url:`/sofa`
  },
  {
    img: `./door.jpeg`,
    name: `Door`,
    url:`/carpenter`
  },
  {
    img: `./painter.jpeg`,
    name: `Painter`,
     url:`/painter`
  },
  {
    img: `./sofaclean.jpeg`,
    name: `Cleaning`,
     url:`/sofa`
  },
  {
    img: `./door.jpeg`,
    name: `Door Lock`,
    url:`/carpenter`
  },
];
const dataAc = [
  {
    img: `./apl1.jpeg`,
    name: `AC Repair & Servie`,
  },
  {
    img: `./apl2.jpeg`,
    name: `AC Repair & Servie`,
  },
  {
    img: `./apl3.jpeg`,
    name: `AC Repair & Servie`,
  },
  {
    img: `./apl4.jpeg`,
    name: `C Repair & Servie`,
  },
  {
    img: `./apl5.jpeg`,
    name: `AC Repair & Servie`,
  },
  {
    img: `/apl6.jpeg`,
    name: `AC Repair & Servie`,
  },
];
const dataHome = [
  {
    img: `./home1.jpeg`,
    name: `AC Repair & Servie`,
    price: `109`,
  },
  {
    img: `./home2.jpeg`,
    name: `AC Repair & Servie`,
    price: `109`,
  },
  {
    img: `./home3.jpeg`,
    name: `AC Repair & Servie`,
    price: `109`,
  },
  {
    img: `./home.jpeg`,
    name: `AC Repair & Servie`,
    price: `109`,
  },
  {
    img: `./home5.jpeg`,
    name: `AC Repair & Servie`,
    price: `109`,
  },
];

const dataImage=[
  {
    img:`./elec.png`,
    url:`./electrician`,
    name:`Electrician`
  },
  {
    img:`./cleaning.png`,
   url:`./painter`,
    name:`painter`
  },
   {
    img:`./elec.png`,
    url:`./painter`,
    name:`painter`
  },
  {
    img:`./cleaning.png`,
   url:`./painter`,
    name:`painter`
  },
  {
    img:`./elec.png`,
    url:`./painter`,
    name:`painter`
  },
  {
    img:`./cleaning.png`,
   url:`./painter`,
    name:`painter`
  }
]
const Main = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" ">
      {/* First secrion */}
      <section className="w-full flex flex-col mx-auto p-4 md:p-0 md:w-2/3">
        <div className="flex flex-col md:flex-row justify-between py-12">
          <div className="flex flex-col gap-10 md:w-1/2">
            <p className="text-3xl md:text-4xl font-bold w-full md:w-[400px]">
              Home services at your doorstep
            </p>
            <div className="w-full md:w-[500px] border border-gray-300 rounded-md p-4 md:p-5 flex flex-col gap-5">
              <div className="text-lg font-semibold text-gray-600">
                What are you looking for?
              </div>
              <div className="w-full flex flex-wrap ">
               {
                dataImage.map((data)=>(
                 
                  <Link 
                  to={data.url}
                  className="flex flex-col gap-2 items-center w-1/2 sm:w-1/3 md:w-auto p-2 cursor-pointer 
                  hover:border-b-[2px] border-blue-400">
                  
                  <img
                    src={data.img}
                    alt=""
                    className="w-[130px] h-[80px] rounded-md"
                  />
                  <div className="w-[100px] text-sm text-center">
                    <h1 className="text-center">{data.name}</h1>
                  </div>
                 
                </Link>
                ))
               }
               
                
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <img src="./imgall.jpeg" alt="" className="w-full md:w-[600px]" />
          </div>
        </div>

        {/* Rating and happy customer */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 pt-10">
          <div className="flex items-center gap-2">
            <PiStarThin className="w-[35px] h-[35px]" />
            <div>
              <p className="font-bold text-xl">4.8</p>
              <p className="text-gray-600 text-sm">Service Rating</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <BsPeople className="w-[35px] h-[35px]" />
            <div>
              <p className="font-bold text-xl">5M+</p>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className=" w-full md:w-2/3 flex flex-col mx-auto py-20 ">
        <div className="   underline text-5xl font-semibold r">
          <h1>Our Services</h1>
        </div>
        <Slider {...settings}>
          {data.map((d) => (
            <div className="  py-10">
              <div className="  rounded-xl md:w-[300px] w-full flex justify-center items-center">
                <img src={d.img} className=" w-full h-[300px]  rounded-xl" />
              </div>
              <div className=" mt-2 ">
                <p className=" text-lg font-semibold">{d.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Section Discout */}
      <section className=" bg-gray-100 w-full">
        <div className=" w-2/3 mx-auto flex items-center ">
          {" "}
          <h1 className=" text-5xl mt-10 underline  font-semibold">
            Offer Zone
          </h1>
        </div>
        <Discount />
      </section>
      {/* Data Ac Services */}
      <section className=" w-2/3 flex flex-col mx-auto mt-20">
        <div>
          <h2 className=" text-3xl font-bold">AC & appliance repair</h2>
        </div>
        <Slider {...settings}>
          {dataAc.map((d) => (
            <div className="  ">
              <div className="md:w-[300px] w-full hover:border-[1px] border-gray-600 rounded-md ">
                <div className=" mt-2  top-0 ">
                  <p className=" text-lg font-semibold p-5">{d.name}</p>
                </div>
                <div className="  rounded-xl  flex justify-center items-center">
                  <img src={d.img} className=" w-full h-[300px] rounded-xl" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Home Services */}
      <section className=" w-2/3 flex flex-col mx-auto mt-20">
        <div>
          <h2 className=" text-3xl font-bold">Quick Home repair</h2>
        </div>
        <Slider {...settings}>
          {dataHome.map((d) => (
            <div className=" relative py-10 pb-10">
              <div className="  rounded-xl md:w-[300px] w-full flex justify-center items-center">
                <img src={d.img} className=" w-full h-[300px] rounded-xl" />
              </div>
              <div className=" mt-2  ">
                <p className=" text-lg font-semibold">{d.name}</p>
                <p className=" text<NavBar/>-sm"> &#8377;{d.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
 
     
     
    </div>
  );
};

export default Main;
