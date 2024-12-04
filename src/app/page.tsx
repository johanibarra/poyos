'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FormFranchise } from '@/components/form-franchise'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function FranchisePage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://fast.wistia.net/assets/external/E-v1.js'
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center bg-[url('../../public/images/interna.png')] w-full bg-cover bg-center py-20"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          <Image
            width={800}
            height={800}
            quality={100}
            priority
            src="/images/logo-desc.png"
            alt="Logo Poyos"
            className="w-72 h-20 absolute -top-12 lg:top-28"
          />
          <div className="text-center lg:text-left text-white lg:w-1/2 mb-12 lg:mb-0 mt-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold mb-4"
            >
              Leve o melhor frango frito para a sua cidade!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl lg:text-2xl"
            >
              Modelo de negócio com gestão à distância
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xl lg:text-2xl mb-8"
            >
              Faça parte da revolução do frango crocante!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button size="lg" className="bg-orange-poyos hover:bg-orange-600 text-white text-lg px-8 py-4">
                Saiba mais
                <ChevronRight className="ml-2 h-6 w-6" />
              </Button>
            </motion.div>
          </div>
          <div className="lg:w-1/2 max-w-md w-full mt-10">
            <FormFranchise />
          </div>
        </div>
      </motion.section>

      {/* Video Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 bg-gray-100"
      >
        <div className="container mx-auto px-4 flex flex-col gap-5 items-center">
          <h2 className="text-4xl font-bold text-center mb-12">Conheça Mais Sobre o Poyos</h2>
          <div className="w-full">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {[
                {
                  src: "https://fast.wistia.net/embed/iframe/5b84ztvesh?seo=false&videoFoam=true",
                  title: "POYOS - VERTICAL Video",
                },
                {
                  src: "https://fast.wistia.net/embed/iframe/dei05p33qd?seo=false&videoFoam=true",
                  title: "REELS LOGO BRANCA Video",
                },
                {
                  src: "https://fast.wistia.net/embed/iframe/umsdjb150b?seo=false&videoFoam=true",
                  title: "POYOS VERTICAL CROP Video",
                },
                {
                  src: "https://fast.wistia.net/embed/iframe/rb62ll0h1a?seo=false&videoFoam=true",
                  title: "rigo-franquias Video",
                },
                {
                  src: "https://fast.wistia.net/embed/iframe/h4sfqpp14r?seo=false&videoFoam=true",
                  title: "INSTAGRAM Video",
                },
              ].map((video, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full mx-auto max-w-[348px] h-[616px] " >
                    <iframe
                      src={video.src}
                      style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        overflow: 'hidden',
                      }}
                      allowFullScreen
                      title={video.title}
                      allow="autoplay; fullscreen"
                      className="rounded-sm"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
