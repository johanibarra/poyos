/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

const VideoGallery = () => {
  useEffect(() => {
    const handleSlideChange = () => {
      const videos = document.querySelectorAll('iframe');
      videos.forEach((video: HTMLIFrameElement) => {
        video.contentWindow?.postMessage({ method: 'mute' }, '*');
      });
    };

    const swiperElement = document.querySelector('.swiper') as HTMLElement | null;
    if (swiperElement) {
      const swiperInstance = (swiperElement as any).swiper;
      if (swiperInstance) {
        swiperInstance.on('slideChange', handleSlideChange);
      }
    }

    return () => {
      const swiperElement = document.querySelector('.swiper') as HTMLElement | null;
      if (swiperElement) {
        const swiperInstance = (swiperElement as any).swiper;
        if (swiperInstance) {
          swiperInstance.off('slideChange', handleSlideChange);
        }
      }
    };
  }, []);

  return (
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
            draggable={true}
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
                <div className="relative w-full mx-auto max-w-[348px] h-[616px] ">
                  <iframe
                    src={`${video.src}&playbar=true&playerColor=ff0000&muted=true`}
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
  );
};

export default VideoGallery;

