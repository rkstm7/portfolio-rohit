"use client";

import { DiMysql, DiMongodb } from "react-icons/di";
import {
  SiExpress,
  SiTypescript,
  SiCanva,
  SiAdobephotoshop,
  SiAdobe,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  FaCuttlefish,
  FaPython,
  FaGithub,
  FaMicrosoft,
  FaBriefcase,
  FaGraduationCap,
  FaUser,
  FaCode,
  FaDownload,
  FaStar,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

//about data
const about = {
  title: "About Me",
  description:
    "Rohit Kumar is an ambitious and driven individual currently working as a Python Full Stack Development Intern at YSM Info Solution. With a passion for technology, he has gained proficiency in a variety of tech stacks, including MERN Stack, Next.js, MySQL, MongoDB, Bootstrap, Tailwind CSS, and Java. Rohit has completed a Full Stack Web Development training program at PantechAI and further honed his skills through an internship as a Java Development Intern at InternshipStudio (BharatIntern). In addition to his technical prowess, he has experience as an Editor at RAC Pune Wisdom, showcasing his versatile skill set and ability to communicate effectively. Notable achievements include being recognized as a State Level Exam Qualifier, highlighting Rohit's commitment to academic excellence and professional growth.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rohit Singh",
      icon: <FaUser />,
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9113134541",
      icon: <FaUser />,
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
      icon: <FaBriefcase />,
    },
    {
      fieldName: "Role",
      fieldValue: "Software Developer",
      icon: <FaCode />,
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
      icon: <FaUser />,
    },
    {
      fieldName: "Email",
      fieldValue: "rkstm9@gmail.com",
      icon: <FaUser />,
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
      icon: <FaStar />,
    },
    {
      fieldName: "Languages",
      fieldValue: "Hindi & English",
      icon: <FaUser />,
    },
  ],
};

// Experience Data
const experience = {
  title: "My Experience",
  description:
    "I am currently a Python Full Stack Development Intern at YSM Info Solution and a State Level Exam Qualifier. I have completed Full Stack Web Development training at PantechAI and worked as a Java Development Intern at InternshipStudio (BharatIntern). Additionally, I contributed as an Editor at RAC Pune Wisdom.",
  items: [
    {
      company: "YSM INFO SOLUTION",
      position: "Python Full Stack Developer",
      duration: "02/2025 - Present",
      color: "from-accent to-green-400",
    },
    {
      company: "Internship Studio",
      position: "Java Developer Internship",
      duration: "02/2025 - 03/2025",
      color: "from-pink-300 to-pink-500",
    },
    {
      company: "BharatIntern",
      position: "Full Stack Developer",
      duration: "01/2024 - 04/2024",
      color: "from-purple-400 to-purple-600",
    },
    {
      company: "RAC Pune Wisdom",
      position: "Editor",
      duration: "07/2023 - 07/2024",
      color: "from-blue-400 to-blue-600",
    },
    {
      company: "SVM, Sitamarhi",
      position: "Co-Ordinator/Leader",
      duration: "04/2017 - 07/2020",
      color: "from-orange-400 to-orange-600",
    },
  ],
};

// Education Data
const education = {
  title: "My Education",
  description:
    "I am currently pursuing a Bachelor of Technology (B.Tech) at Bharati Vidyapeeth College of Engineering, Pune. Prior to this, I completed my Senior Secondary Education (12th) at M.K. College, Sitamarhi-Bihar and my Secondary Education (10th) at SVM, Sitamarhi-Bihar.",
  items: [
    {
      institution: "Bharati Vidyapeeth College of Engineering, Pune",
      degree: "Bachelor Of Technology (B.Tech)",
      duration: "10/2022 - Present",
      color: "from-accent to-green-400",
    },
    {
      institution: "M.K. College, Sitamarhi-Bihar",
      degree: "Senior Secondary Education (12th)",
      duration: "07/2020 - 05/2022",
      color: "from-pink-300 to-pink-500",
    },
    {
      institution: "SVM, Sitamarhi-Bihar",
      degree: "Secondary Education (10th)",
      duration: "04/2019 - 05/2020",
      color: "from-purple-400 to-purple-600",
    },
  ],
};

