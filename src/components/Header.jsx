import React from 'react';

const navLinks = [
    'Company',
    'Careers',
    'Pricing',
    'Blog',
    'Change Log',
    'Contact',
    'Services',
];

const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-5">
                {/* Logo */}
                <div className="flex-1 flex md:justify-start justify-center">
                    <span className="text-white font-extrabold text-lg xs:text-xl md:text-2xl tracking-tight">⚛️ AtomAI</span>
                </div>
                {/* Nav - Desktop */}
                <nav className="hidden md:flex flex-1 justify-center gap-6 lg:gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="uppercase tracking-wider text-xs md:text-sm font-semibold text-gray-200 hover:text-white transition"
                        >
                            {link}
                        </a>
                    ))}
                </nav>
                {/* CTA Button & Hamburger */}
                <div className="flex-1 flex justify-end items-center gap-2 md:gap-4">
                    <button className="hidden md:inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-5 md:px-7 py-2 md:py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition text-xs md:text-base">
                        Get Started
                    </button>
                    {/* Hamburger for mobile */}
                    <button className="md:hidden flex items-center justify-center p-2" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 z-50 transition-all duration-300">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="uppercase tracking-wider text-lg font-semibold text-gray-200 hover:text-white transition"
                        >
                            {link}
                        </a>
                    ))}
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition text-base mt-4">Get Started</button>
                    <button className="absolute top-6 right-6" onClick={() => setMenuOpen(false)}>
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            )}
            {/* Glowing underline */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-500/40 via-white/20 to-purple-600/40 blur-sm"></div>
        </header>
    );
};

export default Header; 