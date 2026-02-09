"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaHeart,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/rkstm7",
      color: "hover:text-white",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/rkstm7",
      color: "hover:text-blue-500",
      label: "LinkedIn",
    },
    {
      icon: <FaYoutube />,
      href: "https://www.youtube.com/@rkstm7",
      color: "hover:text-red-500",
      label: "YouTube",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/___rohitsingh7/",
      color: "hover:text-pink-500",
      label: "Instagram",
    },
    {
      icon: <FaTwitter />,
      href: "https://x.com/raajputrksingh",
      color: "hover:text-blue-400",
      label: "Twitter",
    },
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/profile.php?id=100071203236403",
      color: "hover:text-blue-600",
      label: "Facebook",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Resume", href: "/resume" },
    { name: "Work", href: "/work" },
    { name: "Contact", href: "/contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="relative bg-primary border-t border-white/10 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-12 relative z-10 max-w-screen-2xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-pink-300 bg-clip-text text-transparent">
              Rohit Kumar
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Full Stack Developer passionate about creating innovative solutions
              and building impactful applications with cutting-edge technologies.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <FaCode className="text-xl" />
              <FaRocket className="text-xl" />
              <FaHeart className="text-xl text-pink-300" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors duration-300 flex items-center gap-2 text-sm"
                  >
                    <span className="text-accent">→</span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-white">Get In Touch</h3>
            <div className="space-y-3">
              <motion.a
                href="mailto:rohitsingh7@example.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors duration-300 text-sm"
              >
                <FiMail className="text-accent text-lg" />
                <span>rohitsingh7@email.com</span>
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors duration-300 text-sm"
              >
                <FiPhone className="text-accent text-lg" />
                <span>+91 XXXXX XXXXX</span>
              </motion.a>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-white/70 text-sm"
              >
                <FiMapPin className="text-accent text-lg" />
                <span>India</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-white">Follow Me</h3>
            <p className="text-white/70 text-sm">
              Connect with me on social media for updates and insights
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 ${social.color} transition-all duration-300 hover:border-current`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/60 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Made with{" "}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
              className="inline-block text-pink-300"
            >
              <FaHeart className="inline" />
            </motion.span>{" "}
            by <span className="text-accent font-semibold">Rohit Kumar Singh</span>. All
            rights reserved.
          </p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group relative"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-1 bg-gradient-to-r from-accent to-pink-300 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
            />
            <div className="relative w-10 h-10 rounded-full bg-accent/20 border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300">
              <FiArrowUp className="text-xl" />
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => {
        const randomLeft = (i * 7) % 100;
        const randomTop = (i * 11) % 100;
        const randomDuration = 2 + (i % 3);
        const randomDelay = (i % 4) * 0.5;
        
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${randomLeft}%`,
              top: `${randomTop}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
            }}
          />
        );
      })}
    </footer>
  );
}
