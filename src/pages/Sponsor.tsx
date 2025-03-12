import NavbarWhite from "../components/NavbarWhite";

function Sponsor() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarWhite />

      {/* Speakers Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-green-600 mb-16">
            SPONSORS
          </h2>

          <div className="flex flex-col justify-center w-full items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto mb-14">
              {Array.from([0, 1, 2, 3]).map((index) => (
                <div key={index} className="flex flex-col items-center bg-gray-300 w-52 h-52 rounded-lg">

                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto mb-14">
              {Array.from([0, 1, 2, 3]).map((index) => (
                <div key={index} className="flex flex-col items-center bg-gray-300 w-52 h-52 rounded-lg">

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sponsor;
