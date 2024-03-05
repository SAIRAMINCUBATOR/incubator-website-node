"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export const HaveAProject = () => {
  return (
    <section className="w-full h-[200px] bg-white shadow-lg flex gap-10 items-center justify-center">
        <h1 className="our-projects text-[1.8rem]">Have a project ready?</h1>
        <Button className="bg-blue-500 w-[150px] h-[50px]">
            APPLY NOW
        </Button>
    </section>
  );
};
