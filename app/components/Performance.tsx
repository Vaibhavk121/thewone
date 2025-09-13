import Image from 'next/image'
import Graph from '../../public/graph.png'

export default function Performance() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white pb-20">
            <div className="w-11/12 max-w-6xl p-8 bg-gray-50 rounded-[48px]  border border-gray-400">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                    <div className="w-full md:w-3/4">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                            Wone process is light years faster than traditional tools and platforms.
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl">
                            Regular sourcing & evaluation are manual and take 30+ days per role.
                            <br />
                            <span className="font-bold text-gray-800">Wone sources and evaluates talent within one minute.</span>
                        </p>
                    </div>
                    <button className="mt-6 md:mt-0 px-6 py-3 bg-gray-200 border border-gray-400 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors">
                        Get early access →
                    </button>
                </div>

                <Image src={Graph} alt="Graph" className="w-full h-auto" />



            </div>
        </div>
    )
}
