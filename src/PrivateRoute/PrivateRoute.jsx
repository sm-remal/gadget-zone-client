"use client";
import Loading from "@/components/Loading/Loading";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

 
  if (loading) {
    return <Loading />;
  }

  
  if (!user) {
    return null;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
