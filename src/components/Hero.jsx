import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const logos = [
    "Cooks", "Opal", "Dune", "Oasis", "Asterisk"
];

export default function Hero() {
    // Animate the wave with a loop
    const controls = useAnimation();
    useEffect(() => {
        controls.start({
            d: [
                // Start shape - moved upward
                "M0,100 Q320,60 640,100 T1280,100 T1920,100",
                // Up
                "M0,80 Q320,20 640,80 T1280,120 T1920,80",
                // Down
                "M0,120 Q320,100 640,120 T1280,60 T1920,120",
                // Back to start
                "M0,100 Q320,60 640,100 T1280,100 T1920,100"
            ],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
            }
        });
    }, [controls]);

    return (
        <section className="relative min-h-screen bg-black flex flex-col justify-start overflow-hidden">
            {/* Animated Flowing Wave */}
            <motion.svg
                className="absolute top-[calc(50%-100px)] -translate-y-[60%] left-0 w-full h-[320px] z-0"
                viewBox="0 0 1920 200"
                fill="none"
                style={{ filter: "blur(3px)" }}
            >
                {/* Background glow effect */}
                <motion.path
                    initial={{ d: "M0,100 Q320,60 640,100 T1280,100 T1920,100" }}
                    animate={controls}
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="20"
                    strokeLinecap="round"
                    style={{
                        filter: "drop-shadow(0 0 50px rgba(255,255,255,0.5))"
                    }}
                />

                {/* Secondary glow */}
                <motion.path
                    initial={{ d: "M0,100 Q320,60 640,100 T1280,100 T1920,100" }}
                    animate={controls}
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    style={{
                        filter: "drop-shadow(0 0 30px rgba(255,255,255,0.6))"
                    }}
                />

                {/* Main wave with variable width */}
                <motion.path
                    initial={{ d: "M0,100 Q320,60 640,100 T1280,100 T1920,100" }}
                    animate={controls}
                    fill="none"
                    stroke="url(#waveGradient)"
                    strokeLinecap="round"
                    style={{
                        filter: "drop-shadow(0 0 20px rgba(255,255,255,0.8)) drop-shadow(0 0 10px rgba(255,255,255,1))"
                    }}
                >
                    <animate
                        attributeName="stroke-width"
                        values="3;8;12;8;3"
                        dur="8s"
                        repeatCount="indefinite"
                    />
                </motion.path>

                <defs>
                    <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
                        <stop offset="25%" stopColor="#fff" stopOpacity="1" />
                        <stop offset="50%" stopColor="#fff" stopOpacity="1" />
                        <stop offset="75%" stopColor="#fff" stopOpacity="1" />
                        <stop offset="100%" stopColor="#fff" stopOpacity="0.6" />
                    </linearGradient>

                    {/* Add path width variation */}
                    <linearGradient id="strokeWidth" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                        <stop offset="25%" stopColor="white" stopOpacity="1" />
                        <stop offset="50%" stopColor="white" stopOpacity="1" />
                        <stop offset="75%" stopColor="white" stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0.4" />
                    </linearGradient>

                    <filter id="glow">
                        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                </defs>
            </motion.svg>

            {/* Enhanced Glow Effects with variable width */}
            <div className="absolute top-[calc(50%-100px)] -translate-y-[60%] left-0 w-full h-[320px] z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)] opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-70"></div>
                <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent opacity-60"></div>
        </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start text-left pt-[110px] pb-12 pl-12 sm:pl-24 md:pl-32 lg:pl-40 max-w-4xl">
                <span className="inline-flex items-center px-5 py-2 mb-8 rounded-full bg-black/60 text-white text-base font-medium shadow-lg border border-white/10">
                    Atom AI-Automation Partner
            </span>
                <h1 className="font-extrabold text-white text-left leading-[1.05] mb-8 max-w-3xl"
                    style={{
                        fontSize: "clamp(3rem, 7vw, 5rem)",
                        letterSpacing: "-0.02em"
                    }}>
                Scale Business<br />with Automation
            </h1>
                <p className="text-gray-300 text-left text-lg sm:text-xl mb-12 max-w-2xl">
                Manage all your data and workflows in one place. Automate processes, gain insights, and optimize your strategy with AI-powered intelligence.
            </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-20">
                    <button className="bg-white text-black font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-gray-100 transition text-base sm:text-lg">
                    Get Started Now
                </button>
                    <button className="bg-transparent border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-white/5 transition text-base sm:text-lg">
                    View Services
                </button>
            </div>
        </div>

            {/* Centered Marquee Logos at the bottom */}
            <div className="absolute left-1/2 bottom-10 -translate-x-1/2 z-20 w-[90vw] max-w-6xl">
                <div className="relative w-full overflow-hidden bg-gradient-to-r from-black via-transparent to-black rounded-lg">
                    <div className="flex w-fit animate-marquee">
                        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                            <span
                                key={index}
                                className="inline-block mx-16 text-white/80 text-2xl sm:text-3xl font-semibold tracking-wide"
                                style={{
                                    fontFamily: "inherit",
                                    letterSpacing: "0.02em",
                                    whiteSpace: "nowrap"
                                }}
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                    <div className="absolute top-0 flex w-fit animate-marquee2" aria-hidden="true">
                        {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                            <span
                                key={`clone-${index}`}
                                className="inline-block mx-16 text-white/80 text-2xl sm:text-3xl font-semibold tracking-wide"
                                style={{
                                    fontFamily: "inherit",
                                    letterSpacing: "0.02em",
                                    whiteSpace: "nowrap"
                                }}
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
    </section>
);
} 