"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";

import ROUTES from "@/constants/route";
import { useToast } from "@/hooks/use-toast";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
    const { toast } = useToast();
    const buttonClass =
        "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3";

    const handleSignIn = async (provider: "github" | "google") => {
        try {
            await signIn(provider, {
                redirectTo: ROUTES.HOME,
                redirect: false,
            });
        } catch (error) {
            console.error(error);
            toast({
                title: "Accesso fallito",
                description:
                    error instanceof Error
                        ? error.message
                        : "Un errore sconosciuto è occorso",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="mt-10 flex flex-wrap gap-2.5">
            <Button
                className={buttonClass}
                onClick={() => handleSignIn("github")}
            >
                <Image
                    src="/icons/github.svg"
                    alt="Github logo"
                    width={20}
                    height={20}
                    className="invert-colors mr-2.5 object-contain"
                />
                <span>Continue con Github</span>
            </Button>
            <Button
                className={buttonClass}
                onClick={() => handleSignIn("google")}
            >
                <Image
                    src="/icons/google.svg"
                    alt="Google logo"
                    width={20}
                    height={20}
                    className="mr-2.5 object-contain"
                />
                <span>Continue con Google</span>
            </Button>
        </div>
    );
};
export default SocialAuthForm;
