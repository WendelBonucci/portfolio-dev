"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Logo from "./sections/Logo";
import Navgation from "./sections/Navgation";
import SideBar from "./sections/SideBar";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768);
        };

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        // Executa imediatamente ao trocar rota
        checkScreen();
        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        window.addEventListener("resize", checkScreen);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", checkScreen);
        };
    },);

    const headerClass =
        isHome && !scrolled
            ? "bg-transparent"
            : "bg-background/70 backdrop-blur-md shadow-lg";

    return (
        <header className={`fixed top-0 w-full h-20 z-50 transition-all duration-300 ${headerClass}`}>
            <section className="max-w-7xl mx-auto flex items-center justify-between h-full px-6 w-full">
                <Logo />
                {!isMobile && <Navgation />}
                {isMobile && <SideBar />}
            </section>
        </header>
    );
}