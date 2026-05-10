const MAX_DIMENSION = 1920;
const JPEG_QUALITY = 0.82;
const SKIP_BELOW_BYTES = 400 * 1024; // skip compression for files already under 400 KB

/**
 * Compresses an image file client-side using Canvas.
 * - Scales down to max 1920px on the longest edge.
 * - Converts to JPEG at 0.82 quality.
 * - Falls back to the original file if compression doesn't reduce size,
 *   if the file is already small, or if anything goes wrong.
 */
export async function compressImage(file: File): Promise<File> {
  if (!file.type.startsWith("image/") || file.size <= SKIP_BELOW_BYTES) {
    return file;
  }

  return new Promise((resolve) => {
    const objectUrl = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);

      let { width, height } = img;

      if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
        if (width >= height) {
          height = Math.round((height * MAX_DIMENSION) / width);
          width = MAX_DIMENSION;
        } else {
          width = Math.round((width * MAX_DIMENSION) / height);
          height = MAX_DIMENSION;
        }
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(file);
        return;
      }

      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (!blob || blob.size >= file.size) {
            resolve(file);
            return;
          }
          const baseName = file.name.replace(/\.[^.]+$/, "");
          const compressed = new File([blob], `${baseName}.jpg`, {
            type: "image/jpeg",
            lastModified: Date.now(),
          });
          resolve(compressed);
        },
        "image/jpeg",
        JPEG_QUALITY,
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(file);
    };

    img.src = objectUrl;
  });
}
