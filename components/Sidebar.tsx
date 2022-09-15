import {AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import{GoLocation} from "react-icons/go"
import{GiTie}from"react-icons/gi"

const Sidebar = () => {
  return (
    <div>
      <img src="https://content.omlet.co.uk/images/cache/819/1024/Cat-Ragdoll-A_young_brown_pointed_Ragdoll_Cat.webp" alt="profile picture" className="w-32 h-auto mx-auto rounded-full"/>
      <h3 className="my-4 text-3xl font-medium tracking-wider font-Poppins">
        <span className="text-yellow-700">Yiyu </span>
        Chen
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-100 rounded-full">
        Developer
        </p>
      <a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-100 rounded-full"
      href=""
   >
        <GiTie className="w-6 h-6"/>
        Download CV
        </a>
      {/* {social icon} */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-black md:w-full">
        <a href="https://github.com/yiyuchen-nz">
          <AiFillGithub className="w-8 h-8 cursor-pointer"/>
        </a>
        <a href="https://www.linkedin.com/in/yiyuchen-nz/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer"/>
        </a>
      </div>
      {/* {address} */}
      <div className="py-4 my-5 bg-gray-100" style={{marginLeft:'-1rem', marginRight:'-1rem'}}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Auckland, NZ</span>
        </div>
        <p className="my-2">yiyuchen9@gmail.com</p>
      </div>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-gray-200 to-gray-600 focus:outline-none" onClick={()=>window.open('mailto: yiyuchen9@gmail.com')}>
        Email Me
        </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-gray-200 to-gray-600">
        Toggle Theme
        </button>
    </div>
  )
}

export default Sidebar