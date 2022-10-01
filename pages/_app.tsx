import Navbar from "../components/Navbar"
import '../styles/globals.css'
import {ThemeProvider} from "next-themes"

import{AnimatePresence} from "framer-motion"


function MyApp({ Component, pageProps,router}) {
  return (
    <ThemeProvider attribute='class'>

    <div className='overflow-scroll align-middle bg-white shadow-xl sm:w-3/4 sm:ml-auto sm:mr-auto sm:my-10 rounded-2xl dark:bg-black' >  
      <Navbar/>
      <AnimatePresence exitBeforeEnter key={router.route}>
      <Component {...pageProps} />
      </AnimatePresence>
    </div>
  </ThemeProvider>
   
    )
}

export default MyApp
