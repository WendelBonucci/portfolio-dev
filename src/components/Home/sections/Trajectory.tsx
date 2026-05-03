"use client"
import { useEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css";

export default function Trajectory() {
    useEffect(() => {
        Aos.init({ duration: 1000, easing: "ease-out-quart", once: true });
    }, []);

    type ItemType = {
        id: number;
        year: string;
        title: string;
        description: string;
    }

    const trajectoryData: ItemType[] = [
        {
            id: 1,
            year: '2023',
            title: 'Início do Curso',
            description: 'Em agosto de 2023, iniciei o curso de Ciência da Computação. Antes disso, dediquei três meses ao estudo de lógica de programação com Python. Escolhi essa graduação por sempre ter tido interesse em tecnologia, jogos e automações tecnológicas.'
        },
        {
            id: 2,
            year: '2024',
            title: 'Experiências Profissionais',
            description: 'Em janeiro de 2024, conquistei meu primeiro estágio em WordPress e integrações com Bling. Em agosto, tornei-me analista com participação ativa em processos tecnológicos e administrativos.'
        },
        {
            id: 3,
            year: '2025',
            title: 'Sankhya e Networking',
            description: 'Atuei como desenvolvedor back-end para o ERP Sankhya. Ingressar em comunidades de tecnologia e trabalhar com profissionais experientes ampliou significativamente minha visão profissional.'
        },
        {
            id: 4,
            year: '2026',
            title: 'Freelancers e Evolução',
            description: 'Atualmente focado em projetos freelancer e no estudo de tecnologias de ponta. Sigo desenvolvendo novas soluções enquanto busco oportunidades em grandes empresas do setor.'
        }
    ]

    return (
        <section id="trajectory" className="w-full py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20" data-aos="fade-up">
                    <span className="text-blue text-xs uppercase tracking-[0.4em] font-bold">Linha do Tempo</span>
                    <h2 className="text-white text-4xl md:text-5xl font-bold mt-2">Minha Trajetória</h2>
                    <p className="text-white/40 mt-4 max-w-lg mx-auto">Experiências profissionais, estudos e evolução constante na área de tecnologia.</p>
                </div>

                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-linear-to-b from-blue/50 via-blue/20 to-transparent"></div>

                    <div className="space-y-12 md:space-y-0">
                        {trajectoryData.map((item, index) => (
                            <div key={item.id} className="relative flex items-center justify-between md:mb-20">
                                <div className={`hidden md:block w-5/12 ${index % 2 !== 0 ? "order-1" : "order-3"}`}></div>

                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="w-4 h-4 bg-blue rounded-full shadow-[0_0_15px_rgba(35,183,217,0.8)] border-2 border-background"></div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue/20 rounded-full blur-md"></div>
                                </div>

                                <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? "md:text-right order-1" : "md:text-left order-3"}`}
                                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                                    <div className="bg-black/60 border border-white/5 p-8 rounded-2xl hover:border-blue/30 transition-all duration-500 backdrop-blur-sm group">
                                        <span className="text-blue text-2xl font-bold mb-2 block">{item.year}</span>
                                        <h3 className="text-white text-xl font-semibold mb-4 group-hover:text-blue transition-colors">{item.title}</h3>
                                        <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}