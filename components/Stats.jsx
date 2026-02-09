"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FiTrendingUp, FiCode, FiAward, FiGitCommit, FiUsers, FiStar } from "react-icons/fi";

const stats = [
  {
    num: 1,
    suffix: "+",
    text: "Years Of Experience",
    subtext: "Building innovative solutions",
    icon: <FiTrendingUp />,
    color: "from-accent to-green-400",
  },
  {
    num: 5,
    suffix: "+",
    text: "Projects Completed",
    subtext: "Delivered with excellence",
    icon: <FiCode />,
    color: "from-pink-300 to-pink-500",
  },
  {
    num: 20,
    suffix: "+",
    text: "Technologies Mastered",
    subtext: "Full-stack expertise",
    icon: <FiAward />,
    color: "from-purple-400 to-purple-600",
  },
  {
    num: 777,
    suffix: "+",
    text: "Code Commits",
    subtext: "Consistent contributions",
    icon: <FiGitCommit />,
    color: "from-blue-400 to-blue-600",
  },
];

const achievements = [
  {
    icon: <FiUsers />,
    title: "Team Collaboration",
    description: "Worked with cross-functional teams across multiple projects",
  },
  {
    icon: <FiStar />,
    title: "Quality Code",
    description: "Maintained 95%+ code quality standards in all projects",
  },
];

const Stats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-16 md:py-20 relative z-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.01, 0.02, 0.01],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.01, 0.02, 0.01],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 max-w-screen-2xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-accent via-pink-300 to-accent bg-clip-text text-transparent mb-3">
              My Journey in Numbers
            </h2>
          </motion.div>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Transforming ideas into reality through code, dedication, and continuous learning
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Animated Border Gradient */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-75 blur-sm transition-opacity duration-500`}
              />

              {/* Card Content */}
              <div className="relative p-6 rounded-2xl bg-primary/95 border border-white/20 backdrop-blur-sm hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`text-3xl mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                >
                  {item.icon}
                </motion.div>

                {/* Number with CountUp */}
                <div className="flex items-baseline mb-2">
                  <CountUp
                    end={item.num}
                    duration={3}
                    delay={0.5}
                    className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                  />
                  <span className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent ml-1`}>
                    {item.suffix}
                  </span>
                </div>

                {/* Text */}
                <h3 className="text-white font-bold text-lg mb-1">
                  {item.text}
                </h3>
                <p className="text-white/70 text-sm">
                  {item.subtext}
                </p>

                {/* Animated Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  className="mt-4 h-1 rounded-full overflow-hidden bg-white/10"
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
                    className={`h-full w-1/3 bg-gradient-to-r ${item.color}`}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-1 bg-gradient-to-r from-accent to-pink-300 rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"
              />

              <div className="relative p-6 rounded-xl bg-primary/90 backdrop-blur-md border border-white/20 hover:border-accent/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl text-accent flex-shrink-0"
                  >
                    {achievement.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 max-w-4xl mx-auto">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-4 -left-4 text-6xl text-accent/30"
              >
                "
              </motion.div>
              <p className="text-white/90 text-lg md:text-xl font-medium italic relative z-10">
                Code is like humor. When you have to explain it, it's bad.
              </p>
              <p className="text-accent font-semibold mt-3">- Cory House</p>
              <motion.div
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-4 -right-4 text-6xl text-pink-300/30"
              >
                "
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(10)].map((_, i) => {
          const randomLeft = (i * 11) % 100;
          const randomTop = (i * 13) % 100;
          const randomDuration = 2 + (i % 3);
          const randomDelay = (i % 4) * 0.5;
          
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent/40 rounded-full"
              style={{
                left: `${randomLeft}%`,
                top: `${randomTop}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
