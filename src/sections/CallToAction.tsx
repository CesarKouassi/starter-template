"use client";

import { motion, useAnimate, AnimationPlaybackControls } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { useI18n } from '../../locales/client';
export default function CallToAction() {
   const t = useI18n ();
    const [isHovered, setIsHovered] = useState(false);
    const animation = useRef<AnimationPlaybackControls>();
     const [ scope, animate] = useAnimate();

     useEffect (() => {
     animation.current =  animate(
            scope.current,
            {x : "-50%"},
            {duration  : 30 , ease: "linear", repeat : Infinity}

        );
      }, []);

      useEffect (() => {
               if (animation.current) {
                    if (isHovered) {
                        animation.current.speed =  0.5 ;
                     }else {
                        animation.current.speed = 1;
                    }
                
                }
      },[isHovered])
    return (
         <section className="py-24">
            <div className="overflow-x-clip p-4 flex ">
               <motion.div
               ref={scope}
               className="flex flex-none gap-16 pr-16  text-7xl md:text-8xl font-medium group cursor-pointer"
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}
               >
                  {Array.from({length :10}).map((_, i) =>(
                    <div key={i} className="flex items-center gap-16">
                   <span className="text-7xl bg-gradient-to-r from-violet-vif to-jaune-orange text-transparent bg-clip-text">&#10038;</span>
                   <span className="text-dark-purple group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-vif group-hover:via-jaune-orange  bg-clip-text">
                   {t("defilement")}
                     </span>

                   </div>
                  ))}
               </motion.div>
            </div>
         </section>
    )
}