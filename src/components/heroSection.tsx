"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import { DownloadButton } from "./downloadButtons";
export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-500 to-blue-500/0 overflow-hidden -mt-20 pt-20">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center text-white">
          <div className="flex flex-col items-center">
            <div className="justify-start text-white/70 text-lg font-medium font-['Gmarket_Sans_TTF'] tracking-[3.60px]">
              언어 장벽 없는 안전관리
            </div>

            <motion.div
              className="pt-2 pb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/hero/safeyou.svg"
                alt="safeyou"
                width={250}
                height={50}
              />
            </motion.div>

            <div className="flex flex-col gap-2 items-center">
              <div className="size-[2.96px] opacity-40 bg-white rounded-full" />
              <div className="size-[2.96px] opacity-40 bg-white rounded-full" />
              <div className="size-[2.96px] opacity-40 bg-white rounded-full" />
            </div>

            <div className="justify-start text-white text-sm font-bold font-['NanumSquare_Neo'] py-4">
              현장 근로자와 관리자를 위한 안전관리 플랫폼
            </div>
          </div>
          {/* Hero Image Section with Circles */}
          <motion.div
            className="flex justify-center items-center mt-12 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Background Circles */}
            <div className="absolute">
              <div className="size-[410px] lg:size-[500px] xl:size-[600px] opacity-20 bg-gradient-to-b from-white to-white/0 rounded-full" />
            </div>
            <div className="absolute">
              <div className="size-80 lg:size-[410px] xl:size-[500px] opacity-30 bg-gradient-to-b from-white to-white/0 rounded-full" />
            </div>
            <div className="absolute">
              <div className="size-56 lg:size-[310px] xl:size-[410px] opacity-30 bg-gradient-to-b from-white to-white/0 rounded-full" />
            </div>

            {/* Image Placeholder */}
            <motion.div
              className="relative z-10 w-full h-full min-h-[380px] lg:min-h-[450px] xl:min-h-[520px] max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] mx-auto flex flex-col items-center justify-center px-5"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
