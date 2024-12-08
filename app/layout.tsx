import type { Metadata } from "next";
import "./globals.css";

import ThemeProvider from "@/context/Theme";

import { inter, spaceGrotesk } from "./fonts/fonts";

export const metadata: Metadata = {
    title: "Includo",
    description:
        "Includo - Una piattaforma moderna ed elegante per la formazione professionale inclusiva. Supporta migranti e persone svantaggiate nella scoperta di mestieri artigianali, collegandoli a corsi gratuiti, workshop, e sponsor, con l'obiettivo di preservare tradizioni e favorire il reinserimento sociale.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="it" suppressHydrationWarning>
            <body
                className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
