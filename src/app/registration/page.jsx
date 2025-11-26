'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import useAuth from '@/hooks/useAuth';
import toast from 'react-hot-toast';

const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUser, updateUserProfile, googleSignIn } = useAuth();

    const router = useRouter();
    // const searchParams = useSearchParams();
    // const redirectTo = searchParams.get('from') || '/'; // redirect url

    const handleRegistration = async (data) => {
        try {
            const profileImage = data.photo[0];

            const resUser = await createUser(data.email, data.password);
            console.log(resUser.user);

            // Image Upload
            const formData = new FormData();
            formData.append("image", profileImage);
            const imageApiUrl = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_HOST_KEY}`;

            const imageRes = await axios.post(imageApiUrl, formData);
            const photoURL = imageRes.data.data.url;
            console.log("After Image Upload", photoURL);

            // Update Firebase User Profile
            await updateUserProfile(data.name, photoURL);
            console.log("User profile updated");
            toast.success("Signout successful!", { id: "signout" });
            router.push("/"); // redirect after registration
        } catch (error) {
            console.log(error);
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            const res = await googleSignIn();
            console.log(res.user);
            toast.success("Signout successful!", { id: "signout" });
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-full px-4 mt-14 sm:px-6 md:px-0 flex justify-center items-center min-h-screen'>
            <div className="card-body w-full max-w-md">
                {/* Heading */}
                <div className='flex flex-col justify-center mb-4 text-center space-y-4'>
                    <h1 className="text-3xl font-bold text-orange-500">
                        Create Your Account
                    </h1>
                </div>

                <form onSubmit={handleSubmit(handleRegistration)}>
                    <fieldset className="fieldset">
                        {/* Name */}
                        <label className="label text-gray-800 font-medium">Full Name</label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            className="input w-full border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-500 px-4"
                            placeholder="Enter your name" />
                        {errors.name && <p className='text-red-500'>Name is required</p>}

                        {/* Photo */}
                        <label className="label text-gray-800 font-medium">Photo</label>
                        <input
                            type="file"
                            {...register("photo", { required: true })}
                            className="file-input w-full border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-500 px-0"
                        />
                        {errors.photo && <p className='text-red-500'>Photo is required</p>}

                        {/* Email */}
                        <label className="label text-gray-800 font-medium">Email Address</label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="input w-full border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-500 px-4"
                            placeholder="example@email.com" />
                        {errors.email && <p className='text-red-500'>Email is required</p>}

                        {/* Password */}
                        <label className="label text-gray-800 font-medium">Password</label>
                        <div className="relative flex items-center">
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
                                })}
                                className="input w-full border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-gray-500 pr-12 px-4"
                                placeholder="Enter a strong password" />
                            <div
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 text-gray-600 cursor-pointer z-10">
                                {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                            </div>
                        </div>
                        {errors.password?.type === "required" && <p className='text-red-500'>Password is required</p>}
                        {errors.password?.type === "minLength" && <p className='text-red-500'>Password must be 6 characters or longer</p>}
                        {errors.password?.type === "pattern" && (
                            <p className='text-red-500'>
                                Password must include uppercase, lowercase, number & special character
                            </p>
                        )}

                        {/* Terms Checkbox */}
                        <label className="label mt-2 flex items-center gap-2">
                            <input type="checkbox"
                                {...register("terms", { required: true })}
                                className="checkbox checkbox-sm accent-orange-500" />
                            <span className="text-gray-700">I agree to the <span className="text-orange-500 font-medium">terms & conditions</span>.</span>
                        </label>
                        {errors.terms && <p className="text-red-500 text-sm">You must accept our terms & conditions</p>}

                        {/* Sign Up Button */}
                        <button className="btn w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white font-semibold mt-4 shadow-sm hover:shadow-lg transition-all duration-300">
                            Sign Up
                        </button>
                    </fieldset>
                </form>

                {/* Divider */}
                <div className="divider text-gray-400">or</div>

                {/* Google Sign Up */}
                <div>
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn w-full btn-outline flex items-center justify-center gap-2 transition">
                        <FcGoogle size={20} /> Sign Up with Google
                    </button>
                </div>

                <div className="text-center mt-3 pb-16">
                    <p className="font-medium text-gray-700">
                        Already have an account?{" "}
                        <Link
                            href={`/login${redirectTo !== '/' ? `?from=${redirectTo}` : ''}`}
                            className="text-orange-500 underline font-semibold">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
