import Image from 'next/image'
import { Lato } from "next/font/google";
import { cn } from '@/lib/utils';

const lato = Lato({
  subsets: ["latin"],
  weight: ['100', "300", "400", "700", "900"]
})

const index = () => {
  return (
      <div className={cn('mr-20 md:flex gap-4 bg-transparent hidden',lato.className)}>
        <div className=''>
            <Image
                src="/images/logo-2.png"
                alt="Logo"
                width={30}
                height={30}
            />
        </div>
        <div className='font-bold text-2xl text-gray-300'>SpatioZest</div>
      </div>
  )
}

export default index