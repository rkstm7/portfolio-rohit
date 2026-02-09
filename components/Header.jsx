"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      style={{
        opacity: headerOpacity,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 bg-primary/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-accent/5"
          : "py-6 xl:py-8 bg-transparent"
      }`}
    >
      {/* Animated Background Gradient */}
      <motion.div
        animate={{
          background: [
            "linear-gradient(90deg, rgba(0,255,153,0.05) 0%, rgba(255,105,180,0.05) 100%)",
            "linear-gradient(90deg, rgba(255,105,180,0.05) 0%, rgba(0,255,153,0.05) 100%)",
            "linear-gradient(90deg, rgba(0,255,153,0.05) 0%, rgba(255,105,180,0.05) 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo with Animation */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-2 bg-gradient-to-r from-accent to-pink-300 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity"
              />
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={scrolled ? 80 : 100}
                height={scrolled ? 40 : 50}
                className="object-contain relative z-10 transition-all duration-300"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav & Hire Me Button */}
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            
            {/* Animated Hire Me Button */}
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc7q5OrF7X8lBDT6OW6ctl1UbLHY0gnspFu7LhJ9r_PNGea_A/viewform?usp=header">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                {/* Animated Border */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-1 bg-gradient-to-r from-accent via-pink-300 to-accent rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
                />
                
                <Button className="relative bg-gradient-to-r from-accent to-pink-300 hover:from-pink-300 hover:to-accent text-primary font-bold uppercase tracking-wide px-6 py-2 flex items-center gap-2">
                  <motion.span
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="inline-block text-lg"
                  >
                    ✨
                  </motion.span>
                  <span>Hire Me</span>
                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* Mobile-View */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      {scrolled && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
        />
      )}
    </motion.header>
  );
};

export default Header;
