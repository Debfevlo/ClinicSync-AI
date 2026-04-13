

const HeroSection = () => {
  return (
    
        <div className="relative flex items-center justify-center min-h-[80vh] px-4">

  {/* CENTER CONTENT */}
  <div className="text-center max-w-2xl z-10">

    <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm text-xs text-gray-600 mb-6">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      AI-powered hospital triage system
    </div>

    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
      Smarter Triage. Faster Care. <br />
      <span className="text-green-900">Powered by AI.</span>
    </h1>

    <p className="mt-5 text-gray-600 max-w-xl mx-auto">
      ClinicSync AI helps patients understand symptom severity,
      reduces hospital congestion, and optimizes appointment scheduling
      in public hospitals across Ghana.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
      <button className="bg-green-900 text-white px-6 py-3 rounded-full hover:bg-green-800 transition">
        Start Your Journey →
      </button>

      <button className="border border-gray-300 px-6 py-3 rounded-full hover:border-green-900 hover:text-green-900 transition">
        Explore Features
      </button>
    </div>

    {/* STATS */}
    <div className="mt-10 flex justify-center gap-8 text-sm text-gray-600">
      <div>
        <p className="font-semibold text-green-900">35%</p>
        <p>ER reduction</p>
      </div>
      <div>
        <p className="font-semibold text-green-900">30%</p>
        <p>Faster care</p>
      </div>
      <div>
        <p className="font-semibold text-green-900">AI</p>
        <p>Powered system</p>
      </div>
    </div>
  </div>

  {/* FLOATING SURROUND CARDS */}
  
  {/* Top Left */}
  <div className="hidden md:block absolute top-10 left-10 bg-white shadow-lg rounded-2xl p-3 w-56 rotate-[-8deg]">
    <div className="h-28 bg-gray-200 rounded-xl mb-2"></div>
    <p className="text-xs text-gray-600">Patient Symptom Input</p>
  </div>

  {/* Top Right */}
  <div className="hidden md:block absolute top-10 right-10 bg-white shadow-lg rounded-2xl p-3 w-56 rotate-[6deg]">
    <div className="h-28 bg-gray-200 rounded-xl mb-2"></div>
    <p className="text-xs text-gray-600">AI Risk Classification</p>
  </div>

  {/* Bottom Left */}
  <div className="hidden md:block absolute bottom-10 left-16 bg-white shadow-lg rounded-2xl p-3 w-56 rotate-[4deg]">
    <div className="h-28 bg-gray-200 rounded-xl mb-2"></div>
    <p className="text-xs text-gray-600">Smart Appointment Booking</p>
  </div>

</div>
  )
}

export default HeroSection