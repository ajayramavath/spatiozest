"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SubMenuItem } from "./navbar";
import { useRouter } from "next/navigation";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};


export const MenuItem = ({
    setActive,
    active,
    item,
    subMenuItems,
    children,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    subMenuItems?: SubMenuItem;
    children?: React.ReactNode;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative ">
            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-black dark:text-white hover:opacity-[0.8]"
            >
                {item}
            </motion.p>
            {active !== null && subMenuItems && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2">
                            <motion.div
                                transition={transition}
                                layoutId="active" // layoutId ensures smooth animation
                                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                            >
                                <motion.div
                                    layout // layout ensures smooth animation
                                    className="w-max h-full p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className="relative dark:bg-black bg-white shadow-input flex justify-center items-center space-x-4"
        >
            {children}
        </nav>
    );
};


export const HoveredLink = ({ children,href, ...rest }: any) => {
    return (
        <Link
            href={href}
            {...rest}
            className="text-neutral-700 dark:text-neutral-200 hover:opacity-[0.8] "
        >
            {children}
        </Link>
    );
};
