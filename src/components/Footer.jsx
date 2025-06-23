import React from "react";

const footerLinks = [
    "Home",
    "Company Page",
    "Careers Page",
    "Pricing & Plans",
    "Blogs Page",
    "Change Log",
];

const navGrid = [
    [footerLinks[0], footerLinks[1]],
    [footerLinks[2], footerLinks[3]],
    [footerLinks[4], footerLinks[5]],
];

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-8 px-4">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row w-full gap-0 md:gap-0 bg-transparent rounded-3xl overflow-hidden relative" style={{ minHeight: 320 }}>
                    {/* Left: Logo + Nav */}
                    <div className="flex-1 flex flex-col items-start justify-start px-8 py-8 min-w-[320px]">
                        <div className="flex items-center mb-8">
                            <span className="text-3xl mr-2">🎯</span>
                            <span className="text-2xl font-bold tracking-tight">AtomAI</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 mb-0 w-full">
                            {footerLinks.slice(0, 6).map((link, i) => (
                                <button key={link} className="bg-[#18181b] text-white text-base font-bold rounded-full px-7 py-2 shadow-lg border-none hover:bg-[#232328] transition-all flex items-center justify-center min-w-[120px] min-h-[44px]">{link}</button>
                            ))}
                        </div>
                        <button className="bg-white text-black text-base font-semibold rounded-full px-10 py-3 shadow-lg border-none hover:bg-gray-100 transition-all mt-8 w-fit mx-auto flex items-center justify-center">Let's Get Started</button>
                    </div>
                    {/* Divider */}
                    <div className="hidden md:block w-px bg-gradient-to-b from-white/10 to-white/0 mx-0 my-8" />
                    {/* Center: Newsletter */}
                    <div className="flex-1 flex flex-col items-start justify-center px-8 py-8 min-w-[320px] border-l border-r border-white/10 md:border-none">
                        <h3 className="text-3xl font-bold mb-2">Stay<br />connected</h3>
                        <p className="text-gray-300 text-base mb-8 max-w-xs">Join our newsletter and stay updated on the latest trends in AI-Automation World</p>
                        <div className="flex w-full max-w-xs items-center border-b border-white/20 py-2">
                            <input type="email" placeholder="E-mail" className="bg-transparent text-white placeholder-gray-400 flex-1 px-0 py-2 focus:outline-none text-lg" />
                            <button className="ml-2 bg-transparent text-white text-2xl hover:text-gray-300 transition-all">→</button>
                        </div>
                    </div>
                    {/* Divider */}
                    <div className="hidden md:block w-px bg-gradient-to-b from-white/10 to-white/0 mx-0 my-8" />
                    {/* Right: Testimonial */}
                    <div className="flex-1 flex flex-col items-center justify-center px-8 py-8 min-w-[320px]">
                        <div className="flex flex-col items-center">
                            <img src="https://openclipart.org/image/400px/317311" alt="Laurel Wreath" className="w-16 h-16 mb-2" />
                            <div className="flex items-center mb-2">

                                <div className="flex text-white text-2xl ml-2">
                                    {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
                                </div>
                            </div>
                            <div className="text-center mt-2">
                                <div className="text-2xl font-bold leading-tight mb-2">AI Systems Scaled<br />My agency to next<br />level – Johnas</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row justify-between items-center w-full border-t border-white/10 pt-8 mt-4 gap-6">
                    <div className="flex flex-col items-start">
                        <span className="text-lg font-semibold mb-1">(970) 594-7500</span>
                        <span className="text-2xl font-bold">atomai@support.com</span>
                    </div>
                    <div className="text-gray-300 text-base max-w-xl text-center md:text-right">
                        With AtomAI, you get more than just a template. It's a smart design system built to help AI agencies engage users and leave a lasting true & happy impression.
                    </div>
                </div>
            </div>
        </footer>
    );
}
