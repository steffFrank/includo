import { Inter, Space_Grotesk as SpaceGrotesk } from "next/font/google";
import "./globals.css";

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const spaceGrotesk = SpaceGrotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    display: "swap",
});
