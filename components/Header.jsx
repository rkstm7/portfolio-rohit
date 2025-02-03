"use client";

import Link from "next/link";
import Image from "next/image"; // Import Image component
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Image */}
        <Link href="/">
          <Image
            src="/assets/logo.png" // Ensure the image is inside the "public" folder
            alt="Logo"
            width={100} // Adjust size as needed
            height={50}
            className="object-contain" // Ensures the image fits well
          />
        </Link>

        {/* Desktop Nav & Hire Me Button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSc7q5OrF7X8lBDT6OW6ctl1UbLHY0gnspFu7LhJ9r_PNGea_A/viewform?usp=header">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile-View */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
