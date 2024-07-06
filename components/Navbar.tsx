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
import { useSession } from "./providers/context/SessionContext";

export const Navbar = () => {
  const ref = useRef(null);
  const [Navbar, setNavbar] = useState(false);
  const [popOverOpen, setPopOverOpen] = useState(false);

  const [open, setOpen] = useState(false);
  var lastScrollTop = 0;

  useEffect(() => {
    function onScroll() {
      var st =
        (typeof window !== "undefined" && window.pageYOffset) ||
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

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { token, isTokenExpired } = useSession();

  return (
    <div
      ref={ref}
      className={`nav-main ${
        Navbar && "nav-main-hide"
      } w-full max-h-[10%] min-h-[5%]  sticky top-0 left-0 z-40 flex  bg-background shadow-2xl justify-between`}
    >
      <Link href={"/"}>
        <Image
          src={logo}
          alt={"Logo"}
          className={"object-contain h-20 left-0 w-fit p-2 ml-5"}
        />
      </Link>
      <div className={"lg:flex items-center gap-5 m-5 hidden"}>
        <div className="nav-btns flex items-center gap-4">
          <Link
            className="nav-link font-semibold"
            onClick={() => setOpen(false)}
            href={"/#home"}
          >
            HOME
          </Link>
          <Link
            className="nav-link font-semibold"
            onClick={() => setOpen(false)}
            href={"/#about-us"}
          >
            ABOUT US
          </Link>
          <Link
            className="nav-link font-semibold"
            onClick={() => setOpen(false)}
            href={"/#projects"}
          >
            PROJECTS
          </Link>
          <Link
            className="nav-link font-semibold"
            onClick={() => setOpen(false)}
            href={"/#startups"}
          >
            START UPS
          </Link>
          <Link
            className="nav-link font-semibold"
            onClick={() => setOpen(false)}
            href={"/#gallery"}
          >
            GALLERY
          </Link>
          <Link
            className="nav-link font-semibold"
            onClick={() => setOpen(false)}
            href={"/#team"}
          >
            TEAM
          </Link>
          <Link
            className="nav-link font-semibold"
            onClick={() => setOpen(false)}
            href={"/#footer"}
          >
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
                {/* <Link
                  className=" font-semibold"
                  href="/sdg"
                  onClick={() => setPopOverOpen(false)}
                >
                  S.D.G.
                </Link> */}
                <Link
                  className=" font-semibold"
                  href="/management"
                  onClick={() => setPopOverOpen(false)}
                >
                  MANAGEMENT
                </Link>
                <Link
                  className=" font-semibold"
                  href="/ipr"
                  onClick={() => setPopOverOpen(false)}
                >
                  I.P.R
                </Link>
                <Link
                  className=" font-semibold"
                  href="/collaborations"
                  onClick={() => setPopOverOpen(false)}
                >
                  COLLABORATIONS
                </Link>
                <Link
                  className=" font-semibold"
                  href="/fundings"
                  onClick={() => setPopOverOpen(false)}
                >
                  FUNDINGS
                </Link>
                <Link
                  className=" font-semibold"
                  href="/facilities"
                  onClick={() => setPopOverOpen(false)}
                >
                  FACILITIES
                </Link>
                <Link
                  className=" font-semibold"
                  href="/apply"
                  onClick={() => setPopOverOpen(false)}
                >
                  APPLY
                </Link>
                <Link
                  className="nav-link font-semibold"
                  href="/assesment"
                  onClick={() => setOpen(false)}
                >
                  ASSESMENT FRAMEWORK
                </Link>
                {(!token || isTokenExpired()) && (
                  <Link
                    className=" font-semibold"
                    href="/auth/signin"
                    onClick={() => setPopOverOpen(false)}
                  >
                    SIGN IN
                  </Link>
                )}
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <UserButton setClose={() => setPopOverOpen(false)} />
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className={"lg:hidden block mx-5"}>
          <Hamburger toggled={open} toggle={setOpen} size={24} />
        </SheetTrigger>
        <SheetContent className="lg:hidden">
          <SheetHeader>
            <SheetTitle className="text-center">
              Sairam Techno Incubator
            </SheetTitle>
          </SheetHeader>
          <div
            className={"flex flex-col space-y-3 mt-10 items-center nav-btns"}
          >
            <Link
              className="nav-link font-semibold"
              onClick={() => setOpen(false)}
              href={"/#home"}
            >
              HOME
            </Link>
            <Link
              className="nav-link font-semibold"
              onClick={() => setOpen(false)}
              href={"/#about-us"}
            >
              ABOUT US
            </Link>
            <Link
              className="nav-link font-semibold"
              onClick={() => setOpen(false)}
              href={"/#projects"}
            >
              PROJECTS
            </Link>
            <Link
              className="nav-link font-semibold"
              onClick={() => setOpen(false)}
              href={"/#startups"}
            >
              START UPS
            </Link>
            <Link
              className="nav-link font-semibold"
              onClick={() => setOpen(false)}
              href={"/#gallery"}
            >
              GALLERY
            </Link>
            <Link
              className="nav-link font-semibold"
              onClick={() => setOpen(false)}
              href={"/#team"}
            >
              TEAM
            </Link>
            <Link
              className="nav-link font-semibold"
              onClick={() => setOpen(false)}
              href={"/#footer"}
            >
              CONTACT
            </Link>

            {/* <Link className=" font-semibold" href="/sdg">
              S.D.G.
            </Link> */}
            <Link
              className="nav-link font-semibold"
              href="/management"
              onClick={() => setOpen(false)}
            >
              MANAGEMENT
            </Link>
            <Link
              className="nav-link font-semibold"
              href="/ipr"
              onClick={() => setOpen(false)}
            >
              I.P.R
            </Link>
            <Link
              className="nav-link font-semibold"
              href="/collaborations"
              onClick={() => setOpen(false)}
            >
              COLLABORATIONS
            </Link>
            <Link
              className="nav-link font-semibold"
              href="/fundings"
              onClick={() => setOpen(false)}
            >
              FUNDINGS
            </Link>
            <Link
              className="nav-link font-semibold"
              href="/facilities"
              onClick={() => setOpen(false)}
            >
              FACILITIEs
            </Link>
            <Link
              className="nav-link font-semibold"
              href="/apply"
              onClick={() => setOpen(false)}
            >
              APPLY
            </Link>
            <Link
              className="nav-link font-semibold"
              href="/apply"
              onClick={() => setOpen(false)}
            >
              ASSESMENT FRAMEWORk
            </Link>
            {(!token || isTokenExpired()) && (
              <Link
                className="nav-link font-semibold"
                href="/auth/signin"
                onClick={() => setOpen(false)}
              >
                SIGN IN
              </Link>
            )}
          </div>
          <SheetFooter className="bottom-4 absolute left-[50%] -translate-x-[50%]">
            <div className="w-full flex justify-center ">
              <UserButton setClose={() => setOpen(false)} />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
