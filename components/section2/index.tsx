import Image from "next/image"
import PrimaryButton from "../ui/primary-button"


const index = () => {

  return (
    <div className=' h-[100vh] w-screen px-10
                    text-center flex flex-col-reverse md:flex-row md:text-left 
                    items-center justify-center mt-10 gap-5 lg:gap-10 isolate mx-auto'>
          <div className="md:w-[50%] flex items-center justify-end">
            <Image src='/images/section-2.png' alt='SpatioZest' height={900} width={900}/>
          </div>
          <div className="flex flex-col gap-4 md:w-[40%] items-center text-center">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-5xl ">
                All you need,<br/> One Platform
            </h1>
            <p className=" text-xs md:text-sm xl:text-xl">
                  Consolidate all your <br/>
                  <span className="uppercase">projects , data , tasks , teams</span> <br/>
                  into one single source of truth.
            </p>
            <div>
              <PrimaryButton otherClasses="w-full" title="Explore Features" />
            </div>
        </div>
    </div>
  )
}

export default index
