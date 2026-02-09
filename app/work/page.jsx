"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { 
  BsArrowUpRight, 
  BsGithub, 
  BsEye,
  BsCode,
  BsLightning,
  BsStar,
  BsHeart
} from "react-icons/bs";
import { 
  FiExternalLink, 
  FiGithub, 
  FiGrid,
  FiList 
} from "react-icons/fi";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Web Development",
    title: "E-Commerce Website",
    description:
      "A full-featured MERN stack e-commerce platform with real-time inventory, secure payments, user authentication, and admin dashboard. Features include product search, filters, cart management, and order tracking for seamless shopping experience.",
    stack: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "Bootstrap" },
      { name: "Stripe API" },
    ],
    image: "/assets/commerce.png",
    live: "https://github.com/rkstm7",
    github: "https://github.com/rkstm7",
    color: "from-accent to-green-400",
    features: ["Payment Gateway", "Admin Panel", "Real-time Updates"],
    stats: { views: "2.5K", likes: 145, stars: 89 },
  },
  {
    num: "02",
    category: "App Development",
    title: "Calculator App",
    description:
      "Cross-platform calculator app built with React Native featuring scientific calculations, history tracking, and beautiful UI. Supports basic arithmetic, trigonometry, logarithms, and memory functions with smooth animations.",
    stack: [
      { name: "React Native" },
      { name: "Redux" },
      { name: "JavaScript" },
      { name: "Expo" },
    ],
    image: "/assets/calculator.png",
    live: "https://github.com/rkstm7",
    github: "https://github.com/rkstm7",
    color: "from-pink-300 to-pink-500",
    features: ["Scientific Mode", "History", "Dark Theme"],
    stats: { views: "1.8K", likes: 98, stars: 67 },
  },
  {
    num: "03",
    category: "Full Stack",
    title: "School Management System",
    description:
      "Comprehensive school management platform with student enrollment, attendance tracking, grade management, timetable scheduling, and parent-teacher communication. Includes role-based access for admins, teachers, students, and parents.",
    stack: [
      { name: "MERN Stack" },
      { name: "Socket.io" },
      { name: "JWT" },
      { name: "Tailwind CSS" },
    ],
    image: "/assets/thumb.jpg",
    live: "https://github.com/rkstm7",
    github: "https://github.com/rkstm7",
    color: "from-purple-400 to-purple-600",
    features: ["Real-time Chat", "Attendance System", "Grade Reports"],
    stats: { views: "3.2K", likes: 187, stars: 112 },
  },
  {
    num: "04",
    category: "Mobile App",
    title: "Education App",
    description:
      "Interactive learning platform with video courses, quizzes, live classes, progress tracking, and certificates. Features include offline mode, push notifications, discussion forums, and personalized learning paths.",
    stack: [
      { name: "React Native" },
      { name: "Firebase" },
      { name: "Redux Toolkit" },
      { name: "Video SDK" },
    ],
    image: "/assets/education.jpg",
    live: "https://github.com/rkstm7",
    github: "https://github.com/rkstm7",
    color: "from-blue-400 to-blue-600",
    features: ["Live Classes", "Offline Mode", "Certificates"],
    stats: { views: "4.1K", likes: 234, stars: 156 },
  },
  {
    num: "05",
    category: "Web Development",
    title: "Blogging Platform",
    description:
      "Modern blogging platform built with Python Django featuring rich text editor, image uploads, comments, categories, tags, and SEO optimization. Includes user profiles, social sharing, and analytics dashboard.",
    stack: [
      { name: "Django" },
      { name: "Python" },
      { name: "PostgreSQL" },
      { name: "Tailwind CSS" },
      { name: "AWS S3" },
    ],
    image: "/assets/blog.png",
    live: "https://github.com/rkstm7",
    github: "https://github.com/rkstm7",
    color: "from-orange-400 to-orange-600",
    features: ["Rich Editor", "SEO Optimized", "Analytics"],
    stats: { views: "2.9K", likes: 167, stars: 94 },
  },
];

