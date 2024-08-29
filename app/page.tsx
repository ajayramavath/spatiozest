import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Industries from '../components/industries'
import Workflow from '../components/workflow'
import Contact from '../components/contact'
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Solutions from '@/components/solutions'
import ContactForm from '@/components/contactForm'

export default function Home() {
  return (
    <main className="relative bg-[#171717] px-20 flex justify-center items-center flex-col overflow-clip
    sm:px-10 text-white">
      <StarsBackground />
      <ShootingStars />
      <div className="max-w-8xl w-screen dark:relative">
        <Section1 />
        <Section2 />
        <Solutions />
        <Industries/>
        <Workflow />
        <Contact />
        <ContactForm/>
      </div>
    </main>
  );
}
