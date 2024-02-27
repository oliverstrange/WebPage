import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Oliver Strange",
  description: "Oliver's portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <div className="absolute -z-10 h-screen w-full bg-gradient-to-l from-gray-200 via-blue-200 to-stone-100"></div>
        <div className="absolute -z-10 h-screen w-full bg-gradient-to-b from-transparent to-white"></div>
        {children}
      </body>
    </html>
  );
}
