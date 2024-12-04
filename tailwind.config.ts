import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
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
        },
        extend: {
            colors: {
                'jaune-orange': '#FFAB07',   
                'violet-vif': '#9747FF',    
                'vert-menthe': '#30D5C8',   
                'rose-pastel': '#FF66B3',    
                'gris-fonce': '#2B2B2B',    
                'gris-clair': '#F5F5F5',     
                'blanc-pur': '#FFFFFF',    
                'rouge-vif': '#FF4D4D',      
                'bleu-doux': '#4DA6FF',     
                'dark-purple': '#140920',  
        }
        },
    },
    plugins: [],
};
export default config;
