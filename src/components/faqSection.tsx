"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useFaq } from "@/context/faqContext";

export function FaqSection() {
  const { faqs } = useFaq();

  return (
    <section
      id="faq"
      className="py-16 bg-gradient-to-b from-neutral-100 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className="mb-2 text-blue-500 text-sm md:text-base lg:text-lg xl:text-xl"
          >
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
            자주 묻는 질문
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-4 relative">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow py-0">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-2">
                    <motion.div
                      className="w-6 h-6 bg-[#4D6DB0] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      Q
                    </motion.div>
                    <div className="flex-1">
                      <h3 className=" font-bold text-gray-900 mb-3 text-sm md:text-base lg:text-lg">
                        {faq.question}
                      </h3>
                      <div className="flex items-start space-x-3">
                        <motion.div
                          className="w-4 h-4 bg-blue-100 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-1"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          A
                        </motion.div>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg break-keep">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Background Circles */}
          <div className="absolute top-1/6 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
            <div className="size-[600px] md:size-[800px] lg:size-[1000px] xl:size-[1200px] opacity-10 bg-gradient-to-b from-gray-300 to-gray-300/0 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-[400px] md:size-[600px] lg:size-[800px] xl:size-[1000px] opacity-15 bg-gradient-to-b from-gray-300 to-gray-300/0 rounded-full" />
            <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-[200px] md:size-[400px] lg:size-[600px] xl:size-[800px] opacity-20 bg-gradient-to-b from-gray-300 to-gray-300/0 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
