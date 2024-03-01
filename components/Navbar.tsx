import Image from "next/image"
import logo from "@/public/logo.png"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {Menu} from "lucide-react";

export const Navbar = () => {
  return (
      <div
      className={"w-full max-h-[5%] z-[10] sticky top-0 left-0 bg-background shadow-2xl flex justify-between"}>
        <Image src={logo} alt={"Logo"} className={"object-contain h-20 left-0 w-fit p-2 ml-5"}/>
          <div className={"lg:flex items-center nav-btns gap-5 m-5 hidden"}>
                  <a className="nav-link font-semibold" href="#home">HOME</a>
                  <a className="nav-link font-semibold" href="#about-us">ABOUT US</a>
                  <a className="nav-link font-semibold" href="#projects">PRODUCTS</a>
                  <a className="nav-link font-semibold" href="#startups">STARTUPS</a>
                  <a className="nav-link font-semibold" href="gallery.html">GALLERY</a>
                  <a className="nav-link font-semibold" href="sdg.html">S.D.G.</a>
                  <a className="nav-link font-semibold" href="#team">TEAM</a>
                  <a className="nav-link font-semibold" href="mgmt.html">MANAGEMENT</a>
                  <a className="nav-link font-semibold" href="#footer">CONTACT</a>
          </div>

          <Sheet >
              <SheetTrigger className={"lg:hidden block"}>
                  <Menu/>
              </SheetTrigger >
              <SheetContent>
                  <SheetHeader>
                      <SheetTitle>Sairam Techno Incubator</SheetTitle>

                  </SheetHeader>
                  <div className={"flex flex-col space-y-3 mt-10 items-center"}>
                  <a className="nav-link font-semibold" href="#home">HOME</a>
                  <a className="nav-link font-semibold" href="#about-us">ABOUT US</a>
                  <a className="nav-link font-semibold" href="#projects">PRODUCTS</a>
                  <a className="nav-link font-semibold" href="#startups">STARTUPS</a>
                  <a className="nav-link font-semibold" href="gallery.html">GALLERY</a>
                  <a className="nav-link font-semibold" href="sdg.html">S.D.G.</a>
                  <a className="nav-link font-semibold" href="#team">TEAM</a>
                  <a className="nav-link font-semibold" href="mgmt.html">MANAGEMENT</a>
                  <a className="nav-link font-semibold" href="#footer">CONTACT</a>
                  </div>
              </SheetContent>
          </Sheet>

      </div>
  )
}