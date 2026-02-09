"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({children}) => {
    const pathname = usePathname();
  return <AnimatePresence mode="wait">

    <div key={pathname}>
        <motion.div 
            initial={{opacity: 1}} 
            animate={{
                opacity: 0, 
                transition: {delay: 0.8, duration: 0.4, ease: [0.22, 1, 0.36, 1]},
            }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
    </div>

    {children}
  </AnimatePresence>
};

export default PageTransition;
