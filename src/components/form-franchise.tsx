import { useForm, ValidationError } from "@formspree/react";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import {motion} from 'framer-motion'

export function FormFranchise() {
    const [state, handleSubmit, reset] = useForm("xovqeekv");
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);

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
            reset();
        }
    }, [state.succeeded, toast, reset]);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (e.currentTarget.checkValidity()) {
            setIsLoading(true);
            await handleSubmit(e);
        } else {
            e.currentTarget.reportValidity();
        }
    };

    return (
        <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
       className="lg:w-1/2 max-w-md w-full mt-10">
            <form
                id="franchiseForm"
                className="bg-white rounded-2xl border-4 border-orange-poyos/40 shadow-lg p-8 relative"
                onSubmit={onSubmit}
                noValidate
            >
                <Image
                    width={300}
                    height={300}
                    src='/images/logo-orange.png'
                    alt='Logo Poyos'
                    className='w-72 h-12 absolute -top-10 left-1/2 transform -translate-x-1/2'/>
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
                <div className="mb-6">
                    <Textarea placeholder="Mensagem" id="message" name="message" rows={4} className="w-full" required />
                    <ValidationError prefix="Mensagem" field="message" errors={state.errors} />
                </div>
                <div className="mb-6">
                    <p className="text-center text-gray-400 w-[90%] flex mx-auto font-semibold">Ao enviar os dados acima, eu concordo em receber contatos e mensagens por meio do WhatsApp, Telefones e E-mails.</p>
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
