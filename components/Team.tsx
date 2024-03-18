"use client";
import { TeamPeople } from "./TeamPeople";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Team } from "@prisma/client";
import { useSession } from "./providers/context/SessionContext";
import Link from "next/link";
import { Pencil } from "lucide-react";

interface Props {
  row0: Team[];
  rowN?: Team[];
}

export const TeamComponent = ({ row0, rowN }: Props) => {
  const { token } = useSession();
  return (
    <div id="team" className="w-full text-center bg-blue-100/50 p-5">
      <div className="flex justify-end items-center w-full py-2 relative">
        <div className="w-full flex justify-center">
          <h2
            className="md:text-5xl text-3xl font-bold text-gray-600 transition-transform duration-500 ease-in-out hover:scale-110"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            data-splitting
          >
            OUR TEAM
          </h2>
        </div>

        <div className=" absolute top-4 right-4 z-30">
          {token && (
            <Link href={"/edit#leads"}>
              <Pencil />
            </Link>
          )}
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <ScrollArea className="md:w-[80%] w-full gap-y-6">
          <div className="flex justify-center pt-10">
            {row0 &&
              row0.map((team, index) => <TeamPeople team={team} key={index} />)}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="hidden lg:flex flex-wrap items-center w-[85%] justify-center gap-y-6">
          {rowN &&
            rowN.map((team, index) => <TeamPeople team={team} key={index} />)}
        </div>
        <ScrollArea className="lg:hidden block w-full ">
          <div className="flex items-center justify-center">
            {rowN &&
              rowN.map((team, index) => <TeamPeople team={team} key={index} />)}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};
