import { useState } from "react";

function FeedbackSection() {
  const [isOpen, setIsOpen] = useState(false);
  const googleFormLink = "https://forms.gle/YOUR_GOOGLE_FORM_LINK";

  return (
    <section className="py-12 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          YOUR <span className="text-green-600">INSIGHTS</span> MATTER
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Help us shape the future by sharing your valuable feedback.
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 text-lg font-semibold text-white bg-green-700 rounded-lg shadow hover:bg-green-800 transition"
        >
          Share Feedback
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold">Feedback Form</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800">&times;</button>
            </div>
            <iframe
              src={googleFormLink}
              className="flex-grow w-full border-none rounded-b-lg"
              title="Feedback Form"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeedbackSection;
