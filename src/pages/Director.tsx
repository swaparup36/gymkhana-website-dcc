import NavbarWhite from "../components/NavbarWhite";

const directors = [
  { name: "Prof. Devender Jalihal", college: "IIT Madras", image: "/directors/DevG.png", title: "Director" },
  { name: "Prof. Pinakeshwar Mahanta", college: "NIT Arunachal", image: "/directors/Pinak.png", title: "Director" },
  { name: "Prof. Dipa Sanyal", college: "IIT Indore", image: "/directors/Dvln.png", title: "Director" },
  { name: "Prof. Hemal A Mamtura", college: "SVNIT Surat", image: "/directors/Mohan.png", title: "Director" },
  { name: "Prof. Dilip Kumar Batyabyal", college: "NIT Durgapur", image: "/directors/Dilip.png", title: "Director" },
  { name: "Prof. Mahesh Chandra Govil", college: "NIT Sikkim", image: "/directors/Mahesh.png", title: "Director" },
  { name: "Prof. Sushilkumr Mishra", college: "IIITDM Jabalpur", image: "/directors/sukumar.png", title: "Director" },
  { name: "Prof. Dr. Krishnan Bhaskar", college: "IIT Ropar", image: "/directors/krish.png", title: "Director" },
  { name: "Prof. Sumit Kumar Patra", college: "NIT Agartala", image: "/directors/sk.png", title: "Director" },
  { name: "Prof. Goutam Sutradhar", college: "NIT Jamshedpur", image: "/directors/goutam.png", title: "Director" },
  { name: "Prof. S. Sundar", college: "NIT Trichy", image: "/directors/s.png", title: "Director" },
  { name: "Prof. Abhay Kumar", college: "IIT BHU", image: "/directors/abhay.png", title: "Director" },
  { name: "Prof. (Dr.) A. Rajagopal", college: "IISER Tirupati", image: "/directors/A.png", title: "Director" }
];

function Sponsor() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 bg-white">
      <NavbarWhite />

      {/* Directors Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-green-600 mb-12 sm:mb-16">
            DIRECTORS
          </h2>

          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-6 sm:gap-10 max-w-5xl mx-auto mb-10 sm:mb-14">
              {directors.map((director, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img src={director.image} alt={director.name} className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-lg bg-gray-300" />
                  <p className="mt-2 text-center text-sm font-medium text-gray-700">{director.name}</p>
                  <p className="text-center text-xs text-gray-500">{director.title}, {director.college}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sponsor;
