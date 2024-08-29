'use client'
import { FaRightLong } from "react-icons/fa6"
import PrimaryButton from "../ui/primary-button"
import { useModal } from "../ui/contactModal"


const index = () => {
  const {open , setOpen } = useModal()
  return (
      <div className="flex h-[75vh] items-center flex-col justify-center px-2 md:px-10 py-4 w-full gap-5 isolate">
        <div className="text-xl md:text-2xl lg:text-4xl text-bold">
            Contact Us
        </div>
        <div className="text-xl md:text-2xl lg:text-4xl">
            Talk to a Proffesional
        </div>
        <PrimaryButton 
        title="Request A Demo" 
        position="right" 
        icon={<FaRightLong/>} 
        otherClasses="gap-3 bg-gradient-to-r from-indigo-500 to-purple-500" 
        handleClick={()=>{setOpen(!open)}}
        />   
    </div>
  )
}

export default index