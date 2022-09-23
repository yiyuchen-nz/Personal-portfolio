import { FunctionComponent, useEffect, useState } from "react"

import Link from "next/link"
import { useRouter } from "next/router"

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
          <span onClick={()=>setActiveItem(name)} className="hover:text-darkBlue">{name}</span>
        </a>
      </Link>
      ): null
    )
    }
  

const Navbar =()=>{

  const[activeItem, setActiveItem] = useState<string>('')

  const{pathname}= useRouter()

  useEffect(()=>{
    if(pathname === '/'){setActiveItem('About')}
    if(pathname === '/projects'){setActiveItem('Projects')}
    if(pathname === '/education'){setActiveItem('Education')}


  },[]) 

  return (
  <div className="flex justify-between px-5 py-3 my-3 text-xl border-b-4">
    <span className="text-xl font-bold border-b-4 text-darkBlue border-darkBlue md:text-2xl">{activeItem}</span>
    <div className="flex space-x-5 text-lg ">
      <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/"/>
      <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route="/projects"/>
      <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Education" route="/education"/>

    </div>

  </div>)
}

export default Navbar