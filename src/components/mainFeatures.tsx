"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { useFeatures } from "@/context/featuresContext";
import { DownloadButton } from "./downloadButtons";

export function MainFeatures() {
  const { features } = useFeatures();

  return (
    <section
      id="features"
      className="pt-3 bg-blue-400 text-white rounded-t-2xl"
    >
      <div className="p-4 flex flex-col items-center w-full sm:px-8 md:px-16 xl:px-32 rounded-t-2xl bg-gray-900">
        {/* Features Group - Left aligned on lg */}
        <div className="flex flex-col items-center lg:items-start w-full max-w-6xl">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8">
            <div className="mt-18 mb-4 text-blue-500 font-bold text-sm md:text-base lg:text-lg xl:text-xl">
              Main Features
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 lg:text-5xl">
              현장의 안전,
              <br />
              당신의 손 안에서
            </h2>
            <p className="text-sm md:text-base lg:text-lg opacity-50 text-center lg:text-left">
              실시간 소통으로 사고를 예방하고, 현장의 안전을{" "}
              <br className="block md:hidden" /> 한눈에 확인하세요.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="relative">
                  {/* Speech Bubble */}
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <div className="bg-blue-100 px-4 py-2 rounded-full relative min-w-[180px] text-center">
                      <div className="text-[#0D2351] font-bold text-lg whitespace-nowrap">
                        {feature.title}
                      </div>
                      {/* Speech bubble tail */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-100"></div>
                    </div>
                  </motion.div>

                  <Card className="bg-white text-gray-900 hover:shadow-lg transition-shadow pt-8 my-2 max-w-[450px]">
                    <CardHeader className="text-center">
                      <motion.div
                        className="w-16 h-16 flex items-center justify-center mx-auto mt-8 text-white"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="relative min-w-[130px] min-h-[100px] w-full h-full">
                          {feature.icon}
                        </div>
                      </motion.div>
                    </CardHeader>
                    <CardContent className="w-full flex justify-center px-2">
                      <CardDescription className="text-base text-center text-black whitespace-pre-line">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Buttons Group - Always centered */}
        <div className="flex justify-center w-full max-w-5xl">
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <DownloadButton
              variant="app-store"
              className="bg-black min-w-[200px]"
            />
            <DownloadButton
              variant="google-play"
              className="bg-black min-w-[200px]"
            />

            <DownloadButton
              variant="collaboration"
              className="bg-black min-w-[200px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
