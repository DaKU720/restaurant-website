import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Restaurant App",
    description: "Coded by David & Bohdan",
};

//container mx-auto h-screen` IS EXPERIMENTAL if something broke, delete from body
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
        <body className={`${inter.variable} antialiased container mx-auto h-screen`}>
        {children}
        </body>
        </html>
    );
};

export default RootLayout;
