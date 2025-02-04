import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl-pb-30">
          {/* Text here */}
          <div className="text-center xl:text-left order-2 xl:-order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm
              <br /> <span className="text-accent">Rohit Kumar</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-justify text-align">
              I am currently doing a{" "}
              <b className="text-pink-300 font-extrabold italic">
                Python Full Stack Development{""}
              </b>{" "}
              Internship at{" "}
              <b className="text-pink-300 font-extrabold italic">
                YSM Info Solution.
              </b>{" "}
              I have completed{" "}
              <b className="text-pink-300 font-extrabold italic">
                Full Stack Web Development
              </b>{" "}
              internship at{" "}
              <b className="text-pink-300 font-extrabold italic">
                PantechAI & Bharat Intern{" "}
              </b>
              and{" "}
              <b className="text-pink-300 font-extrabold italic">
                Java Development
              </b>{" "}
              Intern at{" "}
              <b className="text-pink-300 font-extrabold italic">
                Internship Studio
              </b>
              . Additionally, I contributed as an Editor at RAC Pune Wisdom.
              With expertise in{" "}
              <b className="text-pink-300 font-extrabold italic">
                Software Development
              </b>
              , I am passionate about coding,{" "}
              <b className="text-pink-300 font-extrabold italic">
                problem-solving
              </b>
              , continuous learning, create impactful solutions and explore new
              innovations in the{" "}
              <b className="text-pink-300 font-extrabold italic">tech world</b>.
              🚀
            </p>
            {/* Button for Social Media */}
            <div className="flex flex-col xl:flex-row items-center  gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a href="https://drive.google.com/file/d/1OSAQ5kUeYdhdnxoGVTcBhXjgtM1e0GYM/view?usp=drive_link">
                  Download CV
                </a>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photos Here */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
