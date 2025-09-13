import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Background from "../../public/Sourcing/bg.avif"
import Inside from "../../public/Sourcing/inside.avif"

export default function Sourcing() {
    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-5">
                    <div className="flex flex-col gap-y-6 lg:col-span-3">
                        <p className="font-medium text-zinc-800">Sourcing</p>
                        <h2 className="text-4xl font-bold tracking-tighter text-zinc-900 sm:text-5xl">
                            Find exceptional talent others <br /> miss, magically.
                        </h2>
                        <p className="text-lg text-bold leading-relaxed text-zinc-600">
                            Wone actively finds candidates using natural <br /> language, contextual search, going beyond  boolean <br /> filtering to find talent that matches your exact needs.
                        </p>
                        <p className="text-lg text-bold leading-relaxed text-zinc-600">
                            Save weeks sourcing and get a curated list <br /> of candidates in front of you in as little as 20 seconds.
                        </p>
                    </div>

                    <div className="w-300 pt-70 pl-25 ">
                        <Link
                            href="#"
                            className="group block w-full max-w-sm rounded-3xl bg-black p-6 shadow-lg 
                            transition-transform duration-300 ease-in-out "
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex flex-col transition-transform duration-300 
                                ease-in-out group-hover:-translate-x-2">
                                    <span className="font-semibold text-white">
                                        Learn about Sourcing
                                    </span>
                                    <span className="text-sm text-zinc-400">
                                        Save weeks sourcing talent
                                    </span>
                                </div>
                                <div
                                    className="rounded-lg bg-white p-2 transition-transform duration-300 
                                ease-in-out group-hover:translate-x-2"
                                >
                                    <ArrowRight className="h-4 w-4 text-black" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-20 px-4 sm:px-6 lg:px-8">
                <div className="relative w-full max-w-7xl h-[600px] rounded-3xl overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={Background}
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative z-10 flex items-center justify-center  p-10">
                        <Image
                            src={Inside}
                            alt="Webpage"
                            className="w-full h-auto rounded-xl "
                            width={1400}
                            height={800}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}