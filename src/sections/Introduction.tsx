"use client";

import Tag from "@/components/Tag";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`
const words= text.split(" ");
export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const {scrollYProgress } = useScroll ({
        target :scrollTarget,
        offset :["start end","end end"],
    });
    const [currentWord,setCurrentWord] = useState(0);
   const wordIndex = useTransform(scrollYProgress, [ 0, 1], [0, words.length]);

   useEffect(() =>{
             wordIndex.on('change', (latest) =>{
                setCurrentWord(latest);
             });
   },[wordIndex]);
    return (
        <section className="py-24 lg:py-28 ">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                 <div className="flex justify-center">
                 <Tag>Introducing Layers</Tag>
                 </div>
                <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10 ">
                    <span>Your creative peocess deserves better.</span>{""}
                    <span className="">
                     {words.map((word ,wordIndex)=>(
                           <span key={wordIndex} className={twMerge("transition duration-500 text-dark-purple/15",
                            wordIndex < currentWord && 'text-dark-purple')}>{`${word}`} </span>
                     ))};
                    </span>
                    <span className="bg-gradient-to-t from-violet-vif to-jaune-orange bg-clip-text text-transparent block">
                        That&apos;s why the build Layers.
                    </span>
                </div>
                </div>
                 <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}