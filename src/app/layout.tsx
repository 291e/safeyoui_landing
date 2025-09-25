import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Layout/header";
import { Footer } from "@/components/Layout/footer";

export const metadata: Metadata = {
  title: "안전해유 (SafeYou) - 다국적 근로자를 위한 통합 안전관리 앱",
  description:
    "안전해유는 언어 장벽을 넘어 다국적 근로자들의 안전을 지키는 통합 안전관리 앱입니다. 한국어, 영어, 베트남어, 우즈벡어 등 실시간 번역 지원으로 응급 상황을 신속하게 알리고 위치와 위험 상황을 공유할 수 있습니다.",
  keywords: [
    "안전해유",
    "SafeYou",
    "다국적 근로자",
    "안전관리",
    "실시간 번역",
    "응급상황",
    "위치공유",
    "안전앱",
    "multinational workers",
    "safety management",
    "real-time translation",
    "emergency response",
  ],
  authors: [{ name: "SafeYou Team" }],
  creator: "SafeYou",
  publisher: "SafeYou",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://safeyou.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "안전해유 (SafeYou) - 다국적 근로자를 위한 통합 안전관리 앱",
    description:
      "언어 장벽을 넘어 다국적 근로자들의 안전을 지키는 통합 안전관리 앱",
    url: "https://safeyou.app",
    siteName: "SafeYou",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "안전해유 (SafeYou) - 다국적 근로자를 위한 통합 안전관리 앱",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "안전해유 (SafeYou) - 다국적 근로자를 위한 통합 안전관리 앱",
    description:
      "언어 장벽을 넘어 다국적 근로자들의 안전을 지키는 통합 안전관리 앱",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css"
        />
      </head>
      <body className="font-pretendard antialiased overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
