"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DownloadButtonProps {
  variant: "google-play" | "collaboration";
  className?: string;
}

export function DownloadButton({
  variant,
  className = "",
}: DownloadButtonProps) {
  if (variant === "google-play") {
    return (
      <motion.div
        className={`rounded-xl px-4 py-2 flex gap-2 items-center cursor-pointer transition-colors ${className}`}
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
        <div className="flex flex-col items-start">
          <div className="text-white text-sm">Get it on</div>
          <div className="text-white font-semibold leading-none text-lg">
            Google Play
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "collaboration") {
    return (
      <motion.div
        className={`rounded-xl px-4 py-2.5 flex gap-2 items-center cursor-pointer transition-colors ${className}`}
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
          <div className="text-white">기관·기업</div>
          <div className="text-white">협력 문의</div>
        </div>
      </motion.div>
    );
  }

  return null;
}
