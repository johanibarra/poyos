'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Check, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { FormFranchise } from '@/components/form-franchise'
import { NumberCounter } from '@/components/section-counter'

export default function FranchisePage() {
  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

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

  return (
    <div className="bg-white">
      {/* Hero Section with Contact Form */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center bg-[url('../../public/images/1.png')] w-full bg-cover bg-bottom py-20"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          <Image
            width={300}
            height={300}
            src='/images/logo.png'
            alt='Logo Poyos'
            className='w-72 h-16 absolute -top-12 lg:top-32'
          />
          <div className="text-center lg:text-left text-white lg:w-1/2 mb-12 lg:mb-0 mt-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-bold mb-4"
            >
              Leve o melhor Frango frito para a sua cidade!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl lg:text-2xl"
            >
              Modelo de negócio com gestão a distância.
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

          <FormFranchise />

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
            <NumberCounter end={50} suffix="+" label="Unidades" />
            <NumberCounter end={10} label="Estados" />
            <NumberCounter end={1000000} suffix="+" label="Clientes atendidos" />
            <NumberCounter end={100} suffix="%" label="Satisfação dos clientes" />
          </div>
        </div>
      </motion.section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20">
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
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-[550px] h-[550px] absolute z-0 bottom-10 -left-[500px]"
          >
            <Image
              src="/images/png/6.png"
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
            className="w-[550px] h-[550px] absolute z-0 bottom-10 -right-[500px]"
          >
            <Image
              src="/images/png/6.png"
              alt="Poyos Restaurant"
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              className="object-contain"
            />
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 absolute z-50 container top-36"
          >
            {[
              { title: "Gestão a distância", description: "Nosso modelo de negócio inovador, você pode administrar seu Poyos de qualquer lugar, mantendo a qualidade e o padrão da marca." },
              { title: "Suporte completo", description: "Oferecemos treinamento completo e suporte contínuo para o sucesso da sua operação." },
              { title: "Produto de qualidade", description: "Nosso frango crocante é reconhecido pela qualidade e sabor inigualáveis." },
              { title: "Marketing forte", description: "Estratégias de marketing eficientes para atrair e fidelizar clientes." },
              { title: "Retorno atrativo", description: "Modelo de negócio com potencial de retorno rápido sobre o investimento." },
              { title: "Marca reconhecida", description: "Faça parte de uma marca com forte presença no mercado e reconhecimento dos clientes." },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants} className={`${index === 0 ? "bg-orange-poyos hover:bg-orange-600 rounded-lg shadow-lg p-6 text-white" : "bg-white hover:bg-zinc-50 rounded-lg shadow-lg p-6"}`}>
                <Check className={`${index === 0 ? "text-white w-12 h-12 mb-2" : "text-yellow-500 w-12 h-12 mb-2"} `} />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investment Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        id="investment"
        className="py-20 bg-orange-poyos"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12 text-orange-100"
          >
            Investimento
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-12 container mx-auto"
          >
            <div className='w-1/2  text-orange-50'>
              <div className="flex flex-col justify-start gap-0 items-start mb-6">
                <span className="text-5xl font-bold text-orange-200">Investimento:</span>
                <span className="text-3xl font-semibold text-orange-50">a partir de: R$ 500.000</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-semibold">Faturamento médio mensal:</span>
                <span className="text-3xl font-bold text-orange-100">R$ 150.000</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-semibold">Prazo de retorno:</span>
                <span className="text-3xl font-bold text-orange-100">24 a 36 meses</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">Taxa de franquia:</span>
                <span className="text-3xl font-bold text-orange-100">R$ 50.000</span>
              </div>

            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Processo de franquia
          </motion.h2>
          <div className="flex flex-wrap justify-center">
            {[
              { step: 1, title: "Cadastro e Análise", description: "Preencha o formulário e nossa equipe analisará seu perfil." },
              { step: 2, title: "Entrevista e Aprovação", description: "Realizaremos uma entrevista para conhecê-lo melhor e avaliar a parceria." },
              { step: 3, title: "Assinatura e Inauguração", description: "Assinatura do contrato, treinamento e abertura da sua unidade Poyos." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: currentStep === item.step ? 1 : 0.5, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`w - full md:w-1/3 px-4 mb-8`}
              >
                <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                  <div className="text-3xl font-bold text-yellow-500 mb-4">0{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button onClick={prevStep} disabled={currentStep === 1} className="mr-4">
              Anterior
            </Button>
            <Button onClick={nextStep} disabled={currentStep === 3}>
              Próximo
            </Button>
          </div>
        </div>
      </section >

      {/* About Section */}
      < motion.section
        initial={{ opacity: 0 }
        }
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        id="about"
        className="py-20 bg-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 mb-12 lg:mb-0"
            >
              <h2 className="text-4xl font-bold mb-6">Sobre o Poyos Crispy Chicken</h2>
              <p className="text-lg mb-6">
                O Poyos Crispy Chicken é uma marca inovadora no mercado de fast-food,
                especializada em oferecer o melhor frango crocante da cidade. Fundada em 2015,
                nossa marca cresceu rapidamente graças à qualidade incomparável de nossos produtos
                e ao atendimento excepcional.
              </p>
              <p className="text-lg mb-6">
                Nossa missão é levar a experiência única do Poyos Crispy Chicken para todo o Brasil,
                e estamos em busca de empreendedores apaixonados para se juntar a nós nessa jornada.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Saiba mais sobre nossa história
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-[650px] h-[550px] relative rounded-xl shadow-md overflow-hidden"
            >
              <Image
                src="/images/interna.png"
                alt="Poyos Restaurant"
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section >

      {/* FAQ Section */}
      < motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <h3 className="text-xl font-semibold mb-2">Qual é o investimento inicial para abrir uma franquia Poyos?</h3>
              <p>O investimento inicial para uma franquia Poyos Crispy Chicken varia a partir de R$ 500.000, dependendo da localização e do tamanho da unidade.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <h3 className="text-xl font-semibold mb-2">Qual é o perfil ideal de um franqueado Poyos?</h3>
              <p>Buscamos empreendedores apaixonados por gastronomia, com experiência em gestão de negócios e dedicação para operar uma franquia de sucesso.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-6"
            >
              <h3 className="text-xl font-semibold mb-2">Qual é o suporte oferecido aos franqueados?</h3>
              <p>Oferecemos treinamento completo, suporte operacional contínuo, assistência em marketing e acesso a sistemas de gestão avançados.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-2">Quais são as taxas contínuas da franquia?</h3>
              <p>As taxas incluem royalties e taxa de marketing, que são um percentual do faturamento bruto. Os valores específicos são discutidos durante o processo de seleção.</p>
            </motion.div>
          </div>
        </div>
      </motion.section >

      {/* Footer */}
      < footer className="bg-gray-900 text-white py-12" >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Poyos Crispy Chicken</h3>
              <p>O melhor frango crocante do Brasil, agora em formato de franquia.</p>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h4 className="text-xl font-semibold mb-4">Contato</h4>
              <p>Email: franquias@poyos.com.br</p>
              <p>Telefone: (11) 1234-5678</p>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-xl font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-yellow-500">Facebook</a>
                <a href="#" className="hover:text-yellow-500">Instagram</a>
                <a href="#" className="hover:text-yellow-500">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2024 Poyos Crispy Chicken. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer >
    </div >
  )
}