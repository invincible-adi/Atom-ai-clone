import React from "react";

const integrations = [
    { name: "Reddit", description: "Seamless social media management with Reddit integration.", icon: "📣" },
    { name: "Snap chat", description: "Manage your Snapchat account effortlessly with our tools.", icon: "👻" },
    { name: "X / Twitter", description: "Simplify your X (Twitter) posts with powerful automation.", icon: "🐦" },
    { name: "Facebook", description: "Handle your Facebook posts and updates with ease.", icon: "👍" },
    { name: "Tiktok", description: "Boost your Tiktok presence with streamlined management.", icon: "🎵" },
    { name: "Instagram", description: "Schedule and manage Instagram content in one place.", icon: "📸" },
    { name: "LinkedIn", description: "Professional LinkedIn management at your fingertips.", icon: "💼" },
    { name: "Pinterest", description: "Organize and post to Pinterest with simple integration.", icon: "📌" },
];

export default function Integrations() {
    return (
        <section className="relative w-full bg-black py-16 md:py-24 px-4 md:px-12 flex flex-col items-center justify-center overflow-x-hidden" style={{ backgroundImage: 'linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'1.5\' fill=\'none\' stroke=\'%23222222\' stroke-opacity=\'0.3\'/%3E%3C/svg%3E")' }}>
            {/* Title and Button Row */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between mb-8 md:mb-12">
                <div className="flex-1 flex flex-col items-start">
                    <span className="text-md text-gray-400 font-medium mb-2">Our Integrations & Partners</span>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white text-left leading-tight mb-2">
                        AI Integration with the tools<br />that You Love using everyday
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 text-left max-w-2xl mb-0">
                        Easily connect all your favorite apps and tools to seamlessly streamline your workflow without any hassle or extra work.
                    </p>
                </div>
                <div className="mt-6 md:mt-0">
                    <button className="bg-white text-black font-semibold px-7 py-2.5 rounded-full shadow hover:bg-gray-100 transition text-base">Get Started Now</button>
                </div>
            </div>
            {/* Marquee Integrations Row 1 */}
            <div className="relative w-full max-w-6xl overflow-x-hidden py-2">
                <div className="marquee flex gap-8" style={{ animation: 'marquee 32s linear infinite' }}>
                    {[...integrations, ...integrations].map((item, idx) => (
                        <div key={item.name + idx} className="min-w-[340px] max-w-sm bg-gradient-to-br from-white/10 to-black/30 border border-white/10 shadow-2xl rounded-2xl p-8 flex flex-col justify-between text-left transition-transform duration-300 hover:scale-[1.04]">
                            <div className="text-3xl mb-6">{item.icon}</div>
                            <h3 className="font-bold text-white text-2xl mb-2">{item.name}</h3>
                            <p className="text-base text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Marquee Integrations Row 2 (opposite direction) */}
            <div className="relative w-full max-w-6xl overflow-x-hidden py-2 mt-2">
                <div className="marquee-reverse flex gap-8" style={{ animation: 'marquee-reverse 36s linear infinite' }}>
                    {[...integrations, ...integrations].map((item, idx) => (
                        <div key={item.name + 'r' + idx} className="min-w-[340px] max-w-sm bg-gradient-to-br from-white/10 to-black/30 border border-white/10 shadow-2xl rounded-2xl p-8 flex flex-col justify-between text-left transition-transform duration-300 hover:scale-[1.04]">
                            <div className="text-3xl mb-6">{item.icon}</div>
                            <h3 className="font-bold text-white text-2xl mb-2">{item.name}</h3>
                            <p className="text-base text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
                <style>{`
                    @keyframes marquee {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    @keyframes marquee-reverse {
                        0% { transform: translateX(-50%); }
                        100% { transform: translateX(0); }
                    }
                `}</style>
            </div>
        </section>
    );
}
