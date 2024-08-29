import PrimaryButton from '@/components/ui/primary-button'
import { truncate } from 'fs'
import Image from 'next/image'
import React from 'react'
import { FaRightLong } from 'react-icons/fa6'

const Page = () => {
  return (
    <div>
        <div className='h-screen w-screen object-contain'>
             <Image src='/images/unified-data-hub-main.jpg' layout='fill' alt='unified-data-hub' />
        </div>
        <div className='flex justify-center items-center my-20 flex-col gap-6 max-w-[600px] mx-auto text-center'>
            <div className='text-2xl font-bold'>
                 Connect, Centralize, and Analyze
            </div>
            <div className='text-5xl font-bold'>
                  Unify Your Data Landscape with Seamless Integration
            </div>
            <div className='text-xl'>
                  Break down silos and harness the power of your data, 
                  regardless of its source or format. Our platform seamlessly 
                  integrates diverse datasets, including multimedia, cloud services, 
                  and spreadsheets, into a centralized repository. With advanced analytics, 
                  visualization tools, and API access, you gain a comprehensive view of your data, 
                  enabling you to make informed decisions and drive your business forward.
            </div>
            <PrimaryButton title='SIGN UP' otherClasses='bg-black-800 px-16 rounded-sm' />
        </div>
        <div className='bg-gray-900 text-gray-200 flex flex-col
         justify-start gap-5 items-center p-16 text-center'>
            <div className='text-5xl font-bold'>Multimedia Support</div>
            <div className='text-xl'>Spreadsheets, photos, documents, videos, audio. Everything on a single platform</div>
            <div className='flex text-left gap-32 my-10 items-center px-10  justify-between w-full'>
                <div className='flex flex-col gap-10 max-w-[20%]'>
                    <div className='flex flex-col gap-5'>
                        <div className='text-2xl font-bold'>
                            Spreadsheeting
                        </div>
                        <div>
                            Easily upload, manage, and analyze your spreadsheet data within SpatioZest,
                            leveraging its familiar interface for seamless integration.
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='text-2xl font-bold'>
                            Multimedia
                        </div>
                        <div>
                            Seamlessly integrate various data types,
                            including images, documents, videos, and audio, 
                            enriching your analysis with a multi-dimensional perspective.
                        </div>
                    </div>
                </div>
                <div className='object-cover max-w-[70%]'>
                    <Image src='/images/spreadsheeting-cloud-connect.gif' height={1600} width={1600} alt='spreadsheeting' />
                </div>
            </div>
        </div>
        <div className='flex items-center justify-between p-20 '>
            <div className='flex flex-col max-w-[30%] gap-10'>
                <div className='text-5xl font-bold'>
                    Dashboard & Charts
                </div>
                <div>
                      Transform your data into insightful visualizations with customizable charts,
                       graphs, and interactive dashboards, making complex patterns easy to understand.
                </div>
                <PrimaryButton title='MORE' otherClasses='bg-black px-10' />
            </div>
            <div className='relative'>
                <Image src='/images/dashboard-and-charts.png' style={{objectFit:"contain"}} height={800} width={800} alt='dashboard' />
            </div>
        </div>
          <div className='flex flex-row-reverse bg-[#C1CEE9] items-center justify-around p-20 '>
              <div className='flex flex-col items-start max-w-[30%] gap-5'>
                  <div className='text-xl font-bold'>Custom Applications</div>
                  <div className='text-5xl font-bold'>
                      API Access
                  </div>
                  <div>
                      Empower developers to leverage our robust API to build custom integrations, 
                      workflows, and applications, extending the functionality of your SpatioZest solution.
                  </div>
                  <PrimaryButton title='MORE' otherClasses='bg-black px-16 rounded-sm' />
              </div>
              <div className='relative'>
                  <Image src='/images/code.gif' style={{ objectFit: "contain" }} height={600} width={600} alt='dashboard' />
                  <Image src='/images/code-map.gif' 
                  style={{position:'absolute', top:'210px', left:"357px"}}  
                  height={220} width={180} alt='code-map' />
              </div>
          </div>
            <div className='flex items-center justify-between p-20 '>
                <div className='flex flex-col max-w-[30%] gap-10'>
                    <div className='text-5xl font-bold'>
                      Centralized Data Repository
                    </div>
                    <div>
                      Store all your integrated data in a secure and centralized repository,
                       providing a single source of truth for your organization.
                    </div>
                    <PrimaryButton title='MORE' otherClasses='bg-black px-15 rounded-sm' />
                </div>
                <div className='relative'>
                    <Image src='/images/workers-working.jpg' style={{ objectFit: "contain" }} height={700} width={700} alt='dashboard' />
                </div>
            </div>
          <div className='flex items-center justify-between text-gray-200 bg-slate-800 p-20 '>
              <div className='flex flex-col max-w-[30%] gap-10'>
                  <div className='text-xl font-bold'>Data Integration</div>
                  <div className='text-5xl font-bold'>
                      Cloud Service
                  </div>
                  <div>
                      Connect and synchronize data from popular cloud platforms like MongoDB,
                       Drupal, PostGIS, or even custom URLs, consolidating your data landscape
                  </div>
              </div>
              <div className='relative flex items-center justify-center'>
                  <Image src='/images/data-bases.png' 
                  style={{ objectFit: "contain" }} 
                  height={400} width={400} alt='dashboard' />
                  <Image src='/images/world.png' style={{ objectFit: "contain" }} height={700} width={700} alt='dashboard' />
              </div>
          </div>
          <div className='flex flex-col h-screen items-start justify-center gap-10 p-20'>
              <div className='text-xl font-bold'>Transform Your Data</div>
              <div className='text-5xl font-bold'>
                  Embrace the future with
                  <span className='text-[#4E46B4] px-2'>SpatioZest</span> <br/> 
                   and unlock the potential of your data.
              </div>
              <div>
                  Get in touch with us and we will show you how Spatiozest
                   can help you make smarter,
                   data-driven decisions with ease and precision.
              </div>
              <PrimaryButton title='Request a demo' otherClasses=' bg-black px-15 gap-5 items-center rounded-sm' icon={<FaRightLong/>} position='right' />
          </div>
    </div>
  )
}

export default Page