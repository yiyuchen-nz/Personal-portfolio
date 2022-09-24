import { BsSuitHeartFill} from 'react-icons/bs'
import {RiComputerLine} from 'react-icons/ri'
import {IProject, IService} from'./type'

export const services:IService[] = [

  {
    title:"Frontend Development",
    about:"I can build SPA with HTML, CSS and React js.",
    Icon: RiComputerLine,
  },
  {
    title:"Communication Skills",
    about:"Hellooo!!!",
    Icon: BsSuitHeartFill,
  },
  {
    title:"Backend Development",
    about:"I have experience with data handling Express.js",
    Icon: RiComputerLine,
  },
  {
    title:"Curious and fast learner",
    about:"Learned Phaser3 to build a 2D game in 7 days",
    Icon: BsSuitHeartFill,
  },
  {
    title:"API Development",
    about:"Hellooo!!!",
    Icon: RiComputerLine,
  },

  {
    title:"Team Player",
    about:"Hellooo!!!",
    Icon: BsSuitHeartFill,
  },

]


export const projects:IProject[]= [{
  id:1,
  name: "Dev Invaders",
  description:"A 'very' challenging side scrolling shooting game. This was the final project at the bootcamp in Dev Academy. It was made by 4 of us with 0 experience in game development within 7 days (and we managed to have a day off Sunday ; )",
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
  key_techs: ["JavaScript", "Handlebars"]
},
{
  id:3,
  name: "Sweet As Yoga",
  description:"This is a Yoga booking website our team made for our fav yoga instructor Sarah. We were sitting on yoga mats when presenting the project. Really a fun experience!",
  image_path: "/images/sweetAsYoga.jpg",
  deployed_url: null,
  github_url:"https://github.com/yiyuchen-nz/sweet-as-yoga",
  category: ['React', "JavaScript"],
  key_techs: ["React", "JavaScript", "Knex js"]
},{
  id:4,
  name: "A+ Budget Calendar",
  description:"A budget tracking tool. ",
  image_path: "/images/budgetCalendar.jpg",
  deployed_url: null,
  github_url:"https://github.com/yiyuchen-nz/aplus-budget-calendar",
  category: ['React', "JavaScript"],
  key_techs: ["React", "JavaScript"]
}
]