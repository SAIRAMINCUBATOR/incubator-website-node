import {StaticImageData} from "next/image";

export interface Project{
    image: StaticImageData,
    description: String,
    title: String
    url: String
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
