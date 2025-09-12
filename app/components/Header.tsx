"use client";

export default function Header() {
  return (
    <header className="w-full px-6 py-6 bg-[#f5f3ed]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          
          <span className="text-xl font-semibold text-black">wone</span>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">
            Home
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">
            Sourcing
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">
            Evaluation
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">
            Tracking
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">
            Communication
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">
            Pricing
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">
            <button>Early access</button>
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