const categories = ["All", "Web Development", "App Development", "Full Stack", "Mobile App"];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("slider"); // slider or grid
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(filteredProjects[currentIndex]);
  };

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  // Update project when filter changes
  React.useEffect(() => {
    if (filteredProjects.length > 0) {
      setProject(filteredProjects[0]);
    }
  }, [selectedCategory]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className="min-h-screen relative overflow-hidden py-12 xl:py-20">
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
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"
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
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 max-w-screen-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h1
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-accent via-pink-300 to-accent bg-clip-text text-transparent mb-4"
          >
            My Portfolio
          </motion.h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto mb-8">
            Explore my latest projects showcasing expertise in web and mobile development
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <BsCode className="text-accent text-2xl" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">{projects.length}+</p>
                <p className="text-white/60 text-sm">Projects</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <BsLightning className="text-pink-300 text-2xl" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">15K+</p>
                <p className="text-white/60 text-sm">Total Views</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <BsStar className="text-accent text-2xl" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-white/60 text-sm">GitHub Stars</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Filter & View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12"
        >
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-accent to-pink-300 text-primary"
                    : "bg-white/5 border border-white/10 text-white hover:border-accent/50"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex gap-2 bg-white/5 p-1 rounded-lg border border-white/10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode("slider")}
              className={`p-2 rounded ${
                viewMode === "slider"
                  ? "bg-accent text-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <FiList className="text-xl" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${
                viewMode === "grid"
                  ? "bg-accent text-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <FiGrid className="text-xl" />
            </motion.button>
          </div>
        </motion.div>

        {/* Slider View */}
        {viewMode === "slider" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            {/* Project Image Slider - Full Width */}
            <div className="w-full">
              <Swiper
                key={selectedCategory}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={30}
                coverflowEffect={{
                  rotate: 30,
                  stretch: 0,
                  depth: 200,
                  modifier: 1,
                  slideShadows: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={filteredProjects.length > 1}
                modules={[EffectCoverflow, Autoplay]}
                className="w-full h-[400px] md:h-[500px] xl:h-[600px]"
                onSlideChange={handleSlideChange}
                breakpoints={{
                  768: {
                    slidesPerView: 1.2,
                  },
                  1024: {
                    slidesPerView: 1.5,
                  },
                  1280: {
                    slidesPerView: 1.8,
                  },
                }}
              >
                {filteredProjects.map((proj, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative h-full rounded-2xl overflow-hidden group cursor-pointer"
                    >
                      {/* Image */}
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      
                      {/* Project Info on Image */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`text-5xl md:text-6xl font-extrabold bg-gradient-to-r ${proj.color} bg-clip-text text-transparent`}>
                            {proj.num}
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs md:text-sm font-bold bg-gradient-to-r ${proj.color} text-primary`}>
                            {proj.category}
                          </span>
                        </div>
                        <h3 className="text-white font-bold text-2xl md:text-3xl mb-2">{proj.title}</h3>
                        <p className="text-white/80 text-sm md:text-base line-clamp-2">{proj.description}</p>
                      </div>

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
                        className={`absolute -inset-1 bg-gradient-to-r ${proj.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10`}
                      />
                    </motion.div>
                  </SwiperSlide>
                ))}
                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-4 z-20 w-full justify-center xl:justify-end xl:right-8"
                  btnStyles="bg-accent hover:bg-accent/80 text-primary text-xl w-12 h-12 flex justify-center items-center transition-all rounded-full shadow-lg"
                />
              </Swiper>
            </div>

            {/* Project Details Below Slider */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={project.num}
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-white font-bold text-xl mb-3 flex items-center gap-2">
                      <BsCode className="text-accent" />
                      About Project
                    </h3>
                    <p className="text-white/80 leading-relaxed text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-white font-bold text-xl mb-3 flex items-center gap-2">
                      <BsLightning className="text-accent" />
                      Key Features
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 text-sm hover:border-accent/50 transition-colors"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-6 text-base">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2"
                    >
                      <BsEye className="text-accent text-xl" />
                      <div>
                        <p className="text-white font-bold">{project.stats.views}</p>
                        <p className="text-white/60 text-xs">Views</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2"
                    >
                      <BsHeart className="text-pink-300 text-xl" />
                      <div>
                        <p className="text-white font-bold">{project.stats.likes}</p>
                        <p className="text-white/60 text-xs">Likes</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2"
                    >
                      <BsStar className="text-accent text-xl" />
                      <div>
                        <p className="text-white font-bold">{project.stats.stars}</p>
                        <p className="text-white/60 text-xs">Stars</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col gap-6">
                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-white font-bold text-xl mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`px-4 py-2 rounded-lg bg-gradient-to-r ${project.color} text-primary font-medium text-sm shadow-lg`}
                        >
                          {item.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-4">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full"
                    >
                      <Button className="w-full bg-gradient-to-r from-accent to-pink-300 hover:from-pink-300 hover:to-accent text-primary font-bold text-base py-6 shadow-lg">
                        <FiExternalLink className="mr-2 text-lg" />
                        View Live Demo
                      </Button>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full border-2 border-accent text-accent hover:bg-accent/10 font-bold text-base py-6">
                        <FiGithub className="mr-2 text-lg" />
                        View Source Code
                      </Button>
                    </motion.a>
                  </div>

                  {/* Additional Info Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10 border border-white/10`}
                  >
                    <h4 className="text-white font-bold mb-2">Project Highlights</h4>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Fully responsive and mobile-friendly design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Modern UI/UX with smooth animations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent mt-1">✓</span>
                        <span>Optimized performance and SEO ready</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Grid View */}
        {viewMode === "grid" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((proj, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                whileHover={{ y: -10 }}
                className="group relative h-full"
              >
                {/* Animated Border */}
                <motion.div
                  animate={{
                    rotate: hoveredProject === index ? [0, 360] : 0,
                  }}
                  transition={{
                    duration: 8,
                    repeat: hoveredProject === index ? Infinity : 0,
                    ease: "linear",
                  }}
                  className={`absolute -inset-0.5 bg-gradient-to-r ${proj.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`}
                />

                {/* Card */}
                <div className="relative rounded-2xl overflow-hidden bg-primary/95 border border-white/10 backdrop-blur-sm h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative w-full h-56 overflow-hidden flex-shrink-0">
                    {/* Image */}
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
                    
                    {/* Number Badge */}
                    <div className={`absolute top-4 right-4 w-14 h-14 rounded-full bg-gradient-to-r ${proj.color} flex items-center justify-center text-primary font-bold text-xl shadow-xl z-10`}>
                      {proj.num}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r ${proj.color} text-primary shadow-lg`}>
                        {proj.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 line-clamp-1">
                      {proj.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {proj.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {proj.stack.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/80 text-xs font-medium hover:border-accent/50 transition-colors"
                        >
                          {tech.name}
                        </span>
                      ))}
                      {proj.stack.length > 4 && (
                        <span className="px-3 py-1 rounded-lg bg-accent/10 border border-accent text-accent text-xs font-bold">
                          +{proj.stack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Stats & Links */}
                    <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-auto">
                      <div className="flex gap-4 text-sm">
                        <span className="flex items-center gap-1.5 text-white/70">
                          <BsEye className="text-accent text-base" /> 
                          <span className="font-medium">{proj.stats.views}</span>
                        </span>
                        <span className="flex items-center gap-1.5 text-white/70">
                          <BsStar className="text-accent text-base" /> 
                          <span className="font-medium">{proj.stats.stars}</span>
                        </span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Link href={proj.live} target="_blank">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger>
                                <motion.div
                                  whileHover={{ scale: 1.15, rotate: 15 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="w-10 h-10 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all"
                                >
                                  <BsArrowUpRight className="text-lg" />
                                </motion.div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Live Demo</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                        <Link href={proj.github} target="_blank">
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger>
                                <motion.div
                                  whileHover={{ scale: 1.15, rotate: -15 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="w-10 h-10 rounded-full bg-white/5 border-2 border-white/20 flex items-center justify-center text-white hover:border-accent hover:text-accent transition-all"
                                >
                                  <BsGithub className="text-lg" />
                                </motion.div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View Code</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
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
            className="absolute w-2 h-2 bg-accent/30 rounded-full"
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
    </section>
  );
};

export default Work;
