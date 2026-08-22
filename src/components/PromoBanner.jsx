import React from 'react';

const PromoBanner = () => {
    return (
        <section className="w-full py-12">
            <div className="bg-[#D88A8A] text-white py-16 px-6 md:px-16 text-center space-y-4 w-full">
                <span className="text-xs font-semibold tracking-widest uppercase text-white/80">
                    Limited Time Offer
                </span>
                <h3 className="text-2xl md:text-4xl font-serif font-bold">
                    Get 25% Off Your First Order
                </h3>
                <p className="text-xs md:text-sm text-white/90 max-w-md mx-auto font-light">
                    Subscribe to our newsletter and unlock exclusive offers, beauty tips, and early access to new releases.
                </p>
                <div className="pt-2">
                    <button className="bg-white text-[#D88A8A] hover:bg-[#FAF8F5] px-8 py-3 rounded-md text-xs font-bold uppercase tracking-widest transition duration-300">
                        Claim Your Code
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PromoBanner;