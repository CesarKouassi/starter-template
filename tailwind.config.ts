import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                md: "2rem",
                lg: "4rem",
            },
        },
        fontFamily: {
            sans: ["var(--font-inter)", "sans-serif"],
        },
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1200px",
            xs: "400px", // Ajouté de CODE 1
            "3xl": "1680px", // Ajouté de CODE 1
            "4xl": "2200px", // Ajouté de CODE 1
        },
        extend: {
            colors: {
                "jaune-orange": "#FFAB07",
                "violet-vif": "#9747FF",
                "vert-menthe": "#30D5C8",
                "rose-pastel": "#FF66B3",
                "gris-fonce": "#2B2B2B",
                "gris-clair": "#F5F5F5",
                "blanc-pur": "#FFFFFF",
                "rouge-vif": "#FF4D4D",
                "bleu-doux": "#4DA6FF",
                "dark-purple": "#140920",
                green: {
                    50: "#30AF5B",
                    90: "#292C27",
                },
                gray: {
                    10: "#EEEEEE",
                    20: "#A2A2A2",
                    30: "#7B7B7B",
                    50: "#585858",
                    90: "#141414",
                },
                orange: {
                    50: "#FF814C",
                },
                blue: {
                    70: "#021639",
                },
                yellow: {
                    50: "#FEC601",
                },
            },
            backgroundImage: {
                "bg-img-1": "url('/img-1.png')",
                "bg-img-2": "url('/img-2.png')",
                "feature-bg": "url('/feature-bg.png')",
                pattern: "url('/pattern.png')",
                "pattern-2": "url('/pattern-bg.png')",
            },
            maxWidth: {
                "10xl": "1512px",
            },
            borderRadius: {
                "5xl": "40px",
            },
        },
    },
    plugins: [],
};

export default config;
