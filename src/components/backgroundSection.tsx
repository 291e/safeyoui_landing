import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function BackgroundSection() {
  const problems = [
    "언어 장벽 때문에 사고·위험 상황을 제대로 전달하기 어려워요.",
    "관리자에게 실시간 위치와 상태를 알리지 못해 대응이 늦어져요.",
    "근로자에게 사고 위치, 사진, 음성 정보를 전달받지 못해 상황 파악이 어려워요.",
    "사고 발생 후 즉시 신고하지 못해 대응이 지연될 수 있어요.",
    "여러 명의 근로자를 관리하다보니 안전 관리에 공백이 생겨요.",
  ];

  return (
    <section className="pt-16 pb-8 bg-gray-900 px-5 md:px-8 lg:px-14 relative">
      <div className="px-4 border border-blue-400/25 rounded-2xl bg-black">
        <div className="text-center my-18">
          <div className="mb-6 font-semibold text-white">Background</div>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            관리자와 <br className="block md:hidden" /> 외국인 근로자들은
            <br />
            어떤 불편함을 <br className="block md:hidden" /> 겪고 있을까요?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-12">
            {problems.map((problem, index) => (
              <Card
                key={index}
                className="bg-blue-50 border-blue-200 py-0 max-w-[980px]"
              >
                <CardContent className="p-4">
                  <p className="text-gray-800 text-center font-medium">
                    {problem}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Blur Overlay - from problem cards to chat bubbles */}
      <div className="absolute z-10 bottom-48 md:bottom-40 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900/80"></div>

      <div className="relative">
        {/* Connecting Dotted Line */}
        <div className="flex justify-center mb-8">
          <div className="relative z-20">
            <div className="w-0.5 h-16 to-slate-500/80 from-slate-500/0 bg-gradient-to-b"></div>
            <div className="absolute top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Chat Bubbles - Free Layout */}
        <div className="relative mb-8 px-8 h-32">
          {/* Left side bubbles */}
          <div className="absolute -top-4 left-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 max-w-xs transform rotate-[-4deg]">
              <p className="text-white text-sm">Sau bữa trưa</p>
            </div>
          </div>

          <div className="absolute top-12 left-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 max-w-xs transform rotate-[8deg]">
              <p className="text-white text-sm">Sau bữa</p>
            </div>
          </div>

          {/* Right side bubble */}
          <div className="absolute top-4 md:-top-4 right-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-4 py-2 max-w-xs transform rotate-[2deg]">
              <p className="text-white text-sm">어디라구요?</p>
            </div>
          </div>

          {/* Additional floating bubble */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 md:hidden">
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl px-3 py-1 max-w-xs transform rotate-[-1deg]">
              <p className="text-white text-xs opacity-80">...</p>
            </div>
          </div>
        </div>

        {/* Summary Statement */}
        <div className="relative md:absolute top-16 md:top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mb-8 z-10">
          <h3 className="text-2xl text-white">
            이처럼 위급 상황에서 <br />{" "}
            <span className="font-bold">
              {" "}
              언어 문제로 다국적 근로자와 <br className="block md:hidden" />{" "}
              관리자가 <br className="hidden md:block" /> 맞닥드리는
              <br className="block md:hidden" />
              어려움
            </span>
            이 있었습니다.
          </h3>
        </div>

        {/* Call to Action Button */}
        <div className="text-center absolute -bottom-22 z-10 left-0 right-0">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full px-8 py-3 text-white font-medium inline-block hover:from-blue-600 hover:to-blue-700 transition-colors cursor-pointer">
            Service Goal & Solution
          </div>
        </div>
      </div>
    </section>
  );
}
