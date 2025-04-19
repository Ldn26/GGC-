"use client";
// import React, { useState } from "react";

// const faqs = [
//   {
//     question: "What does Verco actually do?",
//     answer:
//       "We offer digital tools and operational support for waste management, recycling programs, and eco-education initiatives.",
//   },
//   {
//     question: "How can I change my subscription plan?",
//     answer:
//       "Once you're signed in, head to your dashboard and go to “Billing” to manage or switch your plan.",
//   },
//   {
//     question: "Is it possible to download my data as a PDF?",
//     answer:
//       "Yes, you can export your data to PDF directly from your dashboard, based on your user profile.",
//   },
//   {
//     question: "Do you operate outside Algeria?",
//     answer:
//       "We’re currently focused on growing within Algeria, but we’re open to expanding internationally in the future.",
//   },
//   {
//     question: "Can Verco create a custom solution for my company?",
//     answer:
//       "Absolutely! We offer tailored services for businesses with specific needs or compliance requirements. Just reach out to us.",
//   },
// ];

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section
//       style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}
//     >
//       <h2
//         style={{
//           textAlign: "center",
//           fontSize: "2em",
//           marginBottom: "30px",
//           color: "#2c3e50",
//         }}
//       >
//         FAQ
//       </h2>
//       {faqs.map((faq, index) => (
//         <div
//           key={index}
//           style={{
//             marginBottom: "20px",
//             borderBottom: "1px solid #ccc",
//             paddingBottom: "10px",

//           }}
//         >
//           <h4
//             onClick={() => toggleFAQ(index)}
//             className="rounded-xl bg-[#1E5128] "
//             style={{
//               margin: 0,
//               fontSize: "1.1em",
//             //   backgroundColor: "#000",
//               color: "#fff",
//               padding: "10px",
//               cursor: "pointer",
//               transition: "background-color 0.3s",
//             }}
//           >
//             {faq.question}
//           </h4>
//           {openIndex === index && (
//             <p style={{ marginTop: "10px", color: "#444", lineHeight: 1.5 }}>
//               {faq.answer}
//             </p>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default FAQ;





import { useState } from 'react';

const faqs = [
  {
    question: 'What does Verco actually do?',
    answer: 'We offer digital tools and operational support for waste management, recycling programs, and eco-education initiatives.',
  },
  {
    question: 'How can I change my subscription plan?',
    answer: 'Once you\'re signed in, head to your dashboard and go to “Billing” to manage or switch your plan.',
  },
  {
    question: 'Is it possible to download my data as a PDF?',
    answer: 'Yes, you can export your data to PDF directly from your dashboard, based on your user profile.',
  },
  {
    question: 'Do you operate outside Algeria?',
    answer: 'We’re currently focused on growing within Algeria, but we’re open to expanding internationally in the future.',
  },
  {
    question: 'Can Verco create a custom solution for my company?',
    answer: 'Absolutely! We offer tailored services for businesses with specific needs or compliance requirements. Just reach out to us.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">FAQ</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-4 bg-black text-white rounded-lg overflow-hidden transition-all"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center px-6 py-4 font-semibold focus:outline-none hover:bg-gray-900"
          >
            <span>{faq.question}</span>
            <span
              className={`transform transition-transform ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden ${
              activeIndex === index ? 'max-h-96 px-6 pb-4' : 'max-h-0'
            } bg-gray-100 text-gray-800`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
}