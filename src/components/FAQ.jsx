import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/20 py-6">
            <button
                className="w-full text-left flex justify-between items-center text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-lg">{question}</span>
                <span className="text-2xl">{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <p className="mt-4 text-gray-300">{answer}</p>}
        </div>
    );
};

const faqs = [
    {
        question: "What types of AI solutions do you offer?",
        answer: "We offer a wide range of AI solutions including workflow automation, data analytics, predictive modeling, and natural language processing tailored to your business needs."
    },
    {
        question: "How quickly can I see results from AI implementation?",
        answer: "Results can be seen in as little as a few weeks, depending on the complexity of the project. We focus on delivering quick wins and scalable solutions."
    },
    {
        question: "Is AI integration complicated for my existing systems?",
        answer: "No, our team ensures a seamless integration process with your existing systems. We handle all the technical aspects, so you don't have to."
    },
    {
        question: "Do you provide ongoing support after deployment?",
        answer: "Yes, we provide comprehensive ongoing support and maintenance to ensure your AI systems are running optimally and continue to deliver value."
    }
];

export default function FAQ() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 sm:py-16 md:py-24">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                {/* Left Column */}
                <div className="flex-1 text-left mb-8 md:mb-0">
                    <span className="text-xs sm:text-sm text-gray-300 font-semibold uppercase mb-2 block">Your Questions Answered</span>
                    <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 mb-2 sm:mb-4">FAQs & Support</h2>
                    <p className="text-xs xs:text-sm sm:text-lg text-gray-300 mb-4 sm:mb-8">
                        Not finding what you're looking for?
                    </p>
                    <button className="bg-zinc-700 text-white px-4 sm:px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition text-xs sm:text-base">Get Started Now</button>
                </div>
                {/* Right Column (Accordion) */}
                <div className="flex-1">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}
