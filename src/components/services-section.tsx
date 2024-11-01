import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scissors, Droplet, Sparkles } from "lucide-react"
import {motion} from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "./ui/button"
import Link from "next/link"

export function ServicesSection() {
    const serviceCategories = [
        {
            id: "cortes",
            name: "Cortes",
            icon: Scissors,
            services: ["Corte", "Corte Infantil", "Raspado", "Platinado"]
        },
        {
            id: "barba",
            name: "Barba",
            icon: Scissors,
            services: ["Barba", "Barba na Máquina", "Corte e Barba"]
        },
        {
            id: "tratamentos",
            name: "Tratamentos",
            icon: Droplet,
            services: ["Hidratação", "Selagem", "Limpeza de Pele"]
        },
        {
            id: "extras",
            name: "Extras",
            icon: Sparkles,
            services: ["Sobrancelha", "Depilação Nariz", "Cone Hindu"]
        }
    ]

    return (
        <motion.section
            className="py-16 bg-muted"
            id='services'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Nossos Serviços</h2>
                <Tabs defaultValue="cortes" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
                        {serviceCategories.map((category) => (
                            <TabsTrigger key={category.id} value={category.id} className="flex items-center justify-center gap-2">
                                <category.icon className="w-5 h-5" />
                                <span>{category.name}</span>
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {serviceCategories.map((category) => (
                        <TabsContent key={category.id} value={category.id}>
                            <motion.div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {category.services.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Card>
                                            <CardContent className="p-6">
                                                <h3 className="text-lg font-semibold mb-2 text-primary">{service}</h3>
                                                <p className="text-sm text-muted-foreground mb-4">Serviço profissional de alta qualidade.</p>
                                                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-md">
                                                    <Link href="https://linktr.ee/barbeariakonoha" target="_blank">
                                                        Agendar
                                                    </Link>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </motion.section>
    )
}