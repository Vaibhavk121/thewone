"use client"
import React from "react";
import { useEffect, useState } from 'react';
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';

export default function Hero() {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimated(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);
    const images = [
        "/HeroImages/p5.avif",
        "/HeroImages/p4.avif",
        "/HeroImages/p3.avif",
        "/HeroImages/p2.avif",
        "/HeroImages/p1.avif",
    ];

    const rotations = ["rotate-1", "-rotate-2", "rotate-6", "-rotate-1", "-rotate-2"];

    return (
        <div className="flex flex-col gap-5 pt-20">

            <div className="relative overflow-hidden w-full max-w-5xl mx-auto">
                {/* The Text Content */}
                <div className="text-center">
                    <h1 className="font-bold text-7xl">
                        Recruiting system that helps <br /> you hire better talent faster.
                    </h1>
                    <span className="font-semibold text-xl">
                        Source and evaluate extraordinary talent, automatically. <br />
                        Cut weeks off your hiring process.
                    </span>
                </div>
                <div className="flex justify-center">
                <button
                    className="flex flex-row justify-evenly items-center space-x-2 rounded-xl bg-white px-5 py-4 mt-5   w-60"
                >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
                        <ArrowRight size={16} />
                    </span>
                    <span className="text-m font-medium text-gray-900 ">
                        Get early access
                    </span>
                </button>
            </div>
                {/* The "Cover" Element */}
                <div
                    className={`
                    absolute top-0 left-0 w-full h-full bg-[#f5f3ed]
                    transition-transform duration-1000 ease-out
                    ${isAnimated ? 'scale-x-0 origin-right' : 'scale-x-100 origin-right'}
                `}
                ></div>
            </div>
            
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.7, bounce: 0.5 },
                }}>
                <section className="flex justify-center py-12 ">
                    <div className="flex -space-x-1">
                        {images.map((src, i) => (
                            <div
                                key={i}
                                className={`relative w-56 h-72 rounded-2xl overflow-hidden shadow-xl ${rotations[i]} 
                        transition-transform duration-300 ${i % 2 === 0 ? 'hover:translate-y-10' : 'hover:-translate-y-10'} hover:rotate-5`}
                            >
                                <Image
                                    src={src}
                                    alt={`Portrait ${i + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </motion.div>
            <section className="max-w-6xl mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 relative">
                    <div className="pr-30 md:border-r md:border-gray-300">
                        <h2 className="text-3xl font-bold leading-snug">
                            Your own, personal recruiter. <br /> Completely automated.
                        </h2>
                        <p className="mt-4 text-gray-700 font-semibold leading-relaxed">
                            Wone manages your entire hiring process. Attract, <br /> source, qualify and
                            interview candidates <br /> automatically with contextual AI that understands <br />
                            your needs beyond tags and keywords and leaves <br /> you only with the best.
                        </p>
                    </div>

                    {/* Right column */}
                    <div className="pl-8">
                        <h2 className="text-3xl font-bold leading-snug">
                            Win back time. <br /> Improve your results.
                        </h2>
                        <p className="mt-4 text-gray-700 font-bold leading-relaxed">
                            Save weeks on repetitive work. Just post a job <br /> description and let Wone
                            do the hard work. Take <br />over only when the candidates have been qualified,<br />
                            so you&quot;re not wasting time weeding out unqualified <br /> talent.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}
