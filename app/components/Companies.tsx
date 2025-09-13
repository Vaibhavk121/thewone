import Image from "next/image"
import Netflix from "../../public/Companies/Netflix.png"
import Google from "../../public/Companies/Google.png"
import Atlassian from "../../public/Companies/Atlassian.png"
import Intercom from "../../public/Companies/Intercom.png"
import Background from "../../public/Companies/bg (2).avif"
export const Companies = () => {
  return (
   <section className=" flex flex-col items-center text-center p-8 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Wone is the human-centered product in <br /> the world of AI.
          </h1>
          <p className="text-lg text-gray-700">
            Pioneering the next evolution of recruitment.<br />
            Developed with the world&apos;s leading talent acquisition experts.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 space-x-20 mt-8 gap-10 ">
          <div className="flex items-center space-x-2">
            <Image src={Netflix} alt="" className="w-30" />
          </div>
          <div className="flex items-center space-x-2">
            <Image src={Google} alt="" className="w-30" />
          </div>
          <div className="flex items-center space-x-2">
            <Image src={Atlassian} alt="" className="w-30" />
          </div>
          <div className="flex items-center space-x-2">
            <Image src={Intercom} alt="" className="w-30" />
          </div>
        </div>

        
          <Image
            src={Background}
            alt="Office background"
            className="w-full rounded-xl "
            width={1500}
            height={900}
          />
       
        </div>
    </section>
  )
}
