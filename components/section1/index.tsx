'use client'
import { globeConfig } from '@/lib/globeData'
import dynamic from "next/dynamic";
import PrimaryButton from '../ui/primary-button';
import { sendContact } from '@/lib/apiClient';
import { ModalProvider,  useModal } from '../ui/contactModal';


const index = () => {

    const { setOpen, open } = useModal();
    console.log(open)

    const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
        ssr: false,
    });

    return (
        <div id='section1' className=" h-screen flex max-w-[8xl] items-center px-20">
            <div className="isolate h-full flex flex-col bg-transparent items-start justify-center">
                <h1 className="dark:text-[#6e67ce] text-2xl sm:text-3xl lg:text-4xl font-bold">Advanced Geo-Intelligence</h1>
                <h2 className="text-xl sm:text-2xl lg:text-2xl text-gray-200 mt-5">for Enterprises</h2>
                <div className="my-10 text-sm lg:text-md md:max-w-[50%] text-gray-200">
                    Our
                    no-code, cloud-native
                    Geospatial Intelligence
                    platform empowers data-driven decision-making
                    by providing a powerful geographic perspective,
                    allowing businesses to gain deeper insights
                    into their operations, understand customers,
                    and navigate markets with precision.
                </div>
                <div className='flex gap-4'>
                    
                    <PrimaryButton 
                    otherClasses='bg-gradient-to-r from-indigo-500 to-purple-500' 
                    title='Request A Demo'
                    handleClick={()=>{setOpen(!open)}}
                    />
                    
                    <a><PrimaryButton title='Login'/></a>
                </div>
            </div>
            <div className="opacity-50 w-full fixed left-[40%] h-[50%] flex
                            sm:h-[75%] md:h-[100%] xl:h-[200%]">
            <World globeConfig={globeConfig} />
            </div>
        </div>
    )
}

export default index