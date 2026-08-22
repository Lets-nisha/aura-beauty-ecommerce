import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-12 py-12">
            <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2A2A2A]">Best Sellers</h3>
                <p className="text-gray-500 text-xs mt-1">Loved by thousands. Discover our most popular everyday essentials.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((prod) => (
                    <ProductCard key={prod.id} product={prod} />
                ))}
            </div>
        </section>
    );
}

export default ProductGrid