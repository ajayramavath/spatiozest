"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import data from '@/lib/solutions.json'
import Image from "next/image";
import PrimaryButton from "../ui/primary-button";

const Solutions = () => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });
    const cardLength = data.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = data.map((_, index) => index / cardLength );
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

  return (
      <motion.div
          className=" isolate flex flex-col md:flex-row  justify-center w-screen relative space-x-10 rounded-md p-10 pt-20"
          ref={ref}
          id="solutions"
      >
          <div className="div relative flex items-center text-center md:text-left md:items-start md:px-4">
              <div className="max-w-2xl md:pt-14">
                  {data.map((item, index) => (
                      <div key={item.title + index} className="mt-20 md:my-40 flex flex-col gap-5">
                            <motion.p 
                              initial={{
                                  opacity: 0,
                              }}
                              animate={{
                                  opacity: activeCard === index ? 1 : 0.3,
                              }}
                            className="md:text-sm lg:text-md xl:text-xl font-bold">
                                {item.top}
                            </motion.p>
                          <motion.h1
                              initial={{
                                  opacity: 0,
                              }}
                              animate={{
                                  opacity: activeCard === index ? 1 : 0.3,
                              }}
                              className="md:text-2xl lg:text-3xl xl:text-5xl font-bold text-slate-100"
                          >
                            {item.label}
                          </motion.h1>
                          <motion.p
                              initial={{
                                  opacity: 0,
                              }}
                              animate={{
                                  opacity: activeCard === index ? 1 : 0.3,
                              }}
                              className="text-xs lg:text-kg text-slate-300 max-w-sm my-5"
                          >
                              {item.description}
                          </motion.p>
                          <div>
                            <PrimaryButton title="VIEW MORE" otherClasses="bg-black" />
                        </div>
                        <div className="block md:hidden">
                            <Image src={item.image} alt={item.label} height={500} width={500} />
                        </div>
                      </div>
                  ))}
              </div>
          </div>
          <div className="hidden md:block h-[700px] w-[700px] rounded-md md:sticky md:top-14">
              <Image src={data[activeCard].image} alt={data[activeCard].label} height={800} width={800}
              style={{objectFit:'contain'}}
               className="rounded-lg" />
          </div>
      </motion.div>
  )
}

export default Solutions