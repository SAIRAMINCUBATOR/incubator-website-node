"use client";

import { useEffect, useState } from "react";
import { SessionContext } from "@/components/providers/context/SessionContext";
import { ModalProvider } from "@/components/providers/model-provider";
import { RedirectType, redirect, usePathname } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [isPasswordDefault, setIsPasswordDefault] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    // console.log(path);
    const regex = /^(\/api|\/edit|\/auth(?!\/signin\b)).*$/;
    if (regex.test(path)){
      if (!token && isTokenExpired()){
        redirect("/", RedirectType.replace);
      }
    }
    if (path=="/auth/addUser"){
      if (role!="ADMIN")
      redirect("/", RedirectType.replace);

    }
  }, [path]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    if (storedToken) {
      setToken(storedToken);
    }
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  const setSession = (newToken: string, newRole: string) => {
    const exp = JSON.parse(atob(newToken.split(".")[1]));
    localStorage.setItem("token", newToken);
    localStorage.setItem("role", newRole);
    setToken(newToken);
    setRole(newRole);
    setIsPasswordDefault(exp.isPasswordDefault);
  };

  const clearSession = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setToken(null);
    setRole(null);
    setIsPasswordDefault(null);
    redirect("/", RedirectType.replace);
  };

  const changePasswordNotDefault = () => {
    setIsPasswordDefault(false);
  };

  const isTokenExpired = () => {
    if (token) {
      let exp;

      try {
        exp = JSON.parse(atob(token.split(".")[1]));
      } catch (e) {
        return null;
      }
      if (exp.exp * 1000 < Date.now()) {
        clearSession();
        return true;
      }
      return false;
    }
    return true;
  };
  return (
    <SessionContext.Provider
      value={{
        token,
        role,
        isPasswordDefault,
        changePasswordNotDefault,
        isTokenExpired,
        clearSession,
        setSession,
      }}
    >
      <ModalProvider />
      {children}
    </SessionContext.Provider>
  );
}
