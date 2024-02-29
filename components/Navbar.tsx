import Image from "next/image"
import logo from "@/public/logo.png"
export const Navbar = () => {
  return (
      <div
      className={"w-full max-h-[5%] z-[10] sticky top-0 left-0 bg-background shadow-2xl flex justify-between"}>
        <Image src={logo} alt={"Logo"} className={"object-contain h-20 left-0 w-fit p-2 ml-5"}/>
          <div className={"flex items-center nav-btns gap-5 m-5"}>
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
      </div>
  )
}