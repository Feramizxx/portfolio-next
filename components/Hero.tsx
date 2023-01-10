import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "../typing";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import BackgroundCircles from "./BackgroundCircles";
type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [ 
      `Hi, My name is ${pageInfo.name},`,
      `${pageInfo.role}`,
      "<LoveCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex  flex-col  text-center h-screen justify-center items-center space-y-8 overflow-hidden ">
      <BackgroundCircles />
      <motion.img
        src={urlFor(pageInfo?.heroImage).url()}
        className="rounded-full h-32 w-32 mx-auto object-cover relative"
        alt="myImage"
      />
      <div className="z-20">
        <h2 className="uppercase tracking-[15px] text-gray-500 pb-2 text-sm">
          {pageInfo.name}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="hero-btn">About</button>
          </Link>

          <Link href="#experience">
            <button className="hero-btn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="hero-btn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="hero-btn">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="hero-btn">ContactMe</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
