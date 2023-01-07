import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typing";
import { Fragment } from "react"

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 flex items-start max-w-7xl justify-between z-20 xl:items-center p-5 mx-auto">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((item) => {
          return (
            <SocialIcon
              key={item._id}
              url={item.url}
              fgColor="gray"
              bgColor="transparent"
            />
          );
        })}
        {/* <SocialIcon
          url="https://facebook.com/feramiz.bahaddinov"
        
        />
       

        <SocialIcon
          url="https://facebook.com/feramiz.bahaddinov"
          fgColor="gray"
          bgColor="transparent"
        /> */}
      </motion.div>
      <motion.div
        initial={{ x: 500, scale: 0.5, opacity: 0 }}
        animate={{ x: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row text-gray-300 cursor-pointer items-center"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          GET IN TOUCH
        </p>
      </motion.div>
    </header>
  );
}
