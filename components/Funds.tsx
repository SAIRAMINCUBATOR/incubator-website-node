"use client";
import axios from "axios";
import Link from "next/link";
import * as React from "react";
import { useEffect, useState } from "react";
function formatNumberToCr(number: number) {
  const crore = Math.floor(number / 10000000); // Divide by 10^7 to get crore
  const remainder = number % 10000000; // Remainder after getting crore

  if (remainder === 0) {
    return `${crore} Cr`;
  } else {
    const croreFraction = Math.floor((remainder / 10000000) * 10) / 10; // Get the first decimal place
    return `${crore + croreFraction} Cr`;
  }
}

export const Funds = () => {
  const [totalAmount, setTotalAmount] = useState("");
  const [startUpCount, setStartUpCount] = useState(0);
  const getFundingData = async () => {
    try {
      const response = await axios.get("/api/components/funding");

      // Calculate the total amount
      const sum = response.data.response.reduce((total, item) => {
        // Convert amount strings to numbers and sum them up
        return total + parseFloat(item.amount);
      }, 0);
      console.log(String(sum).toLocaleString());

      // Update the state with the total amount
      setTotalAmount(formatNumberToCr(sum));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getStartUpData = async () => {
    try {
      const response = await axios.get("/api/components/startup");
      const totalLength = response.data.response.reduce((total, item) => {
        // Add the length of each 'list' field to the accumulator
        return total + item.list.length;
      }, 0);
      setStartUpCount(totalLength);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getFundingData();
    getStartUpData();
  }, []);
  return (
    <section
      id="fund"
      className=" drop-shadow-lg shadow-inner  w-full relative flex flex-col gap-10 flex-wrap justify-center items-center p-7 md:p-8 bg-gradient-to-l from-blue-50 via-blue-90 overflow-hidden z-1"
    >
      {/* Illustration Image */}
      <img
        loading="lazy"
        src="illustration14.png"
        alt=""
        className="h-[500px] w-[1800px] lg:h-[1500px] lg:w-full absolute z-[-1] opacity-30 hidden lg:block"
      />

      {/* Heading */}
      <h2
        className="md:text-5xl text-3xl font-bold text-gray-600 transition-transform duration-500 ease-in-out hover:scale-110"
        style={{ fontFamily: "Montserrat, sans-serif" }}
        data-splitting
      >
        FUNDS
      </h2>

      {/* Startup Countups */}
      <div className="flex flex-col lg:flex-row lg:gap-[200px]">
        {/* Startup Countup 1 */}
        <div className="flex flex-col items-center" data-aos="zoom-in">
          <img
            loading="lazy"
            src="rupee-logo.png"
            className="h-[200px] filter brightness-75 hue-rotate-180"
          />
          <h3 id="fund-countup" className="our-projects">
            {totalAmount} INR
          </h3>
          <p className="ml-2">Funds</p>
        </div>

        {/* Startup Countup 2 */}
        <div className="flex flex-col items-center" data-aos="zoom-in">
          <img
            loading="lazy"
            src="handshake-icon.png"
            className="h-[200px] filter brightness-50 hue-rotate-180"
          />
          <h3 id="company-countup" className="our-projects">
            {startUpCount}
          </h3>
          <p className="ml-2">Startups incubated</p>
        </div>
      </div>

      {/* Funds Div Wrapper */}
      <div className="flex gap-[70px] flex-col lg:flex-row items-center justify-center">
        {/* Fund Div 1 */}
        <div
          className="flex flex-col md:w-[70%] lg:w-[30%] w-full p-5 h-[400px] bg-white border-4 rounded-xl border-blue-500 border-opacity-50 items-center justify-around"
          data-aos="fade-up"
          data-aos-offset="100"
        >
          <img
            loading="lazy"
            src="edii-tn.jpg"
            alt=""
            className="h-[100px] filter self-center"
          />
          <p className="mt-5 font-semibold text-[18px] text-center">
            Entrepreneurship Development And Innovation Institute, Tamil Nadu
          </p>
          <Link
            href="/edii"
            className="mt-5 border-[3px] w-[80%] rounded-xl border-blue-500 border-opacity-50 font-semibold pt-1 pb-1 text-blue-500 hover:text-white hover:bg-blue-500 text-center"
          >
            DETAILS
          </Link>
        </div>

        {/* Fund Div 2 */}
        <div
          className="flex flex-col md:w-[70%] lg:w-[30%] w-full p-5 h-[400px] bg-white border-4 rounded-xl border-blue-500 border-opacity-50 items-center justify-around"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-delay="100"
        >
          <img
            loading="lazy"
            src="iDEX.png"
            alt=""
            className="h-[100px] filter self-center"
          />
          <p className="mt-5 font-semibold text-[18px] text-center">
            Innovations For Defence Excellence (iDEX)
          </p>
          <Link
            href="/idex"
            className="mt-5 border-[3px] w-[80%] rounded-xl border-blue-500 border-opacity-50 font-semibold pt-1 pb-1 text-blue-500 hover:text-white hover:bg-blue-500 text-center"
          >
            DETAILS
          </Link>
        </div>
      </div>
    </section>
  );
};
