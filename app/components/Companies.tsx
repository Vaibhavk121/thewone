export const Companies = () => {
  return (
   <section className="min-h-screen flex flex-col items-center text-center p-8 bg-white">
      {/* Content */}
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Wone is the human-centered product in <br /> the world of AI.
          </h1>
          <p className="text-lg text-gray-700">
            Pioneering the next evolution of recruitment.<br />
            Developed with the world's leading talent acquisition experts.
          </p>
        </div>

        {/* Company Logos */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-12 mt-8">
          <div className="flex items-center space-x-2">
            <img src="/Companies/Netflix.png" alt="" className="w-40" />
          </div>
          <div className="flex items-center space-x-2">
            <img src="/Companies/Google.png" alt="" className="w-40" />
          </div>
          <div className="flex items-center space-x-2">
            <img src="/Companies/Atlassian.png" alt="" className="w-40" />
          </div>
          <div className="flex items-center space-x-2">
            <img src="/Companies/Intercom.png" alt="" className="w-40" />
          </div>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/Companies/bg.avif"
            alt="Office background"
            
          />
        </div>
        </div>
    </section>
  )
}
