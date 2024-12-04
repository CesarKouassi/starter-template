import React from "react";
import { twMerge } from "tailwind-merge";

export default function FeatureCard(props: {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}) {
  const { title, description, children, className } = props;

  return (
    <div
      className={twMerge("bg-blanc-pur border border-dark-purple/10 p-6 rounded-3xl", className)}
    >
      {/* Enfant principal, par exemple une image ou une icône */}
      <div className="aspect-video overflow-hidden rounded-xl">{children}</div>

      {/* Texte descriptif */}
      <div>
        <h3 className="text-3xl font-medium mt-6 text-dark-purple">{title}</h3>
        <p className="text-dark-purple/50 mt-2">{description}</p>
      </div>
    </div>
  );
}
