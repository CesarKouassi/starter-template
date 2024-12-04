"use client";

import { useI18n } from '../../locales/client'; 
import logoImage from "@/assets/images/logo.svg";
import Image from "next/image";

// Liens à traduire
const Links = [
    { href: "#", label: "footer.alloco" }, 
    { href: "#", label: "footer.privacyPolicy" },
    { href: "#", label: "footer.termsConditions" },
];

export default function Footer() {
    const t = useI18n(); 

    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
                    <div>
                        <Image src={logoImage} alt="image du logo" className="w-12 h-12" />
                    </div>
                    <div>
                        <nav className="flex gap-4">
                            {Links.map((link) => (
                                <a
                                    key={link.label} // Utilisation d'une clé unique basée sur `label`
                                    href={link.href}
                                    className="text-dark-purple/50 text-sm"
                                >
                                    {t(link.label)} 
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
