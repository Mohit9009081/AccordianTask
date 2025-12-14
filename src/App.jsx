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

  const [open, setOpen] = useState(null)

const handletoggle = (index) => {
  setOpen(open === index ? null : index)

}
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">FAQ</h1>
      <div className="accordion">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`border rounded mb-4 overflow-hidden transition-all duration-300 ${open === index ? 'bg-gray-100 shadow-lg' : 'bg-white'}`}
          >
            <button
              className="w-full flex justify-between items-center px-4 py-3 text-left focus:outline-none"
              onClick={() => handletoggle(index)}
              aria-expanded={open === index}
              aria-controls={`faq-panel-${index}`}
            >
              <span className="font-medium">{item.q}</span>
              <span className="text-xl font-bold">{open === index ? '-' : '+'}</span>
            </button>
            <div
              id={`faq-panel-${index}`}
              className={`px-4 pb-3 text-gray-700 transition-all duration-300 ${open === index ? 'block' : 'hidden'}`}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App