import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../../data/content";
import { easeOut } from "../../lib/motion";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("intro-seen")) {
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setDone(true);
      sessionStorage.setItem("intro-seen", "1");
      document.body.style.overflow = "";
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.8, ease: easeOut },
          }}
        >
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
              className="font-display text-2xl italic text-paper sm:text-3xl"
            >
              {profile.name}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
