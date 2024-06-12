import React from "react";
const data = [
  {
    img: `./switch1.png`,
    name: `switch & socket`,
    id: `switch`,
  },
  {
    img: `./fan1.jpeg`,
    name: `Fan`,
    id: `fan`,
  },
  {
    img: `./mcb1.jpeg`,
    name: `MCB & Fuse`,
    id: `mcb`,
  },
  {
    img: `./light1.jpeg`,
    name: `Light`,
    id: `light`,
  },
  {
    img: `./inverter1.png`,
    name: `Inverter`,
    id: `inverter`,
  },
  {
    img: `./wiring1.jpeg`,
    name: `Wiring`,
    id: `wiring`,
  },
  {
    img: `./bell1.jpeg`,
    name: `Bell`,
    id: `bell`,
  },
  {
    img: `./appliance1.jpeg`,
    name: `Appliance`,
    id: `Appliance`,
  },
  {
    img: `./looking.jpeg`,
    name: `Looking`,
    id: `Looking`,
  },
];

const dataItem = [
  {
    img: `./switch1.png`,
    price: `239`,
    time:`30 min`,
    description: `Cover Installation only. Switchbox/spare paerts sourced separately`,
  },
  {
    img: `./fan1.jpeg`,
    price: `539`,
    time:`60 min`,
    description: `Cover Installation only. Switchbox/spare paerts sourced separately`,
  },
  {
    img: `./light1.jpeg`,
    price: `239`,
    time:`30 min`,
    description: `Cover Installation only. Switchbox/spare paerts sourced separately`,
  },
  {
    img: `./wiring1.png`,
    price: `239`,
    time:`30 min`,
    description: `Cover Installation only. Switchbox/spare paerts sourced separately`,
  },
  {
    img: `./mcb1.jpeg`,
    price: `339`,
    time:`30 min`,
    description: `Cover Installation only. Switchbox/spare paerts sourced separately`,
  },
];
const Electrician = () => {
  return (
    <div className=" md:w-2/3 mx-auto md:p-0 p-2">
      <div className=" flex flex-wrap gap-10 mt-10">
        <div className="md:w-1/3 w-full flex flex-col gap-10 sticky top-0">
          <h1 className=" text-4xl font-bold">Electrician</h1>
          <div className="w-full border-[1px] border-gray-300 rounded-md p-5  ">
            <div className="w-full flex">
              <h1 className=" text-gray-700">select a service</h1>
            </div>
            <div className=" px-10 flex flex-wrap gap-10 py-5">
              {data.map((item) => (
                <div className=" w-[70px] flex flex-col gap-2 hover:border-b-[1px] border-gray-600">
                  <div>
                    <img
                      src={item.img}
                      alt=""
                      className="w-[70px] h-[70px] rounded-xl"
                    />
                  </div>
                  <h1 className=" text-[12px] text-center">{item.name}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:w-[63%] w-full border-[1px] border-gray-300 rounded-md  ">
          <div>
            <h1 className=" text-3xl font-bold px-7 py-10">Switch & Socket</h1>
            

        <div className=" flex flex-col gap-10">
        {
            dataItem.map((data)=>(
              <div className="border-b-[1px] border-gray-300  mx-10 pb-5">
              <div className="pb-5 px-10 flex gap-14    ">
                <div className=" ">
                  <div className=" flex flex-col gap-5 w-[80%] ">
                    <h1 className=" font-semibold">
                      Switchbox installation (15+ amp)
                    </h1>
                    <div className=" flex  border-b-2 border-gray-300 pb-7 border-dotted">
                      <p>
                        {" "}
                        <span className=" font-bold">&#8377;</span>{" "}
                        <span>{data.price}</span>
                      </p>
                      <div className=" flex gap-2 items-center justify-center">
                        <p className=" text-black text-lg flex items-center justify-center">
                          *
                        </p>
                        <p className=" text-gray-500">{data.time}</p>
                      </div>
                    </div>
                    <div className="">
                     {data.description}
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col items-center gap-2">
                  <img
                    src={data.img}
                    alt=""
                    className=" w-[100px] h-[100px] rounded-xl"
                  />
                  <button className=" bg-green-400 px-5 py-2 rounded-md">
                    Book
                  </button>
                </div>
              </div>
            </div>
            ))
           }
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electrician;
