import { useState } from "react";
import NavbarWhite from "../components/NavbarWhite";

function Events() {
  const [activeDay, setActiveDay] = useState(1);

  const speakers = [
    {
      name: "DR. TANU JAIN",
      image: "/images/tanu_jain.png",
      title: "Former IAS Officer & UPSC Mentor Associate Director, Defence, Research and Development Organization (DRDO), Founder Tathastu ICS",
    },
    {
      name: "Dr. GAJENDRA PUROHIT",
      image: "/images/gajendra_purohit.png",
      title: "Founder-MathsCare",
      bgColor: "bg-yellow-400",
    },
    {
      name: "Swattik Chakraborty",
      image: "/images/swattik.png",
      title: "Founder, Skippi",
      bgColor: "bg-[#8B4513]",
    },
    {
      name: "Riten Debnath",
      image: "/images/riten.png",
      title: "Founder Fuler",
      bgColor: "bg-[#8B4513]",
    },
  ];

  const schedule = {
    1: [
      {
        title: "Inauguration",
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
    ],
    2: [
      {
        title: "Speaker Session",
        image: "/images/schedule_img_1.png",
        location: "Auditorium",
        organizer: "Esteemed Directors",
      },
      {
        title: "Panel Discussion",
        image: "/images/schedule_img_2.png",
        location: "Respective Department",
        organizer: "Respective HODs and Team",
      },
      {
        title: "Guest lecture",
        image: "/images/schedule_img_3.png",
        location: "Auditorium",
        organizer: "Guest Speakers",
      },
      {
        title: "Project Exhibition",
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
    ],
  };

  return (
    <div className="min-h-screen bg-white pt-20 sm:pt-24">
      <NavbarWhite />

      {/* Speakers Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-5xl font-bold text-center text-green-600 mb-6 sm:mb-12">
            SPEAKERS
          </h2>

          {/* Speakers Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6">
            {speakers.map((speaker, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`relative w-28 h-28 sm:w-44 sm:h-44 rounded-lg overflow-hidden ${speaker.bgColor || ''}`}>
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm sm:text-lg font-bold mt-3 sm:mt-4">
                  {speaker.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 max-w-[160px] sm:max-w-xs min-h-[60px] sm:min-h-[80px]">
                  {speaker.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-10 sm:py-16 bg-gray-50 px-4 sm:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Day Tabs */}
          <div className="flex gap-5 sm:gap-8 mb-6 sm:mb-12 border-b border-gray-200 justify-center">
            {[1, 2].map((day) => (
              <button
                key={day}
                className={`text-lg sm:text-2xl font-bold pb-2 sm:pb-4 border-b-4 ${activeDay === day ? "text-green-600 border-green-600" : "text-gray-400 border-transparent"}`}
                onClick={() => setActiveDay(day)}
              >
                Day {day}
              </button>
            ))}
          </div>

          {/* Schedule Items */}
          <div className="space-y-5 sm:space-y-6">
            {schedule[activeDay].map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-5 sm:pb-6">
                <div className="flex items-center gap-3 sm:gap-5">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold">
                    {item.title}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 mb-1 text-xs sm:text-sm">{item.organizer}</p>
                  <p className={`${item.isParticipation ? 'text-green-600 font-semibold' : 'text-gray-500'} text-xs sm:text-sm`}>
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
