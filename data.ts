import { BsCircleFill } from 'react-icons/bs'
import {RiComputerLine} from 'react-icons/ri'
import {IProject, IService, ISkill} from'./type'

export const services:IService[] = [

  {
    title:"Frontend Dev",
    about:"Hellooo!!!",
    Icon: RiComputerLine,
  },
  {
    title:"Frontend Dev",
    about:"Hellooo!!!",
    Icon: RiComputerLine,
  },
  {
    title:"Frontend Dev",
    about:"Hellooo!!!",
    Icon: RiComputerLine,
  },
  {
    title:"Frontend Dev",
    about:"Hellooo!!!",
    Icon: RiComputerLine,
  },
  {
    title:"Frontend Dev",
    about:"Hellooo!!!",
    Icon: RiComputerLine,
  },
  {
    title:"Frontend Dev",
    about:"Hellooo!!!",
    Icon: RiComputerLine,
  }
]

export const languages: ISkill[]=[
  {
  name: "JavaScript",
  level: "70%",
  Icon: BsCircleFill
},
{
  name: "JavaScript",
  level: "70%",
  Icon: BsCircleFill
},
{
  name: "JavaScript",
  level: "70%",
  Icon: BsCircleFill
},
{
  name: "JavaScript",
  level: "70%",
  Icon: BsCircleFill
},
{
  name: "JavaScript",
  level: "70%",
  Icon: BsCircleFill
},

]

export const projects:IProject[]= [{
  name: "Dev invaders",
  description:"This was the final project of boot camp.",
  image_path: "/images/smiling-spaceship.png",
  deployed_url: "https://yiyuchen-nz.github.io/dev-invaders/",
  github_url:"https://github.com/yiyuchen-nz/dev-invaders",
  category: ['Phaser3'],
  key_techs: ["phaser3", "Javascript"]
},
{
  name: "Dev invaders",
  description:"This was the final project of boot camp.",
  image_path: "/images/smiling-spaceship.png",
  deployed_url: "https://yiyuchen-nz.github.io/dev-invaders/",
  github_url:"https://github.com/yiyuchen-nz/dev-invaders",
  category: ['Phaser3'],
  key_techs: ["phaser3", "Javascript"]
},
{
  name: "Dev invaders",
  description:"This was the final project of boot camp.",
  image_path: "/images/smiling-spaceship.png",
  deployed_url: "https://yiyuchen-nz.github.io/dev-invaders/",
  github_url:"https://github.com/yiyuchen-nz/dev-invaders",
  category: ['react'],
  key_techs: ["phaser3", "Javascript"]
},{
  name: "Dev invaders",
  description:"This was the final project of boot camp.",
  image_path: "/images/smiling-spaceship.png",
  deployed_url: "https://yiyuchen-nz.github.io/dev-invaders/",
  github_url:"https://github.com/yiyuchen-nz/dev-invaders",
  category: ['react'],
  key_techs: ["phaser3", "Javascript"]
}
]