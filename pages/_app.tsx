import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import '../styles/globals.css'
import {ThemeProvider} from "next-themes"

import{AnimatePresence} from "framer-motion"


function MyApp({ Component, pageProps,router}) {
  return (
    <ThemeProvider attribute='class'>
  <div className='grid grid-cols-12 gap-2 px-10 lg:px-48 my-14 sm:px-20 md:px-32'>
    <div className='col-span-12 p-4 text-center bg-white shadow-xl dark:bg-black lg:col-span-3 rounded-2xl '>
      <Sidebar/>
      </div>
    <div className='flex flex-col col-span-12 overflow-hidden bg-white shadow-xl lg:col-span-9 rounded-2xl dark:bg-black '>  
      <Navbar/>
      <AnimatePresence exitBeforeEnter key={router.route}>
      <Component {...pageProps} />
      </AnimatePresence>
    </div>
  </div>
  </ThemeProvider>
   
    )
}

export default MyApp
