import Image from "next/image";
import { BackgroundGradient } from "./background-gradient";


const TabContent = ({
    label,image,challenges,solutions
}:{
    label:string; image:string; challenges:string[], solutions: any
}) => {
  return (
      <div className="w-full flex justify-between items-center relative h-full rounded-2xl p-10 px-15 
      text-xl md:text-4xl font-bold bg-gradient-to-br from-purple-700 to-violet-900 text-gray-200">
        <div className="flex flex-col items-start gap-2 sm:gap-5 xl:max-w-[50%]">
              <div className="text-lg md:text-xl xl:text-2xl text-white sm:mb-6">
                {label}
            </div>
              <h2 className="text-lg md:text-xl xl:text-2xl"> 
                Challenges
            </h2>
            <div className="px-5">
                <ul>
                    {challenges.map((item:string,index:number)=>{
                        return (
                            <li key={index} className="font-normal text-xs sm:text-sm list-inside list-disc sm:my-2">
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <h2 className="text-lg md:text-xl xl:text-2xl">
                Solutions
            </h2>
            <div className="px-5">
                <ul className="text-sm font-normal">
                    {Object.keys(solutions).map((item,index)=>{
                        return(
                            <li key={index} className="list-disc my-2">
                                <div>
                                    <span className="font-bold text-xs sm:text-sm">{item} : </span>
                                    {solutions[item as keyof typeof solutions]}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        <div className="object-cover hidden xl:block">
            <BackgroundGradient containerClassName="rounded-[22px] h-full w-full max-w-md bg-white dark:bg-zinc-900">
            <Image 
                src={image}
                alt={label}
                height={1000}
                width={1000}
                className="rounded-[22px]"
            />
            </BackgroundGradient>
        </div>
    </div>
  )
}

export default TabContent
