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
      icon: "🚗",
      features: ["Economy", "Fuel Efficient", "City Travel"]
    },
    {
      type: "Sedan",
      models: "Swift Dzire",
      rate: "10rs per km",
      average: "300km average day",
      da: "300DA",
      extra: "Extra toll + parking",
      image: "https://wallpapercave.com/wp/wp6205933.jpg",
      icon: "🚗",
      features: ["Comfort", "AC", "Spacious"]
    },
    {
      type: "SUV",
      models: "Ertiga",
      rate: "12rs per km",
      average: "300km average day",
      da: "300DA",
      extra: "Extra toll + parking",
      image: "https://img.indianautosblog.com/2018/04/2018-Suzuki-Ertiga-2018-Maruti-Ertiga-front-three-quarters.jpg",
      icon: "🚙",
      features: ["7-Seater", "Family", "Luggage Space"]
    },
    {
      type: "MUV",
      models: "Innova",
      rate: "16rs per km",
      average: "300km average day",
      da: "300DA",
      extra: "Extra toll + parking",
      image: "https://www.keralatourpackagesite.com/wp-content/uploads/2019/01/innova-SuperWhite2.png",
      icon: "🚐",
      features: ["8-Seater", "Premium", "Long Distance"]
    },
    {
      type: "MUV",
      models: "Crysta",
      rate: "18rs per km",
      average: "300km average day",
      da: "300DA",
      extra: "Extra toll + parking",
      image: "https://www.livemint.com/lm-img/img/2023/08/02/1600x900/Toyota_Innova_Crysta_Petrol_1671612142263_1690967289659.webp",
      icon: "🚌",
      features: ["Luxury", "VIP", "Business Travel"]
    },
  ];

  const stats = [
    { value: "24/7", label: "Service Available", icon: "🌟", desc: "Round the clock support" },
    { value: "5+", label: "Premium Cars", icon: "🚗", desc: "Modern fleet variety" },
    { value: "100%", label: "Customer Satisfaction", icon: "😊", desc: "Happy customers" },
    { value: "Gujarat", label: "Complete Coverage", icon: "🗺️", desc: "All major cities" }
  ];

  const services = [
    { name: "Airport Transfer", icon: "✈️", desc: "Reliable pickup & drop" },
    { name: "Outstation", icon: "🛣️", desc: "Inter-city travel" },
    { name: "Local Hire", icon: "🏙️", desc: "City tours & errands" },
    { name: "Wedding Events", icon: "💒", desc: "Special occasions" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Enhanced Floating Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-yellow-400/15 via-orange-500/15 to-amber-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-400/10 via-amber-500/10 to-yellow-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-amber-400/8 via-yellow-500/8 to-orange-600/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6 space-y-8">
        
        {/* Enhanced Header */}
        <div className="bg-gradient-to-r from-white/98 to-yellow-50/98 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-orange-100/30">
          <div className="text-center space-y-6">
            <div>
              <h1 className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent mb-3">
                DHYANA CAB LINE
              </h1>
              <p className="text-2xl text-gray-700 font-semibold mb-2">Premium Cab Services Across Gujarat</p>
              <p className="text-lg text-gray-600">Professional • Reliable • Affordable</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                📞 6351002230
              </div>
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                💬 WhatsApp
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-white/95 to-orange-50/95 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-orange-100/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-orange-800 text-lg">{service.name}</h3>
                  <p className="text-sm text-orange-600">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Fleet Grid - Optimized Layout */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Hero Vehicle - Crysta (Large Card) */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-8">
            <div className="bg-gradient-to-br from-white/98 to-orange-50/98 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-orange-100/30 h-full group hover:shadow-3xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                
                {/* Left Side - Details */}
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-5xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">
                        {carData[4].models}
                      </h2>
                      <p className="text-xl text-orange-700 font-bold">{carData[4].type} - Luxury Class</p>
                      <p className="text-gray-600 mt-1">Perfect for business & VIP travel</p>
                    </div>
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{carData[4].icon}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-r from-yellow-100/90 to-orange-100/90 p-4 rounded-xl border border-orange-200/30">
                        <p className="text-sm text-orange-700 font-medium">Rate</p>
                        <p className="text-lg font-bold text-orange-900">{carData[4].rate}</p>
                      </div>
                      <div className="bg-gradient-to-r from-yellow-100/90 to-orange-100/90 p-4 rounded-xl border border-orange-200/30">
                        <p className="text-sm text-orange-700 font-medium">Driver Allowance</p>
                        <p className="text-lg font-bold text-orange-900">{carData[4].da}</p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-amber-100/90 to-yellow-100/90 p-4 rounded-xl border border-orange-200/30">
                      <p className="text-sm text-orange-700 font-medium mb-2">Features</p>
                      <div className="flex flex-wrap gap-2">
                        {carData[4].features.map((feature, idx) => (
                          <span key={idx} className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-4 rounded-xl font-bold text-lg hover:from-orange-700 hover:to-amber-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                    Book Premium Crysta
                  </button>
                </div>
                
                {/* Right Side - Image */}
                <div className="flex items-center justify-center">
                  <img 
                    src={carData[4].image} 
                    alt={carData[4].models}
                    className="w-full max-w-lg h-64 object-contain group-hover:scale-105 transition-transform duration-500 filter drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Panel */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-4">
            <div className="bg-gradient-to-br from-white/95 to-amber-50/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-orange-100/20 h-full">
              <h3 className="text-2xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-8 text-center">
                WHY CHOOSE US
              </h3>
              
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gradient-to-r from-yellow-50/80 to-orange-50/80 p-4 rounded-2xl border border-orange-100/20 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-lg">{stat.icon}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-3xl font-black text-orange-700">{stat.value}</p>
                        <p className="text-sm font-bold text-orange-600">{stat.label}</p>
                        <p className="text-xs text-gray-600 mt-1">{stat.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fleet Cards Grid - Better Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {carData.slice(0, 4).map((car, index) => (
            <div key={index} className="bg-gradient-to-br from-white/95 to-yellow-50/95 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-orange-100/20 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                      {car.models}
                    </h3>
                    <p className="text-sm text-orange-700 font-semibold">{car.type}</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span>{car.icon}</span>
                  </div>
                </div>
                
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={car.image} 
                    alt={car.models}
                    className="w-full h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-yellow-100/80 to-orange-100/80 p-3 rounded-lg border border-orange-100/20">
                    <p className="text-xs font-bold text-orange-900">Rate: {car.rate}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {car.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-3 rounded-xl font-semibold hover:from-orange-700 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Book {car.models}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Contact Section */}
        <div className="bg-gradient-to-r from-gray-900/98 to-black/98 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-orange-100/10">
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-4xl font-black text-white mb-4">Ready to Book Your Ride?</h2>
              <p className="text-gray-300 text-xl mb-2">Professional drivers • Modern fleet • 24/7 service</p>
              <p className="text-gray-400">Covering all major cities across Gujarat</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 backdrop-blur-lg p-6 rounded-2xl border border-orange-400/20">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Call Now</p>
                    <p className="text-orange-300 font-semibold">6351002230</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-600/20 to-green-700/20 backdrop-blur-lg p-6 rounded-2xl border border-green-400/20">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">WhatsApp</p>
                    <p className="text-green-300 font-semibold">Quick Booking</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 backdrop-blur-lg p-6 rounded-2xl border border-blue-400/20">
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Email</p>
                    <p className="text-blue-300 font-semibold">Get Quote</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;