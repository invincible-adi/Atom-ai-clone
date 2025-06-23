import React from 'react';

const testimonials = [
    {
        name: "John",
        handle: "@johnsmstrategy",
        avatar: "https://i.pravatar.cc/48?u=john",
        testimonial: "Their AI solutions boosted our efficiency instantly! Handling complex data is now so simple.",
        company: "Founder of SM Strategy"
    },
    {
        name: "Robby",
        handle: "@robbygrow",
        avatar: "https://i.pravatar.cc/48?u=robby",
        testimonial: "The intelligent tools transformed our workflow! Managing projects feels effortless every day.",
        company: "Founder of Robby Grow"
    },
    {
        name: "Mike",
        handle: "@leadzpulses",
        avatar: "https://i.pravatar.cc/48?u=mike",
        testimonial: "AI-powered features saved us valuable time! Coordinating multiple tasks is smoother than ever.",
        company: "Founder of Leadz Pulse"
    }
];

const PeopleIcon = () => (
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="inline-block text-gray-400 mr-1"><path d="M7 8a3 3 0 116 0 3 3 0 01-6 0z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M2 15a5 5 0 0110 0v1H2v-1zm12 1v-1a7 7 0 00-14 0v1a1 1 0 001 1h12a1 1 0 001-1z" fill="currentColor" /></svg>
);
const XIcon = () => (
    <svg className="w-7 h-7 text-white/80 hover:text-white transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);

export default function Testimonials() {
    return (
        <section className="relative w-full bg-black py-16 md:py-24 px-4 md:px-12 flex flex-col items-center justify-center overflow-x-hidden" style={{ backgroundImage: 'linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'1.5\' fill=\'none\' stroke=\'%23222222\' stroke-opacity=\'0.3\'/%3E%3C/svg%3E")' }}>
            {/* Title and Button Row */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between mb-10 md:mb-16">
                <div className="flex-1 flex flex-col items-start">
                    <span className="text-[15px] text-gray-400 font-medium flex items-center mb-3"><PeopleIcon /> Our Customers Feedback</span>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white text-left leading-tight">
                        Trusted by 10k+ businesses<br />around the worldwide.
                    </h2>
                </div>
                <div className="mt-6 md:mt-0">
                    <button className="bg-white/10 text-white font-semibold px-8 py-3 rounded-full shadow border border-white/20 hover:bg-white/20 transition text-lg">Get Started Now</button>
                </div>
            </div>
            {/* Testimonial Cards */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 md:gap-10 items-center justify-center">
                {testimonials.map((t, idx) => (
                    <div
                        key={t.handle}
                        className={`relative bg-gradient-to-b from-white/10 to-black/40 border border-white/10 shadow-2xl rounded-2xl px-7 py-8 w-full max-w-md min-w-[320px] text-left flex flex-col justify-between ${idx === 0 ? '-rotate-3' : idx === 2 ? '-rotate-3' : 'rotate-3'
                            }`}
                        style={{ minHeight: '320px' }}
                    >
                        {/* Close Icon */}
                        <span className="absolute top-5 right-5 cursor-pointer z-10"><XIcon /></span>
                        {/* Card Header */}
                        <div className="flex items-center gap-3 mb-4">
                            <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full border-2 border-white object-cover grayscale" />
                            <span className="font-semibold text-white text-base">{t.name} <span className="text-gray-400">({t.handle})</span></span>
                        </div>
                        {/* Testimonial */}
                        <p className="text-gray-200 text-lg leading-relaxed mb-6">"{t.testimonial}"</p>
                        {/* Footer */}
                        <p className="text-gray-400 text-base font-medium mt-auto">{t.company}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
