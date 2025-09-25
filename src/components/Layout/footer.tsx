import { Button } from "@/components/ui/button";
import { DownloadButton } from "@/components/downloadButtons";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 items-center pb-8">
          <div className="size-4 opacity-40 bg-slate-400 rounded-[4px]" />
          <div className="size-4 opacity-40 bg-white rounded-[4px]" />
          <div className="size-4 bg-white rounded-[4px]" />
        </div>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2">
            <Image
              src="/hero/safeyou.svg"
              alt="safeyou"
              width={120}
              height={100}
            />
            <span className="text-xl">와 함께</span>
          </div>

          <h3 className="text-2xl font-bold mb-4">
            더 스마트하고
            <br />
            안전한 현장을 만들어 보세요!
          </h3>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 mb-12">
          <DownloadButton
            variant="google-play"
            className="bg-black/60 min-w-[200px]"
          />
          <DownloadButton
            variant="collaboration"
            className="bg-black/60 min-w-[200px]"
          />
        </div>
        {/* Company Info */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-start mb-6">
            <h4 className="text-sm font-semibold mb-2">(주)이편한자동화기술</h4>
            <div className="text-xs text-gray-400 space-y-1">
              <p>
                주소 : 대전광역시 동구 안골로28번길 15-4 (구도동)
                이편한자동화기술
              </p>
              <p>
                사업자번호 : 825-86-00081 | 통신판매번호 : 2023-대전동구-0344
              </p>
              <p>대표자 : 박찬배 | TEL : 1588-6752 | FAX : 042-863-7747</p>
              <p>E-mail : ecatcor@safeeye.kr</p>
            </div>
          </div>

          <div className="text-start text-xs text-gray-500">
            <p>COPYRIGHT(c) 2021 (주)이편한자동화기술 ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
