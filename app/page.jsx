"use client";

import { Button } from "@/components/ui/button";
import { FiDownload, FiArrowRight, FiCode, FiAward, FiTrendingUp, FiExternalLink } from "react-icons/fi";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  BsCodeSlash, 
  BsBriefcase, 
  BsTrophy, 
  BsEnvelope,
  BsStarFill,
  BsLightningChargeFill
} from "react-icons/bs";
import { FaTrophy, FaCertificate, FaGraduationCap } from "react-icons/fa";

// Components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const roles = [
    "DevOps & Cloud Engineer",
    "Python Full Stack Developer",
    "MERN Stack Developer",
    "SFMC Developer",
    "AI & Data Analyst",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const highlights = [
    {
      icon: <FiCode className="text-2xl" />,
      title: "Clean Code",
      description: "Writing maintainable & scalable solutions",
    },
    {
      icon: <FiAward className="text-2xl" />,
      title: "Best Practices",
      description: "Following industry standards & patterns",
    },
    {
      icon: <FiTrendingUp className="text-2xl" />,
      title: "Fast Learner",
      description: "Adapting to new technologies quickly",
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/95">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => {
          const randomLeft = (i * 5) % 100;
          const randomTop = (i * 7) % 100;
          const randomX = (i % 3) * 50 - 50;
          const randomY = ((i + 1) % 3) * 50 - 50;
          const randomDuration = 10 + (i % 5) * 2;

          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent/30 rounded-full"
              style={{
                left: `${randomLeft}%`,
                top: `${randomTop}%`,
              }}
              animate={{
                x: [0, randomX, 0],
                y: [0, randomY, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}
      </div>

      {/* Mouse Follower Effect */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(0,255,153,0.1) 0%, transparent 70%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 py-8 xl:py-12 max-w-screen-2xl">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-20">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center xl:text-left w-full xl:pt-8"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 255, 153, 0.3)",
                    "0 0 40px rgba(0, 255, 153, 0.6)",
                    "0 0 20px rgba(0, 255, 153, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="px-5 py-2.5 rounded-full border-2 border-accent/50 bg-accent/10 backdrop-blur-md inline-flex items-center gap-3"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                <span className="text-accent font-semibold text-sm tracking-wide">
                  AVAILABLE FOR OPPORTUNITIES
                </span>
              </motion.div>
            </motion.div>

            {/* Rotating Roles */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="h-10 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRoleIndex}
                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -20, rotateX: 90 }}
                    transition={{ duration: 0.6 }}
                    className="text-xl md:text-2xl font-bold bg-gradient-to-r from-accent via-pink-300 to-accent bg-clip-text text-transparent"
                  >
                    {roles[currentRoleIndex]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-4">
                <motion.span
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="block text-white/90"
                >
                  Hello, I'm
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
                  className="relative inline-block"
                >
                  <span className="text-accent relative z-10">Rohit Kumar</span>
                  <motion.span
                    animate={{
                      width: ["0%", "100%"],
                      opacity: [0, 1],
                    }}
                    transition={{
                      delay: 1.5,
                      duration: 1,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-accent via-pink-300 to-accent rounded-full"
                  />
                </motion.span>
              </h1>
            </motion.div>

            {/* Description with Typing Effect */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="space-y-3">
                <p className="text-sm md:text-base text-white/90 leading-relaxed">
                  🚀 Experienced in building scalable, high-performance applications using
                  modern full-stack technologies, with a strong focus on clean architecture,
                  automation, and efficient system design.
                </p>

                <p className="text-sm md:text-base text-white/80 leading-relaxed">
                  💡 Skilled in designing robust backends, intuitive user interfaces, and
                  deploying applications on cloud-based infrastructure with CI/CD workflows
                  to ensure reliability, security, and maintainability.
                </p>

                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  ⚡ Passionate about <span className="text-accent font-semibold">problem-solving</span>,
                  continuous improvement, and delivering impactful, real-world solutions by
                  leveraging modern technologies and best engineering practices.
                </p>
              </div>
            </motion.div>
            {/* Highlight Cards */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="text-accent mb-2">{item.icon}</div>
                    <h3 className="text-white font-semibold mb-1 text-sm">{item.title}</h3>
                    <p className="text-white/60 text-xs">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-4 mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="group relative overflow-hidden uppercase w-full sm:w-auto px-8 py-6 border-2 border-accent text-accent hover:text-primary font-bold"
                >
                  <motion.span
                    className="absolute inset-0 bg-accent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <a
                    href="https://drive.google.com/file/d/1OSAQ5kUeYdhdnxoGVTcBhXjgtM1e0GYM/view?usp=drive_link"
                    className="relative z-10 flex items-center gap-2"
                  >
                    Download CV
                    <FiDownload className="text-xl" />
                  </a>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-accent to-pink-300 hover:from-pink-300 hover:to-accent text-primary uppercase w-full sm:w-auto px-8 py-6 font-bold"
                >
                  <a href="/contact" className="flex items-center gap-2">
                    Let's Connect
                    <FiArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4">
                <span className="text-white/60 font-medium tracking-wide">CONNECT WITH ME</span>
                <div className="h-px w-16 bg-gradient-to-r from-accent to-transparent" />
                <Socials
                  containerStyles="flex gap-3"
                  iconStyles="w-11 h-11 border-2 border-white/20 rounded-full flex justify-center items-center text-accent hover:border-accent hover:bg-accent/20 hover:scale-110 hover:rotate-12 transition-all duration-300"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1, type: "spring" }}
            className="flex-shrink-0 xl:-mt-64 xl:ml-auto"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              {/* Decorative Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-4 bg-gradient-to-r from-accent via-pink-300 to-accent opacity-20 blur-2xl rounded-full"
              />
              <Photo />

              {/* Floating Badge */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute -bottom-4 -right-4 bg-accent text-primary px-4 py-2 rounded-full font-bold text-sm shadow-lg z-10"
              >
                🔥 Hire Me!
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <Stats />
      </motion.div>

      {/* Services Preview Section */}
      <section className="py-16 xl:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-screen-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent via-pink-300 to-accent bg-clip-text text-transparent">
                What I Offer
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Comprehensive development services tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Full Stack Development",
                description: "End-to-end web applications with modern frameworks",
                icon: "💻",
                color: "from-blue-400 to-cyan-500"
              },
              {
                title: "DevOps & Cloud",
                description: "CI/CD pipelines, containerization & cloud deployment",
                icon: "☁️",
                color: "from-purple-400 to-pink-500"
              },
              {
                title: "AI & Data Science",
                description: "Machine learning models & data analysis solutions",
                icon: "🤖",
                color: "from-green-400 to-emerald-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-all duration-300"
              >
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity`}
                />
                <div className="relative">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/60 text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href="/services">
              <Button className="bg-gradient-to-r from-accent to-pink-300 hover:from-pink-300 hover:to-accent text-primary font-bold">
                View All Services
                <FiArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 xl:py-24 relative bg-white/[0.02]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-screen-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent via-pink-300 to-accent bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Showcasing my best work and technical expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                category: "Full Stack",
                image: "/assets/commerce.png",
                tech: ["React", "Node.js", "MongoDB"],
                color: "from-accent to-green-400"
              },
              {
                title: "School Management System",
                category: "MERN Stack",
                image: "/assets/thumb.jpg",
                tech: ["React", "Express", "Socket.io"],
                color: "from-purple-400 to-pink-500"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${project.color} text-primary mb-3`}>
                      {project.category}
                    </span>
                    <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 rounded bg-white/10 text-white/80 text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity -z-10`}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href="/work">
              <Button className="bg-gradient-to-r from-accent to-pink-300 hover:from-pink-300 hover:to-accent text-primary font-bold">
                View All Projects
                <FiArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills & Experience Preview */}
      <section className="py-16 xl:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-screen-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent via-pink-300 to-accent bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Proficient in modern technologies and frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "React", level: 90, icon: "⚛️" },
              { name: "Node.js", level: 85, icon: "🟢" },
              { name: "Python", level: 88, icon: "🐍" },
              { name: "Docker", level: 82, icon: "🐳" },
              { name: "AWS", level: 80, icon: "☁️" },
              { name: "MongoDB", level: 85, icon: "🍃" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 transition-all text-center group"
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="text-white font-semibold text-sm mb-2">{skill.name}</p>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 + 0.3, duration: 1 }}
                    className="bg-gradient-to-r from-accent to-pink-300 h-1.5 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href="/resume">
              <Button className="bg-gradient-to-r from-accent to-pink-300 hover:from-pink-300 hover:to-accent text-primary font-bold">
                View Full Resume
                <FiArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Achievements Preview */}
      <section className="py-16 xl:py-24 relative bg-white/[0.02]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-screen-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent via-pink-300 to-accent bg-clip-text text-transparent">
                Achievements & Certifications
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Recognition and professional certifications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: FaTrophy,
                title: "State Level - 19th Rank",
                org: "YSM INFO SOLUTION",
                color: "from-accent to-green-400"
              },
              {
                icon: FaCertificate,
                title: "IBM Data Science",
                org: "Coursera Certification",
                color: "from-blue-400 to-cyan-500"
              },
              {
                icon: FaGraduationCap,
                title: "Full Stack Bootcamp",
                org: "Udemy Certified",
                color: "from-pink-400 to-rose-500"
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-block p-4 rounded-xl bg-gradient-to-br ${achievement.color} mb-4`}
                >
                  <achievement.icon className="text-3xl text-primary" />
                </motion.div>
                <h3 className="text-white font-bold text-lg mb-2">{achievement.title}</h3>
                <p className="text-white/60 text-sm">{achievement.org}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href="/achievement">
              <Button className="bg-gradient-to-r from-accent to-pink-300 hover:from-pink-300 hover:to-accent text-primary font-bold">
                View All Achievements
                <FiArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 xl:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-screen-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-1 bg-gradient-to-r from-accent via-pink-300 to-accent rounded-3xl opacity-20 blur-xl"
            />
            <div className="relative bg-gradient-to-r from-accent/10 via-pink-300/10 to-accent/10 border border-white/10 rounded-3xl p-8 md:p-12 text-center">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="inline-block mb-6"
              >
                <BsEnvelope className="text-5xl md:text-6xl text-accent" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-4 text-white">
                Let's Work Together
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
                Have a project in mind? I'm available for freelance work and full-time opportunities. 
                Let's discuss how we can bring your ideas to life!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="bg-gradient-to-r from-accent to-pink-300 hover:from-pink-300 hover:to-accent text-primary font-bold px-8 py-6">
                      <BsEnvelope className="mr-2" />
                      Get In Touch
                    </Button>
                  </motion.div>
                </Link>
                <a href="tel:+919113134541">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent/10 font-bold px-8 py-6">
                      📞 Call Now
                    </Button>
                  </motion.div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Home;
