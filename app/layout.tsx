import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import TopLeftImage from '../components/TopLeftImage/TopLeftImage';
import Header from '../components/Header/Header';
// import Transition from '../components/Transition/Transition';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
        {/* <Transition /> */}
        <TopLeftImage />
        <Navbar />
        <Header/>
        {/* <main className="h-full"> */}
        {children}
        {/* </main> */}
      </body>
    </html>
  );
}
