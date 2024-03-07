"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HaveAProject = () => {
  return (
    <section className="w-full h-[200px] bg-white shadow-lg flex md:gap-10 gap-5 items-center justify-center flex-col lg:flex-row">
      <h1 className="lg:our-projects lg:text-[22px] md:text-[20px] text-[18px] font-semibold text-gray-600">
        Have a project ready?
      </h1>
      <Link href={"/apply"}>
      <Button className="bg-blue-500 w-[150px] h-[50px]">APPLY NOW</Button>
      </Link>
    </section>
  );
};
