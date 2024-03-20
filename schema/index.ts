import { Gender } from "@prisma/client";

export interface ImageData {
  image: string;
  name: string;
}

export interface UserData {
  name: String;
  email: String;
  gender: Gender;
}
