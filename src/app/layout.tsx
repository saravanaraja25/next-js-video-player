import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";
import { Navbar } from "@/components/Navbar";

const poppings = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Video Player",
  description: "Video Player Developer by @saravanaraja25",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppings.className} min-h-screen`}>
        <Providers>
          <Navbar />
          <div className="xl:px-44 px-8 pt-8">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
