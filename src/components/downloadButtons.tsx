"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DownloadButtonProps {
  variant: "google-play" | "app-store" | "collaboration";
  className?: string;
}

export function DownloadButton({
  variant,
  className = "",
}: DownloadButtonProps) {
  if (variant === "google-play") {
    return (
      <motion.a
        href="https://play.google.com/store/apps/details?id=com.lydianlabs.safeyoui&pli=1"
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-xl px-4 py-2 flex gap-2 items-center cursor-pointer transition-colors h-[55px] ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Google Play Icon */}
        <div className="w-8 h-8 flex items-center justify-center">
          <div className="w-full h-full relative">
            {/* Google Play triangle icon */}
            <Image src="/layout/google.svg" alt="google-play" fill />
          </div>
        </div>
        <div className="flex flex-col items-start leading-tight">
          <div className="text-white text-[10px] md:text-xs">Get it on</div>
          <Image
            src="/layout/googleplay.svg"
            alt="google-play"
            width={85}
            height={20}
            className="object-contain"
          />
        </div>
      </motion.a>
    );
  }

  if (variant === "app-store") {
    return (
      <motion.a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-xl px-4 py-2 flex gap-2 items-center cursor-pointer transition-colors h-[55px] ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Apple Icon */}
        <div className="w-8 h-8 flex items-center justify-center">
          <div className="w-full h-full relative">
            <Image src="/layout/apple.svg" alt="app-store" fill />
          </div>
        </div>
        <div className="flex flex-col items-start leading-tight">
          <div className="text-white text-[10px] md:text-xs whitespace-nowrap">
            Download on the
          </div>
          <div className="text-white text-lg md:text-xl font-semibold -mt-1">
            App Store
          </div>
        </div>
      </motion.a>
    );
  }

  if (variant === "collaboration") {
    return (
      <motion.a
        href="https://safeyoui.com/board/free/list.html?board_no=1002"
        target="_blank"
        rel="noopener noreferrer"
        className={`rounded-xl px-4 py-2.5 flex gap-2 items-center cursor-pointer transition-colors h-[55px] ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Phone Icon */}
        <div className="w-8 h-8 flex items-center justify-center">
          <div className="w-full h-full relative">
            <Image
              src="/layout/call.svg"
              alt="phone"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex items-start font-semibold">
          <div className="text-white">문의하기</div>
        </div>
      </motion.a>
    );
  }

  return null;
}
