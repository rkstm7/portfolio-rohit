"use client";

import { motion } from "framer-motion";

const diamondAnimation = {
  initial: {
    scale: 0,
    rotate: 0,
    opacity: 1,
  },
  animate: {
    scale: 1.5,
    rotate: 180,
    opacity: 0,
  },
  exit: {
    scale: 0,
    rotate: 0,
    opacity: 1,
  },
};

const Stairs = () => {
  const positions = [
    { top: "50%", left: "50%" },
    { top: "25%", left: "25%" },
    { top: "25%", left: "75%" },
    { top: "75%", left: "25%" },
    { top: "75%", left: "75%" },
    { top: "50%", left: "10%" },
    { top: "50%", left: "90%" },
  ];

  const colors = [
    "from-accent to-pink-300",
    "from-pink-300 to-purple-400",
    "from-purple-400 to-blue-400",
    "from-blue-400 to-accent",
    "from-accent to-pink-300",
    "from-pink-300 to-purple-400",
    "from-purple-400 to-blue-400",
  ];

  return (
    <>
      {/* Smooth Visible Diamond Animation */}
      {positions.map((pos, index) => {
        return (
          <motion.div
            key={index}
            variants={diamondAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.1,
            }}
            className={`absolute w-96 h-96 bg-gradient-to-br ${colors[index]} -translate-x-1/2 -translate-y-1/2`}
            style={{
              top: pos.top,
              left: pos.left,
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              filter: "blur(15px)",
            }}
          />
        );
      })}
    </>
  );
};

export default Stairs;
