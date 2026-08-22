import React from 'react';
import { FaInstagram, FaXTwitter, FaFacebook, FaGlobe } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#FAF5EF] text-[#2A2A2A] pt-16 pb-8 border-t border-[#E8DFD8]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">

                {/* Brand Description */}
                <div className="space-y-3">
                    <h5 className="font-serif font-bold text-base tracking-wider text-[#2A2A2A]">AURA BEAUTY</h5>
                    <p className="text-gray-500 leading-relaxed font-light pr-4">
                        Our mission is to empower individual wellness through simple, sustainable, and highly effective clean beauty rituals. Crafted lovingly for your everyday radiance.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-2">
                    <h6 className="font-bold uppercase tracking-wider mb-3 text-[11px] text-[#2A2A2A]">QUICK LINKS</h6>
                    <p className="text-gray-500 hover:text-[#E29D9D] cursor-pointer">Shop</p>
                    <p className="text-gray-500 hover:text-[#E29D9D] cursor-pointer">About</p>
                    <p className="text-gray-500 hover:text-[#E29D9D] cursor-pointer">Blog</p>
                    <p className="text-gray-500 hover:text-[#E29D9D] cursor-pointer">FAQ</p>
                </div>

                {/* Customer Care */}
                <div className="space-y-2">
                    <h6 className="font-bold uppercase tracking-wider mb-3 text-[11px] text-[#2A2A2A]">CUSTOMER CARE</h6>
                    <p className="text-gray-500 hover:text-[#E29D9D] cursor-pointer">Shipping</p>
                    <p className="text-gray-500 hover:text-[#E29D9D] cursor-pointer">Returns</p>
                    <p className="text-gray-500 hover:text-[#E29D9D] cursor-pointer">Contact</p>
                    <p className="text-gray-500 hover:text-[#E29D9D] cursor-pointer">Track Order</p>
                </div>

                {/* Newsletter */}
                <div className="space-y-3">
                    <h6 className="font-bold uppercase tracking-wider text-[11px] text-[#2A2A2A]">NEWSLETTER</h6>
                    <p className="text-gray-500 font-light leading-relaxed">
                        Subscribe to unlock premium access to secret seasonal product launches and expert skincare advice.
                    </p>
                    <div className="relative flex items-center bg-white rounded-full p-1 border border-[#E8DFD8] shadow-xs max-w-sm">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-transparent px-4 py-2 text-xs w-full focus:outline-none text-gray-700"
                        />
                        <button className="bg-[#D88A8A] hover:bg-[#C98282] text-white px-6 py-2 rounded-full text-xs font-medium transition duration-200 shrink-0">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-[#E8DFD8]/60 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500">
                <p>© 2026 AURA BEAUTY. All rights reserved.</p>

                <div className="flex items-center gap-4 mt-4 md:mt-0 text-base">
                    <FaInstagram className="cursor-pointer hover:text-[#D88A8A] transition" />
                    <FaGlobe className="cursor-pointer hover:text-[#D88A8A] transition" />
                    <FaFacebook className="cursor-pointer hover:text-[#D88A8A] transition" />
                    <FaXTwitter className="cursor-pointer hover:text-[#D88A8A] transition" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;