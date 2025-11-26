"use client";
import { useState } from "react";
import Link from "next/link";
import { TbCoinTakaFilled } from "react-icons/tb";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";

function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<FaStar key={i} className="text-yellow-500 inline" />);
        } else if (rating >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 inline" />);
        } else {
            stars.push(<FaStar key={i} className="text-yellow-500 inline" />);
        }
    }
    return stars;
}

export default function ProductList({ products }) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = products.filter((product) =>
        product.product_title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="all-products py-10">


            <div className="flex flex-col items-center text-center px-5 py-10">
                {/* Title */}
                <h2 className="text-3xl font-bold text-orange-500 mb-4">
                    All Products
                </h2>

                {/* Short description */}
                <p className="max-w-3xl mb-6">
                    Explore our collection of top-quality gadgets including laptops, smartphones, accessories, and more. Compare features, see real images, and check ratings to find the perfect device quickly and easily.
                </p>

                {/* Search bar at bottom */}
                <div className="w-full max-w-md">
                    <label className="w-full">
                        <input
                            type="search"
                            placeholder="Search product..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full border px-3 py-2 rounded outline-none"
                        />
                    </label>
                </div>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <div
                        key={product._id}
                        className="card bg-white rounded-md shadow-sm border border-gray-100 hover:scale-105 duration-300"
                    >
                        <figure>
                            <img
                                src={product.product_image}
                                alt={product.product_title}
                                className="w-full h-[260px] object-cover"
                            />
                        </figure>

                        <div className="card-body p-4">
                            <h2 className="card-title text-lg font-bold">
                                {product.product_title}
                            </h2>

                            <p className="text-gray-600 text-sm line-clamp-2">
                                {product.short_description}
                            </p>

                            <div className="flex justify-between mt-3">
                                <div className="flex items-center gap-1 font-bold text-orange-500">
                                    <TbCoinTakaFilled />
                                    <span>{product.price}</span>
                                </div>

                                <div className="flex items-center gap-1">
                                    {renderStars(product.rating)}
                                </div>
                            </div>

                            <Link href={`/product-details/${product._id}`}>
                                <button className="btn w-full bg-orange-500 text-white font-semibold mt-4">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
