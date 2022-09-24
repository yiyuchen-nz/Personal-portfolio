import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import{GoLocation} from "react-icons/go"
import{ BsToggleOff}from"react-icons/bs"
import{AiOutlineMail}from"react-icons/ai"
import{useTheme}from "next-themes"

import Image from "next/image"

const Sidebar = () => {

  const {theme, setTheme} = useTheme()

  const changeTheme =()=>{
    setTheme(theme === "light"? "dark": "light")
  }

  return (
    <div >
      <Image src="/images/profile.jpg" alt="profile picture" className="w-32 h-auto mx-auto rounded-lg " layout="intrinsic" height="250" width="250"/>
      <h3 className="my-2 text-3xl font-medium tracking-wider font-Poppins">
        <span className="font-bold text-darkBlue">Yiyu </span>
        Chen
      </h3>

      {/* title & location */}
      <div className="pb-2 my-5 bg-white text-darkBlue dark:bg-gray-800" style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
        <div className="flex items-center justify-center space-x-2">
          <span>Software Developer</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-4 h-4"/>
          <span>Auckland, NZ</span>
        </div>
      </div>

      {/* theme */}
     <div className="flex items-center justify-center my-4 rounded-full bg-blue text-butter dark:bg-gray-800">
        <BsToggleOff/>
        <button className="px-2 my-1" onClick={changeTheme}>
       {theme === "dark"? "Light Mode" : "Dark Mode"}
        </button>
        </div>
       {/* CV  */}
       <div className="flex items-center justify-center px-2 py-1 my-4 rounded-full bg-blue text-butter dark:bg-gray-800">
      <a href="/yiyu_chen_resume.pdf"
      download="yiyu_chen_resume.pdf">
        Download Resume
        </a>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center rounded-full bg-blue text-butter dark:bg-gray-800">
        <AiOutlineMail/>
        <button className="px-2 my-1 " onClick={()=>window.open('mailto: yiyuchen9@gmail.com')}>
        Email Me
        </button>
        </div>


      {/* {social icon} */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-blue md:w-full dark:text-butter">
        <a href="https://github.com/yiyuchen-nz">
          <AiFillGithub className="w-8 h-8 cursor-pointer"/>
        </a>
        <a href="https://www.linkedin.com/in/yiyuchen-nz/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
        </a>
      </div>

      
    </div>
  )
}

export default Sidebar