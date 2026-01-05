"use client";

import { ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Layout/header";
import { Footer } from "@/components/Layout/footer";

interface LayoutProviderProps {
  children: ReactNode;
}

export function LayoutProvider({ children }: LayoutProviderProps) {
  const pathname = usePathname();
  const isAcountPage = useMemo(
    () => pathname?.startsWith("/acount") ?? false,
    [pathname]
  );

  return (
    <>
      {!isAcountPage && <Header />}
      {children}
      {!isAcountPage && <Footer />}
    </>
  );
}

