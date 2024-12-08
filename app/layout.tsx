import "./globals.css";

import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

import { auth } from "@/auth";
import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/context/Theme";

import { inter, spaceGrotesk } from "./fonts/fonts";

export const metadata: Metadata = {
    title: "Includo",
    description:
        "Includo - Una piattaforma moderna ed elegante per la formazione professionale inclusiva. Supporta migranti e persone svantaggiate nella scoperta di mestieri artigianali, collegandoli a corsi gratuiti, workshop, e sponsor, con l'obiettivo di preservare tradizioni e favorire il reinserimento sociale.",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await auth();
    return (
        <html lang="it" suppressHydrationWarning>
            <SessionProvider session={session}>
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
                    <Toaster />
                </body>
            </SessionProvider>
        </html>
    );
}
