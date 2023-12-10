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
            className="w-screen h-screen"
        >
            <body className={`bg-primary text-black ${quicksand.className}`}>
                {children}
            </body>
        </html>
    );
}
