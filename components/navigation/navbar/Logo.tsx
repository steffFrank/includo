import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ ishidden = false }: { ishidden: boolean }) => {
    const hiddenClass = ishidden ? "max-sm:hidden" : "";
    return (
        <Link href="/" className=" cursor-pointer gap-2">
            <p className="flex-center h2-bold gap-0 font-space-grotesk text-dark-100 dark:text-light-900">
                <span className={hiddenClass}>INCL</span>
                <span>
                    <Image
                        src="images/logo-site.svg"
                        alt="Logo del sito"
                        width={15}
                        height={15}
                    />
                </span>
                <span className={hiddenClass}>DO</span>
            </p>
        </Link>
    );
};

export default Logo;
