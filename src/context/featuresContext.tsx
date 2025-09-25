"use client";

import { createContext, useContext, ReactNode } from "react";
import { Shield, FileText, AlertTriangle } from "lucide-react";
import Image from "next/image";

export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesContextType {
  features: FeatureItem[];
}

const FeaturesContext = createContext<FeaturesContextType | undefined>(
  undefined
);

const featuresData: FeatureItem[] = [
  {
    icon: (
      <Image
        src="/main/icon1.svg"
        alt="real-time"
        fill
        className="object-contain"
      />
    ),
    title: "실시간 안전 관리",
    description:
      "현장을 실시간으로 확인하고, 위험을 즉시 파악하세요. 관리자와 작업자가 빠르게 소통할 수 있습니다.",
  },
  {
    icon: (
      <Image
        src="/main/icon2.svg"
        alt="real-time"
        fill
        className="object-contain"
      />
    ),
    title: "간편한 보고서 작성(예정)",
    description:
      "AI로 사고·위험 보고서를 손쉽게 작성·공유하고 스마트한 안전관리를 실현하세요.",
  },
  {
    icon: (
      <Image
        src="/main/icon3.svg"
        alt="real-time"
        fill
        className="object-contain"
      />
    ),
    title: "긴급 상황 알림",
    description:
      "위험 지역 진입 등 긴급 상황 발생 시 비콘 알림을 보내어 신속한 대응을 돕습니다.",
  },
];

export function FeaturesProvider({ children }: { children: ReactNode }) {
  return (
    <FeaturesContext.Provider value={{ features: featuresData }}>
      {children}
    </FeaturesContext.Provider>
  );
}

export function useFeatures() {
  const context = useContext(FeaturesContext);
  if (context === undefined) {
    throw new Error("useFeatures must be used within a FeaturesProvider");
  }
  return context;
}
