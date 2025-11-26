"use client";

import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import PrivateRoute from "@/PrivateRoute/PrivateRoute";

const ManageProducts = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  // Fetch products for current user
  const fetchProducts = async () => {
    if (!user?.email) return;

    try {
      const res = await fetch(`https://gadget-zone-gamma.vercel.app/products?email=${user.email}`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      toast.error("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [user]);

  // Delete product with SweetAlert2
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`https://gadget-zone-gamma.vercel.app/products/${id}`, {
            method: "DELETE",
          });

          if (!res.ok) throw new Error("Failed to delete product");

          setProducts(prev => prev.filter(p => p._id !== id));

          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success"
          });
        } catch (error) {
          toast.error(error.message || "Something went wrong");
        }
      }
    });
  };


  return (
    <PrivateRoute>
      <div className="max-w-6xl mx-auto px-5 py-10">
        <title>Manage-Products | Gadget Zone</title>
        <h1 className="text-3xl font-bold mb-6">Manage Products</h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">You have no products.</p>
        ) : (
          <div className="overflow-x-auto border rounded-lg">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 border-b text-left">Title</th>
                  <th className="py-3 px-4 border-b text-left">Category</th>
                  <th className="py-3 px-4 border-b text-left">Price (Tk)</th>
                  <th className="py-3 px-4 border-b text-left">Rating</th>
                  <th className="py-3 px-4 border-b text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product._id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4 border-b">{product.product_title}</td>
                    <td className="py-3 px-4 border-b">{product.category}</td>
                    <td className="py-3 px-4 border-b">{product.price}</td>
                    <td className="py-3 px-4 border-b">{product.rating}</td>
                    <td className="py-3 px-4 border-b flex gap-2">
                      <Link
                        href={`/product-details/${product._id}`}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </PrivateRoute>
  );
};

export default ManageProducts;
