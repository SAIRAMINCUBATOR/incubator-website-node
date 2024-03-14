"use client";
import Image from "next/image";
import logo from "@/public/logo.png";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Squash as Hamburger } from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import UserButton from "./UserButton";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const Navbar = () => {
  const ref = useRef(null);
  const [Navbar, setNavbar] = useState(false);
  const [popOverOpen, setPopOverOpen] = useState(false);

  const [open, setOpen] = useState(false);
  var lastScrollTop = 0;

  useEffect(function onFirstMount() {
    function onScroll() {
      var st =
        (typeof globalThis.window !== "undefined" &&
          globalThis.window?.pageYOffset) ||
        document.documentElement.scrollTop;
      if (ref.current) {
        if (st > lastScrollTop) {
          setNavbar(true);
        } else if (st < lastScrollTop) {
          setNavbar(false);
        }
        lastScrollTop = st <= 0 ? 0 : st;
      }
    }

    if (typeof globalThis.window !== "undefined") {
      globalThis.window?.addEventListener("scroll", onScroll);

      return () => {
        globalThis.window?.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`nav-main ${
        Navbar && "nav-main-hide"
      } w-full max-h-[10%] min-h-[5%]  sticky top-0 left-0 z-20 flex  bg-background shadow-2xl justify-between`}
    >
      <Image
        src={logo}
        alt={"Logo"}
        className={"object-contain h-20 left-0 w-fit p-2 ml-5"}
      />
      <div className={"lg:flex items-center gap-5 m-5 hidden"}>
        <div className="nav-btns gap-5 flex items-center">
          <Link className="nav-link font-semibold" href="/#home">
            HOME
          </Link>
          <Link className="nav-link font-semibold" href="/#about-us">
            ABOUT US
          </Link>
          <Link className="nav-link font-semibold" href="/#projects">
            PRODUCTS
          </Link>
          <Link className="nav-link font-semibold" href="/#startups">
            STARTUPS
          </Link>
          <Link className="nav-link font-semibold" href="/#gallery">
            GALLERY
          </Link>

          <Link className="nav-link font-semibold" href="/#team">
            TEAM
          </Link>

          <Link className="nav-link font-semibold" href="/#footer">
            CONTACT
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Popover open={popOverOpen} onOpenChange={setPopOverOpen}>
            <PopoverTrigger>
              <Hamburger
                toggled={popOverOpen}
                toggle={setPopOverOpen}
                size={24}
                duration={0.4}
              />
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col justify-center items-center nav-btns gap-3">
                <Link className=" font-semibold" href="/sdg">
                  S.D.G.
                </Link>
                <Link className=" font-semibold" href="/management">
                  MANAGEMENT
                </Link>
                <Link className=" font-semibold" href="/ipr">
                  I.P.R
                </Link>
                <Link className=" font-semibold" href="/collaborations">
                  COLLABORATIONS
                </Link>
                <Link className=" font-semibold" href="/fundings">
                  FUNDINGS
                </Link>
                <Link className=" font-semibold" href="/main-gallery">
                  MAIN-GALLERY
                </Link>
                <Link className=" font-semibold" href="/apply">
                  APPLY
                </Link>
              </div>
            </PopoverContent>
          </Popover>
          <UserButton setClose={() => setOpen(false)} />
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className={"lg:hidden block mx-5"}>
          <Hamburger toggled={open} toggle={setOpen} size={24} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-center">
              Sairam Techno Incubator
            </SheetTitle>
          </SheetHeader>
          <div className={"flex flex-col space-y-3 mt-10 items-center"}>
            <Link className="nav-link font-semibold" href="/#home">
              HOME
            </Link>
            <Link className="nav-link font-semibold" href="/#about-us">
              ABOUT US
            </Link>
            <Link className="nav-link font-semibold" href="/#projects">
              PRODUCTS
            </Link>
            <Link className="nav-link font-semibold" href="/#startups">
              STARTUPS
            </Link>
            <Link className="nav-link font-semibold" href="/#gallery">
              GALLERY
            </Link>
            <Link className="nav-link font-semibold" href="/#team">
              TEAM
            </Link>
            <Link className="nav-link font-semibold" href="/#footer">
              CONTACT
            </Link>
            <Link className=" font-semibold" href="/sdg">
              S.D.G.
            </Link>
            <Link className=" font-semibold" href="/management">
              MANAGEMENT
            </Link>
            <Link className=" font-semibold" href="/ipr">
              I.P.R
            </Link>
            <Link className=" font-semibold" href="/collaborations">
              COLLABORATIONS
            </Link>
            <Link className=" font-semibold" href="/fundings">
              FUNDINGS
            </Link>
            <Link className=" font-semibold" href="/main-gallery">
              MAIN-GALLERY
            </Link>
            <Link className=" font-semibold" href="/apply">
              APPLY
            </Link>
          </div>
          <SheetFooter className="">
            <div className="w-full flex justify-center pt-4">
              <UserButton setClose={() => setOpen(false)} />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
