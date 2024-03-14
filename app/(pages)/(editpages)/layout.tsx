import { Navbar } from "@/components/Navbar";
import React from "react";

const EditLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100 min-h-screen ">
      {children}
    </div>
  );
};

export default EditLayout;
