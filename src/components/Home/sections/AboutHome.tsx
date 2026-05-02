"use client"
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, } from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function AboutHome() {
    useEffect(() => {
        Aos.init({ duration: 1000, easing: "ease-out-quart", once: true });
    }, []);

    type ItemType = {
        id: number;
        title: string;
        text: string;
    }

    const About: ItemType[] = [
        { id: 1, title: 'Sobre mim', text: 'Muito prazer, me chamo Wendell Bonucci. Sou estudante de Ciência da Computação e já possuo experiência prática com projetos reais. Ao longo da minha formação e dos cursos que realizei, me desenvolvi como um desenvolvedor fullstack. Atualmente, sigo aprofundando meus conhecimentos em arquitetura de sistemas, design de interfaces e desenvolvimento de software, com o objetivo de me tornar um engenheiro de software cada vez mais completo.' },
        { id: 2, title: 'Meu Objetivo', text: 'Meu objetivo é trabalhar continuamente com desenvolvimento de software, criando soluções eficientes e inovadoras. Busco utilizar inteligência artificial para automatizar processos, gerar resultados significativos e contribuir para a melhoria contínua das operações das empresas e dos projetos em que atuo, sempre entregando o melhor resultado possível para o cliente.' },
        { id: 3, title: 'Conhecimento e Projetos', text: 'Já atuei com os ERPs Sankhya e Bling, trabalhando diretamente no desenvolvimento e customização dessas plataformas. Atualmente, atuo como freelancer, desenvolvendo lojas virtuais, sites institucionais, agentes de IA e soluções personalizadas para clientes de pequeno, médio e grande porte. Estou em constante evolução, buscando sempre entregar soluções eficientes e gerar os melhores resultados para cada empresa.' },
    ]

    return (
        <section id="sobre" className="w-full py-24 bg-background overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-12" data-aos="fade-up">
                    <span className="text-blue text-xs uppercase tracking-[0.4em] font-bold">Um pouco...</span>
                    <h2 className="text-white text-4xl md:text-5xl font-bold mt-2">Sobre mim</h2>
                </div>

                <div
                    className="bg-black/40 border border-white/5 p-8 md:p-16 rounded-2xl backdrop-blur-sm shadow-2xl"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <Swiper
                        modules={[Autoplay, Pagination,]}
                        effect="fade"
                        speed={800}
                        autoplay={{ delay: 6000, disableOnInteraction: false }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        className="pb-12 mySwiper">
                        {About.map((item) => (
                            <SwiperSlide key={item.id} className="bg-transparent">
                                <div className="flex flex-col gap-6 py-8">
                                    <h3 className="text-blue text-2xl font-semibold tracking-tight">{item.title}</h3>
                                    <p className="text-white/70 text-lg md:text-xl leading-relaxed font-light">{item.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}