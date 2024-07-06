"use client";
import { AdvisoryBoard, Assesment, Management, Mentors } from "@prisma/client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "@/components/providers/context/SessionContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
const AssesmentPage = () => {
  const [AssesmentData, SetAssesmentData] = useState<Assesment[]>([]);
  
  const { token } = useSession();
  const getAssesmentData = async () => {
    try {
      const response = await axios.get("/api/components/assesment");
      SetAssesmentData(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };

 

  useEffect(() => {
    getAssesmentData();
  }, []);
  
  return (
    <div>
      <div className="container mx-auto p-4 items-center w-full flex flex-col pb-[5%]">
        <div className="flex items-center">
          <h2
            className=" text-3xl font-bold text-gray-600 transition-transform duration-500 ease-in-out hover:scale-110 py-[2%] text-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            data-splitting
          >
            ASSESSMENT FRAMEWORK FOR STARTUP INCUBATION CENTRES
          </h2>
          <div className="absolute right-10">
            {token && (
              <Link href={"/edit?section=assesment"}>
                <Button
                  variant={"ghost"}
                  className="bg-green-400 w-[100px] text-white shadow-md"
                >
                  <Pencil
                    className="h-4 w-4 mr-2 fill-green-800"
                    stroke="false"
                  />
                  Edit
                </Button>
              </Link>
            )}
          </div>
        </div>
        <table className="table-auto self-center w-full">
          <thead>
            <tr>
              <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900">
                S.NO
              </th>
              
              <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                DESCRIPTION
              </th>
              <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-80 text-center">
                File
              </th>
            </tr>
          </thead>
          <tbody>
            {AssesmentData.map((assesment, index) => (
              <tr key={assesment.id}>
                <td className="border px-2 py-2 bg-blue-100 border-blue-400 font-semibold text-blue-900 text-center">
                  {index + 1}
                </td>
                <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                  {assesment.description}
                </td>
               
                <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-80 text-center">
                  <a href={assesment.file} target="_blank">View File</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default AssesmentPage;
