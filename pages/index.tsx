import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import{GoLocation} from "react-icons/go"
import{AiOutlineMail}from"react-icons/ai"
import{BsFillCloudDownloadFill} from "react-icons/bs"


import Image from "next/image"

const Topbar = () => {


  return (
    <div  className='flex flex-row-2' >

      <div className="flex flex-col my-10 mx-9">
        <Image src="/images/profile.jpg" alt="profile picture" className="w-32 h-auto mx-auto rounded-full" layout="intrinsic" height="250" width="250"/>
        <h3 className="flex items-center gap-3 my-2 space-x-2 text-3xl font-medium tracking-wider font-Poppins">
          <span className="font-bold text-darkBlue">Yiyu </span>
          Chen
        </h3>
        {/* title & location */}
        <div className="flex items-center mt-1 space-x-2">
          <span>Software Developer</span>
        </div>

        <div className="flex mt-3 space-x-2 ">
          <GoLocation className="w-4 h-4"/>
          <span>Auckland, NZ</span>
        </div>

          {/*  email and social icons */}   
          <div className="flex flex-row my-8 space-x-5 text-blue md:w-full dark:text-butter">
          <a href="https://github.com/yiyuchen-nz"><AiFillGithub className="w-8 h-8 cursor-pointer"/></a>
          <a href="https://www.linkedin.com/in/yiyuchen-nz/"><AiFillLinkedin className="w-8 h-8 cursor-pointer"/></a>
          <button onClick={()=>window.open('mailto: yiyuchen9@gmail.com')}>
          <AiOutlineMail className="w-8 h-8" />
         </button>
         </div>
 

      </div>
      
      <div>
      <h5 className='mx-10 my-10 font-medium text-justify'>
         Hello! I am so glad you are here. 
         <br/>
         My name is Yiyu. I am a software developer, previously an English teacher, and a cat and coffee lover. I recently graduated from the web development bootcamp of Dev Academy. I love to make simple, user-friendly and fun tools for people all across the world :-)
        </h5>
      </div>
    </div>
  )
}

export default Topbar