import sharp from "sharp";
export async function compressImages(file:any) {
  if (file.size <= 500 * 1024) {
    // If the file size is already small, return the original buffer
    return file.buffer;
  }

  const targetWidth = 650;
  const targetHeight = 650;

  const aspectRatio = file.size / file.buffer.length;

  let resizedImage;
  if (aspectRatio > 1.0) {
    resizedImage = await sharp(file.buffer)
      .resize(Math.round(Math.sqrt(650 * 650 * aspectRatio)), null)
      .toBuffer();
  } else {
    resizedImage = await sharp(file.buffer)
      .resize(null, Math.round(650 * 650 / aspectRatio))
      .toBuffer();
  }

  // Convert the image to JPEG format with 90% quality
  const compressedImage = await sharp(resizedImage)
    .jpeg({ quality: 90 })
    .toBuffer();

  return compressedImage;
}
