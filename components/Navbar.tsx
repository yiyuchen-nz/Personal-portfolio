import { FunctionComponent, useEffect, useState } from "react"

import Link from "next/link"
import { useRouter } from "next/router"

import{useTheme}from "next-themes"

const NavItem: FunctionComponent<{
  activeItem:string,
  setActiveItem:Function,
  name:string,
  route:string
}> = ({activeItem, setActiveItem, name, route})=>{

  
  return(
     activeItem !== name ? (
      <Link href={route}>
        <a>
          <span onClick={()=>setActiveItem(name)} className=" hover:text-blue">{name}</span>
        </a>
      </Link>
      ): null
    )
    }
  

const Navbar =()=>{

  const[activeItem, setActiveItem] = useState<string>('')

  const{pathname}= useRouter()

  useEffect(()=>{
    if(pathname === '/'){setActiveItem('About Me')}
    if(pathname === '/skills'){setActiveItem('My Skills')}
    if(pathname === '/projects'){setActiveItem('Projects')}
    if(pathname === '/education'){setActiveItem('Education')}


  },[]) 
    
  const {theme, setTheme} = useTheme()

  const changeTheme =()=>{
    setTheme(theme === "light"? "dark": "light")
  }
  
  return (
  <div className="flex justify-between px-5 pt-10 pb-2 my-3 text-xl border-b-4">
    <span className="text-sm font-bold border-b-4 text-darkBlue border-darkBlue md:text-xl lg:text-2xl">{activeItem}</span>
    <div className="flex space-x-5 text-xs md:text-lg lg:text-xl ">
      <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About Me" route="/"/>
      <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="My Skills" route="/skills"/>
      <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route="/projects"/>
      <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Education" route="/education"/>
      
      {/* theme */}
 
      <a className=" hover:text-blue hover:cursor-pointer"  onClick={changeTheme}>{theme === "dark"? "Light Mode" : "Dark Mode"}</a>

    </div>

  </div>)
}

export default Navbar