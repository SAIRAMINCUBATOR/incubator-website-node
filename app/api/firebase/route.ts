import { imageDb } from "@/lib/firebase";
import { getUser } from "@/lib/get-user";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { NextRequest, NextResponse } from "next/server";
import { v4 } from "uuid";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const headers = req.headers;
    const token = headers.get("Authorization");
    const user = await getUser(token);
    if (!user) {
      return new NextResponse("User Not Found", { status: 404 });
    }
    const data = await req.formData();
    const image = data.getAll("image");
    if (!image) {
      return new NextResponse("Image is missing", { status: 404 });
    }
    if (image.length == 1) {
      const blob = new Blob([image[0]], { type: "image/jpeg" });
      const fileName = v4();
      const imgRef = ref(imageDb, "files/" + fileName);
      await uploadBytes(imgRef, blob);

      const url = await getDownloadURL(ref(imageDb, "files/" + fileName));
      return NextResponse.json({ url });
    } else {
      const url = [];
      for (let i = 0; i < image.length; i++) {
        const blob = new Blob([image[i]], { type: "image/jpeg" });
        const fileName = v4();
        const imgRef = ref(imageDb, "files/" + fileName);
        await uploadBytes(imgRef, blob);

        url.push(await getDownloadURL(ref(imageDb, "files/" + fileName)));
      }
      return NextResponse.json({ url });
    }
  } catch (error) {
    console.log("FIREBASE IMAGE POST", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    const headers = req.headers;
    const token = headers.get("Authorization");
    const user = await getUser(token);
    if (!user) {
      return new NextResponse("User Not Found", { status: 404 });
    }
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return new NextResponse("id is missing", { status: 404 });
    }
    const imgRef = ref(imageDb, "files/" + id);
    try {
      await deleteObject(imgRef);
    } catch (err) {}
    return NextResponse.json("Deleted");
  } catch (error) {
    console.log("FIREBASE IMAGE DELETE", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
