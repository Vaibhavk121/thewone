import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Communication() {
    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-5">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col gap-y-6 lg:col-span-3">
                        <p className="font-medium text-zinc-800">Commuication</p>
                        <h2 className="text-4xl font-bold tracking-tighter text-zinc-900 sm:text-5xl">
                            Personalized outreach,
                            communication and feedback on autopilot.
                        </h2>
                        <p className="text-lg text-bold leading-relaxed text-zinc-600">
                            Wone learns your writing style and automates the entire <br />communication cycle.
                        </p>
                        <p className="text-lg text-bold leading-relaxed text-zinc-600">
                            Automate interview scheduling, candidate questions, <br />status updates, and follow up with unresponsive talent, all <br />in your authentic voice, without your constant attention.
                        </p>
                    </div>

                    <div className="lg:col-span-2 pt-50">
                        <Link
                            href="#"
                            className="group block w-full max-w-sm rounded-3xl bg-black p-6 shadow-lg 
                         transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="font-semibold text-white">
                                        Learn about Communication
                                    </span>
                                    <span className="text-sm text-zinc-400">
                                        Absolute outreach and feedback
                                    </span>
                                </div>
                                <div
                                    className="rounded-lg bg-white p-2 transition-transform duration-300 
                             ease-in-out group-hover:rotate-[-45deg]"
                                >
                                    <ArrowRight className="h-4 w-4 text-black" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center w-350 ml-18 rounded-3xl h-screen relative px-20 py-10 mt-20 ">

                <img
                    src="/Tracking/bg.avif"
                    alt="Background"
                    className="absolute inset-0 w-full h-full z-0 px-10 rounded-3xl "
                />

                <img
                    src="/Tracking/inside.jpg"
                    alt="Webpage"
                    className="w-4/5 z-10 h-160 rounded-xl mt-18 "
                />
            </div>

        </section>
    )
}
