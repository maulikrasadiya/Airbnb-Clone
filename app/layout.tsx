import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nunito} from  'next/font/google';
import Navbar from "./components/navbar/Navbar"
import ClientOnly from "./components/navbar/ClientOnly";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const font = Nunito({
  subsets : ["latin"],
})
export const metadata: Metadata = {
  title: "Aribnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={font.className}>
          <ClientOnly>
            <Navbar/>
          </ClientOnly>
          {children}
      </body>
    </html>
  );
}
