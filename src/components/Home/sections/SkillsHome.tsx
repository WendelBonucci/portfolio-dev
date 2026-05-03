"use client"
import { useEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css";

import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiFirebase } from "react-icons/si";

export default function SkillsHome() {
    useEffect(() => {
        Aos.init({ duration: 1000, easing: "ease-out-quart", once: true });
    }, []);

    type ItemType = {
        id: number;
        icon: React.ReactNode;
        label: string;
    }

    const itemSkills: ItemType[] = [
        { id: 1, icon: <FaHtml5 />, label: 'HTML' },
        { id: 2, icon: <FaCss3Alt />, label: 'CSS' },
        { id: 3, icon: <FaJs />, label: 'JavaScript' },
        { id: 4, icon: <FaNodeJs />, label: 'Node.js' },
        { id: 5, icon: <FaReact />, label: 'React' },
        { id: 6, icon: <SiNextdotjs />, label: 'Next.js' },
        { id: 7, icon: <SiTypescript />, label: 'TypeScript' },
        { id: 8, icon: <SiTailwindcss />, label: 'Tailwind' },
        { id: 9, icon: <FaPython />, label: 'Python' },
        { id: 10, icon: <GrOracle />, label: 'Oracle' },
        { id: 11, icon: <SiPostgresql />, label: 'PostgreSQL' },
        { id: 12, icon: <SiFirebase />, label: 'Firebase' },
    ];

    return (
        <section id="skills" className="w-full py-24 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-16 text-center md:text-left" data-aos="fade-up">
                    <span className="text-blue text-xs uppercase tracking-[0.4em] font-bold">Tech Stack</span>
                    <h2 className="text-white text-4xl md:text-5xl font-bold mt-2 italic">Skills</h2>
                    <div className="h-0.5 w-20 bg-blue mt-4 mx-auto md:mx-0"></div>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-8">
                    {itemSkills.map((item, index) => (
                        <div key={item.id} data-aos="zoom-in" data-aos-delay={index * 50}
                            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl 
                                     bg-black/40 border border-white/5 transition-all duration-500 
                                     hover:border-blue/40 hover:shadow-[0_0_30px_rgba(35,183,217,0.1)] 
                                     hover:-translate-y-2">
            
                            <div className="text-4xl md:text-5xl text-white/40 group-hover:text-blue transition-all duration-500 transform group-hover:scale-110">{item.icon}</div>
                            <span className="mt-4 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/30 group-hover:text-white transition-colors duration-500">
                                {item.label}
                            </span>
                            <div className="absolute inset-0 bg-blue/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}