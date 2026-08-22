import React from 'react';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg p-3 md:p-4 border border-[#F0E8E2] flex flex-col justify-between group hover:shadow-md transition duration-300">
            <div>
                <div className="relative mb-3 overflow-hidden rounded-md bg-[#FAF8F5]">
                    <img src={product.img} alt={product.title} className="w-full h-44 md:h-56 object-cover group-hover:scale-105 transition duration-500" />
                    <button className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full text-gray-500 hover:text-[#E29D9D] transition">
                        <Heart size={14} />
                    </button>
                </div>
                <span className="text-[9px] font-bold text-[#E29D9D] uppercase tracking-widest">{product.category}</span>
                <h4 className="font-serif font-semibold text-sm text-[#2A2A2A] mt-1 line-clamp-1">{product.title}</h4>
            </div>

            <div className="mt-4 pt-2 border-t border-[#FAF8F5] flex items-center justify-between">
                <span className="font-bold text-sm text-[#2A2A2A]">{product.price}</span>
                <button className="bg-[#FAF8F5] text-[#2A2A2A] hover:bg-[#E29D9D] hover:text-white px-3 py-1.5 rounded text-[11px] font-semibold tracking-wider uppercase transition">
                    Add
                </button>
            </div>
        </div>
    );
}

export default ProductCard