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
    <motion.div  className="grid gap-6 md:grid-rows-3 text-darkBlue">
      
      <motion.div variants={fadeInUp} className="px-3 mb-1 bg-butter">
        <motion.h5 variants={fadeInUp} className="my-3 text-xl font-bold">
          Web Development Bootcamp
          </motion.h5>
          <motion.h5 variants={fadeInUp} className="my-2 font-semibold ">
            Dev Academy Aotearoa
          </motion.h5>
          <motion.p className="text-xs">April 2022- July 2022</motion.p>
          <motion.p className="my-3 ">What i am doing. What i am doing. What i am doing. What i am doing. What i am doing. What i am doing. What i am doing.</motion.p>
      
      </motion.div>
      <motion.div variants={fadeInUp} className="px-3 mb-1 bg-butter">
        <motion.h5 variants={fadeInUp} className="my-3 text-xl font-bold">
          Web Development Bootcamp
          </motion.h5>
          <motion.h5 variants={fadeInUp} className="my-2 font-semibold ">
            Dev Academy Aotearoa
          </motion.h5>
          <motion.p className="text-xs">April 2022- July 2022</motion.p>
          <motion.p className="my-3 ">What i am doing. What i am doing. What i am doing. What i am doing. What i am doing. What i am doing. What i am doing.</motion.p>
      
      </motion.div>

    </motion.div>


    </motion.div>
  )
}

export default Education