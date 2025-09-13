import { ArrowRight } from "lucide-react";
import Background from "../../public/bg.avif"
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="h-100 bg-white ">
      <Image
        src={Background}
        alt="Background"
        className="absolute h-230 w-full mt-24 bg-cover bg-center rounded-t-[48px] overflow-hidden"
      />

      <div className="relative z-20 container mx-auto px-8 py-20 text-white items text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight pt-10">
          Hire better. Faster.
        </h2>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
          Take your time back.
        </h2>
        <p className="text-lg md:text-xl font-medium mb-12">
          Make hiring easier than ever.
        </p>
        
          <Link
            href="#"
            className="group block w-60 rounded-3xl bg-white p-2 mx-auto 
                            transition-transform duration-300 ease-in-out"
          >
            <div className="flex  items-center justify-evenly">
              
              <div
                className="rounded-lg bg-white p-2 transition-transform duration-300 
                                ease-in-out group-hover:translate-x-2"
              >
                <div className="p-2 bg-black rounded-xl">
                  <ArrowRight className="h-4 w-4 text-white  " />
                </div>
              </div>
              <div className="flex transition-transform duration-300 
                                ease-in-out group-hover:-translate-x-2">
                <span className="font-semibold text-black">Early Access</span>
                
              </div>
            </div>
          </Link>
        
      </div>

      <div className="relative z-20   mt-12 pt-12 pb-20">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left section */}
          <div className="col-span-1 md:col-span-2 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">wone</h3>
            <p className="text-sm text-white text-opacity-80">
              Your own, personal recruiter.
              <br />
              Completely automated.
            </p>
            <p className="text-sm text-white mt-4 opacity-80">
              Follow us on LinkedIn
            </p>
          </div>

          {/* Right section with links */}
          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <ul className="space-y-2">
              <li className="font-bold">Features</li>
              <li><a href="#" className="text-white text-opacity-80 hover:underline">Overview</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:underline">Sourcing</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:underline">Evaluation</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:underline">Tracking</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:underline">Communication</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 text-center md:text-left">
            <ul className="space-y-2">
              <li className="font-bold">Product</li>
              <li><a href="#" className="text-white text-opacity-80 hover:underline">Pricing</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:underline">Early access</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
