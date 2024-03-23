"use client";
import { IPR } from "@prisma/client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useSession } from "@/components/providers/context/SessionContext";
const IPRPage = () => {
  const [IPRData, setIPRData] = useState<IPR[]>([]);
  const {token} = useSession();
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

  return (
    <div>
      <div className="container mx-auto p-4 items-center w-full flex flex-col pb-[5%]">
        <div className="flex items-center">
          <h2
            className="md:text-5xl text-3xl font-bold text-gray-600 transition-transform duration-500 ease-in-out hover:scale-110 py-[2%]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            data-splitting
          >
            INTELLECTUAL PROPERTY RIGHTS (I.P.R.)
          </h2>
          <div className="absolute right-10">
          {token && (
          <Link href={"/edit?section=ipr"}>
            <Button
              variant={"ghost"}
              className="bg-green-400 w-[100px] text-white shadow-md"
            >
              <Pencil className="h-4 w-4 mr-2 fill-green-800" stroke="false" />
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
                NAME
              </th>
              <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                JOBS/RESPONSIBILITY
              </th>
              <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-80 text-center">
                POSITION
              </th>
            </tr>
          </thead>
          <tbody>
            {IPRData.map((ipr, index) => (
              <tr key={ipr.id}>
                <td className="border px-2 py-2 bg-blue-100 border-blue-400 font-semibold text-blue-900 text-center">
                  {index + 1}
                </td>
                <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                  {ipr.name}
                </td>
                <td className="border px-7 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 md:max-w-[700px]">
                  <ul className=" list-disc">
                    {ipr.jobs &&
                      ipr.jobs.map((job, index) => (
                        <li className="text-left">{job}</li>
                      ))}
                  </ul>
                </td>
                <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-80 text-center">
                  {ipr.designation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IPRPage;
