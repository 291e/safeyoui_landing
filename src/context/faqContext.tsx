"use client";

import { createContext, useContext, ReactNode } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqContextType {
  faqs: FaqItem[];
}

const FaqContext = createContext<FaqContextType | undefined>(undefined);

const faqData: FaqItem[] = [
  {
    question: "다국어 지원은 어떻게 이루어지나요?",
    answer: "한국어, 영어, 베트남어, 우즈벡어 등 주요 언어를 실시간 번역하여 근로자와 관리자 간 소통이 원활하도록 지원합니다."
  },
  {
    question: "긴급 신고는 어떻게 하나요?",
    answer: "앱 내 SOS 버튼을 누르면, 사고 위치와 구조 요청이 관리자 및 현장 근로자가 포함된 단체 채팅방에 즉시 전송됩니다."
  },
  {
    question: "관리자와 작업자는 어떻게 소통하나요?",
    answer: "음성으로 말하면 자동 텍스트화 및 실시간 번역이 지원되어, 메시지를 통해 상황을 즉시 공유할 수 있습니다."
  },
  {
    question: "사고 보고서는 어떤 형식으로 작성하나요?(예정)",
    answer: "사진 업로드와 안전성 평가 항목이 자동 연동되며, AI로 손쉽게 보고서를 작성할 수 있습니다."
  }
];

export function FaqProvider({ children }: { children: ReactNode }) {
  return (
    <FaqContext.Provider value={{ faqs: faqData }}>
      {children}
    </FaqContext.Provider>
  );
}

export function useFaq() {
  const context = useContext(FaqContext);
  if (context === undefined) {
    throw new Error("useFaq must be used within a FaqProvider");
  }
  return context;
}
