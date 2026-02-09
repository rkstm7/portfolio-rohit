"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle
} from "react-icons/fa";
import { 
  BsWhatsapp, 
  BsTelegram,
  BsLightningChargeFill,
  BsStarFill,
  BsHeartFill
} from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const contactInfo = [
  {
    icon: MdPhone,
    title: "Phone",
    description: "(+91) 9113134541",
    link: "tel:+919113134541",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
  },
  {
    icon: MdEmail,
    title: "Email",
    description: "rohitkumar.getme@gmail.com",
    link: "mailto:rohitkumar.getme@gmail.com",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: MdLocationOn,
    title: "Location",
    description: "Katraj, Pune, Maharashtra - 411046",
    link: "https://maps.google.com/?q=Katraj,Pune",
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
  },
];

const socialLinks = [
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    link: "https://linkedin.com/in/rohitkumar",
    color: "hover:text-blue-500",
  },
  {
    icon: FaGithub,
    name: "GitHub",
    link: "https://github.com/rkstm7",
    color: "hover:text-white",
  },
  {
    icon: BsWhatsapp,
    name: "WhatsApp",
    link: "https://wa.me/919113134541",
    color: "hover:text-green-500",
  },
  {
    icon: FaTwitter,
    name: "Twitter",
    link: "https://twitter.com/rohitkumar",
    color: "hover:text-blue-400",
  },
  {
    icon: FaInstagram,
    name: "Instagram",
    link: "https://instagram.com/rohitkumar",
    color: "hover:text-pink-500",
  },
  {
    icon: BsTelegram,
    name: "Telegram",
    link: "https://t.me/rohitkumar",
    color: "hover:text-blue-400",
  },
];

const services = [
  { value: "web-dev", label: "Web Development", icon: "🌐" },
  { value: "app-dev", label: "App Development", icon: "📱" },
  { value: "fullstack", label: "Full Stack Development", icon: "💻" },
  { value: "devops", label: "DevOps & Cloud", icon: "☁️" },
  { value: "ai-ml", label: "AI & Machine Learning", icon: "🤖" },
  { value: "uiux", label: "UI/UX Design", icon: "🎨" },
  { value: "consulting", label: "Technical Consulting", icon: "💡" },
  { value: "other", label: "Other Services", icon: "✨" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      service: value,
    }));
    if (errors.service) {
      setErrors(prev => ({ ...prev, service: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname.trim()) newErrors.firstname = "First name is required";
    if (!formData.lastname.trim()) newErrors.lastname = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

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
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="inline-block mb-4"
          >
            <HiSparkles className="text-6xl md:text-7xl text-accent mx-auto" />
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
            Let's Connect
          </motion.h1>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 xl:gap-12">
          {/* Left: Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="xl:col-span-3"
          >
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              {/* Animated Border */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-1 bg-gradient-to-r from-accent via-pink-300 to-accent rounded-2xl opacity-20 blur"
              />
              
              <form
                onSubmit={handleSubmit}
                className="relative bg-primary/95 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <BsLightningChargeFill className="text-3xl text-accent" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Send Me a Message</h2>
                    <p className="text-white/60 text-sm">Fill out the form and I'll get back to you within 24 hours</p>
                  </div>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="First Name *"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      className={`bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-accent ${
                        errors.firstname ? "border-red-500" : ""
                      }`}
                    />
                    {errors.firstname && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstname}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Last Name *"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      className={`bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-accent ${
                        errors.lastname ? "border-red-500" : ""
                      }`}
                    />
                    {errors.lastname && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastname}</p>
                    )}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-accent ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone Number *"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-accent ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <Select onValueChange={handleSelectChange} value={formData.service}>
                    <SelectTrigger className={`bg-white/5 border-white/10 text-white focus:border-accent ${
                      errors.service ? "border-red-500" : ""
                    }`}>
                      <SelectValue placeholder="Select a Service *" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a1a] border-white/10">
                      <SelectGroup>
                        <SelectLabel className="text-white/60">Choose Your Service</SelectLabel>
                        {services.map((service) => (
                          <SelectItem 
                            key={service.value} 
                            value={service.value}
                            className="text-white hover:bg-accent/10 focus:bg-accent/10"
                          >
                            <span className="flex items-center gap-2">
                              <span>{service.icon}</span>
                              <span>{service.label}</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-red-500 text-xs mt-1">{errors.service}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <Textarea
                    placeholder="Tell me about your project... *"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-accent resize-none ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-gradient-to-r from-accent to-pink-300 hover:from-pink-300 hover:to-accent text-primary font-bold text-base py-6 px-8 shadow-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="mr-2"
                        >
                          ⏳
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20"
                  >
                    <FaCheckCircle className="text-2xl text-green-500" />
                    <div>
                      <p className="text-green-500 font-bold">Message Sent Successfully!</p>
                      <p className="text-white/60 text-sm">I'll get back to you as soon as possible.</p>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>

          {/* Right: Contact Info & Map */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="xl:col-span-2 space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`block p-6 rounded-xl ${item.bgColor} border ${item.borderColor} backdrop-blur-sm group cursor-pointer`}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`p-4 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}
                    >
                      <item.icon className="text-2xl text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-white/60 text-sm mb-1">{item.title}</p>
                      <h3 className="text-white font-semibold group-hover:text-accent transition-colors">
                        {item.description}
                      </h3>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <BsHeartFill className="text-pink-300" />
                Connect on Social Media
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 text-white/70 ${social.color} transition-colors group`}
                  >
                    <social.icon className="text-2xl" />
                    <span className="text-xs font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              variants={itemVariants}
              className="relative rounded-xl overflow-hidden border border-white/10 group"
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
                className="absolute -inset-1 bg-gradient-to-r from-accent to-pink-300 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity"
              />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30278.968343409182!2d73.84208030386431!3d18.444163388589875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac101655f87%3A0xcc5b0a20d60c9ac8!2sKatraj%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1738551888949!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative rounded-xl"
              />
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 text-center"
              >
                <BsStarFill className="text-3xl text-accent mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">24h</p>
                <p className="text-white/60 text-xs">Response Time</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 text-center"
              >
                <BsHeartFill className="text-3xl text-pink-300 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-white/60 text-xs">Client Satisfaction</p>
              </motion.div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                />
                <div>
                  <p className="text-white font-bold">Available for Projects</p>
                  <p className="text-white/60 text-sm">Open to new opportunities and collaborations</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-accent/10 via-pink-300/10 to-accent/10 border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Whether you need a website, mobile app, or technical consultation, I'm here to help bring your vision to life with cutting-edge technology and creative solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="tel:+919113134541"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-accent to-pink-300 hover:from-pink-300 hover:to-accent text-primary font-bold">
                  <FaPhoneAlt className="mr-2" />
                  Call Now
                </Button>
              </motion.a>
              <motion.a
                href="https://wa.me/919113134541"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="border-2 border-accent text-accent hover:bg-accent/10 font-bold">
                  <BsWhatsapp className="mr-2" />
                  WhatsApp
                </Button>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(25)].map((_, i) => {
        const randomLeft = (i * 4) % 100;
        const randomTop = (i * 6) % 100;
        const randomDuration = 3 + (i % 5);
        const randomDelay = (i % 6) * 0.3;
        
        return (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/30 rounded-full"
            style={{
              left: `${randomLeft}%`,
              top: `${randomTop}%`,
            }}
            animate={{
              y: [0, -50, 0],
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

export default Contact;
