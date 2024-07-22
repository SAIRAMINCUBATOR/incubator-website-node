"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "@/components/providers/context/SessionContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { FormatDate } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { RequestData } from "@/schema";
const StartupPage = () => {
  const [StartUpData, SetStartUpData] = useState<RequestData[]>([]);

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
            className=" md:text-4xl text-3xl font-bold text-gray-600 transition-transform duration-500 ease-in-out hover:scale-110 py-[2%] text-center"
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
        <ScrollArea className="md:w-[85vw] w-[90vw] h-[70vh] p-2">
          <table className="table-auto self-center">
            <thead className=" sticky top-0">
              <tr>
                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900"
                  rowSpan={3}
                >
                  S.NO
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  NAME
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-80 text-center"
                  rowSpan={3}
                >
                  DATE OF REGISTRATION
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  DATE OF INCORPORATION
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  IS OPERATIONAL
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  YEARS OF INCORPORATION
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  REGISTRATION NO
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  CONTACT PERSON
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  EMAIL
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  MOBILE
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  WEBSITE
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  IS GRADUATED FROM INCUBATION
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-80 text-center"
                  rowSpan={3}
                >
                  DATE OF GRADUATION
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  IS SIGNED INVESTMENT
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  INVESTMENT FILE
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  IS INVESTED IN INCUBATION
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  INVESTED IN INCUBATION FILE
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  QUANTUM OF INVESTMENT
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  QUANTUM OF INVESTMENT FILE
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  SOURCE OF INVESTMENT
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  SOURCE OF INVESTMENT FILE
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  HAS RAISED FOLLOWING AMOUNT
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  HAS RAISED FOLLOWING AMOUNT FILE
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  QUANTUM OF RAISED AMOUNT
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  QUANTUM OF RAISED AMOUNT FILE
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  HAS CROSSED 1 CR AMOUNT
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  HAS CROSSED 1 CR AMOUNT FILE
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  FINANCIAL YEAR
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  INSTITUTE
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  ROLE
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  ADDRESS
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  SECTOR
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  SDG GOAL
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  INCORPORATION CERTIFICATE
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  UDYAM CERTIFICATE
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  MOU
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  ITR
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  rowSpan={3}
                >
                  DPIIT
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  colSpan={6}
                >
                  Intellectual Property Rights
                </th>
              </tr>
              <tr>
                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  colSpan={2}
                >
                  Patents
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  colSpan={2}
                >
                  CopyRights
                </th>

                <th
                  className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center"
                  colSpan={2}
                >
                  TradeMarks
                </th>
              </tr>
              <tr>
                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  Number Of Patents
                </th>
                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  Patents Files
                </th>

                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  Number Of CopyRights
                </th>
                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  CopyRights Files
                </th>
                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  Number Of TradeMarks
                </th>
                <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                  TradeMarks Files
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
                    {token && startup.investmentFile ? (
                      <a href={startup.investmentFile} target="_blank">
                        View Investment File
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.isInvestedInIncubation ? "Yes" : "No"}
                  </td>
                
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {token && startup.investedInIncubationFile ? (
                      <a
                        href={startup.investedInIncubationFile}
                        target="_blank"
                      >
                        View Invested in Incubation File
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.quantumOfInvestment}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {token && startup.quantumOfInvestmentFile ? (
                      <a href={startup.quantumOfInvestmentFile} target="_blank">
                        View Quantum of Investment File
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.sourceOfInvestment}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {token && startup.sourceOfInvestmentFile ? (
                      <a href={startup.sourceOfInvestmentFile} target="_blank">
                        View Source of Investment File
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.hasRaisedFollowingAmount ? "Yes" : "No"}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {token && startup.hasRaisedFollowingAmountFile ? (
                      <a
                        href={startup.hasRaisedFollowingAmountFile}
                        target="_blank"
                      >
                        View Raised Following Amount File
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.quantumOfRaisedAmount}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {token && startup.quantumOfRaisedAmountFile ? (
                      <a
                        href={startup.quantumOfRaisedAmountFile}
                        target="_blank"
                      >
                        View Quantum of Raised Amount File
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.hasCrossed1CrAmount ? "Yes" : "No"}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {token && startup.hasCrossed1CrAmountFile ? (
                      <a href={startup.hasCrossed1CrAmountFile} target="_blank">
                        View Has Crossed 1 Cr Amount File
                      </a>
                    ) : (
                      "N/A"
                    )}
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
                    {token && startup.incorporationCertificate ? (
                      <a
                        href={startup.incorporationCertificate}
                        target="_blank"
                      >
                        View Incorporation Certificate
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {token && startup.udayamCertificate ? (
                      <a href={startup.udayamCertificate} target="_blank">
                        View Udyam Certificate
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {token && startup.MOU ? (
                      <a href={startup.MOU} target="_blank">
                        View MOU
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {token && startup.ITR ? (
                      <a href={startup.ITR} target="_blank">
                        View ITR
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {token && startup.DPIIT ? (
                      <a href={startup.DPIIT} target="_blank">
                        View DPIIT
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>

                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.Patents.length}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {token && startup.Patents.length > 0 ? (
                      <>
                        {startup.Patents.map((patent, index) => {
                          return (
                            <a href={patent.file} target="_blank">
                              {`${patent.name}`}
                            </a>
                          );
                        })}
                      </>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.CopyRights.length}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {token && startup.CopyRights.length > 0 ? (
                      <>
                        {startup.CopyRights.map((copyright, index) => {
                          return (
                            <a href={copyright.file} target="_blank">
                              {`${copyright.name}`}
                            </a>
                          );
                        })}
                      </>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {startup.TradeMarks.length}
                  </td>
                  <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                    {token && startup.TradeMarks.length > 0 ? (
                      <>
                        {startup.TradeMarks.map((tradeMark, index) => {
                          return (
                            <a href={tradeMark.file} target="_blank">
                              {`${tradeMark.name}`}
                            </a>
                          );
                        })}
                      </>
                    ) : (
                      "N/A"
                    )}
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
