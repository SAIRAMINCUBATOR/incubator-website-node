"use client";
import { Instagram, Mail, Phone } from "lucide-react";
import * as React from "react";
import { Button } from "./ui/button";
//hellllllo
import logo from "@/public/Illustration9.png";
import logo1 from "@/public/logo.png";
import clg from "@/public/clg.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <section id="footer" className="footer md:flex lg:flex-row flex-col">
      <Image
        src={logo}
        alt=""
        className="footillus"
        width={200}
        height={100}
        loading="lazy"
      />
      <div className="flex flex-col gap-[55px] self-center lg:self-start w-full">
      <Image src={logo1} alt=""
          className="w-[70%] h-[30%] md:w-[50%] md:h-[20%] self-center lg:self-start"
          loading="lazy"
        />
        <div className="flex flex-col gap-3 self-center lg:self-start">
          <div className="font-semibold flex gap-4 items-center">
            <Phone className="h-5 w-5" />
            <a target="_blank" href="tel:+91 7845127111">
              +91 7845127111
            </a>
          </div>
          <div className="font-semibold flex gap-4 items-center">
            <Instagram strokeWidth={2} className="h-5 w-5" />
            <a
              target="_blank"
              href="https://www.instagram.com/techno_incubator_sairam/"
            >
              @techno_incubator_sairam
            </a>
          </div>
          <div className="font-semibold flex gap-4 items-center">
            <Mail strokeWidth={2} className="h-5 w-5" />
            <a target="_blank" href="mailto:incubation@sairam.edu.in">
              incubation@sairam.edu.in
            </a>
          </div>
          <div className="font-semibold flex gap-4 items-center">
            <Mail strokeWidth={2} className="h-5 w-5" />
            <a target="_blank" href="mailto:queries.rd@sairam.edu.in">
              queries.rd@sairam.edu.in
            </a>
          </div>
        </div>
        <div className="self-center lg:self-start">
          <a href="https://sairam.edu.in/">
          <Image
            src={clg}
              alt="Sri Sairam Institutions"
              className="w-[220px] lg:block hidden"
              loading="lazy"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col self-center lg:self-start lg:w-[30%] w-[70%]">
        <h1 className="font-semibold text-2xl text-gray-600 mb-[10px] self-center lg:self-start">
          Contact Us
        </h1>
        <div className="flex flex-col">
          <label className="font-semibold m-2">Email</label>
          <input
            type="text"
            placeholder="Enter a valid email address"
            className="p-2 ml-2 mr-2 bg-inherit border-b-2 border-black placeholder-gray-600"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold m-2">Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            className="p-2 ml-2 mr-2 bg-inherit border-b-2 border-black placeholder-gray-600"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold m-2">Message</label>
          <textarea
            placeholder="Enter your message"
            className="border p-2 ml-2 mr-2"
            rows={5}
          ></textarea>
         
        </div>
        <Button className="bg-blue-500 w-[100%] h-[40px] font-semibold">
          SUBMIT
        </Button>
      </div>

      <div className="self-center lg:self-start ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.0197408349034!2d80.05689372236708!3d12.961744373583866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f53e694f0465%3A0x9fe2a8ace29ebc1c!2sSri%20Sairam%20Techno%20Incubator%20Foundation!5e0!3m2!1sen!2sin!4v1679409054276!5m2!1sen!2sin"
          className="sm:h-[400px] sm:w-[400px] lg:w-full h-[200px] w-[200px]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};
