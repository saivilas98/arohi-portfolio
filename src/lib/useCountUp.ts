import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Animates the numeric portion of a label (e.g. "47.6K", "2,000+", "196")
 * while preserving prefixes/suffixes and formatting.
 */
export function useCountUp(value: string, duration = 1.4) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(() => zeroed(value));

  useEffect(() => {
    if (!inView) return;

    const match = value.match(/-?[\d,]*\.?\d+/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const raw = match[0];
    const target = parseFloat(raw.replace(/,/g, ""));
    const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
    const prefix = value.slice(0, match.index);
    const suffix = value.slice((match.index ?? 0) + raw.length);
    const usesComma = raw.includes(",");

    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      const formatted = usesComma
        ? Math.round(current).toLocaleString("en-US")
        : current.toFixed(decimals);
      setDisplay(`${prefix}${formatted}${suffix}`);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return { ref, display };
}

function zeroed(value: string) {
  const match = value.match(/-?[\d,]*\.?\d+/);
  if (!match) return value;
  const raw = match[0];
  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  const prefix = value.slice(0, match.index);
  const suffix = value.slice((match.index ?? 0) + raw.length);
  return `${prefix}${(0).toFixed(decimals)}${suffix}`;
}
