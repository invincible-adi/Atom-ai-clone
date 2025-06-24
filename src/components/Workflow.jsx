import React from "react";
import { motion } from "framer-motion";

const workflowItems = [
    { label: "Web Services Business" },
    { label: "SAAS Startup's" },
    { label: "Marketing Agencies" },
    { label: "Drop shipping" },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const Workflow = () => (
    <>
        {/* Top Row: Workflow & Services */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 sm:py-16 md:py-24">
            <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-stretch">
                {/* Left Card: Layered Workflow */}
                <motion.div
                    className="relative flex-1 min-w-0 md:min-w-[380px] max-w-full md:max-w-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                >
                    {/* Layered effect */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute left-6 top-6 w-full h-full rounded-3xl bg-white/5 shadow-[0_8px_40px_0_rgba(0,0,0,0.45)]" />
                        <div className="absolute left-3 top-3 w-full h-full rounded-3xl bg-white/10 shadow-[0_4px_24px_0_rgba(0,0,0,0.35)]" />
                    </div>
                    <div className="relative z-10 rounded-3xl bg-gradient-to-br from-white/10 to-black/30 border border-white/10 shadow-2xl px-8 py-7 min-h-[380px] flex flex-col justify-between">
                        {/* Top Row */}
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-200 text-sm font-medium">Today Saved Drafts, 4/11/2024</span>
                            <span className="bg-black/80 text-white text-sm w-7 h-7 flex items-center justify-center rounded-full shadow-[0_2px_8px_0_rgba(0,0,0,0.25)] font-semibold">2</span>
                        </div>
                        {/* Main Content */}
                        <div className="flex flex-row gap-4 mb-4">
                            <input className="bg-black/70 border border-white/10 rounded-lg px-4 py-2 text-white w-32 text-sm font-medium placeholder:text-gray-400" placeholder="..." disabled />
                            <button className="bg-gradient-to-r from-white to-gray-200 text-black px-6 py-2 rounded-full font-semibold text-sm shadow-md active:scale-95 transition-transform">Publish</button>
                            <div className="w-16 h-12 bg-gray-800/60 border border-white/10 rounded-lg flex items-center justify-center">
                                {/* Image icon */}
                                <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="#222" /><path d="M7 17V7h10v10H7zm2-2h6V9H9v6z" fill="#444" /></svg>
                            </div>
                        </div>
                        {/* Bottom Row */}
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-gray-400 text-sm">Yesterday, 3/11/2024</span>
                            <span className="bg-black/80 text-white text-sm w-7 h-7 flex items-center justify-center rounded-full shadow-[0_2px_8px_0_rgba(0,0,0,0.25)] font-semibold">3</span>
                        </div>
                    </div>
                    {/* Title and Description */}
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">AI-Powered Workflow Automation</h3>
                        <p className="text-gray-300 text-base font-medium">We build AI-powered systems precisely tailored to your goals. Every solution starts with a focused strategy.</p>
                    </div>
                </motion.div>
                {/* Right Card: Services for All Sectors */}
                <motion.div
                    className="flex-1 min-w-0 md:min-w-[380px] max-w-full md:max-w-xl flex flex-col"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                >
                    <div className="rounded-3xl bg-gradient-to-br from-white/10 to-black/30 border border-white/10 shadow-2xl px-8 py-7 min-h-[380px] flex flex-col">
                        {/* Search Bar */}
                        <div className="flex flex-row items-center mb-4 gap-3">
                            <input className="flex-1 bg-black/60 border border-white/10 rounded-lg px-4 py-2 text-white text-sm font-medium placeholder:text-gray-400" placeholder="Type some description here..." disabled />
                            <button className="bg-gradient-to-r from-white to-gray-200 text-black px-6 py-2 rounded-full font-semibold text-sm shadow-md active:scale-95 transition-transform">Research</button>
                        </div>
                        {/* List Items */}
                        <div className="flex flex-col gap-2 mt-2">
                            {workflowItems.map((item) => (
                                <div key={item.label} className="flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2 text-white text-sm font-medium shadow-[0_2px_12px_0_rgba(0,0,0,0.18)]">
                                    <span>{item.label}</span>
                                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Title and Description */}
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Services for All Sectors</h3>
                        <p className="text-gray-300 text-base font-medium">From brand visibility to conversion rates, we help you expand across every area.</p>
                    </div>
                </motion.div>
            </div>
        </section>
        {/* Bottom Row: System Efficiency & Business Growth Automation */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 pb-10 sm:pb-16 md:pb-24">
            <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-stretch">
                {/* System Efficiency Card */}
                <motion.div
                    className="flex-1 min-w-0 md:min-w-[380px] max-w-full md:max-w-xl flex flex-col"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                >
                    <div className="relative rounded-3xl bg-gradient-to-br from-white/5 to-black/20 border border-white/10 shadow-2xl p-6 flex-grow flex flex-col min-h-[380px]">
                        {/* Chart Area */}
                        <div className="relative flex-grow flex flex-col items-center justify-center p-4 rounded-xl bg-black/20 border border-white/5">
                            {/* Background Grid */}
                            <div className="absolute inset-0 grid grid-cols-4 gap-4 p-4">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="border-r border-dashed border-white/5" />
                                ))}
                            </div>

                            {/* Top Buttons */}
                            <div className="absolute top-4 flex gap-3">
                                <button className="text-white text-sm bg-black/40 px-4 py-2 rounded-full font-medium">Data Transfer</button>
                                <button className="text-black text-sm bg-white px-4 py-2 rounded-full font-semibold">Right Planning</button>
                            </div>

                            {/* Bubble Chart */}
                            <div className="relative w-64 h-48">
                                {/* SassAI Bubble */}
                                <div className="absolute top-10 left-24 z-30 w-28 h-28 rounded-full bg-black shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1),inset_0_4px_8px_rgba(254,254,254)] border border-white/5 flex flex-col items-center justify-center text-white">
                                    <span className="text-xs">SassAI</span>
                                    <span className="text-3xl font-extrabold">90%</span>
                                </div>
                                {/* others Bubble */}
                                <div className="absolute top-12 left-10 z-20 w-20 h-20 rounded-full bg-gradient-to-br from-white/5 to-transparent shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1),inset_0_4px_8px_rgba(254,254,254)] border border-white/5 flex flex-col items-center justify-center text-white">
                                    <span className="text-xs">others</span>
                                    <span className="text-2xl font-extrabold">50%</span>
                                </div>
                                {/* 40% Bubble */}
                                <div className="absolute top-32 left-20 z-20 w-16 h-16 rounded-full bg-gradient-to-br from-white/5 to-transparent shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1),inset_0_4px_8px_rgba(254,254,254)] border border-white/5 flex flex-col items-center justify-center text-white">
                                    <span className="text-xl font-extrabold">40%</span>
                                </div>
                            </div>

                            {/* Bottom Labels Marquee */}
                            <div className="absolute bottom-4 left-0 w-full overflow-hidden">
                                <div className="flex animate-marquee-slow whitespace-nowrap">
                                    <span className="mx-4 text-gray-400 text-xs font-medium">Allocation</span>
                                    <span className="mx-4 text-gray-400 text-xs font-medium">Tracking</span>
                                    <span className="mx-4 text-gray-400 text-xs font-medium">Collaboration</span>
                                    <span className="mx-4 text-gray-400 text-xs font-medium">Budgeting</span>
                                    <span className="mx-4 text-gray-400 text-xs font-medium">Reporting</span>
                                    {/* Duplicate for seamless loop */}
                                    <span className="mx-4 text-gray-400 text-xs font-medium">Allocation</span>
                                    <span className="mx-4 text-gray-400 text-xs font-medium">Tracking</span>
                                    <span className="mx-4 text-gray-400 text-xs font-medium">Collaboration</span>
                                    <span className="mx-4 text-gray-400 text-xs font-medium">Budgeting</span>
                                    <span className="mx-4 text-gray-400 text-xs font-medium">Reporting</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">System Efficiency</h3>
                        <p className="text-gray-300 text-base font-medium">Manual marketing is a thing of the past. We integrate AI to streamline campaigns.</p>
                    </div>
                </motion.div>

                {/* Business Growth Automation Card */}
                <motion.div
                    className="flex-1 min-w-0 md:min-w-[380px] max-w-full md:max-w-xl flex flex-col"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                >
                    <div className="relative rounded-3xl bg-gradient-to-br from-white/5 to-black/20 border border-white/10 shadow-2xl p-6 flex-grow flex flex-col min-h-[380px]">
                        {/* Chart Area */}
                        <div className="relative flex-grow flex flex-col items-center justify-center p-4 rounded-xl bg-black/20 border border-white/5">
                            {/* Background Grid */}
                            <div className="absolute inset-0 grid grid-cols-6 gap-4 p-4">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="border-r border-dashed border-white/5" />
                                ))}
                            </div>

                            {/* Chart Labels */}
                            <span className="absolute top-4 left-4 text-white text-sm bg-black/40 px-3 py-1 rounded-full font-medium">Cost saved</span>
                            <span className="absolute top-4 right-4 text-gray-400 text-sm font-medium">last 60 days</span>

                            {/* SVG Chart */}
                            <div className="relative w-full h-40">
                                <svg width="100%" height="100%" viewBox="0 0 300 120" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="100%">
                                            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1)" />
                                            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M10 80 C 60 40, 100 100, 150 70 S 220 20, 290 50" stroke="#888" strokeWidth="2.5" />
                                    <path d="M10 80 C 60 40, 100 100, 150 70 S 220 20, 290 50 V 120 H 10 Z" fill="url(#chartGradient)" />
                                </svg>
                                {/* Marker */}
                                <div className="absolute" style={{ left: '48%', top: '48%' }}>
                                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-white font-bold text-sm">$80,376</span>
                                    <div className="w-6 h-6 rounded-full bg-white shadow-lg border-4 border-black ring-1 ring-white" />
                                </div>
                            </div>

                            {/* Happy Client Section */}
                            <div className="absolute bottom-4 w-full px-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#888"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                    </div>
                                    <span className="text-white font-semibold text-sm">Pranav</span>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#3b82f6"><path d="M22.25 12c0-1.43-.9-2.68-2.14-3.13.3-.98.05-2.1-.68-2.83-.96-.96-2.28-1.28-3.53-1.02-.45-1.24-1.7-2.14-3.13-2.14s-2.68.9-3.13 2.14c-1.25-.26-2.57.06-3.53 1.02-.73.73-.98 1.85-.68 2.83C3.15 9.32 2.25 10.57 2.25 12c0 1.43.9 2.68 2.14 3.13-.3.98-.05 2.1.68 2.83.96.96 2.28 1.28 3.53 1.02.45 1.24 1.7 2.14 3.13 2.14s2.68-.9 3.13-2.14c1.25.26 2.57-.06 3.53-1.02.73-.73.98-1.85.68-2.83 1.24-.45 2.14-1.7 2.14-3.13zm-8.72 4.47l-3.5-3.5 1.41-1.41 2.09 2.09 4.6-4.6 1.41 1.41-6 6z" /></svg>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-400">
                                    {[...Array(5)].map((_, i) => <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>)}
                                </div>
                                <button className="text-black text-sm bg-white px-4 py-2 rounded-full font-semibold">Happy Client</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Business Growth Automation</h3>
                        <p className="text-gray-300 text-base font-medium">We don't just drive traffic—we drive results. With predictive analytics, optimized targeting, and performance monitoring.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    </>
);

export default Workflow;
