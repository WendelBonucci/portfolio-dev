"use client"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Aos from "aos"
import "aos/dist/aos.css"
import { FiArrowUpRight } from "react-icons/fi"

export default function ProjectsHome() {
    useEffect(() => {
        Aos.init({ duration: 1000, easing: "ease-out-quart", once: true })
    }, [])

    const projectsCards = [
        {
            id: 1,
            title: "NextSolve",
            description: "Landing Page para empresa de Tecnologia",
            link: "https://www.nextsolve.com.br/",
            image: "/nextsolve.png",
            tech: "Next.js, TypeScript, Tailwind CSS",
        },
        {
            id: 2,
            title: "Oticas Visicorp",
            description: "Site Institucional para setor óptico",
            link: "https://www.visiocorp.com.br/",
            image: "/visio.png",
            tech: "Next.js, Javascript, Tailwind CSS",
        },
        {
            id: 3,
            title: "Medalhas Brasil",
            description: "E-commerce institucional de premiações",
            link: "https://www.medalhasbrasil.com/",
            image: "/medal.png",
            tech: "Next.js, Javascript, Tailwind CSS",
        },
        {
            id: 4,
            title: "Consultoria Lareska",
            description: "Portfólio para Personal Trainer",
            link: "https://consultoria-ls.vercel.app/",
            image: "/consProj.png",
            tech: "Next.js, Javascript, CSS Modules",
        },
        {
            id: 5,
            title: "Checklist",
            description: "Projeto para testar habilidades",
            link: "https://checklist-ten-chi.vercel.app/",
            image: "/checklist.png",
            tech: "React, CSS Modules",
        },
        {
            id: 6,
            title: "Task Manager ",
            description: "Página de apresentação de um sistema",
            link: "https://taskmanager-page.vercel.app/",
            image: "/imagesProjects/taskmanager.png",
            tech: "Next.js, TypeScript, Tailwind CSS, FireBase",
        },
        {
            id: 7,
            title: "E-commerce - Confeitaria ",
            description: "Site desenvolvido para uma confeitaria",
            link:"https://cheiva-cake-s.vercel.app/",
            image: "/imagesProjects/cheivacakes.png",
            tech: "Next.js, TypeScript, Tailwind CSS, FireBase",
        },
    ]

    return (
        <section id="projects" className="w-full py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div data-aos="fade-right">
                        <span className="text-blue text-xs uppercase tracking-[0.4em] font-bold">Showcase</span>
                        <h2 className="text-white text-4xl md:text-5xl font-bold mt-2">Trabalhos em Destaque</h2>
                    </div>

                    <p className="text-white/40 max-w-md text-sm md:text-base" data-aos="fade-left">Projetos focados em performance, SEO e experiência do usuário.</p>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsCards.map((project, index) => (
                        <li key={project.id} data-aos="fade-up" data-aos-delay={index * 100}
                            className="group relative rounded-2xl overflow-hidden border border-white/5 bg-black/40 transition-all duration-500 active:scale-[0.98]">
                            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-40" aria-label={`Abrir projeto ${project.title}`} />

                            <div className="relative h-64 md:h-80 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-black/40 transition-all duration-500 z-10 pointer-events-none group-hover:bg-black/10" />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-20 pointer-events-none" />

                                <div className="w-full h-full flex items-center justify-center bg-neutral-900">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            <div className="p-6 md:p-8 relative z-30">
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <h3 className="text-white text-xl md:text-2xl font-bold transition-colors group-hover:text-blue">{project.title}</h3>
                                        <p className="text-white/60 text-sm mt-2 line-clamp-2">{project.description}</p>
                                    </div>

                                    <div className="p-3 rounded-full bg-white/5 text-white transition-all duration-300 group-hover:bg-blue group-hover:text-black">
                                        <FiArrowUpRight size={18} />
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-6">
                                    <span className="text-[10px] uppercase tracking-widest text-blue/80 border border-blue/20 px-2 py-1 rounded">{project.tech}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}