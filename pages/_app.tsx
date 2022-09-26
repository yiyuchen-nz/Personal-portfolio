import Navbar from "../components/Navbar"
import '../styles/globals.css'
import {ThemeProvider} from "next-themes"

import{AnimatePresence} from "framer-motion"


function MyApp({ Component, pageProps,router}) {
  return (
    <ThemeProvider attribute='class'>

    <div className='my-10 overflow-scroll align-middle bg-white shadow-xl rounded-2xl dark:bg-black' style={{width:"70vw", marginLeft:"auto", marginRight:"auto"}}>  
      <Navbar/>
      <AnimatePresence exitBeforeEnter key={router.route}>
      <Component {...pageProps} />
      </AnimatePresence>
    </div>
  </ThemeProvider>
   
    )
}

export default MyApp
