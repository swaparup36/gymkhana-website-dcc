import Navbar from "../components/Navbar";

function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero_bg.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full">
          {/* Navbar */}
          <Navbar />

          {/* Hero Text */}
          <div className="absolute bottom-24 left-8 md:left-16 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              INDUSTRY TECHNICAL ACADEMIA
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-8">
              CONCLAVE:2025
            </h2>
            <p className="text-xl md:text-2xl text-white font-semibold">
              "VIKSIT BHARAT 2047 THROUGH VIKSIT NORTH-EAST"
            </p>
          </div>
        </div>
      </div>

      {/* From The Host Section */}
      <section className="py-16 px-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-6 mb-8">
            <img src="/images/nita_logo.png" alt="NITA Logo" className="w-32 h-32" />
            <div className="ml-4">
              <h2 className="text-5xl font-bold text-black mb-2">FROM THE HOST</h2>
              <h3 className="text-3xl font-semibold text-green-600">NATIONAL INSTITUTE OF TECHNOLOGY AGARTALA</h3>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 text-lg">
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

      {/* About The Conclave Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12">
            ABOUT THE <span className="text-green-400">CONCLAVE</span>
          </h2>
          
          <div className="max-w-6xl mx-auto text-lg leading-relaxed">
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

      {/* Esteemed Presence Section */}
      <section className="relative py-16 overflow-hidden">
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

        <div className="container mx-auto px-28 relative z-10">
            <h2 className="text-5xl font-bold text-center mb-16">
                <span className="text-green-600">ESTEEMED</span> PRESENCE
            </h2>

            {/* Governor */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#FF9933] shadow-xl">
                <img 
                    src="/images/indasena_reddy.png" 
                    alt="Shri N. Indasena Reddy"
                    className="w-full h-full object-cover"
                />
                </div>
                <div className="md:max-w-4xl">
                <h3 className="text-4xl font-bold text-green-600 mb-2">Shri N. Indasena Reddy</h3>
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">Hon'ble Governor of Tripura</h4>
                <p className="text-gray-700 text-lg text-justify">
                    We are honored to welcome the Hon'ble Governor of Tripura to the Industry 
                    Technical Academia Conclave 2025, hosted by NIT Agartala. Your esteemed 
                    presence at this prestigious gathering of industry leaders, academicians, and 
                    innovators will inspire collaboration and drive forward
                </p>
                </div>
            </div>

            {/* Chief Minister */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-24">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#138808] shadow-xl">
                <img 
                    src="/images/manik_saha.png" 
                    alt="Dr. Manik Saha"
                    className="w-full h-full object-cover"
                />
                </div>
                <div className="md:max-w-4xl text-right">
                <h3 className="text-4xl font-bold text-green-600 mb-2">Dr. Manik Saha</h3>
                <h4 className="text-2xl font-semibold text-gray-800 mb-4">Hon'ble Chief Minister of Tripura</h4>
                <p className="text-gray-700 text-lg text-justify">
                    We are privileged to welcome the Hon'ble Chief Minister of Tripura to the 
                    Industry Technical Academia Conclave 2025, hosted by NIT Agartala. Your 
                    presence at this esteemed platform reinforces our shared commitment to 
                    innovation, industry-academia collaboration, and technological advancement. 
                    We look forward to your valuable insights as we work together to drive growth, 
                    skill development, and a brighter future for the region
                </p>
                </div>
            </div>

            {/* Cabinet Minister */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-[#FF9933] shadow-xl">
                    <img 
                        src="/images/sukanta_majumdar.png" 
                        alt="Shri N. Indasena Reddy"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="md:max-w-4xl">
                    <h3 className="text-4xl font-bold text-green-600 mb-2">Dr. Sukanta Majumdar</h3>
                    <h4 className="text-2xl font-semibold text-gray-800 mb-4">Hon’ble Union Cabinet Minister of State for the Development of North Eastern Region and Union Cabinet Minister of State for Education</h4>
                    <p className="text-gray-700 text-lg text-justify">
                        We are honored to welcome our esteemed Union Cabinet Minister to Industry Technical Academia Conclave 2025 at NIT Agartala. Your presence strengthens our mission to foster industry-academia collaboration, innovation, and growth.
                    </p>
                </div>
            </div>

        </div>
      </section>

      {/* Associated Institutes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-20">
            <h2 className="text-5xl font-bold text-center mb-20">
                ASSOCIATED <span className="text-green-600">INSTITUTES</span>
            </h2>

            <div className="grid grid-cols-1 mb-16 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center justify-items-center">
                {/* VNIT Nagpur */}
                <img 
                    src="/images/vnit_nagpur.png" 
                    alt="VNIT Nagpur"
                    className="w-48 h-48 object-contain"
                />
                
                {/* IIM Shillong */}
                <img 
                    src="/images/iim_shillong.png" 
                    alt="IIM Shillong"
                    className="w-48 h-48 object-contain"
                />
                
                {/* IIT Guwahati */}
                <img 
                    src="/images/iit_guwahati.png" 
                    alt="IIT Guwahati"
                    className="w-48 h-48 object-contain"
                />
                
                {/* NIT AP */}
                <img
                    src="/images/nit_ap.png" 
                    alt="NIT Arunachalpradesh"
                    className="w-48 h-48 object-contain"
                />
            </div>

            <div className="grid grid-cols-1 mb-16 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center justify-items-center">
                {/* NIT SIKKIM */}
                <img 
                    src="/images/nit_sikkim.png" 
                    alt="NIT SIKKIM"
                    className="w-48 h-48 object-contain"
                />
                
                {/* NIT NAGALAND */}
                <img 
                    src="/images/nit_nagaland.png" 
                    alt="NIT NAGALAND"
                    className="w-48 h-48 object-contain"
                />
                
                {/* NIT MIZORAM */}
                <img
                    src="/images/nit_mizoram.png" 
                    alt="NIT MIZORAM"
                    className="w-48 h-48 object-contain"
                />
                
                {/* NIT MANIPUR */}
                <img
                    src="/images/nit_manipur.png" 
                    alt="NIT MANIPUR"
                    className="w-48 h-48 object-contain"
                />
            </div>

            <div className="grid grid-cols-1 mb-16 md:grid-cols-2 lg:grid-cols-4 gap-12 items-center justify-items-center">
                {/* NIT MEGHALAYA */}
                <img 
                    src="/images/nit_meghalaya.png" 
                    alt="NIT MEGHALAYA"
                    className="w-48 h-48 object-contain"
                />
                
                {/* NIT SILCHAR */}
                <img 
                    src="/images/nit_silchar.png" 
                    alt="NIT SILCHAR"
                    className="w-48 h-48 object-contain"
                />
                
                {/* IIT(ISM) DHANBAD */}
                <img
                    src="/images/iit_ism_dhanbad.png" 
                    alt="IIT(ISM) DHANBAD"
                    className="w-48 h-48 object-contain"
                />
                
                {/* IIIT MANIPUR */}
                <img
                    src="/images/iiit_manipur.png" 
                    alt="IIIT MANIPUR"
                    className="w-48 h-48 object-contain"
                />
            </div>

            <div className="flex justify-center items-center">
                <div className="mb-10 gap-12 w-[65%] flex items-center justify-between">
                    {/* IIIT AGARTALA */}
                    <img 
                        src="/images/iiit_agartala.png" 
                        alt="IIIT AGARTALA"
                        className="w-48 h-48 object-contain"
                    />
                    
                    {/* IIIT _ */}
                    <img 
                        src="/images/iiit_.png" 
                        alt="IIIT _"
                        className="w-48 h-48 object-contain"
                    />
                    
                    {/* IIT BHU */}
                    <img
                        src="/images/iit_bhu.png" 
                        alt="IIT BHU"
                        className="w-48 h-48 object-contain"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 bg-white border-t border-2 border-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">YOUR FEEDBACKS ARE WELCOMED</h2>
          
          <div className="relative inline-block">
            <button className="bg-[#1B3129] text-white font-semibold py-4 px-12 rounded-lg shadow-lg hover:bg-[#264439] transition-colors">
              FEEDBACK BOX
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;