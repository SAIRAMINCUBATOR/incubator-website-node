"use client";
import { TeamInt } from "@/schema";
import { TeamPeople } from "./TeamPeople";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface Props {
  row0: TeamInt[];
  rowN?: TeamInt[];
}

export const Team = ({ row0, rowN }: Props) => {
  return (
    <div id="team" className="w-full text-center bg-blue-100/50">
      <h2 data-splitting="" className="our-projects">
        OUR TEAM
      </h2>
      <div className="w-full flex flex-col items-center">
        <ScrollArea className="md:w-[80%] w-full ">
          <div className="flex justify-center ">
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
