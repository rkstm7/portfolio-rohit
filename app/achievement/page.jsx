"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

import { 
  FaExternalLinkAlt, 
  FaTrophy, 
  FaMedal,
  FaCertificate,
  FaStar,
  FaAward,
  FaGraduationCap
} from "react-icons/fa";
import { 
  GiAchievement, 
  GiLaurelsTrophy,
  GiRibbonMedal 
} from "react-icons/gi";
import { 
  BsCalendar3, 
  BsBuilding, 
  BsCheckCircleFill,
  BsLightningChargeFill,
  BsStarFill
} from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    num: "01",
    category: "Internship",
    organization: "YSM INFO SOLUTION",
    title: "Python Full Stack Development",
    description:
      "Successfully completed Python Full Stack Development internship at YSM INFO SOLUTION. Achieved 19th Rank in State Level Tech Quiz, demonstrating exceptional technical knowledge and problem-solving skills.",
    image: "/assets/ysm.jpg",
    live: "https://github.com/rkstm7/certifications-achievements/blob/main/ysm.jpg",
    github: "https://github.com/rkstm7/certifications-achievements/blob/main/ysm.jpg",
    color: "from-accent to-green-400",
    icon: FaTrophy,
    year: "2024",
    skills: ["Python", "Django", "React", "PostgreSQL", "REST API"],
    achievement: "State Level - 19th Rank"
  },
  {
    num: "02",
    category: "Internship",
    organization: "Internship Studio",
    title: "Java Development Internship",
    description:
      "Completed comprehensive Java Development internship with Internship Studio. Secured impressive 1259th Rank in All India Tech Quiz among thousands of participants, showcasing strong Java fundamentals.",
    image: "/assets/intenshipstudio.jpeg",
    live: "https://github.com/rkstm7/certifications-achievements/blob/main/internship.jpg",
    github: "https://github.com/rkstm7/certifications-achievements/blob/main/intenshipstudio.jpeg",
    color: "from-orange-400 to-red-500",
    icon: FaMedal,
    year: "2024",
    skills: ["Java", "Spring Boot", "MySQL", "Hibernate", "Maven"],
    achievement: "All India - 1259th Rank"
  },
  {
    num: "03",
    category: "Internship",
    organization: "Bharat Intern",
    title: "Full Stack Development",
    description:
      "First professional internship opportunity secured through LinkedIn. Gained hands-on experience in full-stack development, working on real-world projects and learning industry best practices.",
    image: "/assets/bharatIntern.jpeg",
    live: "https://github.com/rkstm7/certifications-achievements/blob/main/bharatIntern.jpeg",
    github: "https://github.com/rkstm7/certifications-achievements/blob/main/bharatoffer.jpg",
    color: "from-blue-400 to-cyan-400",
    icon: FaGraduationCap,
    year: "2023",
    skills: ["MERN Stack", "Git", "Agile", "API Development"],
    achievement: "First Internship"
  },
  {
    num: "04",
    category: "Leadership",
    organization: "RAC Pune Wisdom",
    title: "BOD Training & Editor Role",
    description:
      "Served as Editor and completed Board of Directors training at RAC Pune Wisdom under President Rtr. Shivam Shaswat. Developed leadership, team management, and communication skills through various club activities.",
    image: "/assets/editor.jpeg",
    live: "https://github.com/rkstm7/certifications-achievements/blob/main/bodtra.jpeg",
    github: "https://github.com/rkstm7/certifications-achievements/blob/main/editor.jpeg",
    color: "from-purple-400 to-pink-500",
    icon: FaAward,
    year: "2024",
    skills: ["Leadership", "Team Work", "Management", "Communication"],
    achievement: "Editor & BOD Member"
  },
  {
    num: "05",
    category: "Certification",
    organization: "Udemy",
    title: "Complete Full Stack Development Bootcamp 2024",
    description:
      "Mastered modern full-stack development through comprehensive bootcamp covering HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Built multiple real-world projects demonstrating end-to-end development skills.",
    image: "/assets/udemywebdev.jpeg",
    live: "https://www.udemy.com/certificate/UC-3dc26b64-8cd4-4e5d-9575-e1d5272dde98/",
    github: "https://github.com/rkstm7/certifications-achievements/blob/main/udemywebdev.jpeg",
    color: "from-pink-400 to-rose-500",
    icon: FaCertificate,
    year: "2024",
    skills: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    achievement: "Certified Developer"
  },
  {
    num: "06",
    category: "Certification",
    organization: "Coursera - IBM",
    title: "Python For Data Science, AI & Development",
    description:
      "Completed IBM's professional certification covering Python programming, Pandas, NumPy, Matplotlib, and TensorFlow. Gained expertise in data analysis, machine learning algorithms, and AI development.",
    image: "/assets/pythonibm.jpeg",
    live: "https://www.coursera.org/account/accomplishments/records/J6XUP5KTXLPT",
    github: "https://github.com/rkstm7/certifications-achievements/blob/main/pythonibm.jpeg",
    color: "from-cyan-400 to-blue-500",
    icon: FaStar,
    year: "2024",
    skills: ["Python", "Pandas", "NumPy", "TensorFlow", "Data Analysis"],
    achievement: "IBM Certified"
  },
  {
    num: "07",
    category: "Certification",
    organization: "Udemy",
    title: "Complete AI, Machine Learning & Data Science",
    description:
      "Comprehensive course covering artificial intelligence, machine learning algorithms, and data science techniques. Learned model building, data preprocessing, and deployment using Python, TensorFlow, and scikit-learn.",
    image: "/assets/udemydatascience.jpeg",
    live: "https://www.udemy.com/certificate/UC-b955d601-8132-40d6-b6a9-c8fac9e2beeb",
    github: "https://github.com/rkstm7/certifications-achievements/blob/main/udemydatascience.jpeg",
    color: "from-green-400 to-emerald-500",
    icon: GiLaurelsTrophy,
    year: "2024",
    skills: ["Machine Learning", "AI", "scikit-learn", "Data Science"],
    achievement: "ML Specialist"
  },
  {
    num: "08",
    category: "Certification",
    organization: "Udemy",
    title: "Java Beginner To Master",
    description:
      "Comprehensive Java programming course covering fundamentals to advanced concepts including OOP, collections, multithreading, and design patterns. Completed hands-on projects demonstrating Java proficiency.",
    image: "/assets/java.jpeg",
    live: "https://udemy-certificate.s3.amazonaws.com/image/UC-b0473594-8541-43dd-aa29-4cf5c78914e7.jpg",
    github: "https://github.com/rkstm7/certifications-achievements/blob/main/java.jpeg",
    color: "from-red-400 to-orange-500",
    icon: GiRibbonMedal,
    year: "2023",
    skills: ["Java", "OOP", "Collections", "Multithreading", "Design Patterns"],
    achievement: "Java Expert"
  },
  {
    num: "09",
    category: "Certification",
    organization: "NPTEL",
    title: "Data Structures & Algorithms Using Java",
    description:
      "NPTEL certification covering comprehensive data structures (arrays, linked lists, trees, graphs) and algorithms (sorting, searching, dynamic programming). Focused on problem-solving and optimization techniques.",
    image: "/assets/nptel.jpeg",
    live: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS85S3451138320332002",
    github: "https://github.com/rkstm7/certifications-achievements/blob/main/nptel.jpeg",
    color: "from-yellow-400 to-amber-500",
    icon: FaTrophy,
    year: "2023",
    skills: ["DSA", "Java", "Algorithms", "Problem Solving"],
    achievement: "NPTEL Certified"
  },
];

