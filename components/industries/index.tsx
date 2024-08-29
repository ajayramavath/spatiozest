'use client'
import data from '@/lib/industries.json'
import  TabContent  from '../ui/tab-items'
import { Tabs } from '../ui/tabs'
import PrimaryButton from '../ui/primary-button'
import { FaRightLong } from 'react-icons/fa6'

const index = () => {
    const tabs = data.map((item,index)=>{
        return ({
            title: item.label,
            value: item.label,
            content: (
                <TabContent key={index} label={item.label} image={item.image} challenges={item.challenges} solutions={item.solutions} />
            )
        })
    })
  return (
      <div id='industries' className="h-[160vh] aspect-[16/9] [perspective:1000px] relative px-2 sm:px-10 md:px-20 b flex flex-col max-w-7xl mx-auto w-full items-start justify-start">
        <div className='flex flex-col justify-center items-center gap-10 w-full my-10'>
              <h1 className='text-3xl md:text-5xl font-bold'>Industries</h1>
              <PrimaryButton otherClasses='text-sm gap-3 items-center' title='Explore Use Cases' position='right' icon={<FaRightLong/>} />
        </div>
        <Tabs tabs={tabs} contentClassName='h-auto'/>
    </div>
  )
}

export default index