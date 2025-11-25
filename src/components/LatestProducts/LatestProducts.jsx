import React from 'react';
import Link from 'next/link';
import { TbCoinTakaFilled } from "react-icons/tb";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";

// Server-side fetch function
async function getLatestProducts() {
  const res = await fetch('http://localhost:5000/latest-products', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

// Helper function to render star rating
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

const LatestProducts = async () => {
  const products = await getLatestProducts();

  return (
    <div className="latest-products px-5 py-10">
      <h2 className="text-3xl lg:text-4xl text-center font-bold text-orange-600 md:mt-5 mb-10">Latest Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div 
            key={product._id} 
            className="card bg-white overflow-hidden rounded-md shadow-sm relative border border-gray-100 transform transition-transform duration-300 hover:scale-102 hover:shadow-md group"
          >

            {/* Product Image */}
            <figure className="overflow-hidden cursor-pointer">
              <img
                src={product.product_image}
                alt={product.product_title}
                className="w-full h-[260px] object-cover transition-transform duration-300 hover:scale-110"
              />
            </figure>

            {/* NEW Badge */}
            {product.availability && (
              <div className="badge bg-orange-600 text-white absolute top-3 left-3 px-2 py-1 text-xs rounded">
                NEW
              </div>
            )}

            {/* Card Body */}
            <div className="card-body p-4">
              <h2 className="card-title text-lg font-bold mb-2">
                {product.product_title}
              </h2>

              {/* Short description with ellipsis */}
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                {product.short_description}
              </p>

              {/* Price & Rating */}
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-1 font-bold text-orange-500">
                  <TbCoinTakaFilled size={20}/>
                  <span>{product.price}</span>
                </div>
                <div className="flex items-center gap-0.5">
                  {renderStars(product.rating)}
                </div>
              </div>

              {/* Details Button */}
              <Link href={`/product-details/${product._id}`}>
                <button className="btn w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-semibold mt-4 shadow-sm hover:shadow-lg transition-all duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center mt-8 md:mt-12'>
        <Link href={"/all-products"}>
          <button className='btn bg-red-500 hover:bg-red-600 text-white font-semibold'>See All Products</button>
        </Link>
      </div>
    </div>
  );
};

export default LatestProducts;
