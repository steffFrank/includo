import React from "react";

import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";
import Theme from "./Theme";

const RootNavbar = () => {
    return (
        <header className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
            <Logo ishidden={true} />
            <p>Global Search</p>
            <div className="flex-between gap-2">
                <Theme />
                <MobileNavigation />
            </div>
        </header>
    );
};

export default RootNavbar;
