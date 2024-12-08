import { z } from "zod";

export const SignInSchema = z.object({
    email: z
        .string()
        .min(1, { message: "L'email è obbligatoria." })
        .email({ message: "Indirizzo email non valido." }),
    password: z
        .string()
        .min(8, { message: "La password deve avere almeno 8 caratteri." })
        .max(100, {
            message: "La password può contenere al massimo 100 caratteri.",
        }),
});

export const SignUpSchema = z.object({
    username: z
        .string()
        .min(3, { message: "Il nome utente deve avere almeno 3 caratteri." })
        .max(30, {
            message: "Il nome utente può contenere al massimo 30 caratteri.",
        })
        .regex(/^[a-zA-Z0-9_]+$/, {
            message:
                "Il nome utente può contenere solo lettere, numeri e trattini bassi.",
        }),

    name: z
        .string()
        .min(1, { message: "Il nome è obbligatorio." })
        .max(50, { message: "Il nome può contenere al massimo 50 caratteri." })
        .regex(/^[a-zA-Z\s]+$/, {
            message: "Il nome può contenere solo lettere e spazi.",
        }),

    email: z
        .string()
        .min(1, { message: "L'email è obbligatoria." })
        .email({ message: "Si prega di fornire un indirizzo email valido." }),

    password: z
        .string()
        .min(6, { message: "La password deve avere almeno 6 caratteri." })
        .max(100, {
            message: "La password può contenere al massimo 100 caratteri.",
        })
        .regex(/[A-Z]/, {
            message: "La password deve contenere almeno una lettera maiuscola.",
        })
        .regex(/[a-z]/, {
            message: "La password deve contenere almeno una lettera minuscola.",
        })
        .regex(/[0-9]/, {
            message: "La password deve contenere almeno un numero.",
        })
        .regex(/[^a-zA-Z0-9]/, {
            message: "La password deve contenere almeno un carattere speciale.",
        }),
});
