"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { IoClose } from "react-icons/io5"
import { BiSolidMessageRounded } from "react-icons/bi"
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Messenger() {
    const [open, setOpen] = useState(false)
    const boxRef = useRef<HTMLDivElement | null>(null)

    const message = "Olá, vim do seu portfólio!! Gostaria de saber mais sobre você."
    const encodedMessage = encodeURIComponent(message)

    const contacts = [
        {
            id: 1,
            name: "WhatsApp",
            label: "Resposta imediata",
            href: `https://wa.me/5585997276499?text=${encodedMessage}`,
            icon: <FaWhatsapp />,
            color: "hover:bg-blue/10 hover:border-blue/30",
            iconColor: "text-blue",
        },
        {
            id: 2,
            name: "Instagram",
            label: "@srrwende.ll",
            href: "https://www.instagram.com/srrwende.ll/",
            icon: <FaInstagram />,
            color: "hover:bg-white/5 hover:border-white/10",
            iconColor: "text-white/60",
        },
        {
            id: 3,
            name: "LinkedIn",
            label: "Conectar na rede",
            href: "https://www.linkedin.com/in/wendell-bonucci-8b2aa237a/",
            icon: <FaLinkedin />,
            color: "hover:bg-white/5 hover:border-white/10",
            iconColor: "text-white/60",
        },
    ]

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
                setOpen(false)
            }
        }
        if (open) document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [open])

    return (
        <div className="fixed bottom-6 right-6 z-999 flex flex-col items-end font-sans" ref={boxRef}>

            <div className={`transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] transform
                ${open
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-90 translate-y-10 pointer-events-none"}
                mb-6 w-80 rounded-3xl bg-black text-white shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden`}
            >
                <div className="p-6 bg-white/5 border-b border-white/5 flex justify-between items-center">
                    <div>
                        <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-blue">Contato Direto</h3>
                        <p className="text-[10px] text-white/40 uppercase mt-1">Geralmente online</p>
                    </div>
                    <button type="button" onClick={() => setOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50">
                        <IoClose size={18} />
                    </button>
                </div>

                <div className="p-4 flex flex-col gap-3">
                    {contacts.map((item) => (
                        <Link key={item.id} href={item.href} target="_blank" className={`group flex items-center justify-between p-4 rounded-2xl border border-white/5 transition-all duration-300 ${item.color}`}>
                            <div className="flex items-center gap-4">
                                <div className={`text-xl ${item.iconColor} group-hover:scale-110 transition-transform`}>{item.icon}</div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm tracking-tight text-white/90">{item.name}</span>
                                    <span className="text-[11px] text-white/30 group-hover:text-white/60 transition-colors">{item.label}
                                    </span>
                                </div>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity text-blue text-xs font-bold">ABRIR</div>
                        </Link>
                    ))}
                </div>
            </div>

            <button type="button" onClick={() => setOpen(!open)}
                className={`relative flex items-center justify-center w-16 h-16 rounded-full shadow-[0_10px_30px_rgba(35,183,217,0.3)] transition-all duration-500
                ${open ? "bg-[#1A1A1A] rotate-90" : "bg-blue hover:scale-110 active:scale-95"}`}>
                {!open && (<span className="absolute inset-0 rounded-full bg-blue animate-ping opacity-20"></span>)}

                <div className="relative z-10 text-black">
                    {open ? <IoClose size={28} className="text-white" /> : <BiSolidMessageRounded size={28} />}
                </div>
            </button>
        </div>
    )
}