//import { GetServerSidePropsContext } from 'next'; 
import ServiceCard from '../components/ServiceCard';
import {services}from'../data'

const index = () => { 
  
  return(
    <div className='flex flex-col flex-grow px-6 pt-1'>
        <h5 className='my-3 font-medium'>Hi! This is all about me.Hi! This is all about me.Hi! This is all about me.Hi! This is all about me.Hi! This is all about me.Hi! This is all about me.Hi! This is all about me.</h5>
        <div className='flex-grow p-4 mt-5 bg-blue' style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
          <h6 className='my-3 text-xl font-bold tracking-wide'>What I offer</h6>
          <div className='grid gap-6 lg:grid-cols-2'>
            {services.map((service,idx)=>(
              <div className='rounded-lg bg-butter lg:col-span-1' key={idx}>
            <ServiceCard service={service}/>
            </div>
            ))}
          </div>
        </div>
    </div>
  ) 
}
export default index  

// export const getServerSideProps =async (context: GetServerSidePropsContext)=>{

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

  
//   return{
//     props:{
//       services: data.services
//     }
//   }
// } 