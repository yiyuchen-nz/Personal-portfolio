//import { GetServerSidePropsContext } from 'next'; 
import ServiceCard from '../components/ServiceCard';
import {services}from'../data'

import{motion} from"framer-motion"
import { fadeInUp, stagger,routeAnimation } from '../animations';


const index = () => { 
  
  return(
    <motion.div 
    variants={routeAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
    className='flex flex-col flex-grow px-6 pt-1 dark:bg-black'>

        <h5 className='px-6 py-6 font-medium text-justify'>
          Prior to my career changing journey to become a developer, I was an English teacher for 3 years. I enjoy helping students with my knowledge and experience. Being a developer, I can build tools to help people across the world. How cool is that! This idea really excited me.
          <br/>
          Here I list some of the skills that I bring with me from my previous experience and my current learnings.
        </h5>

        <div className='flex-grow px-4 py-5 pb-4 mt-5 mb-10 bg-blue dark:bg-black dark:text-butter' style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
    

          <motion.div 
          className='grid gap-5 lg:grid-cols-2'
          variants={stagger}
          initial="initial"
          animate="animate">
            {services.map((service,idx)=>(
               <motion.div
               variants={fadeInUp}
                className='rounded-sm bg-butter lg:col-span-1 dark:bg-black dark:text-butter' key={idx}>
            <ServiceCard service={service}/>
            </motion.div>
            ))}
          </motion.div>
        </div>
    </motion.div>
  ) 
}
export default index  
