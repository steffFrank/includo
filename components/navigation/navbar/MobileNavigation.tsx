import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";

import Logo from "./Logo";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Image
                    src="/icons/hamburger.svg"
                    width={36}
                    height={36}
                    alt="Menu"
                    className="invert-colors cursor-pointer sm:hidden"
                />
            </SheetTrigger>
            <SheetContent
                side="left"
                className="background-light900_dark200 border-none"
            >
                {/* This is hidden in the UI but necessary to avoid a warning by shadcn */}
                <SheetTitle className="hidden">Navigation</SheetTitle>
                <Logo ishidden={false} />

                <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
                    <SheetClose asChild>
                        <section className="flex h-full flex-col gap-6 pt-16">
                            <NavLinks isMobileNav />
                        </section>
                    </SheetClose>

                    <div className="flex flex-col gap-3">
                        <SheetClose asChild>
                            <Link href={ROUTES.SIGN_IN}>
                                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                                    <span className="primary-text-gradient">
                                        Log In
                                    </span>
                                </Button>
                            </Link>
                        </SheetClose>

                        <SheetClose asChild>
                            <Link href={ROUTES.SIGN_UP}>
                                <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                                    Sign Up
                                </Button>
                            </Link>
                        </SheetClose>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavigation;
