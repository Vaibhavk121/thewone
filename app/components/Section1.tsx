"use client"
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
export default function Section1() {
    return (
        <main className="flex items-center justify-center min-h-screen bg-white p-4">
            <div className="w-full max-w-7xl mx-auto">
                <section className="bg-[#f5f3ed] rounded-3xl h-200 p-8 md:p-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">

                        <div className="flex flex-col gap-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tighter">
                                Source, track and hire talent in one place.
                            </h1>
                            <p className="text-zinc-600 text-lg leading-relaxed">
                                Save weeks on repetitive work. Just post a job description and Wone will source and qualify talent so you don’t have to sift through hundreds of resumes.
                            </p>
                            <p className="text-zinc-600 text-lg leading-relaxed">
                                Take over only when the candidates have been qualified, so you’re not wasting time weeding out unqualified talent.
                            </p>
                            <button
                                className="inline-flex items-center space-x-2 rounded-xl bg-black  px-5 py-2 shadow-sm border border-gray-200 hover:shadow-md transition w-60"
                            >
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black">
                                    <ArrowRight size={16} />
                                </span>
                                <span className="text-sm text-white font-medium text-gray-900 ">
                                    Get early access
                                </span>
                            </button>
                        </div>

                        <div className="w-full">
                            <Image
                                src='/Section1/image1.avif' // Use the imported image object directly
                                alt="A smiling professional man in a well-lit room, representing sourced talent."
                                width={2688}
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