const categories = ["All", "Internship", "Certification", "Leadership"];

const Achievement = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(achievements[0]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setActiveIndex(currentIndex);
    setSelectedAchievement(filteredAchievements[currentIndex]);
  };

  const filteredAchievements = selectedCategory === "All" 
    ? achievements 
    : achievements.filter(a => a.category === selectedCategory);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Stats calculation
  const stats = {
    total: achievements.length,
    internships: achievements.filter(a => a.category === "Internship").length,
    certifications: achievements.filter(a => a.category === "Certification").length,
    leadership: achievements.filter(a => a.category === "Leadership").length,
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-12 xl:py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
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
            opacity: [0.03, 0.05, 0.03],
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
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-4"
          >
            <GiAchievement className="text-6xl md:text-7xl text-accent mx-auto" />
          </motion.div>
          
          <motion.h1
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-accent via-pink-300 to-accent bg-[length:200%_auto] bg-clip-text text-transparent mb-4"
          >
            Achievements & Certifications
          </motion.h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto mb-8">
            A showcase of my professional journey, certifications, and accomplishments
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20"
            >
              <FaTrophy className="text-3xl text-accent mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{stats.total}+</p>
              <p className="text-white/60 text-sm">Total Achievements</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20"
            >
              <FaGraduationCap className="text-3xl text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{stats.internships}</p>
              <p className="text-white/60 text-sm">Internships</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20"
            >
              <FaCertificate className="text-3xl text-pink-300 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{stats.certifications}</p>
              <p className="text-white/60 text-sm">Certifications</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20"
            >
              <FaAward className="text-3xl text-purple-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{stats.leadership}</p>
              <p className="text-white/60 text-sm">Leadership</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((cat, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedAchievement(cat === "All" ? achievements[0] : achievements.filter(a => a.category === cat)[0]);
              }}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-accent to-pink-300 text-primary shadow-lg shadow-accent/50"
                  : "bg-white/5 border border-white/10 text-white hover:border-accent/50"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
          {/* Left: Achievement Details */}
          <motion.div
            key={selectedAchievement.num}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 xl:order-1"
          >
            <div className="flex flex-col gap-6">
              {/* Number & Icon */}
              <div className="flex items-center gap-6">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className={`text-8xl font-extrabold bg-gradient-to-r ${selectedAchievement.color} bg-clip-text text-transparent leading-none`}
                >
                  {selectedAchievement.num}
                </motion.div>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`p-4 rounded-2xl bg-gradient-to-br ${selectedAchievement.color} shadow-xl`}
                >
                  <selectedAchievement.icon className="text-4xl text-primary" />
                </motion.div>
              </div>

              {/* Category & Organization */}
              <div className="flex flex-wrap gap-3">
                <span className={`px-4 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r ${selectedAchievement.color} text-primary shadow-lg`}>
                  {selectedAchievement.category}
                </span>
                <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/5 border border-white/10 text-white flex items-center gap-2">
                  <BsBuilding className="text-accent" />
                  {selectedAchievement.organization}
                </span>
                <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/5 border border-white/10 text-white flex items-center gap-2">
                  <BsCalendar3 className="text-pink-300" />
                  {selectedAchievement.year}
                </span>
              </div>

              {/* Title */}
              <h2 className={`text-3xl xl:text-4xl font-bold bg-gradient-to-r ${selectedAchievement.color} bg-clip-text text-transparent`}>
                {selectedAchievement.title}
              </h2>

              {/* Achievement Badge */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-xl bg-gradient-to-r ${selectedAchievement.color} bg-opacity-10 border-2 border-accent/30 flex items-center gap-3`}
              >
                <HiSparkles className="text-2xl text-accent" />
                <div>
                  <p className="text-white/60 text-xs">Special Achievement</p>
                  <p className="text-white font-bold text-lg">{selectedAchievement.achievement}</p>
                </div>
              </motion.div>

              {/* Description */}
              <p className="text-white/80 leading-relaxed text-base">
                {selectedAchievement.description}
              </p>

              {/* Skills */}
              <div>
                <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <BsLightningChargeFill className="text-accent" />
                  Skills Acquired
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedAchievement.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`px-4 py-2 rounded-lg bg-gradient-to-r ${selectedAchievement.color} text-primary font-medium text-sm shadow-lg`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.a
                  href={selectedAchievement.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button className="w-full bg-gradient-to-r from-accent to-pink-300 hover:from-pink-300 hover:to-accent text-primary font-bold text-base py-6 shadow-lg">
                    <FaExternalLinkAlt className="mr-2" />
                    View Certificate
                  </Button>
                </motion.a>
                <motion.a
                  href={selectedAchievement.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full border-2 border-accent text-accent hover:bg-accent/10 font-bold text-base py-6">
                    <GiAchievement className="mr-2 text-xl" />
                    View Achievement
                  </Button>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right: Image Slider */}
          <div className="order-1 xl:order-2">
            <Swiper
              key={selectedCategory}
              effect="cards"
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination]}
              className="w-full h-[500px] xl:h-[600px]"
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              onSlideChange={handleSlideChange}
            >
              {filteredAchievements.map((achievement, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative h-full rounded-2xl overflow-hidden group cursor-pointer"
                  >
                    {/* Image */}
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    
                    {/* Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`text-5xl font-extrabold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.num}
                        </div>
                        <achievement.icon className="text-3xl text-accent" />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">{achievement.title}</h3>
                      <p className="text-white/80 text-sm mb-2">{achievement.organization}</p>
                      <div className="flex items-center gap-2">
                        <BsStarFill className="text-accent" />
                        <span className="text-white/90 text-sm font-semibold">{achievement.achievement}</span>
                      </div>
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
                      className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10`}
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Progress Indicator */}
            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm">
                {activeIndex + 1} / {filteredAchievements.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => {
        const randomLeft = (i * 5) % 100;
        const randomTop = (i * 7) % 100;
        const randomDuration = 3 + (i % 4);
        const randomDelay = (i % 5) * 0.4;
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full"
            style={{
              left: `${randomLeft}%`,
              top: `${randomTop}%`,
            }}
            animate={{
              y: [0, -40, 0],
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

export default Achievement;
