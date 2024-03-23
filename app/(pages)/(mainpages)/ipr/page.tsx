"use client"
import {  IPR } from "@prisma/client";
import React, { useState,useEffect } from "react";
import axios from "axios";
const IPRPage = () => {
  const [IPRData,setIPRData]=useState<IPR[]>([]);


  const getIPRData = async () => {
    try {
      const response = await axios.get("/api/components/ipr");
      setIPRData(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };

 

  useEffect(() => {
    getIPRData();
  }, []);

  return  (
    <div>
    <div className="container mx-auto p-4 items-center w-full flex flex-col pb-[5%]">
      <h2
            className="md:text-5xl text-3xl font-bold text-gray-600 transition-transform duration-500 ease-in-out hover:scale-110 py-[2%]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            data-splitting
          >
           INTELLECTUAL PROPERTY RIGHTS (I.P.R.)
          </h2>
      <table className="table-auto self-center w-full">
        <thead>
          <tr>
            <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900">S.NO</th>
            <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">NAME</th>
            <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">JOBS/RESPONSIBILITY</th>
            <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-80 text-center">POSITION</th>
          </tr>
        </thead>
        <tbody>
          {IPRData.map((ipr,index) => (
            <tr key={ipr.id}>
              <td className="border px-2 py-2 bg-blue-100 border-blue-400 font-semibold text-blue-900 text-center">{index+1}</td>
              <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">{ipr.name}</td>
              <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">{ipr.jobs}</td>
              <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-80 text-center">{ipr.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

   

    </div>
);

};

export default IPRPage;
