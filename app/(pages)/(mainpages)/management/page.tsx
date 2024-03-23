"use client";
import { AdvisoryBoard, Management, Mentors } from "@prisma/client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSession } from "@/components/providers/context/SessionContext";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
const ManagementPage = () => {
  const [ManagementData, setManagementData] = useState<Management[]>([]);
  const [MentorsData, setMentorsData] = useState<Mentors[]>([]);
  const [AdvisoryBoardData, setAdvisoryBoardData] = useState<AdvisoryBoard[]>(
    []
  );
  const { token } = useSession();
  const getManagementData = async () => {
    try {
      const response = await axios.get("/api/components/management");
      setManagementData(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };

  const getMentorsData = async () => {
    try {
      const response = await axios.get("/api/components/mentors");
      setMentorsData(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };

  const getAdvisoryBoardData = async () => {
    try {
      const response = await axios.get("/api/components/advisoryBoard");
      setAdvisoryBoardData(response.data.response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getManagementData();
    getMentorsData();
    getAdvisoryBoardData();
  }, []);
  interface Props {
    management: Management[];
    mentors: Mentors[];
  }
  const data = [
    {
      id: "1",
      name: "John Doe",
      designation: "Manager",
      experience: "5 years",
      addedByUser: "Alice",
    },
    {
      id: "2",
      name: "Jane Smith",
      designation: "Director",
      experience: "10 years",
      addedByUser: "Bob",
    },
  ];

  return (
    <div>
      <div className="container mx-auto p-4 items-center w-full flex flex-col pb-[5%]">
        <div className="flex items-center">
          <h2
            className="md:text-5xl text-3xl font-bold text-gray-600 transition-transform duration-500 ease-in-out hover:scale-110 py-[2%]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            data-splitting
          >
            OUR MANAGEMENT TEAM
          </h2>
          <div className="absolute right-10">
          {token && (
            <Link href={"/edit?section=auxGallery"}>
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
                NAME OF THE STAFF
              </th>
              <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                DESIGNATION
              </th>
              <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-80 text-center">
                EXPERIENCE
              </th>
            </tr>
          </thead>
          <tbody>
            {ManagementData.map((management, index) => (
              <tr key={management.id}>
                <td className="border px-2 py-2 bg-blue-100 border-blue-400 font-semibold text-blue-900 text-center">
                  {index + 1}
                </td>
                <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                  {management.name}
                </td>
                <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                  {management.designation}
                </td>
                <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-80 text-center">
                  {management.experience}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container mx-auto p-4 items-center w-full flex flex-col pb-[5%]">
        <h2
          className="md:text-5xl text-3xl font-bold text-gray-600 transition-transform duration-500 ease-in-out hover:scale-110 py-[2%]"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          data-splitting
        >
          MENTORS
        </h2>
        <table className="table-auto self-center w-full">
          <thead>
            <tr>
              <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900">
                S.NO
              </th>
              <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                NAME OF THE MENTOR
              </th>
              <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                CURRENT ORGANISATION
              </th>
              <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                DESIGNATION IN CURRENT ORGANISATION
              </th>
              <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-80 text-center">
                SECTOR EXPERTISE
              </th>
            </tr>
          </thead>
          <tbody>
            {MentorsData.map((mentor, index) => (
              <tr key={mentor.id}>
                <td className="border px-2 py-2 bg-blue-100 border-blue-400 font-semibold text-blue-900 text-center">
                  {index + 1}
                </td>
                <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                  {mentor.name}
                </td>
                <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                  {mentor.organization}
                </td>
                <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                  {mentor.designation}
                </td>
                <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-80 text-center">
                  {mentor.expertise}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container mx-auto p-4 items-center w-full flex flex-col pb-[5%]">
        <h2
          className="md:text-5xl text-3xl font-bold text-gray-600 transition-transform duration-500 ease-in-out hover:scale-110 py-[2%]"
          style={{ fontFamily: "Montserrat, sans-serif" }}
          data-splitting
        >
          ADVISORY BOARD
        </h2>
        <table className="table-auto self-center">
          <thead>
            <tr>
              <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900">
                S.NO
              </th>
              <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                NAME OF THE EXPERTISE
              </th>
              <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                CURRENT ORGANISATION
              </th>
              <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-60 text-center">
                DESIGNATION IN CURRENT ORGANISATION
              </th>
              <th className="border px-2 py-2 bg-blue-300 border-blue-400 text-blue-900 min-w-80 text-center">
                SECTOR EXPERTISE
              </th>
            </tr>
          </thead>
          <tbody>
            {AdvisoryBoardData.map((advisory, index) => (
              <tr key={advisory.id}>
                <td className="border px-2 py-2 bg-blue-100 border-blue-400 font-semibold text-blue-900 text-center">
                  {index + 1}
                </td>
                <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                  {advisory.name}
                </td>
                <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                  {advisory.organization}
                </td>
                <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-60 text-center">
                  {advisory.designation}
                </td>
                <td className="border px-2 py-2 bg-blue-200 border-blue-400 font-semibold text-blue-900 min-w-80 text-center">
                  {advisory.expertise}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagementPage;
