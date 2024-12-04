//pour la stylisation des cadres avatars
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Avatar(props :HTMLAttributes<HTMLDivElement>){
    const {className,children, ...othersProps} = props ;
    return (
        <div className={twMerge(
            "size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-950", //ajout de la classe pour arrondir la tof
            className
        )} 
           {...othersProps}
            >
                {children}
            </div>
    );
}