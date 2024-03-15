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
import { Button } from "./ui/button";
import { useSession } from "./providers/context/SessionContext";

export const Navbar = () => {
  const ref = useRef(null);
  const [Navbar, setNavbar] = useState(false);
  const [popOverOpen, setPopOverOpen] = useState(false);

  const [open, setOpen] = useState(false);
  var lastScrollTop = 0;
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  function SmoothScrollLink({ href, children }) {
    return (
      <Link href={href} className="w-fit m-0 p-0 h-fit">
        <Button
          variant="ghost"
          className="nav-link font-semibold w-fit m-0 p-0 h-fit"
          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            const sectionId = href.split("#")[1]; // Extract section ID from href
            scrollToSection(sectionId); // Scroll to the section
          }}
        >
          {children}
        </Button>
      </Link>
    );
  }

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
      if (window.innerWidth >1024)
      setOpen(false);
  
    }
   
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { token, isTokenExpired } = useSession();

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
        <div className="nav-btns flex items-center gap-3">
          <SmoothScrollLink href={"/#home"}>HOME</SmoothScrollLink>
          <SmoothScrollLink href={"/#about-us"}>ABOUT US</SmoothScrollLink>
          <SmoothScrollLink href={"/#projects"}>PROJECTS</SmoothScrollLink>
          <SmoothScrollLink href={"/#startups"}> START UPS</SmoothScrollLink>
          <SmoothScrollLink href={"/#gallery"}> GALLERY</SmoothScrollLink>
          <SmoothScrollLink href={"/#team"}> TEAM</SmoothScrollLink>
          <SmoothScrollLink href={"/#footer"}> CONTACT</SmoothScrollLink>
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
                <Link
                  className=" font-semibold"
                  href="/sdg"
                  onClick={() => setPopOverOpen(false)}
                >
                  S.D.G.
                </Link>
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
                  href="/main-gallery"
                  onClick={() => setPopOverOpen(false)}
                >
                  MAIN-GALLERY
                </Link>
                <Link
                  className=" font-semibold"
                  href="/apply"
                  onClick={() => setPopOverOpen(false)}
                >
                  APPLY
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
          <div className={"flex flex-col space-y-3 mt-10 items-center"}>
            <SmoothScrollLink href={"/#home"}>HOME</SmoothScrollLink>
            <SmoothScrollLink href={"/#about-us"}>ABOUT US</SmoothScrollLink>
            <SmoothScrollLink href={"/#projects"}>PROJECTS</SmoothScrollLink>
            <SmoothScrollLink href={"/#startups"}> START UPS</SmoothScrollLink>
            <SmoothScrollLink href={"/#gallery"}> GALLERY</SmoothScrollLink>
            <SmoothScrollLink href={"/#team"}> TEAM</SmoothScrollLink>
            <SmoothScrollLink href={"/#footer"}> CONTACT</SmoothScrollLink>

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
