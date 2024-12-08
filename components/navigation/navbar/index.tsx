import Image from "next/image";
import Link from "next/link";
import React from "react";

import Theme from "../Theme";

const RootNavbar = () => {
    return (
        <header className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
            <Link href="/" className=" cursor-pointer gap-2">
                <p className="flex-center h2-bold gap-0 font-space-grotesk text-dark-100 dark:text-light-900">
                    <span className="max-sm:hidden">INCL</span>
                    <span>
                        <Image
                            src="images/logo-site.svg"
                            alt="Logo del sito"
                            width={15}
                            height={15}
                        />
                    </span>
                    <span className="max-sm:hidden">DO</span>
                </p>
            </Link>
            <nav>
                <ul>
                    <Link href="/about" className="cursor-pointer">
                        <li className="h3-bold font-space-grotesk text-dark-100 dark:text-light-900">
                            About
                        </li>
                    </Link>
                </ul>
            </nav>
            <div>
                <Theme />
            </div>
        </header>
    );
};

export default RootNavbar;
