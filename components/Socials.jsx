import Link from "next/link";

import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const social = [
  { icon: <FaGithub />, path: "https://github.com/rkstm7" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/rkstm7" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@rkstm7" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/___rohitsingh7/" },
  { icon: <FaXTwitter />, path: "https://x.com/raajputrksingh" },
  {
    icon: <FaFacebookF />,
    path: "https://www.facebook.com/profile.php?id=100071203236403",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
