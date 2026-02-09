"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

//Components
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          {/* Circular Ripple Container */}
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 overflow-hidden">
            <Stairs />
          </div>

          {/* Fade Overlay */}
          <motion.div
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none z-50"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 0.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
