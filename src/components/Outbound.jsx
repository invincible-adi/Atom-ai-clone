import React from 'react';

// Icons as separate components for clarity
const SettingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const EnhancerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
    </svg>
);

const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
);

const ImageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const BlueCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <circle cx="12" cy="12" r="11" fill="#18181b" stroke="#fff" strokeWidth="1.5" />
        <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.5 9.5l5 5m0-5l-5 5" />
    </svg>
);

const chips = [
    'Data Insights', 'Predictive AI', 'Content AI', 'Workflow Tools', 'Fast Decisions', 'User Profiles',
    'NLP Models', 'AI Chatbots', 'Scalable Systems', 'Auto Scheduling', 'Omnichannel AI'
];

export default function Outbound() {
    return (
        <section className="relative max-w-5xl mx-auto px-2 sm:px-6 md:px-0 py-12 sm:py-20 flex flex-col items-center">
            {/* Header */}
            <div className="mb-7 flex flex-col items-center">
                <p className="text-[11px] sm:text-xs text-gray-400 font-medium flex items-center justify-center gap-2 mb-2 tracking-wide">
                    <SettingsIcon />
                    More Features/Services
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-1 text-center">Outbound AI Systems</h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 text-center max-w-xl">
                    Seamlessly automate workflows, analyze performance, and unlock new opportunities with intelligent AI tools.
                </p>
            </div>

            {/* Card - pixel perfect to image with responsive divider */}
            <div className="w-full flex justify-center items-center mb-4">
                <div className="bg-[#18181b]/90 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-2xl flex flex-col md:flex-row min-h-[420px] max-w-4xl w-full overflow-hidden relative" style={{ boxShadow: '0 4px 32px 0 #000a' }}>
                    {/* Center vertical line for desktop, horizontal for mobile */}
                    {/* Vertical divider for md+ */}
                    <div className="hidden md:block absolute left-1/2 top-28 -translate-x-1/2 w-[2px] h-60 bg-white/10 opacity-50 z-10 pointer-events-none" />
                    {/* Horizontal divider for mobile */}
                    <div className="block md:hidden absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-white/10 opacity-30 z-10 pointer-events-none" />
                    {/* Left Section */}
                    <div className="flex-1 flex flex-col px-4 sm:px-8 py-5 sm:py-7 z-20">
                        <div className="flex flex-row justify-between items-center mb-3">
                            <span className="font-semibold text-gray-300 text-[15px]">Indie hackers, business owners!!...</span>
                            <button className="flex items-center border border-white/60 text-white text-sm font-medium rounded-full px-4 sm:px-5 py-1.5 bg-transparent hover:bg-white/10 transition-all duration-150" style={{ boxShadow: '0 1px 4px 0 #0004' }}>
                                AI Enhancer <span className="ml-2"><EnhancerIcon /></span>
                            </button>
                        </div>
                        {/* Two pill bars */}
                        <div className="flex flex-col gap-2 mb-4">
                            <div className="h-4 w-full bg-[#232328] rounded-full" />
                            <div className="h-4 w-3/4 bg-[#232328] rounded-full" />
                        </div>
                        <div className="grid grid-cols-2 gap-3 sm:gap-5 flex-1">
                            {[0, 1].map(i => (
                                <div key={i} className="relative bg-black/40 aspect-square rounded-xl flex items-center justify-center border border-white/10">
                                    <span className="absolute -top-2 -right-2 z-10">
                                        <button className="bg-[#18181b] border border-white/80 rounded-full p-0.5 shadow-md hover:bg-white/10 transition-all"><CloseIcon /></button>
                                    </span>
                                    <ImageIcon />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="flex-1 flex flex-col px-4 sm:px-8 py-5 sm:py-7 z-20">
                        <div className="flex flex-row justify-between items-center mb-3">
                            <div className="flex items-center gap-2">
                                <span className="w-7 h-7 rounded-full bg-[#bdbdbd]/30 flex items-center justify-center"><svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#bdbdbd" /></svg></span>
                                <span className="font-semibold text-white text-[15px]">Pranav NB</span>
                                <BlueCheckIcon />
                            </div>
                            <button className="flex items-center border border-white/60 text-white text-sm font-medium rounded-full px-4 sm:px-5 py-1.5 bg-transparent hover:bg-white/10 transition-all duration-150" style={{ boxShadow: '0 1px 4px 0 #0004' }}>
                                Share <span className="ml-2"><ShareIcon /></span>
                            </button>
                        </div>
                        {/* Two pill bars */}
                        <div className="flex flex-col gap-2 mb-4">
                            <div className="h-4 w-full bg-[#232328] rounded-full" />
                            <div className="h-4 w-3/4 bg-[#232328] rounded-full" />
                        </div>
                        <span className="font-semibold text-gray-300 text-[15px] mb-2">Indie hackers, business owners!!...</span>
                        <div className="grid grid-cols-2 gap-3 sm:gap-5 flex-1">
                            {[0, 1].map(i => (
                                <div key={i} className="relative bg-black/40 aspect-square rounded-xl flex items-center justify-center border border-white/10">
                                    <span className="absolute -top-2 -right-2 z-10">
                                        <button className="bg-[#18181b] border border-white/80 rounded-full p-0.5 shadow-md hover:bg-white/10 transition-all"><CloseIcon /></button>
                                    </span>
                                    <ImageIcon />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Quote */}
            <p className="text-gray-400 mt-3 text-[11px] sm:text-xs text-center">"Plan and execute your social media using all-in-one dashboard"</p>

            {/* Chips/Tags Row */}
            <div className="flex flex-wrap justify-center gap-2 mt-4 mb-2 max-w-2xl">
                {chips.map((chip, i) => (
                    <span key={chip} className="bg-[#232328] text-gray-300 text-xs px-3 py-1 rounded-full border border-white/10 font-medium shadow-sm">
                        {chip}
                    </span>
                ))}
            </div>

            {/* Bottom CTA Bar */}
            <div className="w-full flex justify-center mt-8">
                <div className="bg-black/80 border border-white/10 shadow-xl rounded-full px-6 py-5 flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl backdrop-blur-xl">
                    <span className="text-white font-semibold text-sm sm:text-base text-center flex-1">Delivering AI solutions with<br className="sm:hidden" /> unmatched precision and speed.</span>
                    <button className="bg-white text-black font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition text-sm sm:text-base w-full sm:w-auto">Get Started Now</button>
                </div>
            </div>
        </section>
    );
}
