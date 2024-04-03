import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Edit | Sairam Techno Incubator",
};
const EditLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100 min-h-screen ">
      {children}
    </div>
  );
};

export default EditLayout;
