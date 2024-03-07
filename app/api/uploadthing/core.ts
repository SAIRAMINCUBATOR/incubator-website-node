import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();


export const ourFileRouter = {
  image: f({ image: { maxFileSize: "2MB", maxFileCount: 1 } })
    .onUploadComplete(() => {}),
  
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
