import Image, { StaticImageData } from "next/image";
import { Testimonial } from "@/schema";
import { Slider } from "@/components/Slider";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import * as React from "react";
import { Projects } from "@/components/Projects";
import img from "@/public/projects/p1-1.jpg";
import img1 from "@/public/projects/p2-1.jpg";
import img2 from "@/public/projects/p3-1.png";
import img3 from "@/public/projects/p4-1.png";
import img4 from "@/public/projects/p5-1.png";
import img5 from "@/public/projects/p6-1.jpg";

import logo1 from "@/public/logo/1.png";
import logo2 from "@/public/logo/2 .png";
import logo3 from "@/public/logo/3.png";
import logo4 from "@/public/logo/4.png";
import logo5 from "@/public/logo/5.png";
import logo6 from "@/public/logo/6.png";
import logo7 from "@/public/logo/7.png";
import logo8 from "@/public/logo/8.png";
import logo9 from "@/public/logo/8.png";
import logo10 from "@/public/logo/10.png";
import logo15 from "@/public/logo/15.png";

import { ImageData, Project, TeamInt } from "@/schema";
import { Startup } from "@/components/Startup";

import ceo from "@/public/teams/Sai Prakash Leo Muthu.jpg";
import { Team } from "@/components/Team";
import { Company } from "@/components/Companys";
import Gallery from "@/components/Gallery";

