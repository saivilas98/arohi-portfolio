export function Chip({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink/80 transition-colors duration-300 hover:border-accent/40 hover:bg-accent-soft/60 hover:text-ink">
      {children}
    </span>
  );
}
