import React from "react";

const EditLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-slate-300 min-h-screen p-2">{children}</div>;
};

export default EditLayout;
