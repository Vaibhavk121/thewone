"use client"
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {

    const images = [
        "/HeroImages/p5.avif",
        "/HeroImages/p4.avif",
        "/HeroImages/p3.avif",
        "/HeroImages/p2.avif",
        "/HeroImages/p1.avif",
    ];

    const rotations = ["rotate-1", "-rotate-2", "rotate-6", "-rotate-1", "-rotate-2"];

    return (
        <div className='flex flex-col gap-5 pt-20'>
            <h1 className='text-center font-bold text-6xl '> Recruiting system that helps <br /> you hire better talent faster.</h1>
            <span className='text-center font-bold text-xl'>Source and evaluate extraordinary talent, automatically. <br />
                Cut weeks off your hiring process.</span>
            <div className='flex justify-center'>
                <button
                    className="inline-flex items-center space-x-2 rounded-xl bg-white px-5 py-2 shadow-sm border border-gray-200 hover:shadow-md transition w-60"
                >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
                        <ArrowRight size={16} />
                    </span>
                    <span className="text-sm font-medium text-gray-900 ">
                        Get early access
                    </span>
                </button>
            </div>
            <section className="flex justify-center py-12 ">
                <div className="flex -space-x">
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className={`relative w-56 h-72 rounded-2xl overflow-hidden shadow-xl ${rotations[i]} 
              hover:rotate-15 translate-x-4 hover:translate-y-2 transition-transform duration-300`}
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
            <section className="max-w-6xl mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 relative">
                    <div className="pr-8 md:border-r md:border-gray-300">
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
                            so you're not wasting time weeding out unqualified <br /> talent.
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}
