"use client";

import Button from "@/components/button"
import designExemple1Image from "@/assets/images/design-example-1.png"
import designExemple2Image from "@/assets/images/design-example-2.png"
import Image from "next/image";
import Pointer from "@/components/pointer";
import { motion, useAnimate } from 'framer-motion'
import { useEffect } from "react";
import CursorYouImage from "@/assets/images/cursor-you.svg"
import {  useScopedI18n } from "../../locales/client";


export default function Hero() {
  const heroT = useScopedI18n ("hero");
  const [leftDesignScope ,leftDesignAnimate] =useAnimate();
  const [leftPointerScope ,leftPointerAnimate] =useAnimate();
  const [rightDesignScope ,rightDesignAnimate] =useAnimate();
  const [rightPointerScope ,rightPointerAnimate] =useAnimate();

  useEffect (() => {
      leftDesignAnimate([
             [leftDesignScope.current, {opacity: 1 },{ duration: 0.5 }],
             [leftDesignScope.current, { y : -10, x : -20},{duration: 0.5 }],

      ]);
      leftPointerAnimate([
        [leftPointerScope.current, {opacity: 1 },{ duration: 0.5 }],
        [leftPointerScope.current, { y : 0, x : -100},{duration: 0.5 }],
        
        [
          leftPointerScope.current,
           { x :100, y : [0 ,0 , -60] },
           {duration: 0.5, ease: 'easeInOut' }
          ],


      ]);
      rightDesignAnimate([
        [
          rightDesignScope.current, 
          {opacity: 1 },{ duration: 0.5, delay: 1.5 },
        ],
        [rightDesignScope.current, { y : -10, x : 20},{duration: 0.5 }],
      ]);
      rightPointerAnimate([
        [
          rightPointerScope.current,
           {opacity: 1 },
           { duration: 0.5, delay: 1.5},
        ],
        [rightPointerScope.current, {x:270 ,  y : 50},{duration: 0.5 }],
        [
          rightPointerScope.current,
           { x :-220, y : [-50 ,-50 , 100] },
           {duration: 0.5 }
          ],
      ]);

  },[]);
    return (
        <section className="py-24 overflow-x-clip" style={{
          cursor: `url(${CursorYouImage.src}) auto`,
        }}>
               <div className="container relative">

                {/*pour le cadre photo de gauche */}
                 <motion.div 
                     ref={leftDesignScope} 
                     initial = {{opacity:0 , y:100, x:-100 }}
                     drag
                     className="absolute -left-32 top-16 hidden lg:block"
                  >
                   <Image  src={designExemple1Image}  alt="photo 1 design" draggable = 'false'/>
                          <motion.div
                           ref={leftPointerScope} 
                           initial = {{opacity:0 , y:100, x:-200 }}
                           className="absolute left-56 top-96 hidden lg:block">
                            
                           <Pointer name="ndaya"/>
                          </motion.div>
                 </motion.div>
                 
                  {/*pour le cadre photo de droite */}
                 <motion.div 
                     ref={rightDesignScope}
                     initial = {{opacity:0 , y:100, x:100 }}
                     drag
                   className="absolute -right-64 -top-16 hidden lg:block"
                   >
                    <Image src={designExemple2Image} alt="photo 2 du design" draggable="false"/> 
                     <motion.div 
                          ref={rightPointerScope}
                          initial = {{opacity:0 , x:5 , y:100 }}
                           className="absolute right-80 -top-4 hidden lg:block">
                           <Pointer name="creations " color="purple"/>
                      </motion.div>
                 </motion.div>

                <div className="flex justify-center">
                  <div className="inline-flex py-1 px-3 bg-gradient-to-r  from-violet-vif to-jaune-orange rounded-full text-blanc-pur font-semibold">{heroT('phrase')} 
                    </div>
                  </div>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">{heroT('impactful')}</h1>
                  <p className="text-center text-xl text-dark-purple/50 mt-8 max-w-2xl mx-auto">{heroT('termes')}
                  </p>
                  <form action="" className="flex border border-dark-purple/15 
                           rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input 
                    type="email" 
                    required 
                    placeholder="exmple@gmail.com" 
                    className="bg-transparent px-4 md:flex-1 w-full"/>
                    <Button 
                    type="submit" 
                    variant="primary"
                     className="whitespace-nowrap" 
                     size="sm">
                      {heroT('Signup')}</Button>
                  </form>
               </div>
        </section>
    )
}