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

// export const languages: ISkill[]=[
//   {
//   name: "JavaScript",
//   level: "70%",
//   Icon: BsCircleFill
// },
// {
//   name: "JavaScript",
//   level: "70%",
//   Icon: BsCircleFill
// },
// {
//   name: "JavaScript",
//   level: "70%",
//   Icon: BsCircleFill
// },
// {
//   name: "JavaScript",
//   level: "70%",
//   Icon: BsCircleFill
// },
// {
//   name: "JavaScript",
//   level: "70%",
//   Icon: BsCircleFill
// },

// ]

export const projects:IProject[]= [{
  id:1,
  name: "Dev Invaders",
  description:"A very challenging side scrolling shooting game. This was the final project at the bootcamp in Dev Academy. It was made by 4 of us with 0 experience in game development within 7 days (and we managed to have a day off Sunday ; )",
  image_path: "/images/dev_invaders.jpg",
  deployed_url: "https://yiyuchen-nz.github.io/dev-invaders/",
  github_url:"https://github.com/yiyuchen-nz/dev-invaders",
  category: ['Phaser3', "JavaScript"],
  key_techs: ["Phaser3", "JavaScript"]
},
{
  id:2,
  name: "Dev Who",
  description:"A little fun guess who game, but with super heros. This was my first Friday group project at Dev Academy.",
  image_path: "/images/dev_who.jpg",
  deployed_url: "https://dev-who.herokuapp.com",
  github_url:"https://github.com/yiyuchen-nz/dev-who",
  category: ['JavaScript'],
  key_techs: ["Javascript", "Handlebars"]
},
{
  id:3,
  name: "Dev invaders",
  description:"This was the final project of boot camp.",
  image_path: "/images/smiling-spaceship.png",
  deployed_url: "https://yiyuchen-nz.github.io/dev-invaders/",
  github_url:"https://github.com/yiyuchen-nz/dev-invaders",
  category: ['React'],
  key_techs: ["phaser3", "Javascript"]
},{
  id:4,
  name: "Dev invaders",
  description:"This was the final project of boot camp.",
  image_path: "/images/smiling-spaceship.png",
  deployed_url: "https://yiyuchen-nz.github.io/dev-invaders/",
  github_url:"https://github.com/yiyuchen-nz/dev-invaders",
  category: ['React'],
  key_techs: ["phaser3", "Javascript"]
}
]