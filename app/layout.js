import { Geist, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/compoents";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto_Condensed({
  subsets: ["latin"],
});

export const metadata = {
  title: "JSO Waste and Renewables",
  description: "JSO Waste and Renewables Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
