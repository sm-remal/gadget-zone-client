import React from 'react';
import Link from 'next/link';
import { TbCoinTakaFilled } from "react-icons/tb";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// Fetch single product from API
async function getProduct(id) {
  const res = await fetch(`http://localhost:5000/products/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}

// Render rating stars
function renderStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-500 inline" />);
    else if (rating >= i - 0.5) stars.push(<FaStarHalfAlt key={i} className="text-yellow-500 inline" />);
    else stars.push(<FaStar key={i} className="text-gray-300 inline" />);
  }
  return stars;
}

// Server Component
const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;

  if (!id) {
    return <div className="text-center py-10 text-red-500">Invalid Product</div>;
  }

  let product;
  try {
    product = await getProduct(id);
  } catch (error) {
    return <div className="text-center py-10 text-red-500">Product not found</div>;
  }

  return (
    <div className="px-5 py-10 max-w-5xl mx-auto">
      <Link href="/all-products" className="text-orange-500 font-semibold mb-5 inline-block">
        &larr; Back to Products
      </Link>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <div className="flex-1">
          <img
            src={product.product_image}
            alt={product.product_title}
            className="w-full h-[450px] object-cover rounded-md shadow"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-3xl font-bold mb-3">{product.product_title}</h1>

          {/* Category + Added On (stacked vertically) */}
          <div className="mb-4 space-y-1">
            <p className="text-gray-600 font-medium"><strong>Category:</strong> {product.category}</p>
            <p className="text-gray-600 font-medium"><strong>Added On:</strong> {product.createdAt}</p>
          </div>

          {/* Price + Availability */}
          <div className="flex flex-wrap gap-4 items-center mb-3">
            <div className="flex items-center gap-2 text-orange-500 font-bold text-xl">
              <TbCoinTakaFilled />
              <span>{product.price}</span>
            </div>
            <p className={`font-semibold ${product.availability ? 'text-green-600' : 'text-red-600'}`}>
              {product.availability ? 'In Stock' : 'Out of Stock'}
            </p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            {renderStars(product.rating)}
            <span className="text-gray-500 ml-2">({product.rating})</span>
          </div>

          {/* Descriptions */}
          <p className="text-gray-700 mb-3">{product.short_description}</p>
          <p className="text-gray-600 mb-3">{product.long_description}</p>

          {/* Specifications */}
          {product.specification && product.specification.length > 0 && (
            <div className="mb-3">
              <h3 className="font-semibold mb-1">Specifications:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {product.specification.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
