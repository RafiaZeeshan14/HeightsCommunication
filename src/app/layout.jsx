import "./globals.css";

export const metadata = {
  title: "Heights Communication",
  description: "Reliable communication, connectivity, and digital growth solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
