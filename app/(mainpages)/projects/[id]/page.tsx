import { Slider } from "@/components/Slider";
import { ImageData, TableData } from "@/schema";
import React from "react";

import Image from "next/image";

import img1 from "@/public/projects/p1-1.jpg";
import img2 from "@/public/projects/p2-1.jpg";
import img3 from "@/public/projects/p3-1.png";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Project = async (req: any, res: any) => {
  const { id } = req?.params;

  const images: ImageData[] = [
    { image: img1, name: "Imag1" },
    { image: img2, name: "Image2" },
    { image: img3, name: "Image3" },
  ];
  const datas: TableData[] = [
    { key: "Key1", value: "value1" },
    { key: "Key2", value: "value2" },
  ];
  const content: string = `Deep well handpump cause discomfort and fatigue to the user after long hours of operation. To overcome this problem a pendulum incorporated hand pump design was made and fabricated. The prototype built was far more effective and easier to use than the normal pump.
  <br/><br/>
  The long-pivoted shaft is replaced by a pendulum which provides exact torque needed to rise the piston up. The pendulum oscillates with minimum force applied. This design uses the energy stored in the pendulum as an advantage. In this design six strokes can be achieved with an initial force.`;

  const name = "Pendulam Project";
  return (
    <div className="w-full flex flex-col items-center  bg-sky-200/50">
      <Slider images={images} />
      <div className="md:w-[90%] w-full flex justify-center gap-5 mb-10">
        <div className="p-4 m-4 flex justify-start w-full">
          <Image src={img1} alt="Main" height={350} className="h-fit" />
        </div>
        <div className="w-full flex flex-col gap-10">
          <div className="relative w-full">
            <span className="text-black font-bold text-[70px] w-1/2">
              {name}
            </span>
            <div className="absolute left-3 -bottom-4 w-[300px] h-2 bg-blue-500 rounded-2xl" />
          </div>
          {datas && datas.length > 0 && (
            <Table className="w-2/3">
              <TableHeader>
                <TableRow className="bg-sky-300 text-lg capitalize ">
                  <TableHead>Project Name</TableHead>
                  <TableHead>{name}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {datas.map((data, index) => (
                  <TableRow
                    className=" bg-sky-200 text-lg font-semibold"
                    key={index}
                  >
                    <TableCell>{data.key}</TableCell>
                    <TableCell>{data.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
          <p
            className=" text-xl font-montserrat text-balance mb-10 text-gray-600 font"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
