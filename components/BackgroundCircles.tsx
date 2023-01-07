import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
     initial={{
      opacity:0,
     }}

     animate={{
      scale:[1,2,2,3,1],
      opacity:[0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      borderRadius:['20%','20%',"50%","80%","20%"]
     }}
     transition={{
      duration:2.5
     }}
     className="relative flex justify-center items-center">
      <div className="absolute border  rounded-full h-[200px] border-[#333333] w-[200px] animate-ping mt-52 " />
      <div className="absolute border rounded-full h-[300px] border-[#333333] w-[300px] mt-52" />
      <div className="absolute border rounded-full h-[500px] border-[#333333] w-[500px] mt-52" />
      <div className="absolute border rounded-full h-[650px] border-[#F7AB0A] w-[650px] animate-pulse opacity-20 mt-52" />
      <div className="absolute border rounded-full h-[800px] border-[#333333] w-[800px] mt-52" />
    </motion.div>
  );
}
