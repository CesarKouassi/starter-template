import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva('border h-12 rounded-full px-6 font-medium',{
    variants : { 
        variant:{
            primary :"bg-gradient-to-r from-violet-vif to-jaune-orange border-violet-vif text-blanc-pur",
            secondary: 'border-dark-purple text-dark-purple  bg-transparent',
        },
        size:{
            sm: "h-10",
        },
    },
  });
export default function button (
    props :{variant: "primary" | "secondary";
    size?:'sm';
    } & ButtonHTMLAttributes<HTMLButtonElement>) {
    const{ variant, className,size, ...otherprops} = props; // {class}
    return (
        <button 
        className={classes({
            variant,
            size,
             className,
            })}
            {...otherprops}
        />
    )
}