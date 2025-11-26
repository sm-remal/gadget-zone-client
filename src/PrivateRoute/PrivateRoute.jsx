"use client";
import Loading from "@/components/Loading/Loading";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  // ✅ Hook সবসময় component শুরুতেই কল হচ্ছে
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  // Loading দেখানো
  if (loading) {
    return <Loading />;
  }

  // User না থাকলে কিছু দেখাবে না
  if (!user) {
    return null;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
