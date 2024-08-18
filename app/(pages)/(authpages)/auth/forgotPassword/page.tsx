import Image from "next/image";
import logo from "@/public/logo.png";
import ForgotPasswordComponent from "@/components/ForgotPasswordComponent";

const ForgotPassword = async () => {
  return (
    <div className="bg-sky-300/20 w-full h-full flex justify-center items-center py-32">
      <Image
        src={logo}
        alt={"bg"}
        className="absolute -z-10 h-[100%] w-[100%] object-contain opacity-60"
      />
      <ForgotPasswordComponent />
    </div>
  );
};

export default ForgotPassword;
