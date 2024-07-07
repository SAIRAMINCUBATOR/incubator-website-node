"use client";
import { StartUpData } from "@prisma/client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "@/components/providers/context/SessionContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { FormatDate } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
const StartupPage = () => {
  const [StartUpData, SetStartUpData] = useState<StartUpData[]>([]);

  const { token } = useSession();
  const getStartUpData = async () => {
    try {
      const response = await axios.get("/api/components/startupData");
      SetStartUpData(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getStartUpData();
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
            START UP DATABASE
          </h2>
          <div className="absolute right-10">
            {token && (
              <Link href={"/edit?section=startupData"}>
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
        <ScrollArea className="w-[85vw] p-2">
          <table className="table-auto self-center ">
            <thead>
              <tr>
                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900">
                  S.NO
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  NAME
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-80 text-center">
                  DATE OF REGISTRATION
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  DATE OF INCORPORATION
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  IS OPERATIONAL
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  YEARS OF INCORPORATION
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  REGISTRATION NO
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  CONTACT PERSON
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  EMAIL
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  MOBILE
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  WEBSITE
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  IS GRADUATED FROM INCUBATION
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-80 text-center">
                  DATE OF GRADUATION
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  IS SIGNED INVESTMENT
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  INVESTMENT FILE
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  IS INVESTED IN INCUBATION
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  INVESTED IN INCUBATION FILE
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  QUANTUM OF INVESTMENT
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  QUANTUM OF INVESTMENT FILE
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  SOURCE OF INVESTMENT
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  SOURCE OF INVESTMENT FILE
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  HAS RAISED FOLLOWING AMOUNT
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  HAS RAISED FOLLOWING AMOUNT FILE
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  QUANTUM OF RAISED AMOUNT
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  QUANTUM OF RAISED AMOUNT FILE
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  HAS CROSSED 1 CR AMOUNT
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  HAS CROSSED 1 CR AMOUNT FILE
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  FINANCIAL YEAR
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  INSTITUTE
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  ROLE
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  ADDRESS
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  SECTOR
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  SDG GOAL
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  INCORPORATION CERTIFICATE
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  UDYAM CERTIFICATE
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  MOU
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  ITR
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  DPIIT
                </th>
              </tr>
            </thead>
            <tbody>
              {StartUpData.map((startup, index) => (
                <tr key={startup.id}>
                  <td className="border px-2 py-2 bg-blue-100 border-blue-400 font-semibold text-blue-900 text-center">
                    {index + 1}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.name}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-80 text-center">
                    {FormatDate(startup.dateOfRegistration)}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {FormatDate(startup.dateOfIncorporation)}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.isOperational ? "Yes" : "No"}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.yearsOfIncorporation}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.RegistrationNo}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.ContactPerson}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    <a href={`mailto:${startup.email}`}>{startup.email}</a>
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    <a href={`tel:${startup.mobile}`}>{startup.mobile}</a>
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    <a href={startup.website} target="_blank">
                      {startup.website}
                    </a>
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.isGraduatedFromIncubation ? "Yes" : "No"}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-80 text-center">
                    {FormatDate(startup.dateOfGraduation)}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.isSignedInvestment ? "Yes" : "No"}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    <a href={startup.investmentFile} target="_blank">
                      View Investment File
                    </a>
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.isInvestedInIncubation ? "Yes" : "No"}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    <a href={startup.investedInIncubationFile} target="_blank">
                      View Invested in Incubation File
                    </a>
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.quantumOfInvestment}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    <a href={startup.quantumOfInvestmentFile} target="_blank">
                      View Quantum of Investment File
                    </a>
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.sourceOfInvestment}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    <a href={startup.sourceOfInvestmentFile} target="_blank">
                      View Source of Investment File
                    </a>
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.hasRaisedFollowingAmount ? "Yes" : "No"}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    <a
                      href={startup.hasRaisedFollowingAmountFile}
                      target="_blank"
                    >
                      View Raised Following Amount File
                    </a>
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.quantumOfRaisedAmount}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    <a href={startup.quantumOfRaisedAmountFile} target="_blank">
                      View Quantum of Raised Amount File
                    </a>
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.hasCrossed1CrAmount ? "Yes" : "No"}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    <a href={startup.hasCrossed1CrAmountFile} target="_blank">
                      View Has Crossed 1 Cr Amount File
                    </a>
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.FinancialYear}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.Institute}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.Role}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.address}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.sector}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.sdgGoal.join(", ")}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    <a href={startup.incorporationCertificate} target="_blank">
                      View Incorporation Certificate
                    </a>
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    <a href={startup.udayamCertificate} target="_blank">
                      View Udyam Certificate
                    </a>
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    <a href={startup.MOU} target="_blank">
                      View MOU
                    </a>
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    <a href={startup.ITR} target="_blank">
                      View ITR
                    </a>
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    <a href={startup.DPIIT} target="_blank">
                      View DPIIT
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default StartupPage;
