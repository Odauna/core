import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
}

export default function Card({
    className = "",
    children,
    ...props
}: CardProps) {
    return (
        <div
            className={`bg-white text-white font-semibold text-sm rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
