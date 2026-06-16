"use client"
import { useEffect } from "react"
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image"
import Link from "next/link"

export default function ContentInitial() {
    useEffect(() => {
        Aos.init({ duration: 1000, easing: "ease-out-quart", once: true });
    }, []);

    return (
        <section className="relative w-full min-h-screen pt-31 md:pt-32 bg-background flex items-center justify-center overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-75 h-75 md:w-125 md:h-125
                bg-blue/5 rounded-full blur-[120px] pointer-events-none">
            </div>

            <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 
                grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center z-10">

                <div className="relative flex justify-center md:justify-start" data-aos="fade-right" data-aos-duration="1200">
                    <div className="relative group">
                        <div className="absolute -inset-4 border border-white/5 rounded-2xl 
                            group-hover:border-blue/30 transition-colors duration-500">
                        </div>

                        <Image
                            height={600}
                            width={500}
                            alt="Wendell Bonucci || Software Engineer"
                            src='/dev.png'
                            className="relative z-10 object-cover rounded-xl transition-all duration-700 
                            brightness-90 hover:brightness-110 
                            w-70 sm:w-87.5 md:w-125"
                            priority
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl 
                        font-bold text-white leading-tight mb-4 tracking-tighter">
                        Wendell <br />  
                        <span className="text-blue">Bonucci</span>
                    </h1>

                    <div className="flex items-center gap-4 mb-8">
                        <span className="h-px w-12 bg-blue"></span>
                        <p className="text-white/60 text-sm sm:text-base md:text-xl font-light tracking-[0.15em] uppercase">Engenheiro de Software || FullStack</p>
                    </div>

                    <Link href="#about" className="group relative inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 
                        font-bold text-white border border-white/20 overflow-hidden transition-all duration-300 hover:border-blue">
                        <span className="absolute inset-y-0 left-0 w-0 bg-blue 
                            transition-all duration-300 group-hover:w-full">
                        </span>

                        <span className="relative z-10 group-hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm">Saiba Mais</span>
                    </Link>
                </div>
            </section>
        </section>
    )
}