//skills
const skills = {
  title: "My Skills",
  description:
    "I specialize in full-stack development with expertise in MERN Stack, Next.js, MySQL, MongoDB, Java, and Python. Proficient in Tailwind CSS, Bootstrap, and UI/UX tools like Figma and Canva. Passionate about building scalable web solutions.",
  skillsList: [
    { icon: <FaHtml5 />, name: "HTML 5", level: 95 },
    { icon: <FaCss3 />, name: "CSS 3", level: 90 },
    { icon: <FaJs />, name: "Javascript", level: 85 },
    { icon: <DiMysql />, name: "MySQL", level: 80 },
    { icon: <DiMongodb />, name: "MongoDB", level: 85 },
    { icon: <FaBootstrap />, name: "Bootstrap", level: 90 },
    { icon: <SiExpress />, name: "Express.js", level: 80 },
    { icon: <SiTypescript />, name: "TypeScript", level: 75 },
    { icon: <FaReact />, name: "React.js", level: 90 },
    { icon: <SiNextdotjs />, name: "Next.js", level: 85 },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 95 },
    { icon: <FaNodeJs />, name: "Node.js", level: 85 },
    { icon: <FaFigma />, name: "Figma", level: 80 },
    { icon: <FaJava />, name: "Core Java", level: 75 },
    { icon: <FaCuttlefish />, name: "C Programming", level: 70 },
    { icon: <FaPython />, name: "Python", level: 85 },
    { icon: <FaGithub />, name: "Github", level: 90 },
    { icon: <SiCanva />, name: "Canva", level: 85 },
    { icon: <SiAdobephotoshop />, name: "Photoshop", level: 75 },
    { icon: <SiAdobe />, name: "PageMaker", level: 70 },
    { icon: <FaMicrosoft />, name: "MS Office", level: 90 },
  ],
};

