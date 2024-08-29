import React from 'react'
import Image from 'next/image'
import PrimaryButton from '@/components/ui/primary-button'
import { FaRightLong } from 'react-icons/fa6'

const Page = () => {
  return (
      <div>
          <div className='h-screen w-screen object-contain'>
              <Image src='/images/alternative-data-insights-main.png' layout='fill' alt='unified-data-hub' />
          </div>
          <div className='flex justify-center items-center my-20 flex-col gap-6 max-w-[650px] mx-auto text-center'>
              <div className='text-2xl font-bold'>
                  Unearth Hidden Trends and Opportunities
              </div>
              <div className='text-5xl font-bold'>
                  Gain a Competitive Edge with Unconventional Insights
              </div>
              <div className='text-xl'>
                  By harnessing non-traditional data like boundaries, points of interest (POIs), 
                  demographic information, and satellite/raster datasets, you can uncover hidden trends, 
                  validate assumptions, and make more informed decisions that drive your business forward.
              </div>
              <PrimaryButton title='SIGN UP' otherClasses='bg-black-800 px-16 rounded-sm' />
          </div>
          <div className='flex items-center justify-between p-20 '>
              <div className='flex flex-col max-w-[30%] gap-10'>
                  <div className='text-5xl font-bold'>
                      Boundaries
                  </div>
                  <div>
                      Access precise and up-to-date administrative boundaries, 
                      such as countries, states, counties, cities, and even custom-defined areas.
                  </div>
                  <PrimaryButton title='MORE' otherClasses='bg-black px-10' />
              </div>
              <div className='relative'>
                  <Image src='/images/boundaries-hyderabadZones-maps.png' style={{ objectFit: "contain" }} height={800} width={800} alt='dashboard' />
              </div>
          </div>
          <div className='flex flex-row-reverse items-center justify-between p-20 '>
              <div className='flex flex-col max-w-[30%] gap-10'>
                  <div className='text-5xl font-bold'>
                      Points of Interest (POIs)
                  </div>
                  <div>
                      Tap into a vast and comprehensive database of POIs, including businesses,
                       landmarks, amenities, and other points of interest, to understand consumer
                        behavior and market dynamics.
                  </div>
                  <PrimaryButton title='MORE' otherClasses='bg-black px-10' />
              </div>
              <div className='relative'>
                  <Image src='/images/poi_mumbaiZones_maps.png' style={{ objectFit: "contain" }} height={800} width={800} alt='dashboard' />
              </div>
          </div>
          <div className='flex items-center justify-between p-20 '>
              <div className='flex flex-col max-w-[30%] gap-10'>
                  <div className='text-5xl font-bold'>
                      Satellite & Raster
                  </div>
                  <div>
                      Leverage high-resolution satellite imagery and raster datasets, such as land cover, elevation,
                       and environmental data, to monitor changes, assess risks, and make informed decisions.
                  </div>
                  <PrimaryButton title='MORE' otherClasses='bg-black px-10' />
              </div>
              <div className='relative'>
                  <Image src='/images/sattelite-raster.png' style={{ objectFit: "contain" }} height={800} width={800} alt='dashboard' />
              </div>
          </div>
          <div className='flex flex-row-reverse items-center justify-between p-20 '>
              <div className='flex flex-col max-w-[30%] gap-10'>
                  <div className='text-5xl font-bold'>
                      Demographic
                  </div>
                  <div>
                      Analyze detailed demographic information, such as population density, age distribution, income levels,
                    and education levels, to better understand your target audience and tailor your strategies.
                </div>
                  <PrimaryButton title='MORE' otherClasses='bg-black px-10' />
              </div>
              <div className='relative'>
                  <Image src='/images/demographic.png' style={{ objectFit: "contain" }} height={800} width={800} alt='dashboard' />
              </div>
          </div>
          
          <div className='flex flex-col h-screen items-start justify-center gap-10 p-20'>
              <div className='text-xl font-bold'>Transform Your Data</div>
              <div className='text-5xl font-bold'>
                  Embrace the future with
                  <span className='text-[#4E46B4] px-2'>SpatioZest</span> <br />
                  and unlock the potential of your data.
              </div>
              <div>
                  Get in touch with us and we will show you how Spatiozest
                  can help you make smarter,
                  data-driven decisions with ease and precision.
              </div>
              <PrimaryButton title='Request a demo' otherClasses=' bg-black px-15 gap-5 items-center rounded-sm' icon={<FaRightLong />} position='right' />
          </div>
      </div>
  )
}

export default Page