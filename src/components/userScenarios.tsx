"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useScenarios } from "@/context/scenariosContext";
import Image from "next/image";
import { DownloadButton } from "./downloadButtons";

export function UserScenarios() {
  const { scenarios } = useScenarios();

  return (
    <section
      id="scenarios"
      className="w-full bg-gradient-to-b py-32 from-blue-100 to-neutral-100 relative overflow-hidden"
    >
      <div className="px-4 md:px-8 lg:px-14">
        <div className="w-full h-[600px] bg-gradient-to-b from-blue-500 to-blue-400 rounded-xl md:rounded-2xl relative">
          <div className="flex flex-col gap-4 justify-center items-center pt-8 text-white text-center">
            <motion.div
              className="pt-2"
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
            <span className="text-xs md:text-base lg:text-lg xl:text-xl">
              언어 장벽 없는 실시간 소통으로 현장 안전을 강화합니다.
            </span>
          </div>

          {/* Download Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <DownloadButton
              variant="app-store"
              className="bg-[#236AD0] min-w-[200px] z-20"
            />
            <DownloadButton
              variant="google-play"
              className="bg-[#236AD0] min-w-[200px] z-20"
            />

            <DownloadButton
              variant="collaboration"
              className="bg-[#236AD0] min-w-[200px] z-20"
            />
          </motion.div>
          {/* Background Circles - Inside the rectangle */}
          <div className="absolute -bottom-32 md:-bottom-52 lg:-bottom-64 xl:-bottom-[430px] left-1/2 transform -translate-x-1/2">
            <div className="size-[410px] md:size-[500px] lg:size-[600px] xl:size-[700px] opacity-20 bg-gradient-to-b from-white to-white/0 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-80 md:size-[410px] lg:size-[510px] xl:size-[610px] opacity-30 bg-gradient-to-b from-white to-white/0 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-56 md:size-[310px] lg:size-[410px] xl:size-[510px] opacity-30 bg-gradient-to-b from-white to-white/0 rounded-full" />

            {/* Image in center of circles */}
            <motion.div
              className="absolute top-2/5 md:top-2/5 lg:top-2/6 xl:top-1/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-80 lg:w-[600px] xl:w-[700px] h-96 lg:h-[540px] xl:h-[630px]"
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
          </div>
        </div>

        {scenarios.map((scenario, index) => (
          <motion.div
            key={index}
            className="mb-16 mt-20 flex flex-col items-center md:flex-row justify-between max-w-[1000px] mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="text-center md:text-left mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
                viewport={{ once: true }}
              >
                <Badge
                  variant="secondary"
                  className="mb-4 bg-blue-400/30 rounded-full px-4 py-1"
                >
                  User Scenario {String(index + 1).padStart(2, "0")}
                </Badge>
              </motion.div>
              <motion.h3
                className="text-2xl md:text-3xl lg:text-4xl  font-bold text-gray-900 my-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.3 }}
                viewport={{ once: true }}
              >
                {scenario.title}
              </motion.h3>
              <motion.p
                className="text-gray-600  mx-auto text-sm md:text-base lg:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
                viewport={{ once: true }}
              >
                {scenario.description}
              </motion.p>
            </div>

            <div className="flex justify-center">
              {index === 0 ? (
                // Scenario 01: 2개 이미지 (큰 배경)
                <div className="flex flex-wrap justify-center gap-4">
                  {scenario.images.map((image, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.3 + 0.5 + imgIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Card className="w-full h-64 bg-white shadow-lg py-0">
                        <CardContent className="p-4 h-full flex flex-col items-center justify-between">
                          <div className="w-full min-w-[160px] h-40 rounded-lg relative">
                            <Image
                              src={image.src}
                              alt={image.alt as string}
                              fill
                              className="object-contain rounded-lg"
                            />
                          </div>
                          <div className="text-center max-w-[150px]">
                            <div className="text-sm font-medium text-gray-700">
                              {image.alt}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : index === 1 || index === 2 ? (
                // Scenario 02, 03: 1개 이미지 (배경 있는 카드)
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.3 + 0.5,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="w-full h-full bg-transparent shadow-none border-none py-0">
                    <CardContent className="w-full h-full flex flex-col items-center justify-center">
                      <div className="w-full h-full min-w-[300px] min-h-[300px] rounded-lg relative">
                        <Image
                          src={scenario.images[0].src}
                          alt={scenario.images[0].alt as string}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                // Scenario 04: 3개 이미지 (박스 안에 아이콘과 alt 텍스트, 화살표)
                <div className="flex items-center justify-center">
                  {scenario.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="flex items-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.3 + 0.5 + imgIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Card className="w-full aspect-square h-full py-0">
                          <CardContent className="p-2 min-w-[100px] min-h-[100px] flex flex-col gap-2 items-center justify-between">
                            <div className="w-full h-full  rounded-lg relative flex items-center justify-center">
                              <Image
                                src={image.src}
                                alt={image.alt as string}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <div className="text-center max-w-[120px]">
                              <div className="text-xs font-medium text-gray-700">
                                {image.alt}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                      {imgIndex < scenario.images.length - 1 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.3 + 0.5 + imgIndex * 0.1 + 0.2,
                          }}
                          viewport={{ once: true }}
                        >
                          <Image
                            src="/user/arrow.svg"
                            alt="arrow"
                            width={24}
                            height={24}
                            className="object-cover"
                          />
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
