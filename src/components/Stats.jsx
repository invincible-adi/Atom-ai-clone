import React from "react";

const stats = [
    { value: "500+", label: "Total Scaled Brands" },
    { value: "15+", label: "yrs expertise in AI" },
    { value: "50m+", label: "Total Customers of Clients" },
];

export default function Stats() {
    return (
        <section className="w-full flex justify-center items-center py-10 md:py-16 px-2 sm:px-6">
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0">
                {stats.map((stat, idx) => (
                    <React.Fragment key={stat.label}>
                        <div className="flex-1 flex flex-col items-center justify-center py-8">
                            <p className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.value}</p>
                            <p className="text-lg text-gray-400 font-medium">{stat.label}</p>
                        </div>
                        {idx < stats.length - 1 && (
                            <div className="hidden md:block h-16 w-px bg-white/20 mx-2" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
