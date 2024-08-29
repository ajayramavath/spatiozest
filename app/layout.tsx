import type { Metadata } from "next";
import {Lato , Roboto} from "next/font/google";
import "./globals.css";
import Footer from '../components/footer'
import { FloatingNav } from '@/components/ui/navbar';
import { FaHome } from 'react-icons/fa';
import { ModalProvider } from "@/components/ui/contactModal";
import {Toaster} from 'react-hot-toast'



const roboto = Roboto({
  subsets:["latin"],
  weight:["100","300","400","500","700","900"]
})
const lato = Lato({
  subsets: ["latin"],
  weight: ['100', "300", "400", "700", "900"]
})

export const metadata: Metadata = {
  title: "Spatiozest",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <ModalProvider>
        <FloatingNav navItems={[
          { name: "Home", link: "/", icon: <FaHome />,id:"section1" },
          { name: "Solutions",id:"solutions",subMenuItems: [
            {
              title: "Interactive Mapping Suite",
              link: "/solutions/interactive-mapping-suite"
            },
            {
              title: "Feild Data Collection",
              link: "/solutions/field-data-collection"
            },
            {
              title: "Unified Data Hub",
              link: "/solutions/unified-data-hub"
            },
            {
              title: "Geo Analytics",
              link: "/solutions/geo-analytics"
            },
            {
              title: "Alternative Data Insights",
              link: "/solutions/alternative-data-insights"
            }
          ]},
          { name: "Industries", id:"industries", link: "/" },
          // { name: "Features", link: "/", id: "features" },
          { name: "Workflow", link: "/", id: "workflow" }
        ]} />
         {children}
        <Footer />
        <Toaster />
        </ModalProvider>
      </body>
    </html>
  );
}
