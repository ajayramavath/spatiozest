import React from 'react'
import Image from 'next/image'
import PrimaryButton from '@/components/ui/primary-button'
import { FaRightLong } from 'react-icons/fa6'

const Page = () => {
  return (
      <div>
          <div className='h-screen w-screen object-contain'>
              <Image src='/images/geo-analytics-main.jpg' layout='fill' alt='unified-data-hub' />
          </div>
          <div className='flex justify-center items-center my-20 flex-col gap-6 max-w-[600px] mx-auto text-center'>
              <div className='text-2xl font-bold'>
                  Analytical Tools
              </div>
              <div className='text-5xl font-bold'>
                  Unlock Deeper Insights with Advanced Geo-Analysis
              </div>
              <p className='text-xl'>
                  Empower your business with SpatioZest's comprehensive suite of Analytical Tools. 
                  Designed to enhance your geospatial analysis capabilities, our tools offer a range of 
                  functionalities that help you extract meaningful insights from your geographic data. 
                  Explore our powerful GEO Tools, Charting Tools, and Spatial Analysis features to take your 
                  decision-making to the next level.
              </p>
              <PrimaryButton title='SIGN UP' otherClasses='bg-black-800 px-16 rounded-sm' />
          </div>
          <div className='bg-gray-900 text-gray-200 flex flex-col
         justify-start gap-5 items-center p-16 text-center'>
              <div className='text-5xl font-bold'>GEO Tools</div>
              <div className='text-xl max-w-[60%]'>Gain precise control over your geographic data with our suite of GEO Tools.
                 These tools allow you to manipulate and analyze spatial data through various operations, 
                 providing a deeper understanding of geographic relationships and patterns.</div>
              <div className='flex text-left gap-10 my-10 items-center px-10  justify-between w-full'>
                  <div className='flex flex-col gap-10 max-w-[20%]'>
                      <div className='flex flex-col gap-5'>
                          <div className='text-2xl font-bold'>
                              Buffer
                          </div>
                          <div>
                              Create buffer zones around specific geographic features. 
                              Analyze proximity and impact areas to make informed planning and development decisions.
                          </div>
                      </div>
                      <div className='flex flex-col gap-5'>
                          <div className='text-2xl font-bold'>
                              Clip
                          </div>
                          <div>
                              Extract specific areas from your data sets with precision. 
                              Focus on the regions that matter most to your analysis.
                          </div>
                      </div>
                      <div className='flex flex-col gap-5'>
                          <div className='text-2xl font-bold'>
                              Intersection
                          </div>
                          <div>
                              Identify overlapping areas between different data sets. 
                              Gain insights into commonalities and relationships within your geographic information.
                          </div>
                      </div>
                  </div>
                  <div className='object-cover max-w-[60%]'>
                      <Image src='/images/geo-tools.png' height={1600} width={1600} alt='spreadsheeting' />
                  </div>
                  <div className='flex flex-col gap-10 max-w-[20%]'>
                      <div className='flex flex-col gap-5'>
                          <div className='text-2xl font-bold'>
                              Union
                          </div>
                          <div>
                              Combine multiple data sets into a single, unified map.
                               Simplify complex data and enhance your overall analysis.
                          </div>
                      </div>
                      <div className='flex flex-col gap-5'>
                          <div className='text-2xl font-bold'>
                              Difference
                          </div>
                          <div>
                              Highlight the differences between data sets. 
                              Identify unique attributes and areas of change for more targeted insights.
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='flex items-center justify-between p-20 '>
              <div className='flex flex-col max-w-[30%] gap-10'>
                  <div className='text-5xl font-bold'>
                      Charts & Graphs
                  </div>
                  <div>
                      Visualize your data effectively with our versatile Charting Tools. Whether you need to display distributions,
                       trends, or comparisons, our charting options help you transform raw data into clear and informative visual representations.
                  </div>
                  <PrimaryButton title='MORE' otherClasses='bg-black px-10' />
              </div>
              <div className='relative'>
                  <Image src='/images/charts-graphs.png' style={{ objectFit: "contain" }} height={800} width={800} alt='dashboard' />
              </div>
          </div>
          <div className='bg-gray-900 text-gray-200 flex flex-col
         justify-start gap-5 items-center p-16 text-center'>
              <div className='text-5xl font-bold'>Advanced Spatial Tools</div>
              <div className='text-xl max-w-[60%]'>Delve deeper into your data with our Advanced Analytical Tools.
                 These tools provide sophisticated methods for analyzing spatial data, 
                 allowing you to perform complex analyses and uncover valuable insights. </div>
              <div className='flex text-left gap-32 my-10 items-center px-10  justify-between w-full'>
                  <div className='flex flex-col gap-10 max-w-[20%]'>
                      <div className='flex flex-col gap-5'>
                          <div className='text-2xl font-bold'>
                                  Spatial Monitoring
                          </div>
                          <div>
                                  Continuously monitor spatial data for changes and trends. 
                                  Use alerts and automated updates to stay informed about critical developments.
                          </div>
                      </div>
                      <div className='flex flex-col gap-5'>
                          <div className='text-2xl font-bold'>
                                  Clustering Algorithms
                          </div>
                          <div>
                                  Use clustering techniques to identify natural groupings in your data.
                                   Enhance your understanding of spatial patterns and relationships.
                          </div>
                      </div>
                  </div>
                  <div className='object-cover max-w-[70%]'>
                      <Image src='/images/advanced-spatial-tools.png' height={1600} width={1600} alt='spreadsheeting' />
                  </div>
              </div>
          </div>
          <div className='flex flex-col h-screen items-start justify-center gap-10 p-20'>
              <div className='text-xl font-bold'>EXPLORE FURTHER</div>
              <div className='text-7xl font-bold'>
                  Visualize & simplify complex data with our Layer Management tools
              </div>
              <div className='w-full flex justify-end pr-20'>
                  <PrimaryButton title='Learn More' otherClasses=' bg-black px-15 gap-5 items-center rounded-sm' icon={<FaRightLong />} position='right' />
              </div>
          </div>
      </div>
  )
}

export default Page