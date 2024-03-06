"use client";
import Image from "next/image";
import logo from "@/public/logo.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import UserButton from "./UserButton";

export const Navbar = () => {
  const ref = useRef(null);
  const [Navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  var lastScrollTop = 0;
  const handleScroll = () => {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (ref.current) {
      if (st > lastScrollTop) {
        // ref.current.classList.add("nav-main-hide");
        setNavbar(true);
      } else if (st < lastScrollTop) {
        // ref.current.classList.remove("nav-main-hide");
        setNavbar(false);
      } // else was horizontal scroll
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`nav-main ${
        Navbar && "nav-main-hide"
      } w-full max-h-[10%] min-h-[5%]  sticky top-0 left-0 z-[10] flex  bg-background shadow-2xl justify-between`}
    >
      <Image
        src={logo}
        alt={"Logo"}
        className={"object-contain h-20 left-0 w-fit p-2 ml-5"}
      />
      <div className={"lg:flex items-center nav-btns gap-5 m-5 hidden"}>
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
        {/* <Link className="nav-link font-semibold" href="sdg.html">
          S.D.G.
        </Link> */}
        <Link className="nav-link font-semibold" href="/#team">
          TEAM
        </Link>
        {/* <Link className="nav-link font-semibold" href="mgmt.html">
          MANAGEMENT
        </Link> */}
        <Link className="nav-link font-semibold" href="/#footer">
          CONTACT
        </Link>
        <UserButton setClose={() => setOpen(false)} />
      </div>

      <Sheet open={open} onOpenChange={() => setOpen(!open)}>
        <SheetTrigger className={"lg:hidden block mx-5"}>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sairam Techno Incubator</SheetTitle>
            <div className="w-full flex justify-center">
              <UserButton setClose={() => setOpen(false)} />
            </div>
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
            {/* <Link className="nav-link font-semibold" href="sdg.html">
              S.D.G.
            </Link> */}
            <Link className="nav-link font-semibold" href="/#team">
              TEAM
            </Link>
            {/* <Link className="nav-link font-semibold" href="mgmt.html">
              MANAGEMENT
            </Link> */}
            <Link className="nav-link font-semibold" href="/#footer">
              CONTACT
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
