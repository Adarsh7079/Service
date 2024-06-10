import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setOpne] = useState();

  return (
    <div className="border-b-2  ">
      {/* desktop View */}
      <nav className=" hidden w-2/3  md:flex justify-between mx-auto py-5 items-center ">
        <div>
          <img src="./uc.svg" alt="" className="w-[150px] h-[50px]" />
        </div>
        <div className=" flex items-center border-[1px] border-gray-300 px-2 rounded-md">
          <img src="./search.svg" alt="" className="w-7" />
          <input
            type="search"
            placeholder="search for"
            className="w-[400px] h-[45px] outline-none px-3"
          />
        </div>
        <div className="flex gap-10">
          <div
            className=" border-[1px] border-gray-300 rounded-md w-[100px] h-[45px] flex  items-center justify-center font-semibold
             cursor-pointer hover:bg-gray-100"
          >
            Worker
          </div>
          <div
            className=" border-[1px] border-gray-300 rounded-md w-[100px]  h-[45px] flex items-center justify-center font-semibold
            cursor-pointer hover:bg-gray-100"
          >
            Login
          </div>
        </div>
      </nav>

      {/* Mobile */}
      <nav className=" md:hidden   relative">
        <div className=" w-full px-10 flex justify-between">
        <div>
          <img src="./uc.svg" alt="" className="w-[150px] h-[50px]" />
        </div>
        <div
          className=" text-3xl cursor-pointer"
          onClick={(e) => setOpne(!isOpen)}
        >
          &#9776;
        </div>
        </div>
        {isOpen && (
          <div className=" absolute top-12 flex flex-col py-2 h-[300px] justify-between w-full bg-slate-50 pb-5 backdrop:filter overflow-x-hidden px-5">
            <div className=" flex items-center border-[1px] border-gray-300 px-2 rounded-md ">
              <img src="./search.svg" alt="" className="w-7" />
              <input
                type="search"
                placeholder="search for"
                className=" w-full h-[45px] outline-none "
              />
            </div>
            <div className="flex gap-2 flex-col">
              <div
                className=" border-[1px] border-gray-300 rounded-md w-full h-[45px] flex  items-center justify-center font-semibold
             cursor-pointer hover:bg-gray-100"
              >
                Worker
              </div>
              <div
                className=" border-[1px] border-gray-300 rounded-md w-full  h-[45px] flex items-center justify-center font-semibold
            cursor-pointer hover:bg-gray-100"
              >
                Login
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
