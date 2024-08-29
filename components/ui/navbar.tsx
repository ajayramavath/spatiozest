"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./nabar-menu";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Logo from '@/components/logo'
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';

export interface SubMenuItem {
    title: string,
    link: string
}

export const FloatingNav = ({
    navItems,
    className,
}: {
    navItems: {
        name: string;
        link?: string;
        icon?: JSX.Element;
        subMenuItems?: SubMenuItem[];
        id: string
    }[];
    className?: string;
}) => {

    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [active, setActive] = useState<string | null>(null);
    const router = useRouter()
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY]);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > lastScrollY) {
            setVisible(false)
        } else {
            setVisible(true)
        }
        setLastScrollY(offset)
    };

    return (

            <div className={cn(
                    " flex max-w-fit fixed transition-all text-xs lg:text-[16px] duration-250 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-lg dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-4 md:pl-8 py-3  items-center justify-center space-x-4",
                    className,
                    visible ? "opacity-1 top-5":"opacity-0 top-[-10%]"
                )}
            >
            <Logo />
            <Menu setActive={setActive}>
                {navItems.map((navItem: any, idx: number) => (
                    <Link
                        // id={navItem.id}
                        key={idx}
                        to={navItem.id}
                        spy={true}
                        smooth={true}
                        //offset={150}
                        duration={500}
                         >
                        <div 
                            key={idx}
                            onClick={()=>{
                            if(navItem.link){
                                router.push(navItem.link)
                            }
                        }}>
                        <MenuItem setActive={setActive} active={active} item={navItem.name} subMenuItems={navItem.subMenuItems}>
                            {navItem.subMenuItems && (
                                <div className="flex flex-col space-y-4 text-sm">
                                    {navItem.subMenuItems.map((item: SubMenuItem,index:number)=>{
                                        return (
                                            <div key={index}>
                                            <HoveredLink onClick={()=>{}} href={item.link}>{item.title}</HoveredLink>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) }
                        </MenuItem>
                        </div>
                    </Link>
                ))}
                <button className=" hidden md:block border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2]
                bg-gradient-to-r from-indigo-500 to-purple-500
                 text-black dark:text-white px-4 py-2 rounded-lg">
                    <span>Sign Up</span>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                </button>
            </Menu>
            </div>
    );
};
