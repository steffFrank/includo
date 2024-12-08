import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],

    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",

        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    "100": "#FFF4E3", // Soft warm beige
                    "500": "#C57B57", // Warm terracotta
                },

                secondary: {
                    "100": "#FFE8D6", // Soft peach
                    "500": "#B5651D", // Rich amber
                },

                accent: {
                    "100": "#F5E4C3", // Pale sandy yellow
                    "500": "#A3754E", // Muted earthy brown
                },

                neutral: {
                    "100": "#F6F6F6", // Light gray for backgrounds
                    "300": "#D1D5DB", // Mid-gray for borders and subtle elements
                    "500": "#6B7280", // Neutral gray for text
                    "700": "#374151", // Darker gray for emphasis
                    "900": "#1F2937", // Almost black
                },

                dark: {
                    "100": "#000000",
                    "200": "#0F1117",
                    "300": "#151821",
                    "400": "#212734",
                    "500": "#101012",
                },

                light: {
                    "400": "#A8B5C3", // Muted cool blue-gray
                    "500": "#7F9DA8", // Medium cool gray
                    "700": "#E8EFF5", // Pale cool white
                    "800": "#F9FBFC", // Very light cool white
                    "850": "#FFFFFF", // Pure white
                    "900": "#FFFFFF",
                },
            },

            borderRadius: {
                "2": "8px",

                "1.5": "6px",

                lg: "var(--radius)",

                md: "calc(var(--radius) - 2px)",

                sm: "calc(var(--radius) - 4px)",
            },

            boxShadow: {
                "light-100":
                    "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",

                "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",

                "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",

                "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",

                "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
            },

            backgroundImage: {
                "auth-dark": 'url("/images/auth-dark.png")',

                "auth-light": 'url("/images/auth-light.png")',
            },

            screens: {
                xs: "420px",
            },

            fontFamily: {
                inter: ["var(--font-inter)"],

                "space-grotesk": ["var(--font-space-grotesk)"],
            },
        },
    },

    plugins: [tailwindcssAnimate, typography],
};

export default config;
