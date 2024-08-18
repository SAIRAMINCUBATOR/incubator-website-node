"use client";
import Image from "next/image";
import logo from "@/public/logo.png";
import SetForgotPasswordComponent from "@/components/SetForgotPasswordComponent";
import { useParams } from "next/navigation";

const SetForgotPassword = async () => {
  const {id} = useParams();
  return (
    <div className="bg-sky-300/20 w-full h-full flex justify-center items-center py-32">
      <Image
        src={logo}
        alt={"bg"}
        className="absolute -z-10 h-[100%] w-[100%] object-contain opacity-60"
      />
      <SetForgotPasswordComponent id={id}/>
    </div>
  );
};

export default SetForgotPassword;
