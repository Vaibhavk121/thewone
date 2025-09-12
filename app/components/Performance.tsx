export default function Performance() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white ">
            <div className="w-11/12 max-w-6xl p-8 bg-gray-50 rounded-[48px] shadow-2xl border border-gray-100">
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

                <div className="flex flex-col md:flex-row justify-around items-end space-y-8 md:space-y-0 md:space-x-8 mt-12">
                    <div className="w-full flex flex-col items-center">
                        <span className="text-sm text-gray-500 mb-2">45-50 days</span>
                        <span className="text-gray-800 font-medium">greenhouse</span>
                        <div className="relative w-full h-100 bg-gray-200 rounded-xl overflow-hidden flex flex-col justify-end p-4">

                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <span className="text-sm text-gray-500 mb-2">40+ days</span>
                        <span className="text-gray-800 font-medium">Ashby</span>
                        <div className="relative w-full h-80 bg-gray-200 rounded-xl overflow-hidden  justify-end p-4">

                        </div>

                    </div>
                    <div className="w-full flex flex-col items-center">
                        <span className="text-sm text-gray-500 mb-2">36+ days</span>
                        <span className="text-gray-800 font-medium">LinkedIn</span>
                        <div className="relative w-full h-60 bg-gray-200 rounded-xl overflow-hidden flex flex-col justify-end p-4">


                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <span className="text-sm text-gray-500 mb-2">Wone ~ 30 Seconds</span>
                        <div className="relative w-full h-[4px] shadow-cyan-500/50 bg-blue-500 rounded-xl overflow-hidden flex flex-col justify-end ">

                        </div>


                    </div>
                </div>



            </div>
        </div>
    )
}
