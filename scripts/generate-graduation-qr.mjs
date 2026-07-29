import QRCode from "qrcode";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const targetUrl =
  "https://www.gidtechnologies.com/graduation?source=aptech-graduation-qr&utm_source=aptech&utm_medium=qr&utm_campaign=graduation_2026";

const outputDirectory = path.join(process.cwd(), "public", "qr");
const pngPath = path.join(outputDirectory, "graduation-qr.png");
const svgPath = path.join(outputDirectory, "graduation-qr.svg");

await mkdir(outputDirectory, { recursive: true });

const qrOptions = {
  errorCorrectionLevel: "H",
  margin: 4,
  width: 1600,
  color: {
    dark: "#000000",
    light: "#FFFFFF",
  },
};

await QRCode.toFile(pngPath, targetUrl, {
  ...qrOptions,
  type: "png",
});

await QRCode.toFile(svgPath, targetUrl, {
  ...qrOptions,
  type: "svg",
});

console.log("Graduation QR generated successfully.");
console.log(`Target: ${targetUrl}`);
console.log(`PNG: ${pngPath}`);
console.log(`SVG: ${svgPath}`);
