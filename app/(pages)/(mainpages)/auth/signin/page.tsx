import SignInComponent from "@/components/SignInComponent";
import logo from "@/public/logo.png";
import Image from "next/image";

const SignIn = async () => {
  return (
    <div className="bg-sky-300/20 w-full h-full flex justify-center items-center py-32">
      <Image
        src={logo}
        alt={"bg"}
        className="absolute -z-10 h-[100%] w-[100%] object-contain opacity-60"
      />
      <SignInComponent />
    </div>
  );
};

export default SignIn;
