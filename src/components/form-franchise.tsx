import { useForm, ValidationError } from "@formspree/react";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";

export function FormFranchise() {
  const [state, handleSubmit, reset] = useForm("xovqeekv");
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [investmentCapital, setInvestmentCapital] = useState("");
  const [isInvestimentDropdownOpen, setIsInvestimentDropdownOpen] =
    useState(false);
  const investimentDropdownRef = useRef<HTMLDivElement>(null);
  const occupationDropdownRef = useRef<HTMLDivElement>(null);
  const [occupation, setOccupation] = useState("");
  const [isOccupationDropdownOpen, setIsOccupationDropdownOpen] =
    useState(false);
    const contactHoursDropdownRef = useRef<HTMLDivElement>(null);
    const [contactHours, setContactHours] = useState("");
    const [isContactHoursDropdownOpen, setIsContactHoursDropdownOpen] =
      useState(false);

  const handleGtagEvent = useCallback((formData: FormData) => {
    return new Promise<void>((resolve) => {
      const callback = () => {
        resolve();
      };

      window.gtag("event", "conversion_event_submit_lead_form", {
        event_callback: callback,
        event_timeout: 2000,
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        subject: formData.get("subject"),
        investment_capital: formData.get("investment_capital"),
        occupation: formData.get("occupation"),
        contactHours: formData.get("contactHours"),
      });

      setTimeout(resolve, 2000);
    });
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      setIsLoading(false);
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Entraremos em contato em breve.",
        duration: 5000,
        className: "bg-orange-600 text-white border-none",
      });
      (document.getElementById("franchiseForm") as HTMLFormElement)?.reset();
      setInvestmentCapital("");
      reset();
    }
  }, [state.succeeded, toast, reset]);

  useEffect(() => {
    const handleInvestimentDropdownClickOutside = (event: MouseEvent) => {
      if (
        investimentDropdownRef.current &&
        !investimentDropdownRef.current.contains(event.target as Node)
      ) {
        setIsInvestimentDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleInvestimentDropdownClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleInvestimentDropdownClickOutside);
    };
  }, []);


  useEffect(() => {
    const handleOccupationDropdownClickOutside = (event: MouseEvent) => {
      if (
        occupationDropdownRef.current &&
        !occupationDropdownRef.current.contains(event.target as Node)
      ) {
        setIsOccupationDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOccupationDropdownClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleOccupationDropdownClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleContactHoursDropdownClickOutside = (event: MouseEvent) => {
      if (
        contactHoursDropdownRef.current &&
        !contactHoursDropdownRef.current.contains(event.target as Node)
      ) {
        setIsContactHoursDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleContactHoursDropdownClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleContactHoursDropdownClickOutside);
    };
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity() && investmentCapital) {
      setIsLoading(true);
      const formData = new FormData(e.currentTarget);
      formData.append("investment_capital", investmentCapital);
      formData.append("occupation", occupation);
      formData.append("contactHours", contactHours);

      await handleGtagEvent(formData);

      await handleSubmit(e);
    } else {
      e.currentTarget.reportValidity();
      if (!investmentCapital) {
        toast({
          title: "Erro no formulário",
          description: "Por favor, selecione o capital para investimento",
          variant: "destructive",
        });
      }

      if (!occupation) {
        toast({
          title: "Erro no formulário",
          description: "Por favor, selecione a ocupação",
          variant: "destructive",
        });
      }

      if (!contactHours) {
        toast({
          title: "Erro no formulário",
          description: "Por favor, selecione o horário de contato",
        });
      }
    }
  };

  const investmentOptions = [
    { value: "100k", label: "Até 100 mil" },
    { value: "200k", label: "Até 200 mil" },
    { value: "300k", label: "Até 300 mil" },
  ];

  const occupationOptions = [
    { value: "empresario", label: "Empreendedor/Empresário" },
    { value: "clt", label: "Funcionário CLT" },
    { value: "funcionario_publico", label: "Funcionário Público" },
    { value: "aposentado", label: "Aposentado" },
    { value: "investidor", label: "Investidor" },
    { value: "outro", label: "Outro" },
  ];

  const contactHoursOptions = [
    { value: "07h00_12h00", label: "Entre 07:00 e 12:00" },
    { value: "10h00_12h00", label: "Entre 10:00 e 12:00" },
    { value: "13h00_14h00", label: "Entre 13:00 e 14:00" },
    { value: "15h00_17h00", label: "Entre 15:00 e 17:00" },
    { value: "18h00_20h00", label: "Entre 18:00 e 20:00" },
    { value: "apos_20h00", label: "Após 22:00" }
  ];

  return (
    <>
      <Script
        id="gtag-helper"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                        window.gtagSendEvent = function(url) {
                            var callback = function () {
                                if (typeof url === 'string') {
                                    window.location = url;
                                }
                            };
                            gtag('event', 'conversion_event_submit_lead_form', {
                                'event_callback': callback,
                                'event_timeout': 2000,
                            });
                            return false;
                        }
                    `,
        }}
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="lg:w-[448px] max-w-md w-full mt-10 z-50 h-full"
      >
        <form
          id="franchiseForm"
          className="bg-white rounded-2xl border-4 border-orange-poyos/40 shadow-lg p-8 relative"
          onSubmit={onSubmit}
          noValidate
        >
          <Image
            width={600}
            height={600}
            quality={100}
            priority
            src="/images/fundo-orange.png"
            alt="Logo Poyos"
            className="w-24 h-24 absolute -top-16 left-1/2 transform -translate-x-1/2 rounded-full object-cover shadow-md"
          />
          <h2 className="text-3xl font-bold text-center mb-6 uppercase">
            Quero ser um franqueado
          </h2>
          {["name", "email", "phone", "subject"].map((field, index) => (
            <div className="mb-4" key={index}>
              <Input
                type={
                  field === "email"
                    ? "email"
                    : field === "phone"
                    ? "tel"
                    : "text"
                }
                placeholder={
                  field === "name"
                    ? "Nome"
                    : field === "subject"
                    ? "Cidade de interesse"
                    : field === "email"
                    ? "E-mail"
                    : "Telefone"
                }
                id={field}
                name={field}
                className="w-full"
                required
              />
              <ValidationError
                prefix={field}
                field={field}
                errors={state.errors}
              />
            </div>
          ))}

          <div
            className="mb-4 relative text-zinc-500"
            ref={investimentDropdownRef}
          >
            <div
              className="w-full p-2 border border-input bg-background text-sm ring-offset-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex justify-between items-center cursor-pointer"
              onClick={() =>
                setIsInvestimentDropdownOpen(!isInvestimentDropdownOpen)
              }
            >
              {investmentCapital
                ? investmentOptions.find(
                    (option) => option.value === investmentCapital
                  )?.label
                : "Capital para investimento"}
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
            <AnimatePresence>
              {isInvestimentDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
                >
                  {investmentOptions.map((option) => (
                    <div
                      key={option.value}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setInvestmentCapital(option.value);
                        setIsInvestimentDropdownOpen(false);
                      }}
                    >
                      {option.label}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <input
            type="hidden"
            name="investment_capital"
            value={investmentCapital}
          />

          <div
            className="mb-4 relative text-zinc-500"
            ref={occupationDropdownRef}
          >
            <div
              className="w-full p-2 border border-input bg-background text-sm ring-offset-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex justify-between items-center cursor-pointer"
              onClick={() =>
                setIsOccupationDropdownOpen(!isOccupationDropdownOpen)
              }
            >
              {occupation
                ? occupationOptions.find(
                    (option) => option.value === occupation
                  )?.label
                : "Qual sua ocupação atual?"}
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
            <AnimatePresence>
              {isOccupationDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
                >
                  {occupationOptions.map((option) => (
                    <div
                      key={option.value}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setOccupation(option.value);
                        setIsOccupationDropdownOpen(false);
                      }}
                    >
                      {option.label}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <input type="hidden" name="occupation" value={occupation} />

          <div
            className="mb-4 relative text-zinc-500"
            ref={contactHoursDropdownRef}
          >
            <div
              className="w-full p-2 border border-input bg-background text-sm ring-offset-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex justify-between items-center cursor-pointer"
              onClick={() =>
                setIsContactHoursDropdownOpen(!isContactHoursDropdownOpen)
              }
            >
              {contactHours
                ? contactHoursOptions.find(
                    (option) => option.value === contactHours
                  )?.label
                : "Qual é o melhor horário do dia para você receber uma ligação do nosso consultor?"}
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
            <AnimatePresence>
              {isContactHoursDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
                >
                  {contactHoursOptions.map((option) => (
                    <div
                      key={option.value}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setContactHours(option.value);
                        setIsContactHoursDropdownOpen(false);
                      }}
                    >
                      {option.label}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <input type="hidden" name="contactHours" value={contactHours} />

          <div className="mb-6">
            <p className="text-center text-gray-400 w-[90%] flex mx-auto font-semibold">
              Ao enviar os dados acima, eu concordo em receber contatos e
              mensagens por meio do WhatsApp, Telefones e E-mails.
            </p>
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-orange-poyos hover:bg-orange-600 text-white text-lg py-3 transition-colors duration-300 shadow-md"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar"
            )}
          </Button>
        </form>
      </motion.div>
    </>
  );
}
