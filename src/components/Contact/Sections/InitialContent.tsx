"use client"
import { useEffect } from "react"
import Link from "next/link"
import Aos from "aos"
import "aos/dist/aos.css"
import { FiMail, FiArrowDown } from "react-icons/fi"

export default function InitialContent() {
    useEffect(() => {
        Aos.init({ duration: 1000, easing: "ease-out-quart", once: true });
    }, []);

    return (
        <section className="relative w-full min-h-[95vh] pt-32 md:pt-40 bg-background flex items-center justify-center overflow-hidden">
            <div className="absolute top-1/4 left-1/3 w-72 h-72 md:w-120 md:h-120 bg-blue/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-60 h-60 md:w-96 md:h-96 bg-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl w-full mx-auto px-6 z-10 flex flex-col items-center text-center">

                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm"
                    data-aos="fade-down">
                    <FiMail className="text-blue animate-pulse" size={14} />
                    <span className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
                        Contato Via E-mail
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tighter max-w-3xl"
                    data-aos="zoom-in-up" data-aos-delay="100">
                    Mande sua Proposta <br />
                    <span className="bg-linear-to-r from-blue to-blue bg-clip-text text-transparent">
                        Via E-mail
                    </span>
                </h1>

                <p className="text-white/50 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-3xl mb-12"
                    data-aos="fade-up" data-aos-delay="200">
                    Entre em contato comigo para desenvolvermos seu projeto. Mande suas informações e ideias:
                    poderei analisar tudo com bastante calma antes de entrarmos em contato para debatermos os detalhes
                    e fechar seu projeto da melhor maneira possível!
                </p>

                <div data-aos="fade-up" data-aos-delay="300" className="w-full flex justify-center">
                    <Link href="#orcamento" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white border border-white/10 rounded-xl overflow-hidden transition-all duration-500 hover:border-blue/50 w-[85vw] sm:w-auto">

                        <span className="absolute inset-y-0 left-0 w-0 bg-blue transition-all duration-500 group-hover:w-full"></span>
                        <span className="relative z-10 group-hover:text-black transition-colors duration-300 uppercase tracking-widest text-xs flex items-center gap-2">
                            Iniciar Orçamento
                            <FiArrowDown className="animate-bounce group-hover:text-black" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}