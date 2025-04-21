"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image"; // Don't forget this for Next.js optimized images

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "achievement", path: "/achievement" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[40px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center px-6 pt-12">
        {/* Logo */}
        <Link href="/" className="mb-12">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={120}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col justify-center items-center gap-6">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
