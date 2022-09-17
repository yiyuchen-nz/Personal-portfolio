import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import{GoLocation} from "react-icons/go"
import{BsKeyboard, BsToggleOff}from"react-icons/bs"
import{AiOutlineMail}from"react-icons/ai"
import{HiDocumentDownload} from"react-icons/hi"


const Sidebar = () => {
  return (
    <div>
      <img src="https://content.omlet.co.uk/images/cache/819/1024/Cat-Ragdoll-A_young_brown_pointed_Ragdoll_Cat.webp" alt="profile picture" className="w-32 h-auto mx-auto rounded-full"/>
      <h3 className="my-4 text-3xl font-medium tracking-wider font-Poppins">
        <span className="font-bold text-darkBlue">Yiyu </span>
        Chen
      </h3>

      {/* developer */}
      <div className="py-4 my-5 text-butter bg-blue" style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
        <div className="flex items-center justify-center space-x-2">
          <BsKeyboard className="w-6 h-6"/>
          <span>Developer</span>
        </div>
      </div>


      {/* {address} */}
      <div className="py-4 my-5 text-butter bg-blue" style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-6 h-6"/>
          <span>Auckland, NZ</span>
        </div>
      </div>

       {/* CV  */}
       <div className="flex items-center justify-center px-2 py-1 my-4 rounded-full bg-blue text-butter">
       <HiDocumentDownload />
      <a href="">
        Download CV
        </a>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center rounded-full bg-blue text-butter">
        <AiOutlineMail/>
        <button className="px-2 my-1 " onClick={()=>window.open('mailto: yiyuchen9@gmail.com')}>
        Email Me
        </button>
        </div>


        {/* theme */}
        <div className="flex items-center justify-center my-4 rounded-full bg-blue text-butter ">
        <BsToggleOff/>
        <button className="px-2 my-1" >
        Theme
        </button>
        </div>

      {/* {social icon} */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-blue md:w-full">
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