"use client";
import * as React from "react";

export const Funds = () => {
  return (
    <section id="fund" className="w-full relative flex flex-col gap-10 flex-wrap justify-center items-center p-7 md:p-8 bg-gradient-to-l from-blue-50 via-blue-90 overflow-hidden z-1">
    {/* Illustration Image */}
    <img loading="lazy" src="illustration14.png" alt="" className="h-[1500px] absolute z-[-1] opacity-30" />

    {/* Heading */}
    <h2 className="our-projects" data-splitting>FUNDS</h2>

    {/* Startup Countups */}
    <div className="flex gap-[200px]">
      {/* Startup Countup 1 */}
      <div className="flex flex-col items-center" data-aos="zoom-in">
        <img loading="lazy" src="rupee-logo.png" className="h-[200px] filter brightness-75 hue-rotate-180" />
        <h3 id="fund-countup" className="our-projects">1.01 Cr+</h3>
        <p className="ml-2">funds</p>
      </div>

      {/* Startup Countup 2 */}
      <div className="flex flex-col items-center" data-aos="zoom-in">
        <img loading="lazy" src="handshake-icon.png" className="h-[200px] filter brightness-75 hue-rotate-180" />
        <h3 id="company-countup" className="our-projects">85+</h3>
        <p className="ml-2">startups incubated</p>
      </div>
    </div>

    {/* Funds Div Wrapper */}
    <div className="flex gap-[70px]">
      {/* Fund Div 1 */}
      <div className="flex flex-col w-[400px] p-5 h-[400px] bg-white border-4 rounded-xl border-blue-500 border-opacity-50 items-center justify-around " data-aos="fade-up" data-aos-offset="100">
      <img loading="lazy" src="edii-tn.jpg" alt="" className="h-[100px] filter self-center" />
        <p className="mt-5 font-semibold text-[18px] text-center">Entrepreneurship Development And Innovation Institute, Tamil Nadu</p>
        <a href="edii.html" className="mt-5 border-[3px] w-[300px] rounded-xl border-blue-500 border-opacity-50 px-[120px] font-semibold pt-1 pb-1 text-blue-500 hover:text-white hover:bg-blue-500">DETAILS</a>
      </div>

      {/* Fund Div 2 */}
      <div className="flex flex-col w-[400px] p-5 h-[400px] bg-white border-4 rounded-xl border-blue-500 border-opacity-50 items-center justify-around" data-aos="fade-up" data-aos-offset="100" data-aos-delay="100">
        <img loading="lazy" src="iDEX.png" alt="" className="h-[100px] filter self-center" />
        <p className="mt-5 font-semibold text-[18px] text-center">Innovations For Defence Excellence (iDEX)</p>
        <a href="edii.html" className="mt-5 border-[3px] w-[300px] rounded-xl border-blue-500 border-opacity-50 px-[120px] font-semibold pt-1 pb-1 text-blue-500 hover:text-white hover:bg-blue-500">DETAILS</a>
      </div>
    </div>
  </section>
  );
};
