import { Footer } from "@/components/Footer";
import { HaveAProject } from "@/components/HaveAProject";
import { Navbar } from "@/components/Navbar";
import React from "react";

const EditLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100 min-h-screen ">
        <Navbar/>
      {children}
      <HaveAProject/>
      <Footer/>
    </div>
  );
};

export default EditLayout;
