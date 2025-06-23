import React from 'react'
import { motion, useAnimation } from 'framer-motion';

const LightIcon = () => (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="inline-block text-gray-300 mr-2"><path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07-7.07l-1.42 1.42M6.34 17.66l-1.42 1.42m12.02 0l-1.42-1.42M6.34 6.34L4.92 4.92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
);

const CircularText = () => (
    <svg width="260" height="260" viewBox="0 0 260 260" className="absolute left-0 top-0 -translate-x-8 -translate-y-1 pointer-events-none select-none" style={{ zIndex: 2 }}>
        <defs>
            <path id="circle" d="M130,130 m-110,0 a110,110 0 1,1 220,0 a110,110 0 1,1 -220,0" />
        </defs>
        <text fontSize="18" fill="#bdbdbd" fontFamily="sans-serif">
            <textPath xlinkHref="#circle" startOffset="0">Your Trusted Agency • Your Trusted Agency • </textPath>
        </text>
    </svg>
);

export default function CTA() {
    // Animated wave controls
    const controls = useAnimation();
    React.useEffect(() => {
        controls.start({
            d: [
                "M0,120 Q130,80 260,120 T520,120 T780,120 T1040,120",
                "M0,110 Q130,60 260,110 T520,140 T780,100 T1040,130",
                "M0,130 Q130,120 260,130 T520,110 T780,140 T1040,120",
                "M0,120 Q130,80 260,120 T520,120 T780,120 T1040,120"
            ],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        });
    }, [controls]);

    return (
        <section className="relative w-full bg-black py-16 md:py-24 px-4 md:px-12 flex flex-col items-center justify-center overflow-x-hidden" style={{ backgroundImage: 'linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0.9)),url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect x=\'0.5\' y=\'0.5\' width=\'39\' height=\'39\' rx=\'1.5\' fill=\'none\' stroke=\'%23222222\' stroke-opacity=\'0.3\'/%3E%3C/svg%3E")' }}>
            {/* Animated Wave Background */}
            <motion.svg
                className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[220px] z-0"
                viewBox="0 0 1040 220"
                fill="none"
                style={{ filter: "blur(2.5px)" }}
            >
                <motion.path
                    initial={{ d: "M0,120 Q130,80 260,120 T520,120 T780,120 T1040,120" }}
                    animate={controls}
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeOpacity="0.7"
                    style={{
                        filter: "drop-shadow(0 0 32px #fff8) drop-shadow(0 0 16px #fff6)"
                    }}
                />
            </motion.svg>
            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
                {/* Left */}
                <div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
                    <span className="text-lg text-gray-300 font-medium flex items-center mb-3"><LightIcon /> Start Growing Now</span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 text-left leading-tight">
                        Unlock the Full Power of AI for<br />Your Business
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 text-left max-w-xl">
                        Maximize the true impact and efficiency of your AI strategy with our smart platform. Start planning, automating tasks.
                    </p>
                    <div className="flex flex-row gap-4 mb-6">
                        <button className="bg-white text-black font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition text-lg">Get Started Now</button>
                        <button className="bg-zinc-900 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-zinc-800 transition text-lg">View Plans</button>
                    </div>
                </div>
                {/* Right: Image Card with Circular Text */}
                <div className="flex-1 flex items-center justify-center relative min-w-[320px]">
                    <div className="relative w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] md:w-[420px] md:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white" style={{ transform: 'rotate(2deg)' }}>
                        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=600&q=80" alt="CTA Visual" className="object-cover w-full h-full grayscale" />
                        <CircularText />
                        {/* Glow/Shadow */}
                        <div className="absolute -inset-2 rounded-2xl pointer-events-none" style={{ boxShadow: '0 8px 48px 0 #000a, 0 0px 0px 2px #fff2' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
