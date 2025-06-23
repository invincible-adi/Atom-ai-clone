import React from "react";

const workflowItems = [
    { label: "Web Services Business" },
    { label: "SAAS Startup's" },
    { label: "Marketing Agencies" },
    { label: "Drop shipping" },
];

const Workflow = () => (
    <>
        {/* Top Row: Workflow & Services */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 sm:py-16 md:py-24">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
                {/* Left Card: Layered Workflow */}
                <div className="relative flex-1 min-w-0 md:min-w-[340px] max-w-full md:max-w-xl mb-8 md:mb-0">
                    {/* Layered effect */}
                    <div className="absolute left-2 sm:left-6 top-2 sm:top-6 w-full h-full rounded-3xl bg-white/5 border border-white/10 shadow-2xl" style={{ zIndex: 1 }}></div>
                    <div className="absolute left-1 sm:left-3 top-1 sm:top-3 w-full h-full rounded-3xl bg-white/10 border border-white/10 shadow-xl" style={{ zIndex: 2 }}></div>
                    <div className="relative z-10 rounded-3xl bg-gradient-to-br from-white/10 to-black/30 border border-white/20 shadow-2xl p-4 sm:p-6 md:p-8 min-h-[220px] sm:min-h-[300px] md:min-h-[340px] flex flex-col justify-between">
                        {/* Top Row */}
                        <div className="flex items-center justify-between mb-2 sm:mb-4">
                            <span className="text-gray-200 text-xs sm:text-sm">Today Saved Drafts, 4/11/2024</span>
                            <span className="bg-black/80 text-white text-xs px-2 py-1 rounded-full">2</span>
                        </div>
                        {/* Main Content */}
                        <div className="flex flex-row gap-2 sm:gap-4 mb-2 sm:mb-4">
                            <input className="bg-black/70 border border-white/10 rounded-lg px-2 sm:px-4 py-2 text-white w-20 sm:w-32 text-xs sm:text-sm" placeholder="..." disabled />
                            <button className="bg-white text-black px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm shadow">Publish</button>
                            <div className="w-10 sm:w-16 h-10 sm:h-12 bg-gray-800/60 border border-white/10 rounded-lg flex items-center justify-center">
                                <svg width="20" height="20" className="sm:w-[28px] sm:h-[28px]" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#222" /><path d="M7 17V7h10v10H7zm2-2h6V9H9v6z" fill="#444" /></svg>
                            </div>
                        </div>
                        {/* Bottom Row */}
                        <div className="flex items-center justify-between mt-2 sm:mt-4">
                            <span className="text-gray-400 text-xs">Yesterday, 3/11/2024</span>
                            <span className="bg-black/80 text-white text-xs px-2 py-1 rounded-full">3</span>
                        </div>
                    </div>
                    {/* Title and Description */}
                    <div className="mt-5 sm:mt-8">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">AI-Powered Workflow Automation</h3>
                        <p className="text-gray-300 text-xs sm:text-base">We build AI-powered systems precisely tailored to your goals. Every solution starts with a focused strategy.</p>
                    </div>
                </div>
                {/* Right Card: Services for All Sectors */}
                <div className="flex-1 min-w-0 md:min-w-[340px] max-w-full md:max-w-xl">
                    <div className="rounded-3xl bg-gradient-to-br from-white/10 to-black/30 border border-white/20 shadow-2xl p-4 sm:p-6 md:p-8 min-h-[220px] sm:min-h-[300px] md:min-h-[340px] flex flex-col">
                        {/* Search Bar */}
                        <div className="flex flex-col xs:flex-row items-stretch xs:items-center mb-2 sm:mb-4 gap-2">
                            <input className="flex-1 bg-black/60 border border-white/10 rounded-lg px-3 sm:px-4 py-2 text-white text-xs sm:text-sm mr-0 xs:mr-2" placeholder="Type some description here..." disabled />
                            <button className="bg-white text-black px-4 sm:px-5 py-2 rounded-full font-semibold text-xs sm:text-sm shadow">Research</button>
                        </div>
                        {/* List Items */}
                        <div className="flex flex-col gap-1 sm:gap-2 mt-2">
                            {workflowItems.map((item) => (
                                <div key={item.label} className="flex items-center justify-between bg-black/40 border border-white/10 rounded-lg px-3 sm:px-4 py-2 text-white text-xs sm:text-sm">
                                    <span>{item.label}</span>
                                    <svg width="16" height="16" className="sm:w-[18px] sm:h-[18px]" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Title and Description */}
                    <div className="mt-5 sm:mt-8">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Services for All Sectors</h3>
                        <p className="text-gray-300 text-xs sm:text-base">From brand visibility to conversion rates, we help you expand across every area.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* Bottom Row: System Efficiency & Business Growth Automation */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 pb-10 sm:pb-16 md:pb-24 -mt-4 md:-mt-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
                {/* System Efficiency Card */}
                <div className="flex-1 min-w-0 md:min-w-[340px] max-w-full md:max-w-xl mb-8 md:mb-0">
                    <div className="rounded-3xl bg-gradient-to-br from-white/10 to-black/30 border border-white/20 shadow-2xl p-4 sm:p-6 md:p-8 min-h-[180px] sm:min-h-[260px] md:min-h-[340px] flex flex-col justify-between">
                        {/* Chart/Graphic */}
                        <div className="flex flex-col items-center justify-center mb-4 sm:mb-6">
                            <svg width="90" height="70" className="sm:w-[180px] sm:h-[140px]" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="90" cy="70" rx="80" ry="60" fill="#18181b" fillOpacity="0.7" />
                                <ellipse cx="90" cy="70" rx="60" ry="45" fill="#232329" fillOpacity="0.7" />
                                <ellipse cx="90" cy="70" rx="40" ry="30" fill="#26262c" fillOpacity="0.8" />
                                <text x="90" y="75" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" className="sm:text-[22px]">50%</text>
                                <text x="90" y="95" textAnchor="middle" fill="#aaa" fontSize="10" className="sm:text-[14px]">Saved</text>
                                <text x="40" y="70" textAnchor="middle" fill="#aaa" fontSize="8" className="sm:text-[12px]">Data Transfer</text>
                                <text x="140" y="70" textAnchor="middle" fill="#aaa" fontSize="8" className="sm:text-[12px]">Right Planning</text>
                                <text x="90" y="40" textAnchor="middle" fill="#aaa" fontSize="8" className="sm:text-[12px]">AI</text>
                            </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">System Efficiency</h3>
                        <p className="text-gray-300 text-xs sm:text-base">Manual monitoring is a thing of the past. We integrate AI to streamline campaigns.</p>
                    </div>
                </div>
                {/* Business Growth Automation Card */}
                <div className="flex-1 min-w-0 md:min-w-[340px] max-w-full md:max-w-xl">
                    <div className="rounded-3xl bg-gradient-to-br from-white/10 to-black/30 border border-white/20 shadow-2xl p-4 sm:p-6 md:p-8 min-h-[180px] sm:min-h-[260px] md:min-h-[340px] flex flex-col justify-between">
                        {/* Line Chart/Graphic */}
                        <div className="flex flex-col items-center justify-center mb-4 sm:mb-6">
                            <svg width="100" height="50" className="sm:w-[200px] sm:h-[100px]" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0" y="0" width="200" height="100" rx="18" fill="#18181b" fillOpacity="0.7" />
                                <polyline points="10,80 50,60 90,70 130,40 170,60" fill="none" stroke="#fff" strokeWidth="3" />
                                <circle cx="130" cy="40" r="6" fill="#fff" />
                                <text x="130" y="35" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold" className="sm:text-[12px]">$29,120</text>
                                <text x="30" y="95" textAnchor="middle" fill="#aaa" fontSize="6" className="sm:text-[10px]">Cost saved</text>
                                <text x="170" y="95" textAnchor="middle" fill="#aaa" fontSize="6" className="sm:text-[10px]">Last 60 days</text>
                            </svg>
                            <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2">
                                <span className="text-white text-xs sm:text-sm font-semibold">5.0</span>
                                <span className="text-yellow-400 text-xs sm:text-base">★ ★ ★ ★ ★</span>
                                <span className="bg-black/60 text-white text-[10px] sm:text-xs px-2 py-1 rounded-full ml-1 sm:ml-2">Happy Client</span>
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Business Growth Automation</h3>
                        <p className="text-gray-300 text-xs sm:text-base">We don't just drive traffic—we drive results. With predictive analytics, optimized targeting, and performance monitoring.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default Workflow;
