import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...othersProps } = props;
    return (
        <div
            className={twMerge(
                "inline-flex gap-2  px-3 py-1 rounded-full uppercase items-center border border-violet-vif  bg-clip-text ",
                className )}{...othersProps}
        >
            <span className=" bg-gradient-to-r from-violet-vif to-jaune-orange text-transparent bg-clip-text">&#10038;</span>
            <span className="text-transparent bg-gradient-to-t from-violet-vif to-jaune-orange bg-clip-text text-sm">
                {children}
            </span>
        </div>
    );
}
