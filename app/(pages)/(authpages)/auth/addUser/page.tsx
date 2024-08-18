import AddUserComponent from '@/components/AddUserComponent'
import React from 'react'
import logo from "@/public/logo.png";
import Image from 'next/image';

const AddUserPage = () => {
  return (
    <div className="bg-sky-300/20  w-full h-full flex justify-center items-center py-4">
      <Image
        src={logo}
        alt={"bg"}
        className="absolute -z-10 h-[100%] w-[100%] object-contain opacity-60"
      />
      <AddUserComponent/>
    </div>
  )
}

export default AddUserPage