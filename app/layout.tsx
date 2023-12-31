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
                    className={`  text-black ${quicksand.className} w-full min-h-screen   bg-gradient-to-b from-bgGrad to-quaternary  after:bg-quaternary`}
                >
                    <QueryProvider>
                        <div className="min-h-screen w-full">
                            <Navbar />
                            <div className="pt-[96px]"></div>
                            {children}
                        </div>
                    </QueryProvider>
                </body>
            </AuthProvider>
        </html>
    );
}
