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
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "About Me",
  description:
    "Rohit Kumar is an ambitious and driven individual currently working as a Python Full Stack Development Intern at YSM Info Solution. With a passion for technology, he has gained proficiency in a variety of tech stacks, including MERN Stack, Next.js, MySQL, MongoDB, Bootstrap, Tailwind CSS, and Java.Rohit has completed a Full Stack Web Development training program at PantechAI and further honed his skills through an internship as a Java Development Intern at InternshipStudio (BharatIntern). In addition to his technical prowess, he has experience as an Editor at RAC Pune Wisdom, showcasing his versatile skill set and ability to communicate effectively.Notable achievements include being recognized as a State Level Exam Qualifier, highlighting Rohit's commitment to academic excellence and professional growth.",
  info: [
    {
      fieldName: "Name:",
      fieldValue: "Rohit Singh",
    },
    {
      fieldName: "Phone:",
      fieldValue: "(+91)9113134541",
    },
    {
      fieldName: "Experience:",
      fieldValue: "01",
    },
    {
      fieldName: "Role:",
      fieldValue: "Software Developer",
    },
    {
      fieldName: "Nationality:",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "rkstm9@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Hindi & English",
    },
  ],
};

// Experience Data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I am currently a Python Full Stack Development Intern at YSM Info Solution and a State Level Exam Qualifier. I have completed Full Stack Web Development training at PantechAI and worked as a Java Development Intern at InternshipStudio (BharatIntern). Additionally, I contributed as an Editor at RAC Pune Wisdom. With expertise in MERN Stack, Next.js, MySQL, MongoDB, Bootstrap, Tailwind CSS, and Java, I am passionate about building innovative web solutions. 🚀",
  items: [
    {
      company: "YSM INFO SOLUTION",
      position: "Python Fulll Stack Devel.",
      duration: "02/2025 - present",
    },
    {
      company: "Intership Studio",
      position: "Java Devel. Internship",
      duration: "02/2025 - 03/2025 ",
    },
    {
      company: "BharatIntern",
      position: "Full Stack Developer",
      duration: "01/2024 - 04/2024",
    },
    {
      company: "RAC Pune Wisdom",
      position: "Full Stack Developer",
      duration: "07/2023 - 07/2024",
    },
    {
      company: "SVM, Sitamarhi",
      position: "Co-Ordinator/Leader",
      duration: "04/17 - 07/20",
    },
  ],
};

// Education Data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I am currently pursuing a Bachelor of Technology (B.Tech) at Bharati Vidyapeeth College of Engineering, Pune (October 2022 – Present). Prior to this, I completed my Senior Secondary Education (12th) at M.K. College, Sitamarhi-Bihar (July 2020 – May 2022) and my Secondary Education (10th) at SVM, Sitamarhi-Bihar (April 2019 – May 2020).",
  items: [
    {
      instution: "Bharati Vidyapeeth College of Engineering, Pune",
      degree: "Bachelor Of Technology (B.Tech)",
      duration: "10/2022 - present",
    },
    {
      instution: "M.K. College, Sitamarhi-Bihar",
      degree: "Senior Secondary Education (12th)",
      duration: "07/2020 - 05/2022",
    },
    {
      instution: "SVM, Sitamarhi-Bihar",
      degree: "Secondary Education (10th)",
      duration: "04/2019 - 05/2020",
    },
  ],
};

//skills
const skills = {
  title: "My Skills",
  description:
    "I specialize in full-stack development with expertise in MERN Stack Next.js, MySQL, MongoDB, Java, and Python. Proficient in Tailwind CSS,Bootstrap, and UI/UX tools like Figma and Canva. Passionate about building scalable web solutions. 🚀",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <DiMysql />,
      name: "MySQL",
    },
    {
      icon: <DiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <SiTypescript />,
      name: "typescript.js",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaJava />,
      name: "Core Java",
    },
    {
      icon: <FaCuttlefish />,
      name: "C Programming",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaGithub />,
      name: "Github",
    },
    {
      icon: <SiCanva />,
      name: "Canva",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Adove Photoshop-7",
    },
    {
      icon: <SiAdobe />,
      name: "Adove Pagemaker-7 ",
    },
    {
      icon: <FaMicrosoft />,
      name: "Microsoft Office Expert",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full mb-4">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full mb-4">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.instution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] mb-4">
                  {skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center grooup">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left mb-10 mt-2"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {about.desription}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 bg-primary/10 font-extrabold rounded-xl border-2 border-primary">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-left ml-5 xl:justify-start gap-4 mt-1 px-4 py-3"
                      >
                        <span className="text-blue-500 font-semibold">
                          {item.fieldName}
                        </span>
                        <span className="text-white">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
