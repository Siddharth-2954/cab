import React from "react";
import { Shield, Clock, Users, Award } from "lucide-react";

const About = () => {

  return (
    <div className="dark:bg-gray-900 bg-yellow-50 duration-300 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container py-16">
        {/* ABOUT US Heading */}
        <h1
          data-aos="fade-up"
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-12"
          style={{fontFamily: 'Inter, system-ui, sans-serif'}}
        >
          ABOUT US
        </h1>

        {/* Top Section: IMAGE 1 (left) + Cards 1 & 2 (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 mb-8">
          {/* IMAGE 1 (top-left) */}
          <div data-aos="slide-right" data-aos-duration="1500" className="w-full h-84 order-1 lg:order-1 flex items-center justify-center group relative overflow-hidden">
            <img
              src="https://images.pexels.com/photos/4606338/pexels-photo-4606338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Our Vision Image"
              className="w-full h-full object-contain rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
            {/* Top-left L-shape */}
            <div className="absolute top-0 left-26.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 ease-out group-hover:w-[52%] transform origin-left"></div>
            <div className="absolute top-0 left-26.5 h-0 w-[2px] bg-yellow-400 transition-all duration-300 ease-out group-hover:h-[52%] transform origin-top"></div>
            {/* Bottom-right L-shape */}
            <div className="absolute bottom-0 right-26.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 ease-out group-hover:w-[52%] transform origin-right"></div>
            <div className="absolute bottom-0 right-26.5 h-0 w-[2px] bg-yellow-400 transition-all duration-300 ease-out group-hover:h-[52%] transform origin-bottom"></div>
          </div>

          {/* Cards 1 & 2 Container (top-right) */}
          <div data-aos="slide-left" data-aos-duration="1500" className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full order-2 lg:order-2">
            {/* Card 1 */}
            <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 h-84 max-w-xs mx-auto">
              <Shield className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mb-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1" style={{ fontFamily: 'Poppins, bold, sans-serif' }}>
                Jab chahiye, tab ready
              </h3>
              <p className="text-xs text-gray-700 dark:text-gray-300">Urgent travel ke time pe cab nahi milti? Humari cabs hamesha time pe aur ready milengi – no wait, no stress. </p>
            </div>

            {/* Card 2 */}
            <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 h-84 max-w-xs mx-auto">
              <Clock className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mb-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                Family ya solo, sab special
              </h3>
              <p className="text-xs text-gray-700 dark:text-gray-300">Solo travel ho ya family ke saath, humare liye har ride special hai. Best service dena humara promise hai, har baar. </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Cards 3 & 4 (left) + IMAGE 1 (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8">
          {/* Cards 3 & 4 Container (bottom-left) */}
          <div data-aos="slide-right" data-aos-duration="1500" className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full order-2 lg:order-1">
            {/* Card 3 */}
            <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 h-84 max-w-xs mx-auto">
              <Users className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mb-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                Safe aur reliable rides
              </h3>
              <p className="text-xs text-gray-700 dark:text-gray-300">Cabs mein travel karte waqt safety ki tension hoti hai? Humare drivers trustworthy, helpful aur friendly hain – jaise apne hi family ke saath travel kar rahe ho. </p>
            </div>

            {/* Card 4 */}
            <div className="bg-yellow-100/50 dark:bg-gray-800/50 p-6 rounded-xl shadow-md flex flex-col items-center justify-center text-center border border-yellow-200/30 hover:border-yellow-400/50 transition-all duration-300 h-84 max-w-xs mx-auto">
              <Award className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mb-2" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>
                City tour or shopping
              </h3>
              <p className="text-xs text-gray-700 dark:text-gray-300">Naye sheher mein travel karte waqt prices ko lekar tension hoti hai? Hum aapko bilkul fair aur reasonable rates pe service denge, jo aapke budget mein fit ho. Koi hidden charges nahi.</p>
            </div>
          </div>

          {/* IMAGE 1 (bottom-right) */}
          <div data-aos="slide-left" data-aos-duration="1500" className="w-full h-84 order-1 lg:order-2 flex items-center justify-center group relative overflow-hidden">
            <img
              src="https://www.citypng.com/public/uploads/preview/hd-london-cab-taxi-real-car-png-11663630033rv9zgmbcqx.png"
              alt="Our Mission Image"
              className="w-full h-full object-contain rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
            {/* Top-left L-shape */}
            <div className="absolute top-0 left-26.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 ease-out group-hover:w-[52%] transform origin-left"></div>
            <div className="absolute top-0 left-26.5 h-0 w-[2px] bg-yellow-400 transition-all duration-300 ease-out group-hover:h-[52%] transform origin-top"></div>
            {/* Bottom-right L-shape */}
            <div className="absolute bottom-0 right-26.5 w-0 h-[2px] bg-yellow-400 transition-all duration-300 ease-out group-hover:w-[52%] transform origin-right"></div>
            <div className="absolute bottom-0 right-26.5 h-0 w-[2px] bg-yellow-400 transition-all duration-300 ease-out group-hover:h-[52%] transform origin-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;