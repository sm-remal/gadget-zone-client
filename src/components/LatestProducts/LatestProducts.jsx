import React from 'react';
import Link from 'next/link';
import { TbCoinTakaFilled } from "react-icons/tb";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";

async function getLatestProducts() {
  try {
    const res = await fetch('https://gadget-zone-gamma.vercel.app/latest-products', { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("FETCH ERROR:", error);
    return [];
  }
}

function renderStars(rating = 0) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-500 inline" />);
    else if (rating >= i - 0.5) stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 inline" />);
    else stars.push(<FaStar key={i} className="text-yellow-500 inline" />);
  }
  return stars;
}

const LatestProducts = async () => {
  const products = await getLatestProducts();

  return (
    <div className="latest-products px-5 py-10">

      <h2 className="text-3xl lg:text-4xl text-center font-bold text-orange-600 md:mt-5 mb-10">
        Latest Products
      </h2>

      {products.length === 0 && (
        <p className="text-center text-gray-600">No products available.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product._id} className="card bg-white overflow-hidden rounded-md shadow-sm relative border border-gray-100 transform transition-transform duration-300 hover:scale-102 hover:shadow-md group">
            <figure>
              <img
                src={product.product_image}
                alt={product.product_title}
                className="w-full h-[260px] object-cover transition-transform duration-300 hover:scale-110"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{product.product_title}</h2>
              <p className="text-gray-600 text-sm line-clamp-2">{product.short_description}</p>

              <div className="flex justify-between mt-3">
                <div className="flex items-center gap-1 font-bold text-orange-500">
                  <TbCoinTakaFilled size={20}/>
                  <span>{product.price}</span>
                </div>

                <div className="flex items-center gap-0.5">
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

      <div className='flex justify-center mt-10'>
        <Link href="/all-products">
          <button className='btn bg-red-500 text-white'>See All Products</button>
        </Link>
      </div>
    </div>
  );
};

export default LatestProducts;
