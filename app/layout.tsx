import type { Metadata } from "next";
import "./globals.css";

import { inter, spaceGrotesk } from "./fonts/fonts";

export const metadata: Metadata = {
    title: "Includo",
    description:
        "IncluDO - Una piattaforma moderna ed elegante per la formazione professionale inclusiva. Supporta migranti e persone svantaggiate nella scoperta di mestieri artigianali, collegandoli a corsi gratuiti, workshop, e sponsor, con l'obiettivo di preservare tradizioni e favorire il reinserimento sociale.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
