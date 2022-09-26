import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import{GoLocation} from "react-icons/go"
import{AiOutlineMail}from"react-icons/ai"
import Image from "next/image"

import {motion} from"framer-motion"
import { routeAnimation,stagger,fadeInUp } from "../animations"

const index = () => {


  return (
    <motion.div 
    variants={routeAnimation}
    initial="initial"
    animate="animate"
    exit="exit" className='grid gap-4 pb-10 md:grid-cols-3 lg:grid-cols-3' >

      <motion.div 
        variants={stagger}
        initial="initial"
        animate="animate"
      className="flex flex-col items-center my-10 mx-9">
        <Image src="/images/profile.jpg" alt="profile picture" className="w-32 h-auto mx-auto rounded-full" layout="intrinsic" height="250" width="250"/>
        <motion.h3 variants={fadeInUp} className="gap-3 my-2 space-x-2 text-3xl font-medium tracking-wider font-Poppins">
          <span className="font-bold text-darkBlue">Yiyu </span>
          Chen
        </motion.h3>
        {/* title & location */}
        <motion.div variants={fadeInUp} className="mt-1 space-x-2">
          <span>Software Developer</span>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex mt-3 space-x-2 ">
          <GoLocation className="w-4 h-4"/>
          <span>Auckland, NZ</span>
        </motion.div>

          {/*  email and social icons */}   
          <motion.div variants={fadeInUp} className="flex flex-row justify-center my-8 space-x-5 text-blue md:w-full dark:text-butter">
             <a href="https://github.com/yiyuchen-nz"><AiFillGithub className="w-8 h-8 cursor-pointer"/></a>
             <a href="https://www.linkedin.com/in/yiyuchen-nz/"><AiFillLinkedin className="w-8 h-8 cursor-pointer"/></a>
             <button onClick={()=>window.open('mailto: yiyuchen9@gmail.com')}>
             <AiOutlineMail className="w-8 h-8" />
             </button>
         </motion.div>
      </motion.div>
      
      <motion.div variants={stagger}
        initial="initial"
        animate="animate" className="md:col-span-2 lg:col-span-2'">
      <motion.h5 variants={fadeInUp} className='pt-16 pl-10 pr-16 leading-8 text-justify font-Poppins'>
         <span style={{color:'#285880', fontSize:"50px"}}>Hello! </span>I am so glad you are here. 
         <br/>
         <br/>
         My name is <span style={{color:'#285880'}}>Yiyu</span>. I am a software developer, previously an English teacher, and a cat and coffee lover. 
         I recently graduated from the web development bootcamp of Dev Academy. 
         I love building fun, simple and user-friendly tools for people all across the world.
         <br/>
         I am currently looking for a new role as a developer. Please feel free to contact me. Let&apos;s chat over coffee:-)
        </motion.h5>
      </motion.div>
    </motion.div>
  )
}

export default index