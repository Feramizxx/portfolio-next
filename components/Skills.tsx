import { Fragment } from "react"
import { motion } from "framer-motion";
import SkillItem from "./Skill";
import { Skill } from "../typing";


type Props = {
  skills:Skill[];
};

export default function Skills({skills}: Props) {
  return (
    <motion.div
    initial={{opacity:0 }}
    whileInView={{opacity:1}}
    transition={{duration:1.2}}
    className="min-h-screen   relative flex justify-center items-center text-center 
    md:text-left md:flex-row max-w-[2000px] mx-auto xl:px-10 xl:space-y-0">
      <h3 className="uppercase tracking-[20px] absolute text-gray-500 top-24  text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 tracking-[3px]
       uppercase text-gray-500 ">hover over a skill for current profieciency</h3>

       <div className="grid grid-cols-4  gap-5">
       {skills.slice(0, skills.length/2).map((skill,index)=>{
        return <SkillItem key={skill._id} Skill={skill}  directionLeft={false}/>
       })}
        {skills.slice(skills.length/2, skills.length).map((skill,index)=>{
        return <SkillItem key={skill._id} Skill={skill} directionLeft />
       })}
       {/* {skills.map((skill)=>{ 
        <SkillItem  key={index} Skill={skill}/>
       })} */}

       </div>


    </motion.div>
  );
}
