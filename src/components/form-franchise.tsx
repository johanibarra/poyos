import { useForm, ValidationError } from "@formspree/react";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2, ChevronDown } from 'lucide-react';
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';

export function FormFranchise() {
    const [state, handleSubmit, reset] = useForm("xovqeekv");
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [investmentCapital, setInvestmentCapital] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (state.succeeded) {
            setIsLoading(false);
            toast({
                title: "Formulário enviado com sucesso!",
                description: "Entraremos em contato em breve.",
                duration: 5000,
                className: "bg-orange-600 text-white border-none"
            });
            (document.getElementById("franchiseForm") as HTMLFormElement)?.reset();
            setInvestmentCapital("");
            reset();
        }
    }, [state.succeeded, toast, reset]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (e.currentTarget.checkValidity() && investmentCapital) {
            setIsLoading(true);
            const formData = new FormData(e.currentTarget);
            formData.append("investment_capital", investmentCapital);
            await handleSubmit(e);
        } else {
            e.currentTarget.reportValidity();
            if (!investmentCapital) {
                toast({
                    title: "Erro no formulário",
                    description: "Por favor, selecione o capital para investimento",
                    variant: "destructive"
                });
            }
        }
    };

    const investmentOptions = [
        { value: "600k", label: "Até 600 mil" },
        { value: "800k", label: "Até 800 mil" },
        { value: "1m", label: "Até 1 milhão" },
        { value: "full", label: "Tenho todo o capital de investimento" },
        { value: "partial", label: "Tenho parte do capital e farei um financiamento/empréstimo" },
    ];

    return (
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
                    src='/images/fundo-orange.png'
                    alt='Logo Poyos'
                    className='w-24 h-24 absolute -top-16 left-1/2 transform -translate-x-1/2 rounded-full object-cover shadow-md'
                />
                <h2 className="text-3xl font-bold text-center mb-6 uppercase">Quero ser um franqueado</h2>
                {["name", "email", "phone", "subject"].map((field, index) => (
                    <div className="mb-4" key={index}>
                        <Input
                            type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                            placeholder={field === "name" ? "Nome completo" : field === "subject" ? "Cidade de interesse" : field === "email" ? "E-mail" : "Telefone"}
                            id={field}
                            name={field}
                            className="w-full"
                            required
                        />
                        <ValidationError prefix={field} field={field} errors={state.errors} />
                    </div>
                ))}
                
                <div className="mb-4 relative  text-zinc-500" ref={dropdownRef}>
                    <div
                        className="w-full p-2 border border-input bg-background text-sm ring-offset-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 flex justify-between items-center cursor-pointer"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        {investmentCapital ? investmentOptions.find(option => option.value === investmentCapital)?.label : "Capital para investimento"}
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                    </div>
                    <AnimatePresence>
                        {isDropdownOpen && (
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
                                            setIsDropdownOpen(false);
                                        }}
                                    >
                                        {option.label}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mb-6">
                    <p className="text-center text-gray-400 w-[90%] flex mx-auto font-semibold">
                        Ao enviar os dados acima, eu concordo em receber contatos e mensagens por meio do WhatsApp, Telefones e E-mails.
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
    );
}

