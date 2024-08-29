'use client'
import data from '@/lib/workflow.json'
import Image from 'next/image'
import { GlareCard } from '../ui/glare-card'

const index = () => {
  return (
    <div id='workflow' className='h-auto flex flex-col items-center pt-14 w-full isolate'>
        <div className='flex flex-col justify-center items-center gap-5'>
            <div className='text-5xl font-bold text-gray-300'>WorkFlow</div>
            <div className='text-xl text-center'>We will help you grow with our proven process.</div>
        </div>
        <div className='flex gap-5 justify-center xl:justify-around flex-wrap my-24 px-2'>
            {data.map((item,index)=>{
                return (
                    <GlareCard key={index} className="flex flex-col items-center justify-center p-0">
                        <div className='w-22 lg:w-40 py-3 px-3 flex flex-col object-cover
                        justify-center items-center gap-2 md:gap-3'
                        >
                            <div className='text-xs lg:text-xl'>Step {index + 1}</div>
                            <div className='h-[30px] w-[30px] md:h-[60px] md:w-[60px]'>
                                <Image src={item.image} height={60} width={60} alt="item" />
                            </div>
                            <div className='font-bold text-[8px] md:text-sm text-center'>
                                {item.title}
                            </div>
                        </div>
                    </GlareCard>
                )
            })}
        </div>
    </div>
  )
}

export default index