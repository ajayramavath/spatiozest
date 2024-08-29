import { FloatingDock } from "../ui/floating-dock"
import {  FaFacebook, FaInstagram, FaLinkedin, FaRegCopyright, FaTwitter} from "react-icons/fa6";
import { TfiArrowCircleUp } from "react-icons/tfi";


const links = [
    {
        title: "Go to Top",
        icon: (
            <TfiArrowCircleUp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "#",
    },
    {
        title: "Facebook",
        icon: (
            <FaFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.facebook.com/spatiozest",
    },
    {
        title: "Instagram",
        icon: (
            <FaInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.instagram.com/spatiozest",
    },
    {
        title: "LinkedIN",
        icon: (
            <FaLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
        href: "https://www.linkedin.com/company/spatiozest",
    },
];

const index = () => {
  return (
      <div className="bottom-0 left-0 right-0 justify-end flex-col flex pb-2 items-center bg-slate-900 text-white">
      <div className="flex items-center justify-center h-[5rem] w-full">
          <FloatingDock items={links} />
      </div>
      <div className="flex text-xs md:text-md">
        Copyright 2024, {<FaRegCopyright className="mx-1 text-white pt-1"/>} Spatio Zest Private Limited. All Rights Reserved
      </div>
    </div>
  )
}

export default index