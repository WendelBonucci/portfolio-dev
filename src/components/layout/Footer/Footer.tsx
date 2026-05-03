"use client"
import Link from "next/link";
import { FaLinkedin, FaGithub, FaInstagram, /* FaWhatsapp */ } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
    type ItemType = {
        id: number;
        label: string;
        href: string;
    };

    const linksFooter: ItemType[] = [
        { id: 1, label: 'Home', href: '/' },
        { id: 2, label: 'Sobre', href: '#about' },
        { id: 3, label: 'Projetos', href: '#projects' },
        { id: 4, label: 'Skills', href: '#skills' },
        { id: 5, label: 'Trajetória', href: '#trajectory' },
    ];

    const socialLinks = [
        { id: 1, icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/wendell-bonucci-8b2aa237a/' },
        { id: 2, icon: <FaGithub />, href: 'https://github.com/WendelBonucci' },
        { id: 3, icon: <FaInstagram />, href: 'https://www.instagram.com/srrwende.ll/' },
        /* { id: 4, icon: <FaWhatsapp />, href: '#' }, */
    ];

    return (
        <footer className="w-full bg-black border-t border-white/5 pt-20 pb-10">
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 mb-16">

                <div className="flex flex-col gap-4">
                    <h1 className="text-white text-2xl font-bold tracking-tighter uppercase">Wendell <span className="text-blue">Bonucci</span></h1>
                    <span className="text-blue text-[10px] uppercase tracking-[0.3em] font-semibold">Engenheiro de Software || FullStack</span>
                    <p className="text-white/40 text-sm leading-relaxed max-w-xs mt-2">
                        Transformando ideias em soluções reais através de código limpo,
                        arquitetura eficiente e foco total na experiência do usuário.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    <h4 className="text-white text-sm font-bold uppercase tracking-widest">Navegação</h4>
                    <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                        {linksFooter.map((item) => (
                            <li key={item.id}>
                                <Link href={item.href} className="text-white/50 text-sm hover:text-blue transition-colors duration-300">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-6">
                    <h4 className="text-white text-sm font-bold uppercase tracking-widest">Social</h4>
                    <div className="flex gap-4">
                        {socialLinks.map((social) => (
                            <Link key={social.id} href={social.href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-blue hover:text-black transition-all duration-300">
                                {social.icon}
                            </Link>
                        ))}
                    </div>

                    <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 text-white/30 text-[10px] uppercase tracking-widest hover:text-white transition-colors mt-4">
                        <FiArrowUp className="text-blue" /> Voltar ao topo</button>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <h1 className="text-white/20 text-[10px] uppercase tracking-widest">© 2026 Wendell Bonucci. Todos os direitos reservados.</h1>
                <p className="text-white/10 text-[9px] uppercase tracking-[0.2em]">Design & Code by Wendell</p>
            </div>
        </footer>
    );
}