import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import SildeBar from "../components/layout/NavMain";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#fafafa]`}>
        <SildeBar />
        <div className="max-w-[660px] mx-auto">
        {children}
        </div>
      </body>
    </html>
  );
}
