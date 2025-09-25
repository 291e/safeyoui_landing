"use client";

import { createContext, useContext, ReactNode } from "react";
import { AlertTriangle, Eye, FileText, Globe } from "lucide-react";

export interface ScenarioImage {
  src: string;
  alt: string;
}

export interface ScenarioItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  images: ScenarioImage[];
}

interface ScenariosContextType {
  scenarios: ScenarioItem[];
}

const ScenariosContext = createContext<ScenariosContextType | undefined>(
  undefined
);

const scenariosData: ScenarioItem[] = [
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "혹시 긴급 사고가 났나요?",
    description:
      "SOS 버튼만 누르면 즉시 신고 완료! 위치·사진·음성까지 단번에 공유돼 모두가 빠르게 대응할 수 있어요.",
    images: [
      {
        src: "/user/icon1.svg",
        alt: "사고 발생 시 SOS 버튼으로 즉시 신고",
      },
      {
        src: "/user/icon2.svg",
        alt: "사고 현장 정보가 관리자 및 근로자 단톡방에 즉시 공유",
      },
    ],
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "현장 근로자 안전 모니터링",
    description:
      "GPS로 근로자의 위치를 실시간 모니터링하여 위험 상황 발생 시 즉각적인 대응으로 현장의 안전을 지킬 수 있어요.",
    images: [{ src: "/user/image2.svg", alt: "모니터링 화면" }],
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "현장 안전 점검 및 보고",
    description:
      "위험 요소를 사진으로 찍고 음성이나 텍스트로 기록할 수 있으며 이를 기반으로 일일 안전 점검 보고서도 간편하게 작성할 수 있어요. (예정)",
    images: [{ src: "/user/image2.svg", alt: "안전 점검" }],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "다국적 근로자 지원",
    description:
      "한국어·영어·베트남어·우즈벡어를 지원하고 음성 입력이 실시간 번역되어 언어 장벽 없이 보고할 수 있어요.",
    images: [
      { src: "/user/icon3.svg", alt: "음성 입력" },
      { src: "/user/icon4.svg", alt: "텍스트 변환" },
      { src: "/user/icon5.svg", alt: "실시간 번역" },
    ],
  },
];

export function ScenariosProvider({ children }: { children: ReactNode }) {
  return (
    <ScenariosContext.Provider value={{ scenarios: scenariosData }}>
      {children}
    </ScenariosContext.Provider>
  );
}

export function useScenarios() {
  const context = useContext(ScenariosContext);
  if (context === undefined) {
    throw new Error("useScenarios must be used within a ScenariosProvider");
  }
  return context;
}
