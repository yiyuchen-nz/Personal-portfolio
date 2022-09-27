import {motion } from "framer-motion"
import {routeAnimation, fadeInUp, stagger} from "../animations"

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
    <motion.div    
    variants={stagger}
    initial="initial"
    animate="animate"
    className="grid gap-6 py-10 md:grid-flow-row-dense text-butter">
      
      <motion.div variants={fadeInUp} className="px-3 pb-2 bg-blue rounded-2xl dark:bg-gray-800">
        <motion.h5 variants={fadeInUp} className="my-2 text-lg font-bold">
          Web Development Bootcamp
          </motion.h5>
          <motion.h5 variants={fadeInUp} className="my-2 font-semibold ">
            Dev Academy Aotearoa
          </motion.h5>
          <motion.p className="my-2 ">
            <ol className="ml-3 list-disc">
              <li>It was a 15 week intensive web development bootcamp</li>
              <li>I spent about 800 hours in coding and learning modern web development tools</li>
              <li>The bootcamp mimics a real-life development team as closely as possible. From one-day Friday Projects to multiple days projects, we used Agile approach to work in a team, and practiced source control and worked in a large code base from all the projects in bootcamp.</li>
            </ol>
          </motion.p>
      </motion.div>

      <motion.div variants={fadeInUp} className="px-3 pb-2 bg-blue rounded-2xl dark:bg-gray-800">
        <motion.h5 variants={fadeInUp} className="my-2 text-lg font-bold">
          Postgraduate Diploma in International Hospitality Management
          </motion.h5>
          <motion.h5 variants={fadeInUp} className="my-2 font-semibold ">
            AUT
          </motion.h5>
      </motion.div>

      <motion.div variants={fadeInUp} className="px-3 pb-2 bg-blue rounded-2xl dark:bg-gray-800">
        <motion.h5 variants={fadeInUp} className="my-2 text-lg font-bold">
          Bachelor of Engineering
          </motion.h5>
          <motion.h5 variants={fadeInUp} className="my-2 font-semibold ">
            Tianjin University of Technology, China
          </motion.h5>
      </motion.div>

    </motion.div>


    </motion.div>
  )
}

export default Education