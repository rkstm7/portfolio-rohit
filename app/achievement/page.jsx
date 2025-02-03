"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FaExternalLinkAlt } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";

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
    category: "YSM INFO SOLUTION",
    title: "Python Full Stack Development",
    desription:
      "This internship has been offered by YSM INFO SOLUTION (Organized as- State Level Tech Quiz-19th Rank in State Level Exam).",
    image: "/assets/ysm.jpg",
    live: "https://github.com/rkstm7/certifications-achievements/blob/main/ysm.jpg",
    github:
      "https://github.com/rkstm7/certifications-achievements/blob/main/ysm.jpg",
  },
  {
    num: "02",
    category: "Internship Studio",
    title: "Java Development Intership",
    desription:
      "This internship has been offered by Internship Studio (Organized as-All India Tech Quiz-1259 Rank in all India.",
    image: "/assets/intenshipstudio.jpeg",
    live: "https://github.com/rkstm7/certifications-achievements/blob/main/internship.jpg",
    github:
      "https://github.com/rkstm7/certifications-achievements/blob/main/intenshipstudio.jpeg",
  },
  {
    num: "03",
    category: "Bharat Intern",
    title: "Full Stack Development",
    desription:
      "This internship has been achieved by LinkedIn. It was my first Internship and also had great opportunity to boost my carrier in tech field.",
    image: "/assets/bharatIntern.jpeg",
    live: "https://github.com/rkstm7/certifications-achievements/blob/main/bharatIntern.jpeg",
    github:
      "https://github.com/rkstm7/certifications-achievements/blob/main/bharatoffer.jpg",
  },
  {
    num: "04",
    category: "RAC Pune Wisdom",
    title: "BOD Training | Team-Work | Editor | Management | Socialization",
    desription:
      "This opportunity has been provided by RAC PUNE WISDOM President: Rtr. Shivam Shaswat. This club is very helpful for me, for gaining knowledge, socialization, connecting new people, acquire some unique things, many more",
    image: "/assets/editor.jpeg",
    live: "https://github.com/rkstm7/certifications-achievements/blob/main/bodtra.jpeg",
    github:
      "https://github.com/rkstm7/certifications-achievements/blob/main/editor.jpeg",
  },
  {
    num: "05",
    category: "Udemy Certification",
    title: "The Complete Full Stack Development Bootcamp-2024 ",
    desription:
      "The Complete Full Stack Development Bootcamp-2024 on Udemy teaches dynamic web app development using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB, with hands-on projects for beginners and intermediates.",
    image: "/assets/udemywebdev.jpeg",
    live: "https://www.udemy.com/certificate/UC-3dc26b64-8cd4-4e5d-9575-e1d5272dde98/",
    github:
      "https://github.com/rkstm7/certifications-achievements/blob/main/udemywebdev.jpeg",
  },
  {
    num: "06",
    category: "Coursera Certification",
    title: "Python For Data Science, AI & Development",
    desription:
      "Python for Data Science, AI & Development on Coursera covers Python, Pandas, NumPy, Matplotlib, and TensorFlow for data analysis, machine learning, and AI. Ideal for beginners and those advancing in data science.",
    image: "/assets/pythonibm.jpeg",
    live: "https://www.coursera.org/account/accomplishments/records/J6XUP5KTXLPT",
    github:
      "https://github.com/rkstm7/certifications-achievements/blob/main/pythonibm.jpeg",
  },
  {
    num: "07",
    category: "Udemy Certification",
    title: "Complete AI, Machine Learning and Data Science",
    desription:
      "Udemy's AI, Machine Learning & Data Science course teaches model building, data analysis, and ML algorithms using Python, TensorFlow, and scikit-learn. Ideal for all skill levels.",
    image: "/assets/udemydatascience.jpeg",
    live: "https://www.udemy.com/certificate/UC-b955d601-8132-40d6-b6a9-c8fac9e2beeb",
    github:
      "https://github.com/rkstm7/certifications-achievements/blob/main/udemydatascience.jpeg",
  },
  {
    num: "08",
    category: "Udemy Certification",
    title: "Java Begineer To Master",
    desription:
      "The Java Beginner to Master course on Udemy covers Java fundamentals to advanced concepts, helping you become proficient in Java programming through hands-on projects and practical examples.",
    image: "/assets/java.jpeg",
    live: "https://udemy-certificate.s3.amazonaws.com/image/UC-b0473594-8541-43dd-aa29-4cf5c78914e7.jpg",
    github:
      "https://github.com/rkstm7/certifications-achievements/blob/main/java.jpeg",
  },
  {
    num: "09",
    category: "NPTEL Certification",
    title: "Data Structure and Algoright Using Java",
    desription:
      "The NPTEL course on Data Structures and Algorithms Using Java teaches key data structures (arrays, linked lists, stacks, queues) and algorithms (sorting, searching) with a focus on problem-solving and optimizing solutions.",
    image: "/assets/nptel.jpeg",
    live: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS85S3451138320332002",
    github:
      "https://github.com/rkstm7/certifications-achievements/blob/main/nptel.jpeg",
  },
];

const Achievement = () => {
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
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 pb-20"
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
                <h2 className="text-[42px] font-bold leading-tight text-accent group-hover:text-accent transition-all duration-500 capitalize break-words">
                  {project.category}
                </h2>

                {/* Project Title */}
                <h5 className="text-[24px] font-bold leading-tight text-blue-300 group-hover:text-accent transition-all duration-500 capitalize break-words">
                  {project.title}
                </h5>
              </div>
              {/* Project description */}
              <p className="text-white/60 text-justify">{project.desription}</p>
              {/* Border */}
              <div className="border border-white/20"></div>
              {/* Buttons */}
              <div className="flex items-center gap-4">
                {/* Live Project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <FaExternalLinkAlt className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Certification Link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* GitHub Project Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <GiAchievement className="text-pink-300 text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Achievement Medal</p>
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
                      <div className="relative w-full h-full">
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

export default Achievement;
