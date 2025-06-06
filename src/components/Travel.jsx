import React, { useState, useEffect, useRef } from "react";

const LuxuryTravel = () => {
  const gujaratPlaces = [
    {
      id: 1,
      name: "Jamnagar",
      subtitle: "The Jewel of Kathiawar",
      image: "https://www.trawell.in/admin/images/upload/133167934Jamnagar_Lakhota_Lake_and_Museum_Main.jpg",
      color: "from-orange-400 via-rose-400 to-pink-500",
      accentColor: "text-orange-400 dark:text-orange-300",
      bgAccent: "bg-orange-400",
      history: "Known as the 'Paris of Saurashtra', Jamnagar was founded by Jam Rawal in 1540. Famous for Lakhota Fort, Ranmal Lake, and being the world's largest oil refining hub.",
      facts: {
        founded: "1540 CE",
        founder: "Jam Rawal",
        famous: "Lakhota Fort, Oil Refineries",
        nickname: "Paris of Saurashtra"
      },
      highlights: [
        "Lakhota Palace floating on Ranmal Lake",
        "World's largest oil refining complex",
        "Khijadia Bird Sanctuary with 200+ species",
        "Bala Hanuman Temple with continuous Ram Dhun since 1964"
      ],
    },
    {
      id: 2,
      name: "Rajkot",
      subtitle: "Gandhi's Birthland",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      color: "from-blue-400 via-indigo-500 to-purple-600",
      accentColor: "text-blue-400 dark:text-blue-300",
      bgAccent: "bg-blue-400",
      history: "Rajkot is where Mahatma Gandhi spent his early years. Founded in 1612, it's known for Watson Museum, beautiful parks, and Indo-European architecture.",
      facts: {
        founded: "1612 CE",
        founder: "Thakur Saheb Vibhaji",
        famous: "Gandhi's Childhood, Watson Museum",
        nickname: "Cultural Capital of Saurashtra"
      },
      highlights: [
        "Watson Museum with colonial artifacts",
        "Kaba Gandhi No Delo - Gandhi's childhood home",
        "Race Course Ground - Asia's largest circular ground",
        "Jubilee Garden with beautiful landscapes"
      ],
    },
    {
      id: 3,
      name: "Junagadh",
      subtitle: "City of Ancient Forts",
      image: "https://www.mysoultravels.com/wp-content/uploads/2020/05/junagardh-trip-9-1536x1515.jpg",
      color: "from-emerald-400 via-teal-500 to-cyan-600",
      accentColor: "text-emerald-400 dark:text-emerald-300",
      bgAccent: "bg-emerald-400",
      history: "Ancient city dating back to 319 BC, famous for Uparkot Fort, Girnar Hills, and being the gateway to Gir National Park - home of Asiatic lions.",
      facts: {
        founded: "319 BC",
        founder: "Chandragupta Maurya",
        famous: "Uparkot Fort, Gir Lions",
        nickname: "Gateway to Gir"
      },
      highlights: [
        "Uparkot Fort with 2300 years of history",
        "Girnar Hill with sacred Jain and Hindu temples",
        "Mahabat Maqbara - stunning Indo-Islamic architecture",
        "Gir National Park - last refuge of Asiatic lions"
      ],
    },
    {
      id: 4,
      name: "Kutch",
      subtitle: "White Desert Paradise",
      image: "https://thetravelshots.com/wp-content/uploads/2021/04/Rann-of-kutch.jpg",
      color: "from-yellow-400 via-orange-500 to-red-500",
      accentColor: "text-yellow-400 dark:text-yellow-300",
      bgAccent: "bg-yellow-400",
      history: "The mystical Rann of Kutch transforms into a white salt desert during winters. Famous for handicrafts, vibrant culture, and the spectacular Rann Utsav festival.",
      facts: {
        founded: "Ancient times",
        founder: "Nature",
        famous: "White Rann, Handicrafts",
        nickname: "White Desert of India"
      },
      highlights: [
        "Great Rann of Kutch - world's largest salt desert",
        "Rann Utsav - India's biggest cultural festival",
        "Traditional handicrafts and mirror work",
        "Wild Ass Sanctuary with unique wildlife"
      ],
    },
    {
      id: 5,
      name: "Ahmedabad",
      subtitle: "Heritage City of India",
      image: "https://images.odishatv.in/uploadimage/library/16_9/16_9_5/IMAGE_1661694788.webp",
      color: "from-purple-400 via-pink-500 to-red-500",
      accentColor: "text-purple-400 dark:text-purple-300",
      bgAccent: "bg-purple-400",
      history: "Founded in 1411 by Sultan Ahmed Shah, Ahmedabad is India's first UNESCO World Heritage City. Famous for Sabarmati Ashram, pols, and vibrant textile heritage.",
      facts: {
        founded: "1411 CE",
        founder: "Sultan Ahmed Shah",
        famous: "Sabarmati Ashram, UNESCO Site",
        nickname: "Manchester of India"
      },
      highlights: [
        "Sabarmati Ashram - Gandhi's residence for 16 years",
        "First UNESCO World Heritage City of India",
        "Adalaj Stepwell - architectural marvel",
        "Traditional pols (heritage neighborhoods)"
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const infoRef = useRef(null);

  // Handle scroll manually
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsPaused(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentPlace = gujaratPlaces[currentIndex];

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === 0 ? gujaratPlaces.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev === gujaratPlaces.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 800);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    if (isPaused || !isPlaying) return;
    const interval = setInterval(() => {
      if (!isTransitioning) handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [isTransitioning, isPaused, isPlaying]);

  // Get visible items for Netflix-style display
  const getVisibleItems = () => {
    const items = [];
    const totalItems = gujaratPlaces.length;
    
    for (let i = currentIndex - 2; i <= currentIndex + 2; i++) {
      let index = i;
      if (index < 0) index = totalItems + index;
      if (index >= totalItems) index = index - totalItems;
      
      items.push({
        ...gujaratPlaces[index],
        originalIndex: index,
        position: i - currentIndex,
        isCenter: index === currentIndex
      });
    }
    
    return items;
  };

  const visibleItems = getVisibleItems();

  // Calculate transform values based on scroll
  const heroY = Math.min(scrollY * 0.25, 200);
  const heroOpacity = Math.max(1 - (scrollY / 600), 0);
  const heroScale = Math.min(1 + (scrollY / 6000), 1.1);

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-100/20 dark:via-purple-900/10 to-transparent"></div>
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-400 dark:bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      

      {/* Hero Section - Full Width Image Carousel */}
      <div
        ref={heroRef}
        className="relative w-full h-screen flex items-center justify-center"
        style={{ 
          transform: `translateY(${heroY}px) scale(${heroScale})`,
          opacity: heroOpacity
        }}
      >
        {/* Full Width Image Carousel Container */}
        <div className="relative w-full max-w-6xl mx-auto px-8 flex items-center justify-center">
          <div className="relative w-full h-[600px] flex items-center justify-center">
            {visibleItems.map((item, index) => {
              const isHovered = hoveredIndex === item.originalIndex;
              const isCurrent = item.isCenter;
              const zIndex = isCurrent ? 30 : isHovered ? 25 : 20 - Math.abs(item.position);
              
              let scale = 0.65;
              let translateX = item.position * 220;
              let opacity = 0.5;
              
              if (isCurrent) {
                scale = 1;
                translateX = 0;
                opacity = 1;
              } else if (isHovered && !isCurrent) {
                scale = 0.8;
                opacity = 0.85;
              }

              return (
                <div
                  key={`${item.originalIndex}-${currentIndex}`}
                  className="absolute cursor-pointer transition-all duration-600 ease-out"
                  style={{ 
                    zIndex,
                    transform: `translateX(${translateX}px) scale(${scale}) ${isHovered && !isCurrent ? 'translateY(-15px)' : ''}`,
                    opacity
                  }}
                  onClick={() => !item.isCenter && goToSlide(item.originalIndex)}
                  onMouseEnter={() => setHoveredIndex(item.originalIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-20 dark:opacity-30 blur-3xl scale-110 rounded-3xl ${isCurrent ? 'opacity-40' : 'opacity-15'}`}></div>
                  
                  {/* Image Container - Made Wider */}
                  <div className="relative w-96 h-[500px] rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Dark Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* City Name Overlay - Top of Image */}
                    <div className="absolute top-6 left-6 right-6 z-10">
                      <div className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-md rounded-2xl p-4 border border-white/20 dark:border-gray-700/50">
                        <h3 className="text-3xl font-bold text-white mb-2">{item.name}</h3>
                        <p className="text-base text-gray-200">{item.subtitle}</p>
                      </div>
                    </div>
                    
                    {/* Bottom Text Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 z-10">
                      <div className="bg-black/40 dark:bg-gray-900/60 backdrop-blur-md rounded-2xl p-4 border border-white/10 dark:border-gray-700/30">
                        <p className="text-base font-medium mb-2 text-white">{item.facts.nickname}</p>
                        <p className="text-sm text-gray-200">Gujarat, India • {item.facts.founded}</p>
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    {!item.isCenter && (
                      <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      </div>
                    )}
                  </div>

                  {/* Floating Elements */}
                  {item.isCenter && (
                    <>
                      <div className="absolute -top-12 -right-12 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 blur-md animate-spin" style={{ animationDuration: '20s' }}></div>
                      <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-40 blur-md animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30">
          <button
            onClick={handlePrev}
            className="p-3 rounded-xl bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-600 hover:from-yellow-600 hover:via-orange-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 dark:from-purple-400/20 to-pink-100/20 dark:to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <svg className="w-6 h-6 relative z-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30">
          <button
            onClick={handleNext}
            className="p-3 rounded-xl bg-gradient-to-r from-yellow-500 via-orange-500 to-amber-600 hover:from-yellow-600 hover:via-orange-600 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 dark:from-purple-400/20 to-pink-100/20 dark:to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <svg className="w-6 h-6 relative z-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex items-center gap-4">
            {gujaratPlaces.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative transition-all duration-500 hover:scale-125 active:scale-90 ${
                  index === currentIndex
                    ? "w-12 h-3 rounded-full"
                    : "w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-full hover:bg-gray-600 dark:hover:bg-gray-400"
                }`}
              >
                {index === currentIndex && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${currentPlace.color} rounded-full transition-all duration-500`} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Progress Ring */}
        <div className="absolute top-8 left-8 z-30">
          <div className="relative w-16 h-16">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="rgba(156, 163, 175, 0.3)"
                strokeWidth="2"
              />
              <path
                d="M18 2.0845a 15.9155 15.9155 0 0 1 0 31.831a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                style={{
                  strokeDasharray: `${(currentIndex + 1) / gujaratPlaces.length * 100}, 100`,
                  transition: 'stroke-dasharray 1s ease-out'
                }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-gray-700 dark:text-gray-300">{currentIndex + 1}/{gujaratPlaces.length}</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400">
          <span className="text-xs uppercase tracking-widest animate-pulse">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-400 dark:from-gray-500 to-transparent"></div>
        </div>
      </div>

      {/* Detailed Information Section */}
      <div
        ref={infoRef}
        className="relative py-32 px-8 border-t border-gray-200 dark:border-gray-800"
        style={{
          opacity: scrollY > 300 ? 1 : 0,
          transform: `translateY(${scrollY > 300 ? 0 : 50}px)`,
          transition: 'opacity 1s ease-out, transform 1s ease-out'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-bold mb-4">
              <span className={`bg-gradient-to-r ${currentPlace.color} bg-clip-text text-transparent`}>
                Discover
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Immerse yourself in the rich heritage and breathtaking beauty of Gujarat's most magnificent destinations.
            </p>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentPlace.highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
                style={{
                  animationDelay: `${index * 200}ms`,
                  opacity: scrollY > 400 ? 1 : 0,
                  transform: `translateY(${scrollY > 400 ? 0 : 30}px)`,
                  transition: 'all 0.8s ease-out'
                }}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentPlace.color} mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <p className="text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryTravel;