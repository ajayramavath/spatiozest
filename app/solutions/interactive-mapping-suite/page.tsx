import PrimaryButton from '@/components/ui/primary-button'
import React from 'react'
import { FaRightLong } from 'react-icons/fa6'
import Image from 'next/image'

const Page = () => {
  return (
      <div>
          <div className='h-screen w-screen object-contain'>
              <Image src='/images/interactive-mapping-suite-main.png' layout='fill' alt='unified-data-hub' />
              <div className='absolute top-40 left-40 max-w-[50%] bg-opacity-75 bg-white flex flex-col gap-2 p-10'>
                <div className='font-bold'>
                    UNLOCK THE POWER OF LOCATION
                </div>
                <div className='text-5xl from-neutral-700 mb-10'>
                      Spatiozest Web Mapping Suite
                </div>
                <div className='text-xl flex flex-col gap-8'>
                    <div>
                        Your Comprehensive Solution for Interactive Mapping, Analysis, and Collaboration
                    </div>
                    <div>
                        Transform raw location data into actionable insights with SpatioZest. Our platform enables you to visualize, analyze, and share geospatial data effortlessly, without the need for specialized expertise.
                    </div>
                </div>
              </div>
          </div>
          <div className='flex flex-row-reverse items-center justify-between p-20 '>
              <div className='flex flex-col max-w-[30%] gap-10'>
                  <div className='text-xl font-bold'>TAILORED VISUALS</div>
                  <div className='text-5xl font-bold'>
                      High-Resoultion Maps
                  </div>
                  <div>
                      Experience crystal-clear, high-resolution maps that provide detailed geographic information, 
                      ensuring you never miss a critical detail.
                      Switch between various map views including satellite,
                       terrain, and street views to get the perspective you need for your analysis.
                  </div>
                  <PrimaryButton title='MORE' otherClasses='bg-black px-10' />
              </div>
              <div className='relative'>
                  <Image src='/images/high-resolution-maps.png' style={{ objectFit: "contain" }} height={800} width={800} alt='dashboard' />
              </div>
          </div>
          <div className='flex items-center justify-between p-20 '>
              <div className='flex flex-col max-w-[30%] gap-10'>
                  <div className='text-5xl font-bold'>
                      Layer and overlay management
                  </div>
                  <div>
                      Add multiple custom layers to your maps to display various data sets simultaneously, 
                      making complex data easier to understand.
                  </div>
                  <PrimaryButton title='MORE' otherClasses='bg-black px-10' />
              </div>
              <div className='relative'>
                  <Image src='/images/layer-panel.png' style={{ objectFit: "contain" }} height={800} width={800} alt='dashboard' />
              </div>
          </div>
          <div className='flex flex-row-reverse items-center justify-between p-20 '>
              <div className='flex flex-col max-w-[30%] gap-10'>
                  <div className='text-xl font-bold'>TAILORED VISUALS</div>
                  <div className='text-5xl font-bold'>
                      Custom Styling
                  </div>
                  <div>
                      Customize the appearance of your maps with a variety of styling options.
                       Choose from different color schemes, marker styles, 
                       and line types to match your brand or specific requirements.
                  </div>
                  <PrimaryButton title='MORE' otherClasses='bg-black px-10' />
              </div>
              <div className='relative'>
                  <Image src='/images/custom-styling.png' style={{ objectFit: "contain" }} height={800} width={800} alt='dashboard' />
              </div>
          </div>
          <div className='flex items-center justify-between p-20 '>
              <div className='flex flex-col max-w-[30%] gap-10'>
                  <div className='text-xl font-bold'>USER FRIENDLY</div>
                  <div className='text-5xl font-bold'>
                      Editing Tools
                  </div>
                  <div>
                      Our suite offers a range of intuitive editing tools that allow you to create, modify, and annotate maps effortlessly.
                       Points, lines, and polygons can be created easily within your SpatioZest interface.
                  </div>
                  <PrimaryButton title='MORE' otherClasses='bg-black px-10' />
              </div>
              <div className='relative'>
                  <Image src='/images/editing-tools.png' style={{ objectFit: "contain" }} height={800} width={800} alt='dashboard' />
              </div>
          </div>
          <div className='flex flex-row-reverse items-center justify-between p-20 '>
              <div className='flex flex-col max-w-[30%] gap-10'>
                  <div className='text-xl font-bold'>INTUITIVE TOOLS</div>
                  <div className='text-5xl font-bold'>
                      Measure directly on your Map
                  </div>
                  <div>
                      Measure and calculate areas, perimeters, lengths, 
                      geographic locations of different features on your map with precision.
                  </div>
                  <PrimaryButton title='MORE' otherClasses='bg-black px-10' />
              </div>
              <div className='relative'>
                  <Image src='/images/measure.png' style={{ objectFit: "contain" }} height={800} width={800} alt='dashboard' />
              </div>
          </div>
          <div className='flex items-center justify-between p-20 '>
              <div className='flex flex-col max-w-[30%] gap-10'>
                  <div className='text-5xl font-bold'>
                      Map Filtering
                  </div>
                  <div>
                      Apply advanced filters to your data sets to isolate specific data points.
                       Customize your analysis to focus on the most relevant information.
                  </div>
                  <PrimaryButton title='MORE' otherClasses='bg-black px-10' />
              </div>
              <div className='relative'>
                  <Image src='/images/map-filtering.png' style={{ objectFit: "contain" }} height={800} width={800} alt='dashboard' />
              </div>
          </div>

          <div className='flex flex-col h-screen items-start justify-center gap-10 p-20'>
              <div className='text-xl font-bold'>Web Mapping Suite</div>
              <div className='text-5xl font-bold'>
                  Ready to map your market?
              </div>
              <div>
                  Get in touch with us and we will show you how Spatiozest can help you make your life easier
              </div>
              <PrimaryButton title='Request a demo' otherClasses=' bg-black px-15 gap-5 items-center rounded-sm' icon={<FaRightLong />} position='right' />
          </div>
      </div>
  )
}

export default Page