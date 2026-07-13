import "./globals.css";
import MotionProvider from "@/components/providers/MotionProvider";

export const metadata = {
  title: "Heights Communication",
  description: "Reliable communication, connectivity, and digital growth solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><MotionProvider>{children}</MotionProvider></body>
    </html>
  );
}
