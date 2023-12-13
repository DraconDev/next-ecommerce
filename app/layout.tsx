import AuthProvider from "@/components/Auth/AuthProvider";
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
            <AuthProvider>
                <body
                    className={` min-h-screen text-black ${quicksand.className}  bg-gradient-to-b from-bgGrad to-quaternary  after:bg-quaternary`}
                >
                    <QueryProvider>
                        <Navbar />
                        <div className="pt-[96px]"></div>
                        {children}
                    </QueryProvider>
                </body>
            </AuthProvider>
        </html>
    );
}
