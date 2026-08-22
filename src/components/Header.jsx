import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X } from 'lucide-react';
import logo from "../assets/logo.png";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8DFD8]">
            <div className="max-w-7xl mx-auto px-4 md:px-12 h-20 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                    
                   <div className="flex items-center gap-2">
                    <img
                        src={logo}
                        alt="Aura Beauty"
                        className="w-10 h-10 object-contain"
                    />
                    <h1 className="text-xl md:text-2xl font-serif font-bold tracking-widest text-[#2A2A2A]">
                        AURA BEAUTY
                    </h1>
                </div>
                    
                </div>

                <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#4A4A4A]">
                    <a href="#shop" className="hover:text-[#E29D9D] transition">Shop</a>
                    <a href="#skincare" className="hover:text-[#E29D9D] transition">Skincare</a>
                    <a href="#makeup" className="hover:text-[#E29D9D] transition">Makeup</a>
                    <a href="#about" className="hover:text-[#E29D9D] transition">About</a>
                    <a href="#contact" className="hover:text-[#E29D9D] transition">Contact</a>
                </nav>

                <div className="flex items-center gap-5 text-[#2A2A2A]">
                    <Search className="cursor-pointer hover:text-[#E29D9D] transition" size={18} />
                    <Heart className="cursor-pointer hover:text-[#E29D9D] transition" size={18} />
                    <div className="relative cursor-pointer">
                        <ShoppingBag className="hover:text-[#E29D9D] transition" size={18} />
                        <span className="absolute -top-1.5 -right-2 bg-[#E29D9D] text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">1</span>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8DFD8] px-6 py-4 space-y-3 font-semibold text-xs tracking-wider uppercase">
                    <a href="#shop" className="block py-1">Shop</a>
                    <a href="#skincare" className="block py-1">Skincare</a>
                    <a href="#makeup" className="block py-1">Makeup</a>
                    <a href="#about" className="block py-1">About</a>
                </div>
            )}
        </header>
    );
}

export default Header
