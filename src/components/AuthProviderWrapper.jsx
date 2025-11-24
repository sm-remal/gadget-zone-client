"use client";

import AuthProvider from "@/contexts/AuthProvider";

export default function AuthProviderWrapper({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
