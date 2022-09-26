import { FunctionComponent, useState } from "react"
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { projects } from "../data";
import { IProject } from "../type"
import{MdClose}from"react-icons/md"

import Image from 'next/image'
import {motion} from "framer-motion"
import { stagger,fadeInUp } from "../animations";


const ProjectCard:FunctionComponent<{
  project:IProject,
  showDetail:null|number;
  setShowDetail:(id: null|number)=>void
}> = ({

  project:{
    id,
    name,
    description,
    image_path,
    deployed_url,
    github_url,
    key_techs,
    category
  },
  showDetail,
  setShowDetail
}) => {


  return (
    <div>
      <Image src={image_path} alt={name} className="cursor-pointer" onClick={()=>setShowDetail(id)} width="300" height="200" layout="responsive"/>
      <p className="my-2 text-center" >{name}</p>
{ showDetail === id && (
      <div className="relative grid w-full h-auto p-2 rounded-lg sm:absolute sm:top-0 sm:left-0 sm:z-10 sm:p-10 sm:grid-cols-2 sm:gap-x-12 text-butter bg-blue dark:bg-gray-800">

        <motion.div 
        variants={stagger}
        initial="initial"
        animate="animate"
        >
          
          {/* <img src={image_path} alt="name" /> */}
         <motion.div
         variants={fadeInUp }
         className="border-4 border-gray-100">
          <Image src={image_path} alt={name}  width="300" height="200" layout="responsive"/> 
          </motion.div> 

         <motion.div variants={fadeInUp }className="flex justify-center my-4 space-x-3">
          <a href={github_url}className="flex px-4 py-2 space-x-3 text-md text-butter item-center dark:bg-black">
           <AiFillGithub className="w-6 h-6"/> <span>Github</span>
          </a>
          {  deployed_url !== null &&
          <a href={deployed_url}className="flex px-4 py-2 space-x-3 text-md item-center dark:bg-black">
            <AiFillProject className="w-6 h-6"/> <span>Project</span>
          </a>
          }     
          </motion.div> 
        </motion.div>

        <motion.div  
        variants={stagger}
        initial="initial"
        animate="animate">
          <motion.h2 variants={fadeInUp } className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
          <motion.h3 variants={fadeInUp }className="mb-3 font-medium">{description}</motion.h3>
          <motion.div variants={fadeInUp }className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
            {
              key_techs.map(tech=>
                <span key={tech}
                className="px-2 py-1 my-1 bg-gray-200 rounded-sm text-blue dark:bg-black">
                  {tech}
                </span>)
            }
          </motion.div>
        </motion.div>

        <button onClick={()=>setShowDetail(null)}
        className="absolute bg-black rounded-full top-3 right-3 focus:outline-none dark:bg-butter dark:text-black"
        >
          <MdClose size={30}/>
        </button>
      </div>
)}
 </div>

  )
}

export default ProjectCard