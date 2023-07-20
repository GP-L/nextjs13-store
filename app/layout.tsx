import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

const navigation = [
  { name: "Frames", href: "/frames" },
  { name: "Return Policy", href: "#" },
  { name: "About Us", href: "#" },
];

export const metadata = {
  title: "Fruit Shop",
  description: "Basic fruit store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={"min-h-screen flex flex-col relative " + inter.className}>
        <Header navigation={navigation} />
        <main className="flex-1 max-w-screen-xl m-auto">{children}</main>
        <Footer navigation={navigation} />
        <div id="portal"></div>
      </body>
    </html>
  );
}
