import Image from "next/image";

export function ServiceOverview() {
  return (
    <section className="py-6 ">
      <div className="">
        <div className="text-center mb-12">
          <div className="text-sm md:text-base lg:text-lg xl:text-xl font-bold text-gray-900 mb-6">
            Our service
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            다국적 근로자를 위한
            <br className="block md:hidden" /> 통합 안전관리 앱
          </h2>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-2xl mx-auto">
            안전해YOU는{" "}
            <span className="font-bold text-blue-500">
              {" "}
              언어에 상관없이 응급 상황을 신속하게 알리고, <br /> 위치와 위험
              상황을 공유
            </span>{" "}
            할 수 있도록 돕습니다.
          </p>
        </div>

        {/* App Screenshots */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto px-5">
          <div className="bg-blue-400/80 w-full aspect-square rounded-3xl p-11 text-center relative">
            <Image
              src="/service/icon1.svg"
              alt="service1"
              fill
              className="object-contain pt-11"
            />
          </div>

          <div className="bg-blue-500/80 w-full aspect-square rounded-3xl p-11 text-center relative">
            <Image
              src="/service/icon2.svg"
              alt="service2"
              fill
              className="object-contain pt-11"
            />
          </div>

          <div className="bg-[#4D6DB0]/80 w-full aspect-square rounded-3xl p-11 text-center relative">
            <Image
              src="/service/icon3.svg"
              alt="service3"
              fill
              className="object-contain pt-11"
            />
          </div>
        </div>

        {/* Dotted Lines Pattern */}
        <div className="relative w-full pt-86 xl:pt-120 mb-8">
          {/* Background Image - Full Width */}
          <div className="absolute top-10 inset-0 w-full h-full">
            <Image
              src="/service/image.svg"
              alt="Background pattern"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-4xl h-32 relative">
              {/* Dotted grid pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" className="text-blue-300">
                  <defs>
                    <pattern
                      id="grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeDasharray="2,2"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Central dot */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-5.5 h-5.5 bg-blue-300/80 rounded-full">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text over the map pattern */}
        <div className="text-center relative -top-24 xl:-top-44 -mt-24 z-10">
          <div className=" text-blue-500 md:text-lg lg:text-xl font-semibold mb-4">
            한국어, 영어, 베트남어, 우즈벡어 등 실시간 번역 지원
          </div>
          <h3 className="text-3xl md:text-4xl  font-bold text-gray-900">
            모두의 안전은 언어 장벽을 <br className="block md:hidden" /> 넘어야
            지켜집니다.
          </h3>
        </div>
      </div>
    </section>
  );
}
