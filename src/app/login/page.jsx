"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Auth
  const { signInUser, googleSignIn } = useAuth();

  // Router
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const redirectTo = searchParams?.get("redirect") || "/";

  // Watching email
  const watchedEmail = watch("email");

  useEffect(() => {
    setEmail(watchedEmail || "");
  }, [watchedEmail]);

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((res) => {
        console.log(res.user);
        toast.success("Signout successful!", { id: "signout" });
        router.push("/");
      })
      .catch((error) => console.log(error));
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        toast.success("Signout successful!", { id: "signout" });
        router.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full px-4 mt-14 sm:px-6 md:px-0 flex justify-center items-center min-h-full">
      <div className="card-body w-full max-w-md">
        {/* Title */}
        <div className="flex flex-col justify-center mb-4 text-center space-y-4">
          <h1 className="text-3xl font-bold text-orange-500">
            Login Your Account
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label text-gray-800 font-medium">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input w-full border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-500 px-4"
              placeholder="example@email.com"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}

            {/* Password */}
            <label className="label text-gray-800 font-medium">Password</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                })}
                className="input w-full border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-500 pr-12 px-4"
                placeholder="Enter a strong password"
              />

              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 text-gray-600 cursor-pointer z-10"
              >
                {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
              </div>
            </div>

            {/* Errors */}
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be 6 characters or longer
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Must include uppercase, lowercase, number & special character
              </p>
            )}

            {/* Forgot Password */}
            <div>
              <Link
                className="link link-hover"
                href={{
                  pathname: "/forget-password",
                  query: { email },
                }}
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <button className="btn w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-semibold mt-4 shadow-sm hover:shadow-lg transition-all duration-300">
              Sign In
            </button>
          </fieldset>
        </form>

        {/* Divider */}
        <div className="divider text-gray-400">or</div>

        {/* Google Sign In */}
        <button
          onClick={handleGoogle}
          className="btn w-full btn-outline flex items-center justify-center gap-2 transition"
        >
          <FcGoogle size={20} /> Sign In with Google
        </button>

        {/* Footer */}
        <div className="text-center mt-3 pb-16">
          <p className="font-medium text-gray-700">
            Already have an account?{" "}
            <Link
              href={{
                pathname: "/registration",
                query: { redirect: redirectTo },
              }}
              className="text-orange-500 underline font-semibold"
            >
              Registration
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
