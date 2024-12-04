"use client";
import type {IntegrationType} from "@/sections/Integrations"
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from 'react';

export default function IntegrationColumn(props: {
    integrations: IntegrationType;
    className?: string;
    reverse?: boolean;
}) {
    const { integrations, className, reverse } = props;

    return (
        <motion.div
            initial={{
                y: reverse ? "-50%" : 0,
            }}
            animate={{
                y: reverse ? 0 : "-50%",
            }}
            transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
            }}
            className={twMerge("flex flex-col gap-4 pb-4", className)}
        >
            {integrations.map((integration) => (
                <Fragment key={integration.name}>
                    <div
                        key={integration.name}
                        className="bg-blanc-pur border border-dark-purple/10 rounded-3xl p-6"
                    >
                        <div className="flex justify-center">
                            <Image
                                src={integration.icon}
                                alt={`${integration.name} icon`}
                                className="w-24 h-24" // Remplacer par une taille définie si nécessaire
                            />
                        </div>
                        <h3 className="text-3xl text-center mt-6">
                            {integration.name}
                        </h3>
                        <p className="text-center text-dark-purple/50 mt-2">
                            {integration.description}
                        </p>
                    </div>
                </Fragment>
            ))}
        </motion.div>
    );
}
