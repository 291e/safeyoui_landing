"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DownloadButton } from "./downloadButtons";
export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-500 to-blue-500/0 overflow-hidden pt-[70px]">
      <div className="container mx-auto px-4 pt-8 pb-16 relative z-10">
        <div className="text-center text-white">
          <div className="flex flex-col items-center">
            <div className="justify-start text-white/70 text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium font-['Gmarket_Sans_TTF'] tracking-[3.60px]">
              언어 장벽 없는 안전관리
            </div>

            <motion.div
              className="pt-2 pb-5 w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/hero/safeyou.svg"
                alt="safeyou"
                width={450}
                height={90}
                className="w-full h-auto"
              />
            </motion.div>

            <div className="flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 items-center">
              <div className="size-[2.96px] sm:size-[3.96px] md:size-[4.96px] lg:size-[5.96px] xl:size-[6.96px] opacity-40 bg-white rounded-full" />
              <div className="size-[2.96px] sm:size-[3.96px] md:size-[4.96px] lg:size-[5.96px] xl:size-[6.96px] opacity-40 bg-white rounded-full" />
              <div className="size-[2.96px] sm:size-[3.96px] md:size-[4.96px] lg:size-[5.96px] xl:size-[6.96px] opacity-40 bg-white rounded-full" />
            </div>

            <div className="justify-start text-white text-sm md:text-base lg:text-lg xl:text-xl font-bold font-['NanumSquare_Neo'] py-4">
              현장 근로자와 관리자를 위한 안전관리 플랫폼
            </div>
          </div>
          {/* Hero Image Section with Circles */}
          <motion.div
            className="flex justify-center items-center mt-6 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Background Circles */}
            <div className="absolute lg:top-[300px] xl:top-[400px]">
              <div className="size-[410px] lg:size-[800px] xl:size-[1300px] 2xl:size-[1500px] 3xl:size-[1700px] opacity-20 bg-gradient-to-b from-white to-white/0 rounded-full" />
            </div>
            <div className="absolute lg:top-[430px] xl:top-[530px]">
              <div className="size-80 lg:size-[600px] xl:size-[950px] 2xl:size-[1100px] 3xl:size-[1400px] opacity-30 bg-gradient-to-b from-white to-white/0 rounded-full" />
            </div>
            <div className="absolute lg:top-[560px] xl:top-[660px]">
              <div className="size-56 lg:size-[400px] xl:size-[600px] 2xl:size-[800px] 3xl:size-[1000px] opacity-30 bg-gradient-to-b from-white to-white/0 rounded-full" />
            </div>

            {/* Image Placeholder */}
            <motion.div
              className="relative z-10 w-full h-full min-h-[380px] lg:min-h-[450px] xl:min-h-[520px] 2xl:min-h-[600px] 3xl:min-h-[680px] max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px] 3xl:max-w-[900px] mx-auto flex flex-col items-center justify-center px-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Image
                src="/hero/phone.png"
                alt="Hero Image"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Download Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row md:hidden gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <DownloadButton variant="google-play" className="bg-[#2269D0]/50" />
            <DownloadButton variant="app-store" className="bg-black/50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
