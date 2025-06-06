import React from "react";

const Services = () => {
  const carData = [
    {
      type: "Sedan",
      models: "Etios",
      rate: "10rs per km",
      average: "300km average day",
      da: "300DA",
      extra: "Extra toll + parking",
      image: "https://wallpapercave.com/wp/wp9332432.jpg",
      icon: "🚗"
    },
    {
      type: "Sedan",
      models: "Swift Dzire",
      rate: "10rs per km",
      average: "300km average day",
      da: "300DA",
      extra: "Extra toll + parking",
      image: "https://wallpapercave.com/wp/wp6205933.jpg",
      icon: "🚗"
    },
    {
      type: "SUV",
      models: "Ertiga",
      rate: "12rs per km",
      average: "300km average day",
      da: "300DA",
      extra: "Extra toll + parking",
      image: "https://img.indianautosblog.com/2018/04/2018-Suzuki-Ertiga-2018-Maruti-Ertiga-front-three-quarters.jpg",
      icon: "🚙"
    },
    {
      type: "MUV",
      models: "Innova",
      rate: "16rs per km",
      average: "300km average day",
      da: "300DA",
      extra: "Extra toll + parking",
      image: "https://www.keralatourpackagesite.com/wp-content/uploads/2019/01/innova-SuperWhite2.png",
      icon: "🚐"
    },
    {
      type: "MUV",
      models: "Crysta",
      rate: "18rs per km",
      average: "300km average day",
      da: "300DA",
      extra: "Extra toll + parking",
      image: "https://www.livemint.com/lm-img/img/2023/08/02/1600x900/Toyota_Innova_Crysta_Petrol_1671612142263_1690967289659.webp",
      icon: "🚌"
    },
  ];

  const features = [
    { icon: "👨‍✈️", title: "Professional Drivers", desc: "Experienced & Licensed" },
    { icon: "🛰️", title: "GPS Enabled", desc: "Real-time Tracking" },
    { icon: "🕐", title: "24/7 Service", desc: "Always Available" },
    { icon: "🗺️", title: "All Gujarat", desc: "Complete Coverage" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/20 via-orange-500/20 to-amber-600/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-orange-400/15 via-amber-500/15 to-yellow-600/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-br from-amber-400/10 via-yellow-500/10 to-orange-600/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Car Cards Grid - New Zigzag Layout */}
      <div className="relative z-10 max-w-7xl mx-auto mb-20 px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-max">
          
          {/* Crysta - Position 1 (Right) */}
          <div className="lg:col-start-2 lg:row-start-1 animate-reveal relative z-10" style={{ animationDelay: '0.1s' }}>
            <div className="bg-gradient-to-br from-white/90 to-gray-100/80 backdrop-blur-xl p-6 rounded-3xl shadow-3xl border border-orange-100/20 hover:shadow-4xl transition-all duration-800 ease-out h-full group hover:-translate-y-3 transform-gpu" role="article" aria-label={`Car: ${carData[4].models}`}>
              <div className="relative mb-6 bg-gradient-to-br from-gray-100/80 to-gray-300/80 rounded-2xl p-5 overflow-hidden">
                <img 
                  src={carData[4].image} 
                  alt={`${carData[4].type} - ${carData[4].models}`}
                  className="w-full h-48 object-contain mix-blend-multiply group-hover:scale-95 transition-transform duration-800 ease-in-out filter drop-shadow-2xl"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-600 via-orange-700 to-amber-800 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-600">
                  <span className="text-lg">{carData[4].icon}</span>
                </div>
              </div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-orange-800 to-amber-900 bg-clip-text text-transparent mb-2 tracking-tight leading-tight">
                {carData[4].models}
              </h3>
              <p className="text-sm text-orange-700 font-semibold mb-5">{carData[4].type}</p>
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-br from-yellow-100/70 to-orange-100/70 p-4 rounded-xl border border-orange-100/20">
                    <p className="text-xs font-bold text-orange-900">Rate: {carData[4].rate}</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-100/70 to-orange-100/70 p-4 rounded-xl border border-orange-100/20">
                    <p className="text-xs font-bold text-orange-900">DA: {carData[4].da}</p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['AC', 'GPS', 'Luxury'].map((badge, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-yellow-600 via-orange-700 to-amber-800 text-white px-3 py-1 rounded-full font-semibold text-xs shadow-lg group-hover:scale-110 transition-transform duration-400">
                      {badge}
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full bg-gradient-to-r from-yellow-600 to-orange-700 text-white py-2 rounded-xl font-semibold text-sm hover:bg-gradient-to-r hover:from-orange-700 hover:to-amber-800 transition-all duration-300" aria-label={`Book ${carData[4].models}`}>
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Innova - Position 2 (Left) */}
          <div className="lg:col-start-1 lg:row-start-2 animate-reveal relative z-10" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-white/90 to-gray-100/80 backdrop-blur-xl p-6 rounded-3xl shadow-3xl border border-orange-100/20 hover:shadow-4xl transition-all duration-800 ease-out h-full group hover:-translate-y-3 transform-gpu" role="article" aria-label={`Car: ${carData[3].models}`}>
              <div className="relative mb-6 bg-gradient-to-br from-gray-100/80 to-gray-300/80 rounded-lg p-5 overflow-hidden">
                <img 
                  src={carData[3].image} 
                  alt={`${carData[3].type} - ${carData[3].models}`}
                  className="w-full h-48 object-contain mix-blend-multiply group-hover:scale-95 transition-transform duration-800 ease-in-out filter drop-shadow-2xl"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-600 via-orange-700 to-amber-800 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-600">
                  <span className="text-lg">{carData[3].icon}</span>
                </div>
              </div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-orange-800 to-amber-900 bg-clip-text text-transparent mb-2 tracking-tight leading-tight">
                {carData[3].models}
              </h3>
              <p className="text-sm text-orange-700 font-semibold mb-5">{carData[3].type}</p>
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-br from-yellow-100/70 to-orange-100/70 p-4 rounded-xl border border-orange-100/20">
                    <p className="text-xs font-bold text-orange-900">Rate: {carData[3].rate}</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-100/70 to-orange-100/70 p-4 rounded-xl border border-orange-100/20">
                    <p className="text-xs font-bold text-orange-900">DA: {carData[3].da}</p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['AC', 'GPS', 'Premium', '8-Seater'].map((badge, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-yellow-600 via-orange-700 to-amber-800 text-white px-3 py-1 rounded-full font-semibold text-xs shadow-lg group-hover:scale-110 transition-all duration-400">
                      {badge}
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full bg-gradient-to-r from-yellow-600 to-orange-700 text-white py-2 rounded-xl font-semibold text-sm hover:bg-gradient-to-r hover:from-orange-700 hover:to-amber-800 transition-all duration-300" aria-label={`Book ${carData[3].models}`}>
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Ertiga - Position 3 (Right) */}
          <div className="lg:col-start-2 lg:row-start-3 animate-reveal relative z-10" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-white/90 to-gray-100/80 backdrop-blur-xl p-6 rounded-3xl shadow-3xl border border-orange-100/20 hover:shadow-4xl transition-all duration-800 ease-out h-full group hover:-translate-y-3 transform-gpu" role="article" aria-label={`Car: ${carData[2].models}`}>
              <div className="relative mb-6 bg-gradient-to-br from-gray-100/80 to-gray-300/20 rounded-2xl p-5 overflow-hidden">
                <img 
                  src={carData[2].image} 
                  alt={`${carData[2].type} - ${carData[2].models}`}
                  className="w-full h-48 object-contain mix-blend-multiply group-hover:scale-95 transition-transform duration-800 ease-in-out filter drop-shadow-2xl"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-600 via-orange-700 to-amber-800 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-600">
                  <span className="text-lg">{carData[2].icon}</span>
                </div>
              </div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-orange-800 to-amber-900 bg-clip-text text-transparent mb-2 tracking-tight leading-tight">
                {carData[2].models}
              </h3>
              <p className="text-sm text-orange-700 font-semibold mb-5">{carData[2].type}</p>
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-br from-yellow-100/70 to-orange-100/70 p-4 rounded-xl border border-orange-100/20">
                    <p className="text-xs font-bold text-orange-900">Rate: {carData[2].rate}</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-100/70 to-orange-100/70 p-4 rounded-xl border border-orange-100/20">
                    <p className="text-xs font-bold text-orange-900">DA: {carData[2].da}</p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['AC', 'GPS', '7-Seater'].map((badge, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-yellow-600 via-orange-700 to-amber-800 text-white px-3 py-1 rounded-full font-semibold text-xs shadow-lg group-hover:scale-110 transition-all duration-400">
                      {badge}
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full bg-gradient-to-r from-yellow-600 to-orange-700 text-white py-2 rounded-xl font-semibold text-sm hover:bg-gradient-to-r hover:from-orange-700 hover:to-amber-800 transition-all duration-300" aria-label={`Book ${carData[2].models}`}>
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Swift Dzire - Position 4 (Left) */}
          <div className="lg:col-start-1 lg:row-start-4 animate-reveal relative z-10" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-br from-white/90 to-gray-100/80 backdrop-blur-xl p-6 rounded-3xl shadow-3xl border border-orange-100/20 hover:shadow-4xl transition-all duration-800 ease-out h-full group hover:-translate-y-3 transform-gpu" role="article" aria-label={`Car: ${carData[1].models}`}>
              <div className="relative mb-6 bg-gradient-to-br from-gray-100/80 to-gray-300/80 rounded-2xl p-5 overflow-hidden">
                <img 
                  src={carData[1].image} 
                  alt={`${carData[1].type} - ${carData[1].models}`}
                  className="w-full h-48 object-contain mix-blend-multiply group-hover:scale-95 transition-transform duration-800 ease-in-out filter drop-shadow-2xl"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-600 via-orange-700 to-amber-800 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-600">
                  <span className="text-lg">{carData[1].icon}</span>
                </div>
              </div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-orange-800 to-amber-900 bg-clip-text text-transparent mb-2 tracking-tight leading-tight">
                {carData[1].models}
              </h3>
              <p className="text-sm text-orange-700 font-semibold mb-5">{carData[1].type}</p>
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-br from-yellow-100/70 to-orange-100/70 p-4 rounded-xl border border-orange-100/20">
                    <p className="text-xs font-bold text-orange-900">Rate: {carData[1].rate}</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-100/70 to-orange-100/70 p-4 rounded-xl border border-orange-100/20">
                    <p className="text-xs font-bold text-orange-900">DA: {carData[1].da}</p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['AC', 'GPS', 'Clean'].map((badge, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-yellow-600 via-orange-700 to-amber-800 text-white px-3 py-1 rounded-full font-semibold text-xs shadow-lg group-hover:scale-110 transition-all duration-400">
                      {badge}
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full bg-gradient-to-r from-yellow-600 to-orange-700 text-white py-2 rounded-xl font-semibold text-sm hover:bg-gradient-to-r hover:from-orange-700 hover:to-amber-800 transition-all duration-300" aria-label={`Book ${carData[1].models}`}>
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Etios - Position 5 (Right) */}
          <div className="lg:col-start-2 lg:row-start-5 animate-reveal relative z-10" style={{ animationDelay: '0.5s' }}>
            <div className="bg-gradient-to-br from-white/90 to-gray-100/80 backdrop-blur-xl p-6 rounded-3xl shadow-3xl border border-orange-100/20 hover:shadow-4xl transition-all duration-800 ease-out h-full group hover:-translate-y-3 transform-gpu" role="article" aria-label={`Car: ${carData[0].models}`}>
              <div className="relative mb-6 bg-gradient-to-br from-gray-100/80 to-gray-300/80 rounded-2xl p-5 overflow-hidden">
                <img 
                  src={carData[0].image} 
                  alt={`${carData[0].type} - ${carData[0].models}`}
                  className="w-full h-48 object-contain mix-blend-multiply group-hover:scale-95 transition-transform duration-800 ease-in-out filter drop-shadow-2xl"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-600 via-orange-700 to-amber-800 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-600">
                  <span className="text-lg">{carData[0].icon}</span>
                </div>
              </div>
              <h3 className="text-2xl font-black bg-gradient-to-r from-orange-800 to-amber-900 bg-clip-text text-transparent mb-2 tracking-tight leading-tight">
                {carData[0].models}
              </h3>
              <p className="text-sm text-orange-700 font-semibold mb-5">{carData[0].type}</p>
              <div className="space-y-5">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-br from-yellow-100/70 to-orange-100/70 p-4 rounded-xl border border-orange-100/20">
                    <p className="text-xs font-bold text-orange-900">Rate: {carData[0].rate}</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-100/70 to-orange-100/70 p-4 rounded-xl border border-orange-100/20">
                    <p className="text-xs font-bold text-orange-900">DA: {carData[0].da}</p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-100/70 to-orange-100/70 p-4 rounded-xl border border-orange-100/20">
                    <p className="text-xs font-bold text-orange-900">Average: {carData[0].average}</p>
                  </div>
                  <div className="bg-gradient-to-br from-amber-100/70 to-yellow-100/70 p-4 rounded-xl border border-amber-100/20">
                    <p className="text-xs font-bold text-amber-900">Extra: {carData[0].extra}</p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {['AC', 'GPS', 'Clean', 'Safe'].map((badge, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-yellow-600 via-orange-700 to-amber-800 text-white px-3 py-1 rounded-full font-semibold text-xs shadow-lg group-hover:scale-110 transition-all duration-400">
                      {badge}
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full bg-gradient-to-r from-yellow-600 to-orange-700 text-white py-2 rounded-xl font-semibold text-sm hover:bg-gradient-to-r hover:from-orange-700 hover:to-amber-800 transition-all duration-300" aria-label={`Book ${carData[0].models}`}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>  

      {/* Why Choose Us Section */}
      <div className="relative z-10 mt-12 max-w-6xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-orange-200/50">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                <span className="text-xl">⭐</span>
              </div>
              <h2 className="text-3xl font-black bg-gradient-to-r from-orange-600 to-amber-700 bg-clip-text text-transparent">
                Why Choose Us?
              </h2>
            </div>
            <p className="text-lg text-gray-700 font-medium">Experience the difference with our premium cab services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border border-orange-200/50 hover:border-orange-400/50 transition-all duration-300 hover:shadow-xl text-center group-hover:scale-105 transform duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 font-medium text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 mt-14 rounded-t-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-orange-500/5 to-amber-600/5"></div>
        <div className="relative z-10 px-8 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Company Info */}
              <div className="text-center md:text-left">
                <div className="flex justify-center md:justify-start items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <span className="text-xl">🚕</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">DHYANA CAB LINE</h3>
                </div>
                <p className="text-gray-300 mb-4">Professional ride services across Gujarat with 24/7 availability and modern fleet.</p>
                <div className="flex justify-center md:justify-start gap-4">
                  {['📱', '🌐', '📧'].map((icon, index) => (
                    <div key={index} className="w-10 h-10 bg-gradient-to-br from-yellow-400/20 via-orange-500/20 to-amber-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200">
                      <span className="text-lg">{icon}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-white mb-4">Quick Contact</h4>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-amber-600/10 p-4 rounded-xl border border-gray-700">
                    <p className="text-gray-300 text-sm mb-1">Call Us 24/7</p>
                    <p className="text-2xl font-bold text-white">6351002230</p>
                  </div>
                  <div className="text-gray-300">
                    <p className="text-sm">🗺️ All Gujarat Coverage</p>
                    <p className="text-sm">🕐 24/7 Service Available</p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="text-center md:text-right">
                <h4 className="text-xl font-bold text-white mb-4">Our Services</h4>
                <div className="space-y-2">
                  {['One Side Cab', 'Round Trip Cab', 'All Trip Packages', 'Airport Transfer'].map((service, index) => (
                    <div key={index} className="text-gray-300 hover:text-white transition-colors duration-200">
                      <p className="text-sm">• {service}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600 text-white px-4 py-2 rounded-full font-bold text-sm">
                    Book Now
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm mb-4 md:mb-0">
                  © 2024 DHYANA CAB LINE. All rights reserved. | Professional & Reliable Cab Services
                </div>
                <div className="flex gap-6">
                  {['Privacy Policy', 'Terms of Service', 'Contact'].map((link, index) => (
                    <a key={index} href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;