"use client"
import { ArrowRight } from "lucide-react";
import Image from "next/image";
export default function Section1() {
    return (
        <main className="flex items-center justify-center min-h-screen bg-white p-4">
            <div className="w-full max-w-7xl mx-auto">
                <section className="bg-[#f5f3ed] rounded-3xl h-200 p-8 md:p-16">
                    <div className="flex flex-col">
                        <h1 className="text-7xl font-semibold text-zinc-900 tracking-tighter">
                            Source, track and <br /> hire talent in one <br /> place.
                        </h1>
                        <div />
                        <div className="flex flex-row gap-y-6">
                            
                                <div className="flex flex-col w-3/5 gap-y-5 pt-10 pr-10">
                                    <p className="text-black font-semibold text-lg leading-relaxed">
                                    Save weeks on repetitive work. Just post a job description and Wone will source and qualify talent so you don’t have to sift through hundreds of resumes.
                                </p>
                                <p className="text-black text-lg font-semibold leading-relaxed">
                                    Take over only when the candidates have been qualified, so you’re not wasting time weeding out unqualified talent.
                                </p>
                                <button
                                    className="inline-flex items-center space-x-2 rounded-xl bg-black  px-5 py-4 shadow-sm border border-gray-200  w-60"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
                                        <ArrowRight size={16} />
                                    </span>
                                    <span className="text-l text-white font-medium text-gray-900 ">
                                        Get early access
                                    </span>
                                </button>
                                </div>
                            
                        

                        
                            <Image
                                src="/Section1/image1.avif" 
                                alt="A smiling professional man in a well-lit room, representing sourced talent."
                                width={1788}
                                height={1536}
                                className="rounded-2xl w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
