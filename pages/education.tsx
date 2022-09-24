import {motion } from "framer-motion"
import {routeAnimation, fadeInUp} from "../animations"

const Education = () => {
  return (
    <motion.div 
    variants={routeAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
    className="px-6 py-2"
    > 
    
    {/* education */}
    <motion.div  className="grid gap-2 md:grid-rows-3 text-butter">
      
      <motion.div variants={fadeInUp} className="px-3 bg-blue">
        <motion.h5 variants={fadeInUp} className="my-2 text-lg font-bold">
          Web Development Bootcamp
          </motion.h5>
          <motion.h5 variants={fadeInUp} className="my-2 font-semibold ">
            Dev Academy Aotearoa
          </motion.h5>
          <motion.p className="text-xs">April 2022- July 2022</motion.p>
          <motion.p className="my-1 text-sm">What i am doing. What i am doing. What i am doing. What i am doing. What i am doing. What i am doing. What i am doing.</motion.p>
      </motion.div>

      <motion.div variants={fadeInUp} className="px-3 bg-blue">
        <motion.h5 variants={fadeInUp} className="my-2 text-lg font-bold">
          Postgraduate Diploma in International Hospitality Management
          </motion.h5>
          <motion.h5 variants={fadeInUp} className="my-2 font-semibold ">
            AUT
          </motion.h5>
          <motion.p className="text-xs">February 2016- November 2016</motion.p>
          <motion.p className="my-3 text-sm">What i am doing. What i am doing. What i am doing. What i am doing. What i am doing. What i am doing. What i am doing.</motion.p>
      </motion.div>

      <motion.div variants={fadeInUp} className="px-3 bg-blue">
        <motion.h5 variants={fadeInUp} className="my-2 text-lg font-bold">
          Bachelor of Engineering
          </motion.h5>
          <motion.h5 variants={fadeInUp} className="my-2 font-semibold ">
            Tianjin University of Technology
          </motion.h5>
          <motion.p className="my-3 text-sm">What i am doing. What i am doing. What i am doing. What i am doing. What i am doing. What i am doing. What i am doing.</motion.p>
      </motion.div>

    </motion.div>


    </motion.div>
  )
}

export default Education