import {motion } from "framer-motion"
import {routeAnimation} from "../animations"

const resume = () => {
  return (
    <motion.div 
    variants={routeAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
    className="px-6 py-2"
    > 
    
    {/* //education and experience */}
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <h5 className="my-3 text-2xl font-bold">Education</h5>
        <div>
          <h5 className="my-2 text-xl font-bold ">
            boot camp in EDA
          </h5>
          <p className="font-semibold">year(April 2022- July 2022)</p>
          <p className="my-3">What i am doing. What i am doing. What i am doing. What i am doing. What i am doing. What i am doing. What i am doing.</p>
        </div>
      </div>
    {/* languages and tools */}
      <div>
        <h5 className="my-3 text-2xl font-bold">Education</h5>
        <div>
          <h5 className="my-2 text-xl font-bold ">
            boot camp in EDA
          </h5>
          <p className="font-semibold">year(April 2022- July 2022)</p>
          <p className="my-3">What i am doing. What i am doing. What i am doing. What i am doing. What i am doing. What i am doing. What i am doing.</p>
        </div>
      </div>
    </div>


    </motion.div>
  )
}

export default resume 