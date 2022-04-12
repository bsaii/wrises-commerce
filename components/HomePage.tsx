import React from "react";
import Image from "next/image";

import { MdOutlineLocalShipping, MdOutlinePayments } from "react-icons/md";
import { RiSecurePaymentLine, RiCustomerService2Line } from "react-icons/ri";

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-display text-7xl text-center font-extrabold mt-12">
            it&apos;s all about you.
          </h1>
          <p className="font-body text-sm text-gray-400 text-center mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            voluptate similique, quam magnam consectetur molestiae!
          </p>
          <button className="mt-6 bg-blue-600 w-28 h-9 rounded font-semibold z-10">
            Shop Now
          </button>
        </div>

        {/* image */}
        <div className="flex justify-center items-center -mt-8 mb-2">
          <Image src="/watch3.png" alt="watch" width={400} height={400} />
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
