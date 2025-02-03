"use client";

import { Button } from "@/components/ui/button"; // Ensure this is correctly imported
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "We create custom websites that are responsive, user-friendly, and optimized for performance. Whether it’s an eCommerce site or a portfolio, we deliver high-quality web solutions using modern technologies. Let us help bring your vision online with a seamless and engaging experience for your users.",
    href: "https://github.com/rkstm7",
  },
  {
    num: "02",
    title: "App Development",
    description:
      "Our app development services offer innovative solutions for iOS and Android platforms. From native apps to hybrid apps and PWAs, we create apps that provide an intuitive user experience. With a focus on performance and scalability, we ensure your app meets your business objectives and stands out in the market.",
    href: "https://github.com/rkstm7",
  },

  {
    num: "03",
    title: "Software Problem",
    description:
      "Running into a technical roadblock? We offer expert solutions for all your software problems. From debugging and troubleshooting to optimizing performance, our team is equipped to resolve issues efficiently and ensure your software runs smoothly. We work with you to identify the root cause and provide actionable solutions to keep your project moving forward",
    href: "https://github.com/rkstm7",
  },

  {
    num: "04",
    title: "UI/UX Design",
    description:
      "We specialize in UI/UX design to create intuitive and visually appealing digital experiences. By focusing on user-centric design principles, we craft interfaces that are both functional and aesthetically pleasing. Our designs enhance user satisfaction and engagement, ensuring your audience enjoys seamless interactions with your platform.",
    href: "https://github.com/rkstm7",
  },

  {
    num: "05",
    title: "Logo Design",
    description:
      "A great logo is essential for brand recognition. We design unique and memorable logos that reflect your brand's identity and vision. Our creative process ensures that your logo is not only visually striking but also versatile and timeless, making a lasting impression on your audience.",
    href: "https://github.com/rkstm7",
  },
  {
    num: "06",
    title: "Support For Any Issues",
    description:
      "Need ongoing support? We offer reliable troubleshooting and maintenance to keep your website or app running smoothly. Our team is always available to resolve bugs, update features, and ensure your systems are always optimized, providing you peace of mind to focus on your business.",
    href: "https://github.com/rkstm7",
  },
];

const Services = () => {
  return (
    <section className="min-h-[90vh] my-12 sm:my-16 lg:my-14 flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-ouline text-transparent group-hover:text-ouline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60 text-justify">
                  {service.description}
                </p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
