import React from "react";

const EditLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100 min-h-screen p-2">{children}</div>;
};

export default EditLayout;
