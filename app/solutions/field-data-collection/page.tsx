import React from 'react'
import Image from 'next/image'
import PrimaryButton from '@/components/ui/primary-button'
import { FaRightLong } from 'react-icons/fa6'

const Page = () => {
  return (
      <div>
          <div className='w-screen h-screen object-contain relative'>
              <Image src='/images/field-data-collection-main.jpg' fill={true} style={{objectFit:"cover"}} alt='unified-data-hub' />
          </div>
          <div className='flex justify-center items-center my-20 flex-col gap-6 max-w-[650px] mx-auto text-center'>
              <div className='text-2xl font-bold'>
                  Empower your field teams
              </div>
              <div className='text-5xl font-bold'>
                  Streamline Operations with Mobile Data Collection
              </div>
              <p className='text-xl'>
                  Elevate your field operations with SpatioZest's Field Data Capture solution. 
                  Our intuitive platform enables your teams to collect accurate data directly from the field,
                   eliminating paper processes, reducing errors, and boosting efficiency.
                    Seamlessly integrated with your web-based mapping suite, you can visualize, analyze,
                     and act on field data in real-time.
              </p>
              <PrimaryButton title='SIGN UP' otherClasses='bg-black-800 px-16 rounded-sm' />
          </div>
          <div className='flex items-center justify-between p-20 '>
              <div className='flex flex-col max-w-[30%] gap-10'>
                  <div className='text-5xl font-bold'>
                      Mobile App
                  </div>
                  <div>
                      Equip your field teams with a user-friendly mobile app that enables 
                      seamless data collection on the go, even in offline environments.
                  </div>
                  <PrimaryButton title='MORE' otherClasses='bg-black px-10' />
              </div>
              <div className='relative'>
                  <Image src='/images/boundaries-hyderabadZones-maps.png' style={{ objectFit: "contain" }} height={800} width={800} alt='mobile-app' />
              </div>
          </div>
          <div className='flex items-center justify-center p-20 gap-10'>
            <div className='p-10 w-[50%] bg-[#DED5F7] gap-10 flex justify-center items-center h-[300px] rounded-lg'>
                <div>
                    <Image src='/images/gps-based-survey.png' height={200} width={200} alt='gps-based-survey' />
                </div>
                  <div className='flex flex-col gap-10'>
                    <div className='text-5xl font-bold'>
                          GPS-Based Survey Tools
                    </div>
                    <div >
                          Accurately capture location data, measure distances and areas,
                          and map assets with GPS-enabled tools directly within the app.
                    </div>
                </div>
            </div>
              <div className=' p-10 w-[50%] gap-10 bg-[#CEE5F7] flex justify-center items-center h-[300px] rounded-lg' >
                <div className='p-10'>
                      <Image src='/images/offline-functionality.png' height={200} width={200} alt='offline-functionality' />
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='text-5xl font-bold'>
                          Offline Functionality
                    </div>
                    <div >
                          Work seamlessly without internet connectivity, ensuring uninterrupted data collection in the field.
                    </div>
                </div>
            </div>
          </div>
          <div className='flex flex-row-reverse items-center justify-between p-20 '>
              <div className='flex flex-col max-w-[30%] gap-10'>
                  <div className='text-5xl font-bold'>
                      Customizable Forms
                  </div>
                  <div>
                      Create tailored forms that capture the specific data you need for any project
                       or task, ensuring consistency and accuracy.
                  </div>
                  <PrimaryButton title='MORE' otherClasses='bg-black px-10' />
              </div>
              <div className='relative'>
                  <Image src='/images/customizable-forms.png' style={{ objectFit: "contain" }} height={800} width={800} alt='customizable-forms' />
              </div>
          </div>
          <div className='flex items-center justify-between p-20 '>
              <div className='flex flex-col max-w-[30%] gap-10'>
                  <div className='text-5xl font-bold'>
                      Task Management
                  </div>
                  <div>
                      Assign, track, and manage tasks for your field teams, ensuring efficient workflow and timely completion.
                  </div>
                  <PrimaryButton title='MORE' otherClasses='bg-black px-10' />
              </div>
              <div className='relative'>
                  <Image src='/images/task-management.gif' style={{ objectFit: "contain" }} height={800} width={800} alt='task-management' />
              </div>
          </div>
          <div className='flex items-center justify-center p-20 gap-10'>
              <div className='p-10 w-[50%] bg-[#F5ECD1] gap-10 flex justify-center items-center h-[350px] rounded-lg'>
                  <div>
                      <Image src='/images/streamlined-inspections.png' height={200} width={200} alt='gps-based-survey' />
                  </div>
                  <div className='flex flex-col gap-10'>
                      <div className='text-5xl font-bold'>
                          Streamlined Inspections
                      </div>
                      <div >
                          Streamline inspections with customizable checklists and real-time data capture,
                           ensuring compliance and quality standards.
                      </div>
                  </div>
              </div>
              <div className=' p-10 w-[50%] gap-12 bg-[#E5E5F7] flex justify-center items-center h-[350px] rounded-lg' >
                  <div className=''>
                      <Image src='/images/calendar-gantt.png' height={500} width={500} alt='offline-functionality' />
                  </div>
                  <div className='flex flex-col gap-10'>
                      <div className='text-5xl font-bold'>
                          Calendar & Gantt Views
                      </div>
                      <div >Visualize and schedule tasks and inspections with intuitive calendar and Gantt chart views,
                         optimizing resource allocation and project timelines.Work seamlessly without internet connectivity,
                         ensuring uninterrupted data collection in the field.
                      </div>
                  </div>
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