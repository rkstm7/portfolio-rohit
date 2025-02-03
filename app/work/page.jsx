"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
//componets
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Web Development",
    title: "E-Commerce Website",
    desription:
      "A MERN stack e-commerce website uses MongoDB, Express.js, React.js, and Node.js to create a dynamic and scalable shopping platform. The React.js frontend ensures a responsive UI, while Node.js and Express.js handle authentication, payments, and server logic. MongoDB stores product and user data, enabling real-time updates and secure transactions for a seamless shopping experience. 🚀🛒",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Bootstrap" },
      { name: "JavaScript" },
      { name: "MongoDB" },
      { name: "Expres.js" },
      { name: "React.js" },
      { name: "Node.js" },
    ],
    image: "/assets/commerce.png",
    live: "https://github.com/rkstm7",
    github: "https://github.com/rkstm7",
  },
  {
    num: "02",
    category: "App Development",
    title: "Calculator App",
    desription:
      "A Calculator app built with React Native provides basic arithmetic operations on iOS and Android. It features a user-friendly UI with numeric and operator buttons, a display screen, and functions like clear (C) and backspace. Using React hooks for state management and React Native styling, it ensures a smooth, cross-platform experience. 🔢📱",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "JavaScript" },
      { name: "Bootstrap" },
      { name: "React-Native" },
      { name: "Redux" },
    ],
    image: "/assets/calculator.png",
    live: "https://github.com/rkstm7",
    github: "https://github.com/rkstm7",
  },
  {
    num: "03",
    category: "Technology & Database",
    title: "School Management System",
    desription:
      "A School Management System using the MERN stack (MongoDB, Express, React, Node.js) streamlines student and teacher data, attendance, grades, schedules, and fees. It offers an intuitive interface for admins, teachers, and students, ensuring efficient management and real-time updates. 🎓📚",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "JavaScript" },
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Node.js" },
    ],
    image: "/assets/thumb.jpg",
    live: "https://github.com/rkstm7",
    github: "https://github.com/rkstm7",
  },
  {
    num: "04",
    category: "App Development",
    title: "Education App",
    desription:
      "An Education App built with React Native enables interactive learning on both iOS and Android. It includes features like courses, quizzes, live classes, progress tracking, and notifications, providing a seamless and engaging user experience. 🚀📚",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "JavaScript" },
      { name: "React-Native" },
      { name: "Bootstrap" },
      { name: "Redux" },
    ],
    image: "/assets/education.jpg",
    live: "https://github.com/rkstm7",
    github: "https://github.com/rkstm7",
  },
  {
    num: "05",
    category: "Web Development",
    title: "Blogging Website",
    desription:
      "A Blogging Website using Python (with Django or Flask) allows users to create, edit, and share blog posts. It includes user authentication, comments, categories, and an admin panel for managing content, offering a smooth and interactive blogging experience. 🚀📝",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "JavaScript" },
      { name: "Python" },
      { name: "Flask-RESTful" },
      { name: "Django" },
      { name: "flask" },
      { name: "Tailwind" },
    ],
    image: "/assets/blog.png",
    live: "https://github.com/rkstm7",
    github: "https://github.com/rkstm7",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex; // Fix typo here
    setProject(projects[currentIndex]); // Fix: use `projects` instead of `project`
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center text-justify py-12 xl:px-0 mb-40"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline num */}
              <div className="text-8xl font-extrabold text-ouline text-transparent group-hover:text-ouline-hover transition-all duration-500">
                {/* Outline Effect */}
                {project.num}
              </div>
              {/* Project Category */}
              <div className="flex flex-col gap-5">
                <h2 className="text-[42px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category}
                </h2>

                {/* Project Title */}
                <h5 className="text-[28px] font-bold leading-none text-blue-300 group-hover:text-accent transition-all duration-500 capitalize mt-2">
                  {project.title}
                </h5>
              </div>
              {/* Project description */}
              <p className="text-white/60">{project.desription}</p>
              {/* Stack */}
              <ul className="flex flex-wrap gap-2 items-center">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* GitHub Project Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[450px] relative group flex justify-center 
                    items-center bg-pink-50/20"
                    >
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative  w-full h-full">
                        <img
                          src={project.image}
                          layout="fill"
                          className="object-cover w-full h-full"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
