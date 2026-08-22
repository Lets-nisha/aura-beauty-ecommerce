import React from 'react';

const HeroSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-12 py-6 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">

                {/* Mobile View: Image Appears First | Desktop View: Standard Left Content */}
                <div className="relative order-1 md:order-2">
                    <div className="overflow-hidden rounded-2xl shadow-sm border border-[#E8DFD8]">
                        <img
                            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900"
                            alt="Aura Beauty Hero Model"
                            className="w-full h-[280px] sm:h-[360px] md:h-[500px] object-cover hover:scale-105 transition duration-700"
                        />
                    </div>
                    {/* Subtle Mobile Badge overlay */}
                    <div className="absolute bottom-3 left-3 md:hidden bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/40 shadow-xs">
                        <span className="text-[10px] font-semibold text-[#2A2A2A] tracking-wider uppercase">
                            100% Organic & Clean
                        </span>
                    </div>
                </div>

                {/* Text & Action Content */}
                <div className="space-y-4 md:space-y-6 text-center md:text-left order-2 md:order-1 pt-2 md:pt-0">
                    <span className="inline-block text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#E29D9D] bg-[#E29D9D]/10 px-3 py-1 rounded-full">
                        Flawless Skin
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-[#2A2A2A] leading-tight">
                        Discover Your <br className="hidden md:inline" /> Natural Glow
                    </h2>

                    <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-md mx-auto md:mx-0 font-light leading-relaxed">
                        A curated line of clean, high-performance botanical skincare formulated to reveal your most radiant skin.
                    </p>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <button className="bg-[#E29D9D] hover:bg-[#C98282] text-white px-8 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-widest transition duration-300 shadow-sm w-full sm:w-auto">
                            Shop Now
                        </button>
                        <button className="border border-[#E8DFD8] hover:bg-[#FAF8F5] text-[#2A2A2A] px-6 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-widest transition duration-300 w-full sm:w-auto">
                            Explore Sets
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HeroSection