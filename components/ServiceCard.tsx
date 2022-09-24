import { FunctionComponent } from "react"
import { IService } from "../type"

const ServiceCard:FunctionComponent<{service:IService}> = ({service:{Icon, about, title}}) => {
  
  const createMarkup = ()=>{
    return{
      __html:about
    }
  }
  
  return (
    <div className="flex items-center p-2 space-x-4 ">
      <Icon className="w-12 h-12 text-xs text-darkBlue dark:text-butter dark:bg-gray-800"/>
      <div>
        <h4 className="text-sm font-bold text-darkBlue dark:text-butter dark:bg-gray-800">{title}</h4>
        <p className="text-xs" dangerouslySetInnerHTML={createMarkup()}/>
      </div>
    </div>
  )
}
 
export default ServiceCard