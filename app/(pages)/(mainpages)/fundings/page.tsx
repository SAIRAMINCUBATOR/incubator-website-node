"use client"
import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Funding } from "@prisma/client";
const FundingPage = () => {
  const [FundingData,setFundingData]=useState<Funding[]>([]);


  const getFundingData = async () => {
    try {
      const response = await axios.get("/api/components/funding");
      setFundingData(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };

 

  useEffect(() => {
    getFundingData();
  }, []);

  return  (
    <div>
    <div className="container mx-auto p-4 items-center w-full flex flex-col pb-[5%]">
      <h2
            className="md:text-5xl text-3xl font-bold text-gray-600 transition-transform duration-500 ease-in-out hover:scale-110 py-[2%]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            data-splitting
          >
           FUNDING PROGRAMME
          </h2>
      <table className="table-auto self-center w-full">
        <thead>
          <tr>
            <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900">S.NO</th>
            <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">NAME</th>
            <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">CORPORATE IDENTIFICATION NUMBER (CIN) / REGISTRATION NUMBER</th>
            <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-80 text-center">CONTACT PERSON NAME (FOUNDER / COFOUNDER / CEO / DIRECTOR)</th>
          </tr>
        </thead>
        <tbody>
          {FundingData.map((funding,index) => (
            <tr key={funding.id}>
              <td className="border px-2 py-2 bg-blue-100 border-blue-400 font-semibold text-blue-900 text-center">{index+1}</td>
              <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">{funding.name}</td>
              <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">{funding.cin}</td>
              <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-80 text-center">{funding.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

   

    </div>
);
};

export default FundingPage;
