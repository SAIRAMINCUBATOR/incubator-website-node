"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import axios from "axios";
import { Gender } from "@prisma/client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertCircle, Loader2, PlusCircle } from "lucide-react";
import { toast } from "sonner";
import { useSession } from "@/components/providers/context/SessionContext";
import { useRouter } from "next/navigation";
import { UserData } from "@/schema";

const UserButton = ({ setClose }: { setClose: () => void }) => {
  const { token, clearSession, isTokenExpired, role } = useSession();
  //@ts-ignore
  const [response, setResponse] = useState<UserData>();
  const [image, setImage] = useState<string>("");
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const getData = async () => {
    // console.log(token);
    try {
      const response = await axios.get("/api/auth/getUser", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setResponse(response.data.user);
    } catch (error) {
      //@ts-ignore
      if (error && error.response && error.response.data) {
        toast(
          <>
            <AlertCircle />
            {error.response.data}
          </>
        );
      }

      console.error(error);
    }
  };
  useEffect(() => {
    if (token) getData();
  }, [token]);

  const handleLogout = () => {
    setOpen(false);
    setClose();
    router.push("/");
    clearSession();
  };

  useEffect(() => {
    if (response && response.gender === Gender.MALE) {
      setImage("/male.png");
    } else if (response && response.gender === Gender.FEMALE) {
      setImage("/female.png");
    }
  }, [response]);

  return (
    <>
      {token ? (
        <Popover
          open={open}
          onOpenChange={() => {
            if (response) setOpen(!open);
          }}
        >
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src={image} />
              <AvatarFallback>
                <Loader2 className="animate-spin" />
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <div className="w-full flex flex-col gap-3 items-center">
              <div>
                <span>{response?.name}</span> -{" "}
                <span className=" text-sm text-gray-400">
                  {response?.email}
                </span>
              </div>
              {role && role === "ADMIN" && (
                <Link
                  href={"/auth/addUser"}
                  className="w-full"
                  onClick={() => {
                    setClose();
                    setOpen(false);
                  }}
                >
                  <Button
                    variant={"secondary"}
                    className="w-full flex gap-2 bg-gray-200"
                  >
                    <PlusCircle className="h-5 w-5 text-secondary-foreground" />
                    Add User
                  </Button>
                </Link>
              )}
              <Button className="w-full" onClick={handleLogout}>
                Log out
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <Link href={"/auth/signin"} onClick={() => setClose()}>
          <Button>Sign In</Button>
        </Link>
      )}
    </>
  );
};

export default UserButton;
