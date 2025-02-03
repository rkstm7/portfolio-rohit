"use client";

import { useState } from "react";
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
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91)9113134541",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "rohitkumar.getme@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description:
      "Kale Niwas Building, First Floor, Katraj, Pune Maharastra-411046",
  },
];

const Cont = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Reset form fields after submission
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none xl:mr-16">
            <form
              className="flex flex-col gap-6 p-6 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">
                Fill out the form below to get in touch.
              </p>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Select Service */}
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="app">App Development</SelectItem>
                    <SelectItem value="prob">Software Problem</SelectItem>
                    <SelectItem value="uiux">UI/UX Design</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                    <SelectItem value="other">Others</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Message */}
              <Textarea
                className="h-[200px]"
                placeholder="Type Your message here"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="md"
                className="max-w-40 font-extrabold"
              >
                Send Message
              </Button>

              {/* Success Message */}
              {isSubmitted && (
                <p className="text-green-500 font-bold mt-2">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div
                      className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]
                      bg-[#27272c] text-accent rounded-md flex items-center justify-center"
                    >
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-1xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30278.968343409182!2d73.84208030386431!3d18.444163388589875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac101655f87%3A0xcc5b0a20d60c9ac8!2sKatraj%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1738551888949!5m2!1sen!2sin"
                width="400"
                height="300"
                className="flex mb-5"
              ></iframe>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Cont;
