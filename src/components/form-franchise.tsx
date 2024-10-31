import { useForm, ValidationError } from "@formspree/react";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

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
        <div className="lg:w-1/2 max-w-md w-full">
            <form
                id="franchiseForm"
                className="bg-white rounded-lg shadow-lg p-8"
                onSubmit={onSubmit}
                noValidate
            >
                <h2 className="text-2xl font-bold text-center mb-6">Quero ser um franqueado</h2>
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
        </div>
    );
}
