"use client";

export default function Header() {
  return (
    <header className="w-full py-6 pl-20 pr-0 bg-[#f5f3ed]">
      <div className="max-w-7xl  flex justify-between items-center">
        <div className="flex items-center ">
          
          <span className="text-3xl font-bold text-black ">wone</span>
        </div>
        
        <nav className="flex  items-center  justify-between  gap-10 ">
          <a href="#" className="text-sm text-gray-800 font-semibold hover:text-black transition-colors py-1 px-2 rounded-xl hover:bg-gray-200  ">
            Home
          </a>
          <a href="#" className="text-sm text-gray-800 font-semibold hover:text-black transition-colors py-1 px-2 rounded-xl  hover:bg-gray-200">
            Sourcing
          </a>
          <a href="#" className="text-sm text-gray-800 font-semibold hover:text-black transition-colors py-1 px-2 rounded-xl hover:bg-gray-200">
            Evaluation
          </a>
          <a href="#" className="text-sm text-gray-800 font-semibold hover:text-black transition-colors py-1 px-2 rounded-xl hover:bg-gray-200">
            Tracking
          </a>
          <a href="#" className="text-sm text-gray-800 font-semibold hover:text-black transition-colors py-1 px-2 rounded-xl hover:bg-gray-200">
            Communication
          </a>
          <a href="#" className="text-sm text-gray-800 font-semibold hover:text-black transition-colors hover:bg-gray-200">
            Pricing
          </a>
          <a href="#">
            <button className="bg-gray-200 px-2 rounded-xl py-1 rounded-xl">
            Early Access
          </button>
          </a>
            
          
        </nav>
        
        <button className="lg:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}