import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
  name: String;
  designation: String;
  facebook?: String;
  twitter?: String;
  linkedin?: String;
  instagram?: String;
}

export const TeamPeople = ({
  image,
  name,
  designation,
  facebook,
  twitter,
  linkedin,
  instagram,
}: Props) => {
  return (
    <div className="group m-4 shadow-lg mt-[50px]">
      <div className=" relative h-[400px] w-[300px] border-8 border-spacing-2 border-white transition-all duration-200 ease-in-out group-hover:drop-shadow-2xl group-hover:shadow-2xl">
        <Image
          src={image}
          alt={designation}
          className=" rounded-md object-fit h-[385px] w-[290px] top-0 transition-all duration-200 ease-in-out group-hover:-translate-y-[85px] group-hover:drop-shadow-2xl absolute"
        />
        <div className="bg-blue-500 w-full h-full p-2 flex flex-col text-center justify-end">
          <div className="flex justify-center items-center gap-5">
            {facebook && (
              <Facebook className="rounded-full bg-white bg-opacity-90 group-hover:z-20 py-2 text-bold h-12 w-12 transition-all duration-500 ease-in-out group-hover:-translate-y-24 delay-0 opacity-0 group-hover:opacity-100" />
            )}
            {linkedin && (
              <Linkedin className="rounded-full bg-white bg-opacity-90 group-hover:z-20 py-2 text-bold h-12 w-12 transition-all duration-500 ease-in-out group-hover:-translate-y-24  delay-75 opacity-0 group-hover:opacity-100" />
            )}
            {instagram && (
              <Instagram className="rounded-full bg-white bg-opacity-90 group-hover:z-20 py-2 text-bold h-12 w-12 transition-all duration-500 ease-in-out group-hover:-translate-y-24 delay-100 opacity-0 group-hover:opacity-100" />
            )}
            {twitter && (
              <Twitter className="rounded-full bg-white bg-opacity-90 group-hover:z-20 p-2 text-bold h-12 w-12 transition-all duration-500 ease-in-out group-hover:-translate-y-24 delay-150 opacity-0 group-hover:opacity-100" />
            )}
          </div>
          <span
            className=" text-white font-bold text-lg "
            dangerouslySetInnerHTML={{ __html: name }}
          />
          <span
            className="text-white text-md w-full text-wrap"
            dangerouslySetInnerHTML={{ __html: designation }}
          />
        </div>
      </div>
    </div>
  );
};
