"use client";

import { Button } from "@/components/ui/button";
import { BsArrowDownRight, BsCheckCircle } from "react-icons/bs";
import { 
  FiCode, 
  FiSmartphone, 
  FiTool, 
  FiLayout, 
  FiImage, 
  FiLifeBuoy,
  FiZap,
  FiTrendingUp 
} from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    num: "01",
    title: "Web Development",
    icon: <FiCode />,
    description:
      "Create custom websites that are responsive, user-friendly, and optimized for performance. Whether it's an eCommerce site or a portfolio, we deliver high-quality web solutions using modern technologies.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast Loading Speed",
      "Modern Tech Stack",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    href: "https://github.com/rkstm7",
    color: "from-accent to-green-400",
  },
  {
    num: "02",
    title: "App Development",
    icon: <FiSmartphone />,
    description:
      "Innovative solutions for iOS and Android platforms. From native apps to hybrid apps and PWAs, we create apps that provide an intuitive user experience with focus on performance and scalability.",
    features: [
      "Cross-Platform",
      "Native Performance",
      "Offline Support",
      "Push Notifications",
    ],
    technologies: ["React Native", "Flutter", "Firebase", "API Integration"],
    href: "https://github.com/rkstm7",
    color: "from-pink-300 to-pink-500",
  },
  {
    num: "03",
    title: "Software Solutions",
    icon: <FiTool />,
    description:
      "Expert solutions for all your software problems. From debugging and troubleshooting to optimizing performance, we resolve issues efficiently and ensure your software runs smoothly.",
    features: [
      "Bug Fixing",
      "Performance Optimization",
      "Code Refactoring",
      "Security Audits",
    ],
    technologies: ["Python", "Java", "C++", "DevOps"],
    href: "https://github.com/rkstm7",
    color: "from-purple-400 to-purple-600",
  },
  {
    num: "04",
    title: "UI/UX Design",
    icon: <FiLayout />,
    description:
      "Create intuitive and visually appealing digital experiences. By focusing on user-centric design principles, we craft interfaces that are both functional and aesthetically pleasing.",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
    href: "https://github.com/rkstm7",
    color: "from-blue-400 to-blue-600",
  },
  {
    num: "05",
    title: "Logo Design",
    icon: <FiImage />,
    description:
      "Design unique and memorable logos that reflect your brand's identity and vision. Our creative process ensures your logo is visually striking, versatile and timeless.",
    features: [
      "Brand Identity",
      "Multiple Concepts",
      "Vector Files",
      "Unlimited Revisions",
    ],
    technologies: ["Illustrator", "Photoshop", "CorelDRAW", "Canva"],
    href: "https://github.com/rkstm7",
    color: "from-orange-400 to-orange-600",
  },
  {
    num: "06",
    title: "24/7 Support",
    icon: <FiLifeBuoy />,
    description:
      "Reliable troubleshooting and maintenance to keep your website or app running smoothly. Our team is always available to resolve bugs, update features, and ensure systems are optimized.",
    features: [
      "24/7 Availability",
      "Quick Response",
      "Regular Updates",
      "Monitoring",
    ],
    technologies: ["Monitoring Tools", "CI/CD", "Cloud Services", "Analytics"],
    href: "https://github.com/rkstm7",
    color: "from-teal-400 to-teal-600",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="inline-block mb-4"
          >
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-accent via-pink-300 to-accent bg-clip-text text-transparent">
              My Services
            </h1>
          </motion.div>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Transforming ideas into reality with cutting-edge technology and creative solutions
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <FiZap className="text-accent text-2xl" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">50+</p>
                <p className="text-white/60 text-sm">Projects Done</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <FiTrendingUp className="text-pink-300 text-2xl" />
              <div className="text-left">
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-white/60 text-sm">Client Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* Animated Border */}
              <motion.div
                animate={{
                  rotate: hoveredIndex === index ? [0, 360] : 0,
                }}
                transition={{
                  duration: 8,
                  repeat: hoveredIndex === index ? Infinity : 0,
                  ease: "linear",
                }}
                className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`}
              />

              {/* Card Content */}
              <div className="relative p-8 rounded-2xl bg-primary/95 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`text-5xl bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                    >
                      {service.icon}
                    </motion.div>
                    
                    {/* Number */}
                    <div className={`text-6xl font-extrabold bg-gradient-to-r ${service.color} bg-clip-text text-transparent opacity-50`}>
                      {service.num}
                    </div>
                  </div>

                  {/* Arrow Link */}
                  <Link href={service.href} target="_blank">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -45 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-14 h-14 rounded-full bg-white/5 border border-white/10 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300 flex justify-center items-center"
                    >
                      <BsArrowDownRight className="text-accent text-xl" />
                    </motion.div>
                  </Link>
                </div>

                {/* Title */}
                <h2 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-white/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <BsCheckCircle className="text-accent" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-white/60 text-sm"
                      >
                        <span className="text-accent">•</span>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                  className="mt-6 h-1 rounded-full overflow-hidden bg-white/10"
                >
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className={`h-full w-1/3 bg-gradient-to-r ${service.color}`}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 max-w-4xl mx-auto">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-6 -right-6 text-8xl text-accent/20"
            >
              ✨
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life with innovative solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-accent to-pink-300 hover:from-pink-300 hover:to-accent text-primary font-bold px-8 py-6 text-lg">
                    Get Started Now
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/work">
                  <Button variant="outline" className="border-2 border-accent text-accent hover:bg-accent/10 font-bold px-8 py-6 text-lg">
                    View Portfolio
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
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

export default Services;
