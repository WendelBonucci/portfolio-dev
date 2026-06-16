"use client";
import { useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Schema do Zod para validação dos campos do formulário
const contactFormSchema = z.object({
    name: z.string().min(3, "O nome precisa ter pelo menos 3 caracteres"),
    email: z.string().email("Insira um endereço de e-mail válido"),
    message: z.string().min(10, "A mensagem precisa ter pelo menos 10 caracteres"),
});

type FormDataProps = z.infer<typeof contactFormSchema>;

export default function Form() {
    const [formData, setFormData] = useState<FormDataProps>({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<{ [key in keyof FormDataProps]?: string }>({});
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

    const formInfo = {
        title: "Mande sua Proposta",
        text: "Preencha os dados abaixo com as informações iniciais e ideias do seu projeto. Responderei diretamente no seu e-mail para darmos o próximo passo.",
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name as keyof FormDataProps]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined,
            }));
        }

        if (statusMessage.text) {
            setStatusMessage({ type: "", text: "" });
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setStatusMessage({ type: "", text: "" });

        // 1. Validação dos Campos com Zod
        const result = contactFormSchema.safeParse(formData);

        if (!result.success) {
            const formattedErrors: { [key in keyof FormDataProps]?: string } = {};
            result.error.issues.forEach((issue) => {
                const path = issue.path[0] as keyof FormDataProps;
                formattedErrors[path] = issue.message;
            });

            setErrors(formattedErrors);
            setIsLoading(false);
            return;
        }

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error("Erro de Configuração: Variáveis de ambiente do EmailJS não foram detectadas.");
            setStatusMessage({
                type: "error",
                text: "O sistema de envio está passando por manutenção. Tente novamente mais tarde.",
            });
            setIsLoading(false);
            return;
        }

        // 3. Envio de dados seguro
        try {
            await emailjs.send(serviceId, templateId, formData, publicKey);

            setStatusMessage({
                type: "success",
                text: "Mensagem enviada com sucesso! Analisarei sua proposta em breve.",
            });

            setFormData({ name: "", email: "", message: "" });
            setErrors({});
        } catch (error) {
            console.error("Erro ao enviar email via SDK:", error);
            setStatusMessage({
                type: "error",
                text: "Erro ao enviar mensagem. Por favor, tente novamente.",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="orcamento" className="w-full py-16 bg-background">
            <div className="max-w-3xl mx-auto px-6">
                <div className="bg-black/60 border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm shadow-2xl">

                    <div className="mb-10 text-center md:text-left">
                        <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-3">
                            {formInfo.title}
                        </h2>
                        <p className="text-white/40 text-sm leading-relaxed max-w-xl">
                            {formInfo.text}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-white/60 text-xs uppercase tracking-widest font-semibold">
                                Seu Nome
                            </label>
                            <div className="relative flex items-center">
                                <FiUser className="absolute left-4 text-white/20" size={18} />
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Ex: Wendell Bonucci"
                                    className={`w-full bg-black/40 border ${errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-blue/50"
                                        } p-4 pl-12 rounded-xl text-white text-sm outline-none transition-all placeholder:text-white/20`}
                                />
                            </div>
                            {errors.name && (
                                <span className="text-red-400 text-xs font-medium">
                                    {errors.name}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-white/60 text-xs uppercase tracking-widest font-semibold">
                                Seu E-mail
                            </label>
                            <div className="relative flex items-center">
                                <FiMail className="absolute left-4 text-white/20" size={18} />
                                <input
                                    id="email"
                                    type="type"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Ex: dev@exemplo.com"
                                    className={`w-full bg-black/40 border ${errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-blue/50"
                                        } p-4 pl-12 rounded-xl text-white text-sm outline-none transition-all placeholder:text-white/20`}
                                />
                            </div>
                            {errors.email && (
                                <span className="text-red-400 text-xs font-medium">
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-white/60 text-xs uppercase tracking-widest font-semibold">
                                Mensagem / Proposta
                            </label>
                            <div className="relative flex items-start">
                                <FiMessageSquare className="absolute left-4 top-4 text-white/20" size={18} />
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    placeholder="Descreva brevemente sua ideia, objetivos e tecnologias planejadas..."
                                    className={`w-full bg-black/40 border ${errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-blue/50"
                                        } p-4 pl-12 rounded-xl text-white text-sm outline-none transition-all resize-none placeholder:text-white/20`}
                                />
                            </div>
                            {errors.message && (
                                <span className="text-red-400 text-xs font-medium">
                                    {errors.message}
                                </span>
                            )}
                        </div>

                        {statusMessage.text && (
                            <div
                                className={`p-4 rounded-xl border text-sm text-center ${statusMessage.type === "success"
                                        ? "bg-green-500/10 border-green-500/20 text-green-400"
                                        : "bg-red-500/10 border-red-500/20 text-red-400"
                                    }`}
                            >
                                {statusMessage.text}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative flex items-center justify-center gap-3 w-full md:w-auto md:self-end px-8 py-4 bg-blue hover:bg-blue/90 disabled:bg-blue/50 text-black font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(35,183,217,0.15)] hover:shadow-[0_4px_25px_rgba(35,183,217,0.3)]"
                        >
                            {isLoading ? (
                                <>
                                    <AiOutlineLoading3Quarters className="animate-spin" size={16} />
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    Enviar Proposta
                                    <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={14} />
                                </>
                            )}
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}