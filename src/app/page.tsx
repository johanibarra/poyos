'use client'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronRight, Check, ArrowRight, Menu, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function FranchisePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image src="/placeholder.svg?height=40&width=120" alt="Poyos Logo" width={120} height={40} />
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-red-600">Sobre</a>
            <a href="#numbers" className="text-gray-600 hover:text-red-600">Números</a>
            <a href="#advantages" className="text-gray-600 hover:text-red-600">Vantagens</a>
            <a href="#investment" className="text-gray-600 hover:text-red-600">Investimento</a>
            <a href="#about" className="text-gray-600 hover:text-red-600">Contato</a>
          </div>
          <Button className="hidden md:block bg-red-600 hover:bg-red-700 text-white">
            Seja um franqueado
          </Button>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <DialogContent className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Image src="/placeholder.svg?height=40&width=120" alt="Poyos Logo" width={120} height={40} />
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-2 py-6">
              <a href="#about" className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Sobre</a>
              <a href="#numbers" className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Números</a>
              <a href="#advantages" className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Vantagens</a>
              <a href="#investment" className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Investimento</a>
              <a href="#about" className="block px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">Contato</a>
            </div>
            <Button className="w-full bg-orange-poyos hover:bg-orange-poyos/80 text-white">
              Seja um franqueado
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section with Contact Form */}
      <section className="relative min-h-screen flex items-center justify-center bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-center lg:text-left text-white lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Seja um franqueado Poyos Crispy Chicken</h1>
            <p className="text-xl lg:text-2xl mb-8">Faça parte da revolução do frango crocante!</p>
            <Button size="lg" className="bg-orange-poyos hover:bg-orange-poyos/80 text-black text-lg px-8 py-4">
              Saiba mais
              <ChevronRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
          <div className="lg:w-1/2 max-w-md w-full">
            <form className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-6">Quero ser um franqueado</h2>
              <div className="mb-4">
                <Input type="text" placeholder="Nome completo" className="w-full" />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="E-mail" className="w-full" />
              </div>
              <div className="mb-4">
                <Input type="tel" placeholder="Telefone" className="w-full" />
              </div>
              <div className="mb-4">
                <Input type="text" placeholder="Cidade de interesse" className="w-full" />
              </div>
              <div className="mb-6">
                <Textarea placeholder="Mensagem" rows={4} className="w-full" />
              </div>
              <Button type="submit" className="w-full bg-orange-poyos hover:bg-orange-poyos/80 text-white text-lg py-3">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
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
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Saiba mais sobre nossa história
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="w-full lg:w-1/2">
              <Image src="/placeholder.svg?height=400&width=600" alt="Poyos Restaurant" width={600} height={400} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section id="numbers" className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Poyos Crispy Chicken em números</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-6xl font-bold mb-2">50+</p>
              <p className="text-xl">Unidades</p>
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold mb-2">10</p>
              <p className="text-xl">Estados</p>
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold mb-2">1M+</p>
              <p className="text-xl">Clientes atendidos</p>
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold mb-2">98%</p>
              <p className="text-xl">Satisfação dos clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Por que ser um franqueado Poyos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Check className="text-yellow-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Marca reconhecida</h3>
              <p>Faça parte de uma marca com forte presença no mercado e reconhecimento dos clientes.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Check className="text-yellow-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Suporte completo</h3>
              <p>Oferecemos treinamento completo e suporte contínuo para o sucesso da sua operação.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Check className="text-yellow-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Produto de qualidade</h3>
              <p>Nosso frango crocante é reconhecido pela qualidade e sabor inigualáveis.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Check className="text-yellow-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Marketing forte</h3>
              <p>Estratégias de marketing eficientes para atrair e fidelizar clientes.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Check className="text-yellow-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tecnologia avançada</h3>
              <p>Sistemas de gestão e operação modernos para otimizar seu negócio.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Check className="text-yellow-500 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Retorno atrativo</h3>
              <p>Modelo de negócio com potencial de retorno rápido sobre o investimento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="investment" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Investimento</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-semibold">Investimento total a partir de:</span>
              <span className="text-3xl font-bold text-red-600">R$ 500.000</span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-semibold">Faturamento médio mensal:</span>
              <span className="text-3xl font-bold text-green-600">R$ 150.000</span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-semibold">Prazo de retorno:</span>
              <span className="text-3xl font-bold text-blue-600">24 a 36 meses</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">Taxa de franquia:</span>
              <span className="text-3xl font-bold text-purple-600">R$ 50.000</span>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Processo de franquia</h2>
          <div className="flex flex-wrap justify-center">
            <div className={`w-full md:w-1/3 px-4 mb-8 ${currentStep === 1 ? 'opacity-100' : 'opacity-50'}`}>
              <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                <div className="text-3xl font-bold text-yellow-500 mb-4">01</div>
                <h3 className="text-xl font-semibold mb-2">Cadastro e Análise</h3>
                <p>Preencha o formulário e nossa equipe analisará seu perfil.</p>
              </div>
            </div>
            <div className={`w-full md:w-1/3 px-4 mb-8 ${currentStep === 2 ? 'opacity-100' : 'opacity-50'}`}>
              <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                <div className="text-3xl font-bold text-yellow-500 mb-4">02</div>
                <h3 className="text-xl font-semibold mb-2">Entrevista e Aprovação</h3>
                <p>Realizaremos uma entrevista para conhecê-lo melhor e avaliar a parceria.</p>
              </div>
            </div>
            <div className={`w-full md:w-1/3  px-4 mb-8 ${currentStep === 3 ? 'opacity-100' : 'opacity-50'}`}>
              <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                <div className="text-3xl font-bold text-yellow-500 mb-4">03</div>
                <h3 className="text-xl font-semibold mb-2">Assinatura e Inauguração</h3>
                <p>Assinatura do contrato, treinamento e abertura da sua unidade Poyos.</p>
              </div>
            </div>
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
      </section>


      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Qual é o investimento inicial para abrir uma franquia Poyos?</h3>
              <p>O investimento inicial para uma franquia Poyos Crispy Chicken varia a partir de R$ 500.000, dependendo da localização e do tamanho da unidade.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Qual é o perfil ideal de um franqueado Poyos?</h3>
              <p>Buscamos empreendedores apaixonados por gastronomia, com experiência em gestão de negócios e dedicação para operar uma franquia de sucesso.</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Qual é o suporte oferecido aos franqueados?</h3>
              <p>Oferecemos treinamento completo, suporte operacional contínuo, assistência em marketing e acesso a sistemas de gestão avançados.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Quais são as taxas contínuas da franquia?</h3>
              <p>As taxas incluem royalties e taxa de marketing, que são um percentual do faturamento bruto. Os valores específicos são discutidos durante o processo de seleção.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
      </footer>
    </div>
  )
}