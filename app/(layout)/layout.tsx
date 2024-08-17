
import { Inter } from "next/font/google";
// import "./globals.css";
import Navbar from "@/components/navbar/navbar";



const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    
       <> <Navbar />
        {children}</>
  
  );
}
