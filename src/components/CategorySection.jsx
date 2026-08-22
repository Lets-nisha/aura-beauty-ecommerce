import React from 'react';

const CategorySection = ({ categories }) => {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-12 py-12">
            <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2A2A2A]">Curated Collections</h3>
                <p className="text-gray-500 text-xs mt-1">Explore our range thoughtfully designed for every mood and routine.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {categories.map((cat, idx) => (
                    <div key={idx} className="flex flex-col items-center group cursor-pointer">
                        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mb-4 border border-[#E8DFD8] p-1 group-hover:border-[#E29D9D] transition duration-300">
                            <img src={cat.img} alt={cat.name} className="w-full h-full object-cover rounded-full group-hover:scale-105 transition duration-500" />
                        </div>
                        <span className="font-semibold text-xs uppercase tracking-wider text-[#2A2A2A] group-hover:text-[#E29D9D] transition">{cat.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CategorySection