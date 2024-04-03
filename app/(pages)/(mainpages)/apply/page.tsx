import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply | Sairam Techno Incubator",
};
const ApplyPage = () => {
  return (
    <div className="w-full flex justify-center py-5">
      <iframe
        src="https://forms.gle/qTQCSKVyrrDLgaJ26"
        width="1000"
        height="1000"
      ></iframe>
    </div>
  );
};

export default ApplyPage;