import { Funds } from "@/components/Funds";
import { Establishment } from "@/components/Establishment";
import { AboutUs } from "@/components/AboutUs";
import { HaveAProject } from "@/components/HaveAProject";
export default function Home() {
  const projects: Project[] = [
    { title: "Title", description: "description", image: img1, url: "1" },
    { title: "Title", description: "description", image: img2, url: "2" },
    { title: "Title", description: "description", image: img3, url: "3" },
    { title: "Title", description: "description", image: img4, url: "4" },
    { title: "Title", description: "description", image: img5, url: "5" },
  ];
  const images: ImageData[] = [
    { image: img1, name: "Imag1" },
    { image: img2, name: "Image2" },
    { image: img3, name: "Image3" },
  ];
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  const companies: StaticImageData[] = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo15,
  ];

  const teams1: TeamInt[] = [
    {
      name: "Dr. Sai Prakash Leo Muthu",
      designation: "CEO",
      image: ceo,
      facebook: "https://www.facebook.com/saileomuthu/",
      twitter: "https://twitter.com/sairamceo?lang=en",
      instagram: "https://www.instagram.com/sairamceo/?hl=en",
    },
    {
      name: "Dr. Sai Prakash Leo Muthu",
      designation: "CEO",
      image: ceo,
      facebook: "https://www.facebook.com/saileomuthu/",
      twitter: "https://twitter.com/sairamceo?lang=en",
      instagram: "https://www.instagram.com/sairamceo/?hl=en",
      linkedin: "https://in.linkedin.com/in/sairamceo",
    },
  ];

  const testimonycontent: Testimonial[] = [
    {
      image: logo1,
      description:
        "Genik Tech Pvt. Ltd. owes its success to the unwavering support of Sri Sai Ram Techno Incubator Foundation (SSTIF). Their provision of workspace, crucial seed funding, valuable connections, and expert mentorship has been transformative for our journey. For startups, SSTIF proves to be an indispensable resource. We wholeheartedly recommend SSTIF to those seeking a solid foundation and strategic growth. We extend our best wishes to SSTIF as they continue their pursuit of global recognition and excellence",
      name: "Genik",
      designation: "CEO",
    },
    {
      image: logo2,
      description:
        "Toofan Tech Pvt. Ltd. owes its success to the unwavering support of Sri Sai Ram Techno Incubator Foundation (SSTIF). Their provision of workspace, crucial seed funding, valuable connections, and expert mentorship has been transformative for our journey. For startups, SSTIF proves to be an indispensable resource. We wholeheartedly recommend SSTIF to those seeking a solid foundation and strategic growth. We extend our best wishes to SSTIF as they continue their pursuit of global recognition and excellence",
      name: "Toofan",
      designation: "Founder",
    },
    {
      image: logo3,
      description:
        "Genik Tech Pvt. Ltd. owes its success to the unwavering support of Sri Sai Ram Techno Incubator Foundation (SSTIF). Their provision of workspace, crucial seed funding, valuable connections, and expert mentorship has been transformative for our journey. For startups, SSTIF proves to be an indispensable resource. We wholeheartedly recommend SSTIF to those seeking a solid foundation and strategic growth. We extend our best wishes to SSTIF as they continue their pursuit of global recognition and excellence",
      name: "Genik2",
      designation: "CEO",
    },
    {
      image: logo4,
      description:
        "Genik Tech Pvt. Ltd. owes its success to the unwavering support of Sri Sai Ram Techno Incubator Foundation (SSTIF). Their provision of workspace, crucial seed funding, valuable connections, and expert mentorship has been transformative for our journey. For startups, SSTIF proves to be an indispensable resource. We wholeheartedly recommend SSTIF to those seeking a solid foundation and strategic growth. We extend our best wishes to SSTIF as they continue their pursuit of global recognition and excellence",
      name: "Toofan2",
      designation: "CEO",
    },
  ];
  const teams2: TeamInt[] = [
    {
      name: "Dr. Sai Prakash Leo Muthu",
      designation: "CEO",
      image: ceo,
      facebook: "https://www.facebook.com/saileomuthu/",
      twitter: "https://twitter.com/sairamceo?lang=en",
      instagram: "https://www.instagram.com/sairamceo/?hl=en",
      linkedin: "https://in.linkedin.com/in/sairamceo",
    },
    {
      name: "Dr. Sai Prakash Leo Muthu",
      designation: "CEO",
      image: ceo,
      facebook: "https://www.facebook.com/saileomuthu/",
      twitter: "https://twitter.com/sairamceo?lang=en",
      instagram: "https://www.instagram.com/sairamceo/?hl=en",
      linkedin: "https://in.linkedin.com/in/sairamceo",
    },
    {
      name: "Dr. Sai Prakash Leo Muthu",
      designation: "CEO",
      image: ceo,
      facebook: "https://www.facebook.com/saileomuthu/",
      twitter: "https://twitter.com/sairamceo?lang=en",
      instagram: "https://www.instagram.com/sairamceo/?hl=en",
      linkedin: "https://in.linkedin.com/in/sairamceo",
    },
    {
      name: "Dr. Sai Prakash Leo Muthu",
      designation: "CEO",
      image: ceo,
      facebook: "https://www.facebook.com/saileomuthu/",
      twitter: "https://twitter.com/sairamceo?lang=en",
      instagram: "https://www.instagram.com/sairamceo/?hl=en",
      linkedin: "https://in.linkedin.com/in/sairamceo",
    },
    {
      name: "Dr. Sai Prakash Leo Muthu",
      designation: "CEO",
      image: ceo,
      facebook: "https://www.facebook.com/saileomuthu/",
      twitter: "https://twitter.com/sairamceo?lang=en",
      instagram: "https://www.instagram.com/sairamceo/?hl=en",
      linkedin: "https://in.linkedin.com/in/sairamceo",
    },
    {
      name: "Dr. Sai Prakash Leo Muthu",
      designation: "CEO",
      image: ceo,
      facebook: "https://www.facebook.com/saileomuthu/",
      twitter: "https://twitter.com/sairamceo?lang=en",
      instagram: "https://www.instagram.com/sairamceo/?hl=en",
      linkedin: "https://in.linkedin.com/in/sairamceo",
    },
  ];

  const galleryImages: ImageData[] = [
    {
      image: img1,
      name: "Event",
    },
    {
      image: img1,
      name: "Event",
    },
    {
      image: img1,
      name: "Event",
    },
    {
      image: img1,
      name: "Event",
    },
    {
      image: img1,
      name: "Event",
    },
    {
      image: img1,
      name: "Event",
    },
    {
      image: img1,
      name: "Event",
    },
    {
      image: img1,
      name: "Event",
    },
  ];

  return (
    <div
      className={
        "flex justify-center items-center align-middle justify-items-center flex-col"
      }
    >
      {/* <Navbar /> */}
      <div className={"flex justify-center max-h-fit relative"} id={"home"}>
        <Slider images={images} />
        <Link href={"/form"} className={"absolute bottom-20"}>
          <Button className="bg-blue-500 text-white px-4 py-2 rounded-md transition-transform transform-gpu hover:scale-105 hover:bg-blue-500">
            Apply Now
          </Button>
        </Link>
      </div>
      <AboutUs />
      <Establishment />

      <Projects projects={projects} />
      <Startup tags1={tags} tags2={tags} />
      <Company images={companies} />
      <Funds />

      <Team row0={teams1} rowN={teams2} />
      <HaveAProject />
      <Gallery images={galleryImages} />
      <TestimonialSlider testimonycontent={testimonycontent} />
    </div>
  );
}
