import { useState } from "react";

const faqs = [
  {
    q: "What is React?",
    a: "React is a JavaScript library used to build user interfaces.",
  },
  {
    q: "What is a component?",
    a: "A component is a reusable piece of UI in React.",
  },
  {
    q: "What is useState?",
    a: "useState is a React hook used to manage state in a functional component.",
  },
];

const App = () => {
  const [open, setOpen] = useState(null);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">
          Frequently Asked Questions
        </h1>

        {faqs.map((item, index) => (
          <div
            key={index}
            className="mb-4 border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left 
              hover:bg-indigo-50 transition-all duration-300"
            >
              <span className="font-semibold text-gray-800">
                {item.q}
              </span>

              <span
                className={`text-2xl font-bold text-indigo-500 transform transition-transform duration-300
                ${open === index ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>

            {open === index && (
              <div className="px-5 py-4 text-gray-600 bg-gray-50 animate-fadeIn">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;