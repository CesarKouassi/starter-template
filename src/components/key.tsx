import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Key(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children,...othersProps } = props;
    return(
            <div className={twMerge(
             "size-14 bg-dark-purple inline-flex items-center justify-center rounded-2xl text-blanc-pur font-medium",
        className,
             className)} {...othersProps}>{children}
            </div>
    )
}