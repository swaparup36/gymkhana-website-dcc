import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import FeedbackSection from "./Feedback";

function Landing() {
  // State to track the current background image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images to cycle through
  const backgroundImages = [
    '/images/hero_bg.webp',
    '/images/cycle1.png',
    '/images/cycle2.png',
    '/images/cycle3.png'
  ];

  // Effect to cycle through images automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative h-screen">
        <div
          className="absolute inset-0 z-0 transition-opacity duration-1000 md:hidden"
          style={{
            backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
            backgroundSize: 'contain',
            backgroundPosition: 'top', // Adjusted to bring the image a bit higher
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'black',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Desktop View (cover) */}
        <div
          className="absolute inset-0 z-0 transition-opacity duration-1000 hidden md:block"
          style={{
            backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'black',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full">
          {/* Navbar */}
          <Navbar />

          {/* Hero Text - Reduced text sizes and spacing for mobile */}
          <div className="absolute bottom-8 md:bottom-24 left-2 md:left-16 max-w-xs sm:max-w-md md:max-w-4xl px-2 sm:px-0">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-1 md:mb-4">
              INDUSTRY TECHNICAL ACADEMIA
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-green-400 mb-2 md:mb-8">
              CONCLAVE:2025
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-white font-semibold">
              "VIKSIT BHARAT 2047 THROUGH VIKSIT NORTH-EAST"
            </p>
          </div>
        </div>
      </div>

      {/* From The Host Section - Reduced padding and spacing */}
      <section className="py-6 md:py-16 px-3 sm:px-8 md:px-16 lg:px-24 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-6 mb-4 md:mb-8">
            <img src="/images/nita_logo.png" alt="NITA Logo" className="w-16 h-16 md:w-32 md:h-32" />
            <div className="text-center sm:text-left mt-2 sm:mt-0 sm:ml-4">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-1 md:mb-2">FROM THE HOST</h2>
              <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold text-green-600">NATIONAL INSTITUTE OF TECHNOLOGY AGARTALA</h3>
            </div>
          </div>

          <div className="space-y-2 md:space-y-4 text-gray-700 text-sm md:text-lg">
            <p>
              <span className="text-green-600">NIT Agartala Proudly Hosts ITAC 2025</span> – A Convergence of Innovation, Industry, and Academia
            </p>

            <p>
              With great pride and enthusiasm, NIT Agartala welcomes you to the Industrial, Technical, and Academic
              Conclave (ITAC) 2025, a landmark event designed to foster collaboration between academia, industry,
              policymakers, and research pioneers.
            </p>

            <p>
              As a premier institute dedicated to excellence in technology, research, and innovation, we take immense
              pleasure in hosting this transformative platform, where thought leaders, industry experts, and aspiring
              minds come together to bridge the gap between academic knowledge and real-world applications.
            </p>

            <p>
              With the theme <span className="text-green-600">"Viksit Northeast: Catalyzing Growth through Industry-Academia Synergy"</span>,
              ITAC 2025 aims to drive impactful discussions, cutting-edge exhibitions, and forward-thinking initiatives
              that will shape the future of technology and industrial growth.
            </p>

            <p>
              Join us in this journey of innovation and progress as we take a step toward making students industry-ready
              and fostering a self-reliant, technologically advanced India.
            </p>

            <p className="font-semibold">
              Welcome to ITAC 2025 at NIT Agartala!
            </p>
          </div>
        </div>
      </section>

      {/* About The Conclave Section - Reduced padding */}
      <section className="py-6 md:py-16 bg-black text-white">
        <div className="container mx-auto px-3 md:px-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-12">
            ABOUT THE <span className="text-green-400">CONCLAVE</span>
          </h2>

          <div className="max-w-6xl mx-auto text-sm md:text-lg leading-relaxed px-2 sm:px-4">
            <p>
              <span className="text-green-400">The Industrial, Technical, and Academic Conclave (ITAC) 2025</span> at <span className="text-green-400">NIT Agartala</span> is a pioneering initiative
              aimed at bridging the gap between academia and industry, fostering innovation, and preparing
              students for real-world challenges. With the theme <span className="text-green-400">"Empowering Minds, Engineering Futures"</span>, ITAC
              aspires to create a dynamic platform where students, academicians, and industry leaders converge to
              exchange knowledge, ideas, and technological advancements. The conclave will feature expert talks,
              industrial panel discussions, technical workshops, hackathons, startup pitch battles, case study
              competitions, and an industrial expo showcasing cutting-edge innovations. Additionally, hands-on
              training sessions and mentorship programs will equip students with industry-relevant skills, enhancing
              their technical acumen, business acumen, and problem-solving abilities. By fostering collaboration
              between corporates, researchers, and aspiring entrepreneurs, ITAC aims to drive technological
              transformation, industrial growth, and career readiness, positioning students at the forefront of
              innovation and excellence in the ever-evolving industrial landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Esteemed Presence Section - Reduced spacing */}
      <section className="relative py-6 md:py-16 overflow-hidden">
        {/* Indian Flag-inspired Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/images/indian_flag_bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
          </div>
          <div className="absolute inset-0 bg-white/80"></div>
        </div>

        <div className="container mx-auto px-3 sm:px-8 md:px-16 lg:px-28 relative z-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-16">
            <span className="text-green-600">ESTEEMED</span> PRESENCE
          </h2>

          {/* Governor - Reduced image size and spacing */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 mb-6 md:mb-16">
            <div className="w-28 h-28 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#FF9933] shadow-xl">
              <img
                src="/images/indasena_reddy.png"
                alt="Shri N. Indasena Reddy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:max-w-4xl mt-2 md:mt-0 text-center md:text-left">
              <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-1 md:mb-2">Shri N. Indasena Reddy</h3>
              <h4 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">Hon'ble Governor of Tripura</h4>
              <p className="text-gray-700 text-xs md:text-lg text-justify">
                We are honored to welcome the Hon'ble Governor of Tripura to the Industry
                Technical Academia Conclave 2025, hosted by NIT Agartala. Your esteemed
                presence at this prestigious gathering of industry leaders, academicians, and
                innovators will inspire collaboration and drive forward
              </p>
            </div>
          </div>

          {/* Chief Minister - Reduced image size and spacing */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-3 md:gap-8 mb-6 md:mb-16">
            <div className="w-28 h-28 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#138808] shadow-xl">
              <img
                src="/images/manik_saha.png"
                alt="Dr. Manik Saha"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:max-w-4xl mt-2 md:mt-0 text-center md:text-right">
              <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-1 md:mb-2">Dr. Manik Saha</h3>
              <h4 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">Hon'ble Chief Minister of Tripura</h4>
              <p className="text-gray-700 text-xs md:text-lg text-justify">
                We are privileged to welcome the Hon'ble Chief Minister of Tripura to the
                Industry Technical Academia Conclave 2025, hosted by NIT Agartala. Your
                presence at this esteemed platform reinforces our shared commitment to
                innovation, industry-academia collaboration, and technological advancement.
                We look forward to your valuable insights as we work together to drive growth,
                skill development, and a brighter future for the region
              </p>
            </div>
          </div>

          {/* Cabinet Minister - Reduced image size and spacing */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 mb-6 md:mb-16">
            <div className="w-28 h-28 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#FF9933] shadow-xl">
              <img
                src="/images/sukanta_majumdar.png"
                alt="Dr. Sukanta Majumdar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:max-w-4xl mt-2 md:mt-0 text-center md:text-left">
              <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-green-600 mb-1 md:mb-2">Dr. Sukanta Majumdar</h3>
              <h4 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-2 md:mb-4">Hon'ble Union Cabinet Minister of State for the Development of North Eastern Region and Union Cabinet Minister of State for Education</h4>
              <p className="text-gray-700 text-xs md:text-lg text-justify">
                We are honored to welcome our esteemed Union Cabinet Minister to Industry Technical Academia Conclave 2025 at NIT Agartala. Your presence strengthens our mission to foster industry-academia collaboration, innovation, and growth.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Associated Institutes Section - Smaller logos for mobile */}
      <section className="py-6 md:py-16 bg-white">
        <div className="container mx-auto px-2 sm:px-8 md:px-16 lg:px-20">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-4 md:mb-16">
            ASSOCIATED <span className="text-green-600">INSTITUTES</span>
          </h2>

          {/* Row 1 - Smaller images on mobile */}
          <div className="grid grid-cols-4 gap-1 sm:gap-4 md:gap-8 mb-3 md:mb-12 items-center justify-items-center">
            <img src="/images/iit_guwahati.png" alt="IIT Guwahati" className="w-12 h-12 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-contain" />
            <img src="/images/iit_ism_dhanbad.png" alt="IIT(ISM) Dhanbad" className="w-12 h-12 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-contain" />

            <img src="/images/nit_ap.png" alt="NIT Arunachal Pradesh" className="w-12 h-12 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-contain" />
            <img src="/images/nitJam.png" alt="NIT Jamshedpur" className="w-12 h-12 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-contain" />
          </div>

          {/* Row 2 - More NITs in alphabetical order */}
          <div className="grid grid-cols-4 gap-1 sm:gap-4 md:gap-8 mb-3 md:mb-12 items-center justify-items-center">
            <img src="/images/nit_manipur.png" alt="NIT Manipur" className="w-12 h-12 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-contain" />
            <img src="/images/nit_meghalaya.png" alt="NIT Meghalaya" className="w-12 h-12 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-contain" />
            <img src="/images/nit_mizoram.png" alt="NIT Mizoram" className="w-12 h-12 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-contain" />
            <img src="/images/nit_nagaland.png" alt="NIT Nagaland" className="w-12 h-12 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-contain" />
          </div>

          {/* Row 3 - Remaining NITs, then IIITs */}
          <div className="grid grid-cols-4 gap-1 sm:gap-4 md:gap-8 mb-3 md:mb-12 items-center justify-items-center">
            <img src="/images/nit_sikkim.png" alt="NIT Sikkim" className="w-12 h-12 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-contain" />
            <img src="/images/nit_silchar.png" alt="NIT Silchar" className="w-12 h-12 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-contain" />

            <img src="/images/iiit_.png" alt="IIIT" className="w-12 h-12 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-contain" />
            <img src="/images/iiit_manipur.png" alt="IIIT Manipur" className="w-12 h-12 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 object-contain" />
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <FeedbackSection />
    </div>
  );
}

export default Landing;
