import React from "react";

import RootNavbar from "@/components/navigation/navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <RootNavbar />
            {children}
        </main>
    );
};

export default RootLayout;
