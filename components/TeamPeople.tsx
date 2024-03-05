import { TeamInt } from "@/schema";
import {
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  team: TeamInt;
}

export const TeamPeople = ({ team }: Props) => {
  return (
    <div className="group m-4 shadow-lg mt-[50px] w-fit">
      <div className=" relative md:h-[400px] md:w-[300px] h-[300px] w-full border-8 border-spacing-2 border-purple-200 transition-all duration-200 ease-in-out group-hover:drop-shadow-xl group-hover:shadow-xl">
        <div className="rounded-md md:h-[385px] md:w-[284px] h-[285px] w-full top-0 transition-all duration-300 ease-in-out group-hover:-translate-y-[85px] group-hover:drop-shadow-xl absolute">
          <Image
            src={team.image}
            alt={team.name}
            className=" group-hover:rounded-t-md object-cover h-full w-full transition-all duration-200 ease-in-out"
          />
          <div className="absolute top-0 rounded-md w-full h-full opacity-0 bg-black transition-opacity duration-200 ease-in-out group-hover:opacity-40"></div>
        </div>
        <div className="bg-blue-500 w-full h-full p-2 flex flex-col text-center justify-end">
          <div className="flex justify-center items-center gap-5">
            {team.facebook && (
              <Link href={team.facebook} target="_blank">
                <Facebook className="rounded-full bg-white bg-opacity-90 group-hover:z-20 py-2 text-bold h-12 w-12 transition-all duration-500 ease-in-out group-hover:-translate-y-24 delay-0 opacity-0 group-hover:opacity-100" />
              </Link>
            )}
            {team.linkedin && (
              <Link href={team.linkedin} target="_blank">
                <Linkedin className="rounded-full bg-white bg-opacity-90 group-hover:z-20 py-2 text-bold h-12 w-12 transition-all duration-500 ease-in-out group-hover:-translate-y-24  delay-75 opacity-0 group-hover:opacity-100" />
              </Link>
            )}
            {team.instagram && (
              <Link href={team.instagram} target="_blank">
                <Instagram className="rounded-full bg-white bg-opacity-90 group-hover:z-20 py-2 text-bold h-12 w-12 transition-all duration-500 ease-in-out group-hover:-translate-y-24 delay-100 opacity-0 group-hover:opacity-100" />
              </Link>
            )}
            {team.twitter && (
              <Link href={team.twitter} target="_blank">
                <Twitter className="rounded-full bg-white bg-opacity-90 group-hover:z-20 p-2 text-bold h-12 w-12 transition-all duration-500 ease-in-out group-hover:-translate-y-24 delay-150 opacity-0 group-hover:opacity-100" />
              </Link>
            )}
          </div>
          <span
            className=" text-white font-bold text-lg "
            dangerouslySetInnerHTML={{ __html: team.name }}
          />
          <span
            className="text-white text-md w-full text-wrap"
            dangerouslySetInnerHTML={{ __html: team.designation }}
          />
        </div>
        <div className="absolute top-[81%] w-full h-[19.5%] gradient-overlay flex items-center justify-center lg:hidden group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
          <ChevronUp size={36} color="#ffffff" strokeWidth={3} />
        </div>
      </div>
    </div>
  );
};
