import Image, { StaticImageData } from "next/image";
import { Slider } from "@/components/Slider";
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

import cimg from "@/public/logo/1.png";
import cimg1 from "@/public/logo/2.png";
import cimg2 from "@/public/logo/3.png";
import cimg3 from "@/public/logo/4.png";
import cimg4 from "@/public/logo/5.png";
import cimg5 from "@/public/logo/6.png";
import cimg6 from "@/public/logo/7.png";
import cimg7 from "@/public/logo/8.png";
import cimg8 from "@/public/logo/9.png";
import cimg9 from "@/public/logo/10.png";
import cimg10 from "@/public/logo/15.png";
import cimg11 from "@/public/logo/16.png";

import { Project } from "@/schema";
import { Startup } from "@/components/Startup";
import { Company } from "@/components/Companys";
import { TeamPeople } from "@/components/TeamPeople";
export default function Home() {
  const projects: Project[] = [
    { title: "Title", description: "description", image: img1, url: "url" },
    { title: "Title", description: "description", image: img2, url: "url" },
    { title: "Title", description: "description", image: img3, url: "url" },
    { title: "Title", description: "description", image: img4, url: "url" },
    { title: "Title", description: "description", image: img5, url: "url" },
  ];
  const images: StaticImageData[] = [img, img1, img2];
  const companyImages: StaticImageData[] = [cimg, cimg1, cimg2, cimg3, cimg4, cimg5 ,cimg6 ,cimg7, cimg8, cimg9, cimg10, cimg11];
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );
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
          <Button className={buttonVariants({ variant: "secondary" })}>
            Apply Now
          </Button>
        </Link>
      </div>
      <div id="about-us" className=" flex">
        <img
          loading="lazy"
          src="incubator-logo.png"
          alt="Sairam Incubator Foundation Logo"
          className="incubation-main"
        />

        <div className="data">
          <h2 data-splitting>
            {" "}
            WHY INCUBATION
            <br />
            IN SAIRAM?
          </h2>
          <hr className="underline" />
          <p className="desc-info">
            The incubation process allows entrepreneurs to preserve capital and
            gain external support to accelerate their business growth.
            <br />
            Through business incubation, the enterprise center captures each
            entrepreneur’s uniqueness and offers support and customized services
            to maximize business potential.
          </p>
        </div>
      </div>
      <Projects projects={projects} />
      <Startup tags1={tags} tags2={tags}/>
      <Company images={companyImages}/>
      
      <TeamPeople image={img} name={"LEO"} designation={"CEO "} facebook={"face"} linkedin={"link"} twitter={"t"} instagram={"in"}/>
      <TeamPeople image={img} name={"LEO"} designation={"CEO "} facebook={"face"} linkedin={"link"} twitter={"t"} instagram={"in"}/>
    </div>
  );
}
