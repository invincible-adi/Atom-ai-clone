import React from "react";

export default function Quote() {
    return (
        <section className="w-full flex justify-center items-center py-12 md:py-20 px-2 sm:px-6">
            <div className="relative w-full max-w-5xl bg-[#111112]/95 rounded-3xl shadow-2xl border border-white/10 px-6 sm:px-12 py-14 sm:py-20 flex flex-col items-center justify-center overflow-hidden" style={{ boxShadow: '0 8px 48px 0 #000a' }}>
                {/* Top Glow */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/10 to-transparent rounded-t-3xl pointer-events-none" />
                {/* Decorative Quote Icon */}
                <svg className="mb-4 w-14 h-14 text-white/40" fill="currentColor" viewBox="0 0 48 48">
                    <path d="M14 36h6l2-10V12H6v14l4 10zm18 0h6l2-10V12H24v14l4 10z" />
                </svg>
                {/* Quote */}
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center max-w-3xl mx-auto mb-8">
                    "We're not looking to reinvent the wheel here. We're here to supercharge your existing efforts & take it next level"
                </p>
                {/* Author */}
                <div className="flex items-center justify-center gap-3 mt-2">
                    <img src="https://i.pravatar.cc/48?u=cofounder" alt="Co-founder" className="w-8 h-8 rounded-full border-2 border-white/20" />
                    <span className="text-gray-300 text-base font-medium">Co-founder & ex google designer</span>
                </div>
            </div>
        </section>
    );
}
