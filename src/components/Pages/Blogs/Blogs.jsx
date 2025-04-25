import React from "react";

const Blogs = () => {
  const faq = [
    {
      question: "What is the purpose of this website?",
      answer:
        "The purpose of this website is to provide a platform for users to book appointments with doctors and access health-related information.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment by selecting a doctor from the list and choosing a suitable time slot.",
    },
    {
      question: "What should I do if I have a medical emergency?",
      answer:
        "In case of a medical emergency, please call your local emergency services or go to the nearest hospital.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact customer support through the 'Contact Us' page or by emailing us at support@example.com.", // Added a placeholder email
    },
    {
      question: "What is useState and how does it work in React?",
      answer:
        "useState is a React Hook that allows you to add state variables to functional components. It returns a pair: the current state value and a function that lets you update it. When the update function is called, React re-renders the component.",
    },
    {
      question: "What is the purpose of useEffect in React?",
      answer:
        "useEffect is a React Hook that lets you perform side effects in functional components. These can include data fetching, setting up subscriptions, manually changing the DOM, and more. It runs after every render by default.",
    },
    {
      question: "What is a custom hook in React and when should you use one?",
      answer:
        "A custom hook is a JavaScript function whose name starts with 'use' and that may call other Hooks. You should use custom hooks to extract component logic with stateful behavior that can be reused across multiple components.",
    },
    {
      question:
        "What is the difference between controlled and uncontrolled components? Which one is better?",
      answer:
        "In controlled components, form elements' values are controlled by React state. Uncontrolled components rely on the DOM to store their values, accessed using refs. Controlled components are generally preferred for better data flow and validation.",
    },
    {
      question: "Tell us something about useFormStatus() (explore and explain)",
      answer:
        "useFormStatus is a React Hook (introduced in React 18) that provides information about the submission status of a `<form>`. It returns an object containing properties like `submitting` (a boolean indicating if the form is being submitted), `pending` (similar to `submitting`), `submission` (the FormData or null after submission), and `data` (the form data if submission was successful). It's useful for providing feedback to the user during form submission.",
    },
  ];
  return (
    <div className="px-20 my-3">
      <h1 className="my-5 text-center font-bold text-2xl">Blogs Page</h1>
      <div>
        {faq.map((item, index) => (
          <div
            key={index}
            className="mb-4 px-5 py-7 bg-white rounded-md shadow-sm"
          >
            <h3 className="text-lg font-semibold">{item.question}</h3>
            <div className="w-full border-t border-dotted border-gray-300 my-2"></div>
            <p className="mt-2 text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
