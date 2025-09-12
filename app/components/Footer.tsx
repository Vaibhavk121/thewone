import { ArrowRight } from "lucide-react";

export default function Footer (){
  return (
    <footer 
      className="relative mt-24 bg-cover bg-center rounded-t-[48px] overflow-hidden" 
      style={{ backgroundImage: "url('/bg.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      <div className="relative z-20 container mx-auto px-8 py-20 text-white text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          Hire better. Faster.
        </h2>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
          Take your time back.
        </h2>
        <p className="text-lg md:text-xl font-medium mb-12">
          Make hiring easier than ever.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-full flex items-center justify-center mx-auto space-x-2 shadow-lg hover:bg-gray-200 transition-colors">
          <ArrowRight />
          <span>Get early access</span>
          
        </button>
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
