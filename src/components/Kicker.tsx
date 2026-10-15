import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export function Kicker({ children, icon, className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md border border-line bg-panel px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.22em] text-neon uppercase ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}
