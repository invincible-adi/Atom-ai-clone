import React from 'react';

const StarIcon = () => (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="inline-block text-yellow-400"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
);
const ClockIcon = () => (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="inline-block text-gray-400 mr-1"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 6v6l4 2" /></svg>
);
const GrowthIcon = () => (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="inline-block text-gray-400 mr-1"><path d="M3 17v2h18v-2" stroke="currentColor" strokeWidth="2" /><path d="M7 13l3-3 4 4 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);
const SuccessIcon = () => (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" className="inline-block text-gray-400 mr-2"><path d="M12 2L15 8l6 .5-4.5 4 1.5 6-5-3.5L7 18.5l1.5-6L4 8.5 10 8z" stroke="currentColor" strokeWidth="2" /></svg>
);

export default function Success() {
    return (
        <section className="relative w-full bg-black py-16 md:py-24 px-4 md:px-12 flex flex-col items-center justify-center overflow-x-hidden" style={{ backgroundImage: 'linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'1.5\' fill=\'none\' stroke=\'%23222222\' stroke-opacity=\'0.3\'/%3E%3C/svg%3E")' }}>
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-16">
                {/* Left: Text & Stats */}
                <div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
                    <div className="flex items-center gap-2 mb-3">
                        <SuccessIcon />
                        <span className="text-gray-400 text-sm font-medium">Our Success Story</span>
                    </div>
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-left">
                        “Simple framework for your<br className="hidden sm:block" /> business that just works.”
                    </h2>
                    {/* Stats Row */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
                        <div className="bg-[#18181b] rounded-xl px-8 py-7 flex flex-col items-center min-w-[140px] shadow-lg">
                            <span className="text-2xl sm:text-3xl font-bold text-white mb-1">500hrs</span>
                            <span className="flex items-center text-gray-400 text-sm font-medium"><ClockIcon />Time Saved</span>
                        </div>
                        <div className="bg-[#18181b] rounded-xl px-8 py-7 flex flex-col items-center min-w-[140px] shadow-lg">
                            <span className="text-2xl sm:text-3xl font-bold text-white mb-1">200%</span>
                            <span className="flex items-center text-gray-400 text-sm font-medium"><GrowthIcon />Tec Growth</span>
                        </div>
                        <div className="bg-[#18181b] rounded-xl px-8 py-7 flex flex-col items-center min-w-[140px] shadow-lg">
                            <span className="flex mb-1">
                                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                            </span>
                            <span className="text-gray-400 text-sm font-medium">User Rating</span>
                        </div>
                    </div>
                    <span className="text-gray-400 text-base font-medium mt-2">Jason, Butler Company, Inc</span>
                </div>
                {/* Right: Video Card */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] md:w-[420px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#f5f5f5]" style={{ transform: 'rotate(2deg)' }}>
                        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=600&q=80" alt="Success Story" className="object-cover w-full h-full grayscale" />
                        {/* Play Button Overlay */}
                        <button className="absolute inset-0 flex items-center justify-center">
                            <span className="w-20 h-20 bg-black/40 rounded-full flex items-center justify-center border-2 border-white/30">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="19" stroke="#fff" strokeWidth="2" opacity=".5" /><polygon points="16,13 28,20 16,27" fill="#fff" /></svg>
                            </span>
                        </button>
                        {/* Glow/Shadow */}
                        <div className="absolute -inset-2 rounded-2xl pointer-events-none" style={{ boxShadow: '0 8px 48px 0 #000a, 0 0px 0px 2px #fff2' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
