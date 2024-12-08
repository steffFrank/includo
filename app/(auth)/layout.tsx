"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

import SocialAuthForm from "@/components/forms/SocialAuthForm";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    const pageConfig: {
        [key: string]: { title: string; description: string };
    } = {
        "/registrati": {
            title: "Raggiungi la community",
            description: "Crea un account per accedere a tutte le funzionalità",
        },
        "/accedi": {
            title: "Accedi",
            description: "Accedi al tuo account",
        },
    };

    // Get the current page configuration, fallback to a default
    const { title, description } = pageConfig[pathname as string] || {
        title: "Benvenuto",
        description: "Accedi o registrati per continuare",
    };

    return (
        <main className="flex-center min-h-screen bg-auth-light bg-cover bg-center bg-no-repeat px-4 py-10 dark:bg-auth-dark">
            <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
                <div className="flex-between gap-2">
                    <div className="space-y-2.5">
                        <h1 className="h2-bold text-dark100_light900">
                            {title}
                        </h1>
                        <p className="paragraph-regular text-dark500_light400">
                            {description}
                        </p>
                    </div>
                    <Image
                        src="/images/logo-site.svg"
                        alt="logo del sito"
                        width={30}
                        height={30}
                        className="object-contain"
                    />
                </div>
                {children}
                <SocialAuthForm />
            </section>
        </main>
    );
};

export default AuthLayout;
