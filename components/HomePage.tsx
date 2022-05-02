import React from "react";
import Image from "next/image";

import { MdOutlineLocalShipping, MdOutlinePayments } from "react-icons/md";
import { RiSecurePaymentLine, RiCustomerService2Line } from "react-icons/ri";

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <div className="container mx-auto h-screen sm:flex sm:flex-row-reverse sm:bg-gray-100 md:justify-center md:items-center md:h-auto md:px-12 lg:h-auto lg:px-28 lg:py-20">
        {/* image */}
        <div className="bg-gray-200 sm:bg-gray-100 p-4 rounded h-1/2 flex justify-center items-center sm:basis-1/2">
          <Image src="/img/watch1.png" width={450} height={450} />
        </div>

        {/*  */}
        <div className="flex flex-col items-center text-center h-1/2 mt-4 sm:basis-1/2 sm:items-start sm:text-left">
          <h6 className="bg-yellow-400 w-fit px-2 font-body font-thin text-xs my-2 text-slate-700 uppercase">empire collection</h6>
          <h1 className="font-display text-3xl lg:text-7xl text-slate-900 font-extrabold tracking-tight uppercase">The watch everyone desires!</h1>
          <p className="font-body text-sm lg:text-lg lg:leading-5 text-slate-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sunt?</p>

          {/* Button */}
          <div>
            <button className="my-4 font-body font-semibold text-sm lg:text-base lg:px-11 text-blue-600 py-2 px-8 border-2 border-blue-600 uppercase tracking-tighter">shop now</button>
          </div>
        </div>

      </div>

      {/* Services */}
      <div className="mt-9">
        <h6 className="font-display font-thin text-sm text-center my-4">
          BEST SERVICE
        </h6>
        <h2 className="font-display font-bold text-3xl text-center">
          Our services will make your life more easier
        </h2>

        <div className="mt-4">
          {/* Features services goes here */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3">
            <div>
              <div className="flex flex-col justify-center items-center">
                <MdOutlineLocalShipping className="text-6xl text-yellow-600" />
                <h3 className="font-body text-xl font-semibold text-center">
                  Free Shipping
                </h3>
                <p className="font-body text-xs font-light text-center text-gray-400">
                  Free delivery for all orders
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <MdOutlinePayments className="text-6xl text-green-600" />
              <h3 className="font-body text-xl font-semibold text-center">
                Money Guarantee
              </h3>
              <p className="font-body text-xs font-light text-center text-gray-400">
                30 days money back
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <RiCustomerService2Line className="text-6xl text-orange-600" />
              <h3 className="font-body text-xl font-semibold text-center">
                24/7 Support
              </h3>
              <p className="font-body text-xs font-light text-center text-gray-400">
                Friendly 24/7 support
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <RiSecurePaymentLine className="text-6xl text-blue-600" />
              <h3 className="font-body text-xl font-semibold text-center">
                Secure Payment
              </h3>
              <p className="font-body text-xs font-light text-center text-gray-400">
                All cards accepted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
