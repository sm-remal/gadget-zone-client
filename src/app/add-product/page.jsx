"use client";

import useAuth from "@/hooks/useAuth";
import PrivateRoute from "@/PrivateRoute/PrivateRoute";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const AddProductForm = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      availability: false,
    },
  });

  const onSubmit = async (data) => {
    const finalData = {
      ...data,
      price: Number(data.price),
      rating: Number(data.rating) || 0,
      specification: data.specification.split(",").map((s) => s.trim()),
      availability: data.availability === true,
      userEmail: user?.email || "unknown",
    };

    try {
      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      if (!res.ok) throw new Error("Failed to add product");

      toast.success("Product added successfully!");
      reset();
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <PrivateRoute>
      <div className="max-w-2xl mx-auto px-5 py-10">
        <h1 className="text-3xl text-orange-600 font-bold mb-6">Add Product</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {/* PRODUCT TITLE */}
          <input
            type="text"
            placeholder="Product Title"
            className="border rounded px-3 py-2"
            {...register("product_title", {
              required: "Product title is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters long",
              },
            })}
          />
          {errors.product_title && (
            <p className="text-red-500 text-sm">{errors.product_title.message}</p>
          )}

          {/* CATEGORY + PRICE */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Category"
              className="border rounded px-3 py-2 flex-1"
              {...register("category", {
                required: "Category is required",
                minLength: {
                  value: 3,
                  message: "Category must be at least 3 characters long",
                },
              })}
            />

            <input
              type="number"
              placeholder="Price"
              className="border rounded px-3 py-2 flex-1"
              {...register("price", {
                required: "Price is required",
                min: { value: 1, message: "Price must be greater than 0" },
              })}
            />
          </div>
          {(errors.category || errors.price) && (
            <div>
              {errors.category && (
                <p className="text-red-500 text-sm">{errors.category.message}</p>
              )}
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
              )}
            </div>
          )}

          {/* SPECIFICATION */}
          <input
            type="text"
            placeholder="Specifications (comma separated)"
            className="border rounded px-3 py-2"
            {...register("specification", {
              required: "Specification is required",
              validate: (val) =>
                val.includes(",") || "Add at least 2 items separated by comma",
            })}
          />
          {errors.specification && (
            <p className="text-red-500 text-sm">{errors.specification.message}</p>
          )}

          {/* RATING */}
          <input
            type="number"
            placeholder="Rating (0-5)"
            step="0.1"
            min="0"
            max="5"
            className="border rounded px-3 py-2"
            {...register("rating", {
              required: "Rating is required",
              min: { value: 0, message: "Min rating is 0" },
              max: { value: 5, message: "Max rating is 5" },
            })}
          />
          {errors.rating && (
            <p className="text-red-500 text-sm">{errors.rating.message}</p>
          )}

          {/* SHORT DESCRIPTION */}
          <textarea
            placeholder="Short Description"
            rows={2}
            className="border rounded px-3 py-2"
            {...register("short_description", {
              required: "Short description is required",
              minLength: {
                value: 10,
                message: "Short description must be at least 10 characters",
              },
            })}
          />
          {errors.short_description && (
            <p className="text-red-500 text-sm">
              {errors.short_description.message}
            </p>
          )}

          {/* LONG DESCRIPTION */}
          <textarea
            placeholder="Full Description"
            rows={5}
            className="border rounded px-3 py-2"
            {...register("long_description", {
              required: "Long description is required",
              minLength: {
                value: 20,
                message: "Long description must be at least 20 characters",
              },
            })}
          />
          {errors.long_description && (
            <p className="text-red-500 text-sm">
              {errors.long_description.message}
            </p>
          )}

          {/* IMAGE URL */}
          <input
            type="text"
            placeholder="Product Image URL"
            className="border rounded px-3 py-2"
            {...register("product_image", {
              required: "Image URL is required",
              pattern: {
                value: /^https?:\/\/.+/i,
                message: "Enter a valid image URL",
              },
            })}
          />
          {errors.product_image && (
            <p className="text-red-500 text-sm">
              {errors.product_image.message}
            </p>
          )}

          {/* STOCK CHECKBOX — REQUIRED */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4"
              {...register("availability", {
                required: "You must confirm product availability",
              })}
            />
            <label>In Stock</label>
          </div>
          {errors.availability && (
            <p className="text-red-500 text-sm">
              {errors.availability.message}
            </p>
          )}

          {/* SUBMIT BTN */}
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </PrivateRoute>
  );
};

export default AddProductForm;
