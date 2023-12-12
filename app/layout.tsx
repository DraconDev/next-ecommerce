import Navbar from "@/components/Navbar/Navbar";
import QueryProvider from "@/components/ReactQuery/QueryProvider";
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
            className=""
        >
            <body
                className={`bg-quaternary text-black ${quicksand.className} w-[98vw] h-screen `}
            >
                <QueryProvider>
                    <Navbar />
                    <div className="pt-[100px]"></div>
                    {children}
                </QueryProvider>
            </body>
        </html>
    );
}
