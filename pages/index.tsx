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

        <h5 className='my-2 font-medium'>
         Hello! Welcome to my portfolio. 
         <br/>My name is Yiyu. I am a software developer. I recently graduated from the web development bootcamp of Dev Academy. I would love to make fun, user-friendly and delightful tools for people all across the world :-)
        </h5>

        <div className='flex-grow p-4 mt-5 bg-blue dark:bg-black dark:text-butter' style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
          <h6 className='my-3 text-xl font-bold tracking-wide'>What I offer</h6>

          <motion.div 
          className='grid gap-6 lg:grid-cols-2'
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
