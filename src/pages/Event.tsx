import NavbarWhite from "../components/NavbarWhite";

function Events() {
    const speakers = [
        {
        name: "DR. TANU JAIN",
        image: "/images/tanu_jain.png",
        title: "Former IAS Officer & UPSC Mentor Associate Director, Defence, Research and Development Organization (DRDO), Founder Tathastu ICS",
        },
        {
        name: "Dr.GAJENDRA PUROHIT",
        image: "/images/gajendra_purohit.png",
        title: "Founder-MathsCare",
        bgColor: "bg-yellow-400",
        },
        {
        name: "SANDEEP JAIN",
        image: "/images/sandeep_jain.png",
        title: "Co-founder, Geeks for Geeks",
        bgColor: "bg-[#8B4513]",
        },
    ];

    const speakers2 = [
        {
            name: "Ravi Kabra",
            image: "/images/ravi_kabra.png",
            title: "Founder Skippi",
            bgColor: "bg-[#8B4513]",
        },
        {
            name: "SAURABH MUNJAL",
            image: "/images/saurabh_munjal.png",
            title: " Co-Founder & CEO of Lahori Zeera, Times 40 under 40",
            bgColor: "bg-[#8B4513]",
        },
    ]

    const scheduleItems = [
        {
            title: "Inaugartion",
            image: "/images/schedule_img_1.png",
            location: "Auditorium",
            organizer: "Esteemed Directors",
        },
        {
            title: "Departmental Tour",
            image: "/images/schedule_img_2.png",
            location: "Respective Department",
            organizer: "Respective HODs and Team",
        },
        {
            title: "Panel Discussion",
            image: "/images/schedule_img_3.png",
            location: "Auditorium",
            organizer: "Guest Speakers",
        },
        {
            title: "Hackathon",
            image: "/images/schedule_img_3.png",
            location: "Participate →",
            organizer: "Open to all",
            isParticipation: true,
        },
        {
            title: "Cultural Night",
            image: "/images/schedule_img_4.png",
            location: "Sports Complex",
            organizer: "Organizing Committee",
        },
    ];

  return (
    <div className="min-h-screen bg-white">
        <NavbarWhite />
      
        {/* Speakers Section */}
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center text-green-600 mb-16">
                    SPEAKERS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-14">
                    {speakers.map((speaker, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className={`relative w-80 h-80 rounded-lg overflow-hidden ${speaker.bgColor || ''}`}>
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mt-6 mb-2 text-center">
                                {speaker.name}
                            </h3>
                            <p className="text-center text-gray-700 max-w-xs">
                                {speaker.title}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center">
                    <div className="flex justify-between items-center w-[50%] mx-auto">
                        {speakers2.map((speaker, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className={`relative w-80 h-80 rounded-lg overflow-hidden ${speaker.bgColor || ''}`}>
                                    <img
                                        src={speaker.image}
                                        alt={speaker.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mt-6 mb-2 text-center">
                                    {speaker.name}
                                </h3>
                                <p className="text-center text-gray-700 max-w-xs">
                                    {speaker.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Schedule Section */}
        <section className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
            {/* Day Tabs */}
            <div className="flex gap-8 mb-12 border-b border-gray-200">
                <button className="text-3xl font-bold text-green-600 pb-4 border-b-4 border-green-600">
                Day 1
                </button>
                <button className="text-3xl font-bold text-gray-400 pb-4">
                Day 2
                </button>
            </div>

            {/* Schedule Items */}
            <div className="space-y-8">
                {scheduleItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-8">
                    <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-lg overflow-hidden">
                        <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <h3 className="text-2xl font-semibold">
                        {item.title}
                    </h3>
                    </div>
                    <div className="text-right">
                    <p className="text-gray-600 mb-1">{item.organizer}</p>
                    <p className={`${item.isParticipation ? 'text-green-600 font-semibold' : 'text-gray-500'}`}>
                        {item.location}
                    </p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
    </div>
  );
}

export default Events;