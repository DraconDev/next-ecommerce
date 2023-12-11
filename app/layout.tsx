import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ecom site",
    description: "Next ecom site",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className="w-screen h-screen overflow-x-hidden"
        >
            <body className={`bg-quaternary text-black ${quicksand.className}`}>
                <Navbar />
                <div className="pt-[100px]"></div>
                {children}
            </body>
        </html>
    );
}
