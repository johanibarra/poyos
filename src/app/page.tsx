'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, ArrowRight, FacebookIcon, InstagramIcon, LinkedinIcon, MapPin, Clock, Phone } from 'lucide-react'
import { Globe, Headphones, Star, Target, TrendingUp, Award } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FormFranchise } from '@/components/form-franchise'
import { NumberCounter } from '@/components/section-counter'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default function FranchisePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="bg-white">
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
            src='/images/logo-desc.png'
            alt='Logo Poyos'
            className='w-72 h-20 absolute -top-12 lg:top-28 '
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
              <Link href="#about">
                <Button size="lg" className="bg-orange-poyos hover:bg-orange-600 text-white text-lg px-8 py-4">
                  Saiba mais
                  <ChevronRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="lg:w-1/2 max-w-md w-full mt-10">
            <FormFranchise />
          </div>
        </div>
      </motion.section>

      {/* Numbers Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        id="numbers"
        className="py-10 bg-orange-600 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <NumberCounter end={8} suffix="+" label="Unidades" />
            <NumberCounter end={2} label="Estados" />
            <NumberCounter end={1000000} suffix="+" label="Clientes atendidos" />
            <NumberCounter end={100} suffix="%" label="Satisfação dos clientes" />
          </div>
        </div>
      </motion.section>

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
                  id: "1036002435",
                  hash: "c82e10d815",
                  title: "Video 1" 
                },
                { 
                  id: "1036002385",
                  hash: "d2f1c88ee6",
                  title: "Video 2" 
                },
                { 
                  id: "1036002304",
                  hash: "42fd7d039d",
                  title: "Video 3" 
                },
                { 
                  id: "1036001918",
                  hash: "a66537ed0b",
                  title: "Video 4" 
                },
              ].map((video) => (
                <SwiperSlide key={video.id}>
                  <div className="relative w-full mx-auto max-w-[331px] md:max-w-[351px]" style={{ paddingBottom: '142.78%'}}>
                    <iframe
                      src={`https://player.vimeo.com/video/${video.id}?h=${video.hash}&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=0`}
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
                      allow="autoplay; fullscreen; picture-in-picture"
                      className="rounded-2xl shadow-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.section>
      {/* Advantages Section */}
      <section id="advantages" className="pt-20 pb-5">
        <div className="container mx-auto px-4 items-center justify-start flex flex-col gap-8 relative h-[1450px] md:h-[850px] lg:h-[650px]">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Por que ser um franqueado Poyos?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-[550px] h-[550px] absolute z-0 bottom-10 -left-[520px]"
          >
            <Image
              src="/images/png/4.png"
              alt="Poyos Restaurant"
              fill
              quality={100}
              sizes="(min-width: 808px) 50vw, 100vw"
              className="object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-[650px] h-[520px] absolute z-0 bottom-10 -right-[520px]"
          >
            <Image
              src="/images/png/9.png"
              alt="Poyos Restaurant"
              fill
              quality={100}
              sizes="(min-width: 808px) 50vw, 100vw"
              className="object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-[250px] h-[250px] absolute z-0 right-64 -bottom-[130px] "
          >
            <Image
              src="/images/png/3.png"
              alt="Poyos Restaurant"
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              className="object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-[200px] h-[200px] absolute z-0 -left-4 sm:left-28 top-[50px] sm:top-[5px] "
          >
            <Image
              src="/images/png/3.png"
              alt="Poyos Restaurant"
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              className="object-contain rotate-45"
            />
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 absolute z-0 container top-36"
            >
            {[
              { title: "Gestão a distância", description: "Nosso modelo de negócio inovador, você pode administrar seu Poyos de qualquer lugar, mantendo a qualidade e o padrão da marca.", icon: <Globe /> },
              { title: "Suporte completo", description: "Oferecemos treinamento completo e suporte contínuo para o sucesso da sua operação.", icon: <Headphones /> },
              { title: "Produto de qualidade", description: "Nosso frango crocante é reconhecido pela qualidade e sabor inigualáveis.", icon: <Star /> },
              { title: "Marketing forte", description: "Estratégias de marketing eficientes para atrair e fidelizar clientes.", icon: <Target /> },
              { title: "Retorno atrativo", description: "Modelo de negócio com potencial de retorno rápido sobre o investimento.", icon: <TrendingUp /> },
              { title: "Marca reconhecida", description: "Faça parte de uma marca com forte presença no mercado e reconhecimento dos clientes.", icon: <Award /> },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-white hover:bg-orange-poyos rounded-lg shadow-lg p-6 transition duration-300 ease-in-out text-black hover:text-white`}
              >
                <div className="text-4xl mb-2 text-yellow-500 hover:text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Menu Gallery Section */}
      <section id="menu-gallery" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Nossos Principais Lanches
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Poyos Clássico", src: "3.png", description: "Nosso sanduíche de frango crocante original", price: "R$ 18,90" },
              { name: "Poyos Picante", src: "4.png", description: "Para os amantes de pimenta", price: "R$ 19,90" },
              { name: "Poyos Bacon", src: "7.png", description: "Frango crocante com bacon crocante", price: "R$ 21,90" },
              { name: "Poyos Salada", src: "1.png", description: "Opção mais leve com salada fresca", price: "R$ 20,90" },
              { name: "Poyos Duplo", src: "2.png", description: "Duas camadas de frango crocante", price: "R$ 24,90" },
              { name: "Poyos Kids", src: "5.png", description: "Versão menor para as crianças", price: "R$ 14,90" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative h-[432px] w-full">
                      <Image
                        src={`/images/png/cardapio/${item.src}`}
                        alt={item.name}
                        quality={100}
                        priority
                        fill
                        className='object-cover'
                      />
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        id="investment"
        className="py-20 bg-orange-500  pb-[100px] lg:pb-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-orange-100 mb-10 md:mb-0"
          >
            Investimento
          </motion.h2>
          <div className="flex flex-col lg:flex-row items-center justify-between relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:w-1/2 text-orange-50 mb-8 lg:mb-0"
            >
              <Card className="bg-gray-600 text-orange-50 border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">Detalhes do Investimento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-base md:text-xl font-semibold">Investimento Inicial:</span>
                    <span className="text-lg md:text-2xl font-bold">A partir de R$ 60.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base md:text-xl font-semibold">Faturamento médio mensal:</span>
                    <span className="text-lg md:text-2xl font-bold">R$ 150.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base md:text-xl font-semibold">Prazo de retorno:</span>
                    <span className="text-lg md:text-2xl font-bold">18 a 24 meses</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base md:text-xl font-semibold">Faturamento anual:</span>
                    <span className="text-lg md:text-2xl font-bold">R$ 1.8 milhões</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-50 text-gray-600 hover:bg-green-100">
                    Solicite mais informações
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:w-1/2 max-w-md w-full mt-28"
            >

              <FormFranchise />

            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Steps Section */}
      <section id="locations" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
          >
            Nossas Unidades
          </motion.h2>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            {[
              { city: "Atuba - PR", address: "Rua Júlio Bartolomeu Taborda Luiz, 194 - Atuba, Curitiba", phone: "(41) 3203-9003", image: "/images/loja.png" },
              { city: "Centro - PR", address: "Av. Visc. de Guarapuava, 2832 - Centro, Curitiba", phone: "(41) 3203-6477", image: "/images/loja.png" },
              { city: "Jd. das Américas - PR", address: "R. Cap. Leônidas Marques, 480 - Loja 08 - Uberaba, Curitiba", phone: "(41) 3527-2003", image: "/images/locations/em-breve.jpeg" },
              { city: "Bom Retiro - PR", address: "Av. Desembargador Hugo Simas, 2010 - Loja 03 - Bom Retiro, Curitiba", phone: "(41) 4106-0025", image: "/images/locations/uberaba/1.jpg" },
              { city: "Vila Mariana - SP", address: "R. Rodrigues Batista, 57 - Vila Mariana, São Paulo", phone: "", image: "/images/locations/em-breve.jpeg" },
              { city: "Campos Elíseos- SP", address: "Alameda Dino Bueno, 680 - Campos Elíseos, São Paulo", phone: "", image: "/images/locations/em-breve.jpeg" },
              { city: "Brooklin - SP", address: "R. Guararapes, 218 - Brooklin, São Paulo", phone: "", image: "/images/locations/em-breve.jpeg" },
              { city: "Pinheiros - SP", address: " R. Fradique Coutinho, 986 - Pinheiros, São Paulo", phone: "", image: "/images/locations/em-breve.jpeg" },
            ].map((location, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full">
                    <div className="relative h-[434px] w-full">
                      <Image
                        src={location.image}
                        alt={`Poyos ${location.city}`}
                        fill
                        quality={100}
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="mr-2 text-orange-poyos" />
                        {location.city}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="flex items-center mb-2">
                        <Clock className="mr-2 text-orange-poyos" />
                        Aberto todos os dias: 11h - 22h
                      </p>
                      <p className="flex items-center mb-2">
                        <MapPin className="mr-2 text-orange-poyos" />
                        {location.address}
                      </p>
                      <p className="flex items-center">
                        <Phone className="mr-2 text-orange-poyos" />
                        {location.phone}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        id="about"
        className="pb-20 pt-5 bg-gray-200"
      >
        <div className="container mx-auto px-4">

          <div className="flex flex-wrap items-center justify-around ">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 mb-12 lg:mb-0 max-w-[640px]"
            >
              <h2 className="text-4xl font-bold mb-6 text-orange-poyos">Sobre o Poyos Crispy Chicken</h2>
              <p className="text-lg mb-6">
                Fundado em 2015, o Poyos Crispy Chicken rapidamente se tornou sinônimo de excelência em frango crocante.
                Nossa jornada começou com uma simples missão: oferecer o melhor frango frito do Brasil, combinando sabor
                inigualável com um atendimento excepcional.
              </p>
              <p className="text-lg mb-6">
                Hoje, somos uma marca em crescimento, com presença em diversos estados e milhões de clientes satisfeitos.
                Nosso sucesso é resultado de um compromisso inabalável com a qualidade dos ingredientes, processos
                rigorosos de preparo e uma equipe apaixonada pelo que faz.
              </p>
              <p className="text-lg mb-6">
                Ao se tornar um franqueado Poyos, você não apenas adquire um negócio, mas se junta a uma família
                comprometida com a excelência e inovação no mercado de fast-food.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-orange-poyos hover:bg-orange-600 text-white">
                  Nossa História
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-orange-poyos text-orange-poyos hover:bg-orange-poyos hover:text-white">
                  Valores da Marca
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:w-1/2 h-full md:h-[550px] relative flex items-start justify-end "
            >


              <div className='w-[650px] h-[330px] md:h-[650px] relative'>
                <Image
                  src="/images/png/9.png"
                  alt="Poyos Restaurant Interior"
                  fill
                  sizes="(min-width: 808px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
              {/* <div className="absolute bottom-0 left-0 right-0  p-6">
                <p className="text-white text-xl font-semibold">Experimente o sabor da excelência</p>
                <p className="text-white">Mais de 1 milhão de clientes satisfeitos</p>
              </div> */}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4 h-[380px]">
          <h2 className="text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Qual é o investimento inicial para abrir uma franquia Poyos?</AccordionTrigger>
                <AccordionContent >
                  O investimento inicial para uma franquia Poyos Crispy Chicken varia a partir de R$ 60.000, dependendo da localização e do tamanho da unidade.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Qual é o perfil ideal de um franqueado Poyos?</AccordionTrigger>
                <AccordionContent>
                  Buscamos empreendedores apaixonados por gastronomia, com experiência em gestão de negócios e dedicação para operar uma franquia de sucesso.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Qual é o suporte oferecido aos franqueados?</AccordionTrigger>
                <AccordionContent>
                  Oferecemos treinamento completo, suporte operacional contínuo, assistência em marketing e acesso a sistemas de gestão avançados.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Quais são as taxas contínuas da franquia?</AccordionTrigger>
                <AccordionContent>
                  As taxas incluem royalties e taxa de marketing, que são um percentual do faturamento bruto. Os valores específicos são discutidos durante o processo de seleção.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Poyos Crispy Chicken</h3>
              <p className="mb-4">O melhor frango crocante do Brasil, agora em formato de franquia.</p>
              <Image
                src="/images/logo-desc.png"
                alt="Poyos Logo"
                width={150}
                height={50}
                quality={100}
                className="mb-4"
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-orange-poyos transition-colors">Início</Link></li>
                <li><Link href="#about" className="hover:text-orange-poyos transition-colors">Sobre Nós</Link></li>
                <li><Link href="#menu-gallery" className="hover:text-orange-poyos transition-colors">Cardápio</Link></li>
                <li><Link href="#investment" className="hover:text-orange-poyos transition-colors">Investimento</Link></li>
                <li><Link href="#" className="hover:text-orange-poyos transition-colors">Seja um Franqueado</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    target="blank"
                    href="mailto:franquias@poyos.com.br">
                    franquias@poyos.com.br
                  </Link>
                </li>
                <li><Link href="https://api.whatsapp.com/send/?phone=5541998050753&text=Quero+saber+mais+sobre+a+franquia+Poyos&type=phone_number&app_absent=0" target="_blank">Telefone: (41) 99805-0753</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <Link href="https://www.facebook.com/profile.php?id=61560370360898" className="text-white hover:text-orange-poyos transition-colors">
                  <FacebookIcon className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://www.instagram.com/poyosfranquias/" className="text-white hover:text-orange-poyos transition-colors">
                  <InstagramIcon className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://www.linkedin.com/company/poyos/" className="text-white hover:text-orange-poyos transition-colors">
                  <LinkedinIcon className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Poyos Crispy Chicken. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}