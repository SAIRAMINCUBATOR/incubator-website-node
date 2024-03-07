import { Gender, MemberRole } from "@prisma/client";
import { StaticImageData } from "next/image";

export interface Project {
  image: StaticImageData;
  description: String;
  title: String;
  url: String;
}

export interface TeamInt {
  image: StaticImageData;
  name: string;
  designation: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

export interface ImageData {
  image: StaticImageData;
  name: string;
}
export interface TableData {
  key: String;
  value: String;
}
export interface Testimonial {
  image: StaticImageData;
  description: string;
  name: string;
  designation: string;
}

export interface TableData {
  key: String;
  value: String;
}

export interface UserData {
  name: String;
  email: String;
  gender: Gender;
}