const Resume = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

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
            Resume
          </motion.h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore my professional journey, skills, and achievements
          </p>
          
          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6"
          >
            <motion.a
              href="https://drive.google.com/file/d/1OSAQ5kUeYdhdnxoGVTcBhXjgtM1e0GYM/view?usp=drive_link"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-accent to-pink-300 hover:from-pink-300 hover:to-accent text-primary font-bold px-8 py-6 text-lg">
                <FaDownload className="mr-2" />
                Download CV
              </Button>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-12">
          {/* Tab List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-4 bg-transparent">
              <TabsTrigger 
                value="experience" 
                className="w-full py-4 px-6 rounded-xl bg-white/5 border border-white/10 data-[state=active]:bg-gradient-to-r data-[state=active]:from-accent data-[state=active]:to-pink-300 data-[state=active]:text-primary font-semibold transition-all duration-300 hover:bg-white/10"
              >
                <FaBriefcase className="mr-2" />
                Experience
              </TabsTrigger>
              <TabsTrigger 
                value="education"
                className="w-full py-4 px-6 rounded-xl bg-white/5 border border-white/10 data-[state=active]:bg-gradient-to-r data-[state=active]:from-accent data-[state=active]:to-pink-300 data-[state=active]:text-primary font-semibold transition-all duration-300 hover:bg-white/10"
              >
                <FaGraduationCap className="mr-2" />
                Education
              </TabsTrigger>
              <TabsTrigger 
                value="skills"
                className="w-full py-4 px-6 rounded-xl bg-white/5 border border-white/10 data-[state=active]:bg-gradient-to-r data-[state=active]:from-accent data-[state=active]:to-pink-300 data-[state=active]:text-primary font-semibold transition-all duration-300 hover:bg-white/10"
              >
                <FaCode className="mr-2" />
                Skills
              </TabsTrigger>
              <TabsTrigger 
                value="about"
                className="w-full py-4 px-6 rounded-xl bg-white/5 border border-white/10 data-[state=active]:bg-gradient-to-r data-[state=active]:from-accent data-[state=active]:to-pink-300 data-[state=active]:text-primary font-semibold transition-all duration-300 hover:bg-white/10"
              >
                <FaUser className="mr-2" />
                About Me
              </TabsTrigger>
            </TabsList>
          </motion.div>

          {/* Tab Content */}
          <div className="flex-1 min-h-[70vh]">
            {/* Experience Tab */}
            <TabsContent value="experience" className="w-full">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-8"
              >
                <div className="text-center xl:text-left">
                  <h3 className="text-3xl font-bold text-white mb-4">{experience.title}</h3>
                  <p className="text-white/70 leading-relaxed max-w-3xl">
                    {experience.description}
                  </p>
                </div>

                <ScrollArea className="h-[500px] pr-4">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {experience.items.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="group relative"
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
                          className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`}
                        />

                        {/* Card */}
                        <div className="relative p-6 rounded-xl bg-primary/95 border border-white/10 backdrop-blur-sm h-full">
                          <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 bg-gradient-to-r ${item.color} text-primary`}>
                            {item.duration}
                          </span>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent"></span>
                            <p className="text-white/70">{item.company}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="w-full">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-8"
              >
                <div className="text-center xl:text-left">
                  <h3 className="text-3xl font-bold text-white mb-4">{education.title}</h3>
                  <p className="text-white/70 leading-relaxed max-w-3xl">
                    {education.description}
                  </p>
                </div>

                <ScrollArea className="h-[500px] pr-4">
                  <div className="grid grid-cols-1 gap-6">
                    {education.items.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, x: 10 }}
                        className="group relative"
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
                          className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`}
                        />

                        {/* Card */}
                        <div className="relative p-6 rounded-xl bg-primary/95 border border-white/10 backdrop-blur-sm">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div className="flex-1">
                              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 bg-gradient-to-r ${item.color} text-primary`}>
                                {item.duration}
                              </span>
                              <h3 className="text-xl font-bold text-white mb-2">
                                {item.degree}
                              </h3>
                              <div className="flex items-center gap-2">
                                <FaGraduationCap className="text-accent" />
                                <p className="text-white/70">{item.institution}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="w-full">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-8"
              >
                <div className="text-center xl:text-left">
                  <h3 className="text-3xl font-bold text-white mb-4">{skills.title}</h3>
                  <p className="text-white/70 leading-relaxed max-w-3xl">
                    {skills.description}
                  </p>
                </div>

                <ScrollArea className="h-[500px] pr-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {skills.skillsList.map((skill, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        onHoverStart={() => setHoveredSkill(index)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="relative"
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full">
                              <div className="relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center gap-3 h-32">
                                {/* Icon */}
                                <div className="text-4xl text-accent">
                                  {skill.icon}
                                </div>
                                
                                {/* Progress Bar */}
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: hoveredSkill === index ? `${skill.level}%` : 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-accent to-pink-300"
                                  />
                                </div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-primary border-accent">
                              <p className="font-semibold">{skill.name}</p>
                              <p className="text-xs text-accent">{skill.level}% Proficiency</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="about" className="w-full">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-8"
              >
                <div className="text-center xl:text-left">
                  <h3 className="text-3xl font-bold text-white mb-4">{about.title}</h3>
                  <p className="text-white/70 leading-relaxed max-w-3xl">
                    {about.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {about.info.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-2xl text-accent">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-white/60 text-sm font-medium">{item.fieldName}</p>
                          <p className="text-white font-semibold">{item.fieldValue}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => {
        const randomLeft = (i * 11) % 100;
        const randomTop = (i * 13) % 100;
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

export default Resume;
