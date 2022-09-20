import { FunctionComponent, useState } from "react"
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { projects } from "../data";
import { IProject } from "../type"
import{MdClose}from"react-icons/md"

const ProjectCard:FunctionComponent<{
  project:IProject;
}> = ({

  project:{
    name,
    description,
    image_path,
    deployed_url,
    github_url,
    key_techs,
    category
  }
}) => {

  const [showDetail, setShowDetail]=useState(false)

  return (
    <div>
      <img src={image_path} alt={name} className="cursor-pointer" onClick={()=>setShowDetail(true)}/>
      <p className="my-2 text-center" >{name}</p>
{ showDetail && (
      <div className="absolute top-0 left-0 z-10 grid w-full h-auto grid-cols-2 p-2 md:grid-cols-2 md: gap-x-12 text-blue bg-butter dark:text-butter dark:bg-black">

        <div>
          <img src={image_path} alt="name" />
          
         <div className="flex justify-center my-4 space-x-3">
          <a href={github_url}className="flex px-4 py-2 space-x-3 text-lg bg-gray-100 item-center dark:bg-black">
            <AiFillGithub/> <span>Github</span>
          </a>
          <a href={deployed_url}className="flex px-4 py-2 space-x-3 text-lg bg-gray-100 item-center dark:bg-black">
            <AiFillProject/> <span>Project</span>
          </a>
          </div> 
        </div>

        <div>
          <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
          <h3 className="mb-3 font-medium">{description}</h3>
          <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
            {
              key_techs.map(tech=>
                <span key={tech}
                className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-black">
                  {tech}
                </span>)
            }
          </div>
        </div>

        <button onClick={()=>setShowDetail(false)}
        className="absolute bg-black rounded-full top-3 right-3 focus:outline-none dark:bg-butter "
        >
          <MdClose size={30}/>
        </button>
      </div>
)}
 </div>

  )
}

export default ProjectCard