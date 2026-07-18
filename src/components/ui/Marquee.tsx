import type { ReactNode } from "react";

export function Marquee({
  children,
  reverse = false,
  className = "",
  speedClassName,
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  speedClassName?: string;
}) {
  const animation = speedClassName ?? (reverse ? "animate-marquee-reverse" : "animate-marquee");

  return (
    <div className={`group relative flex overflow-hidden mask-fade-x ${className}`}>
      <div className={`flex flex-none items-center gap-4 pr-4 ${animation} group-hover:[animation-play-state:paused]`}>
        {children}
      </div>
      <div
        className={`flex flex-none items-center gap-4 pr-4 ${animation} group-hover:[animation-play-state:paused]`}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}
