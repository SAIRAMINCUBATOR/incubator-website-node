import Image, { StaticImageData } from "next/image";
import { Testimonial } from "@/schema";
import { Slider } from "@/components/Slider";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import * as React from "react";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import img from "@/public/projects/p1-1.jpg";
import img1 from "@/public/projects/p2-1.jpg";
import img2 from "@/public/projects/p3-1.png";
import img3 from "@/public/projects/p4-1.png";
import img4 from "@/public/projects/p5-1.png";
import img5 from "@/public/projects/p6-1.jpg";
import { Project } from "@/schema";
import { useEffect } from "react";
import CountUp from "countup.js";
import { Instagram, Mail, Phone } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Funds } from "@/components/Funds";
import { Establishment } from "@/components/Establishment";
import { AboutUs } from "@/components/AboutUs";
export default function Home() {
  const projects: Project[] = [
    { title: "Title", description: "description", image: img1, url: "url" },
    { title: "Title", description: "description", image: img2, url: "url" },
    { title: "Title", description: "description", image: img3, url: "url" },
    { title: "Title", description: "description", image: img4, url: "url" },
    { title: "Title", description: "description", image: img5, url: "url" },
  ];
  const images: StaticImageData[] = [img, img1, img2];
  const testimonycontent: Testimonial[] = [
    {
      name: "Genik Tech Pvt. Ltd.",
      image: img1,
      description:
        "Genik Tech Pvt. Ltd. owes its success to the unwavering support of Sri Sai Ram Techno Incubator Foundation (SSTIF).",
      designation: "Founder & CEO  ",
    },
  ];

  return (
    <div
      className={
        "flex justify-center items-center align-middle justify-items-center flex-col"
      }
    >
      <Navbar />
      <div className={"flex justify-center"} id={"home"}>
        <Slider images={images} />
        <Link href={"/form"} className={"absolute top-[80%]"}>
          <Button className="bg-blue-500 text-white px-4 py-2 rounded-md transition-transform transform-gpu hover:scale-105 hover:bg-blue-500">
            Apply Now
          </Button>
        </Link>
      </div>
      <AboutUs />
      <Establishment />

      <Projects projects={projects} />
      <Funds />

      <TestimonialSlider testimonycontent={testimonycontent} />
      <Footer />
    </div>
  );
}
