"use client"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

//components
import Logo from "./sections/Logo"
import Navgation from "./sections/Navgation"
import SideBar from "./sections/SideBar"

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isHome, setIsHome] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 748)
        };
        checkScreen();

        const handleScroll = () => {
            if (pathname === '/') {
                setScrolled(window.scrollY > 20);
                setIsHome(true)
            } else {
                setScrolled(false);
                setIsHome(true);
            }
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", checkScreen);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", checkScreen);
        };
    }, [pathname])


    return (
        <header className={`fixed top-0 w-full h-20 z-50 transition-all duration-300 
            ${!isHome ? "bg-background backdrop-blur-md shadow-lg" : ""}
             ${!isHome && scrolled ? "bg-background backdrop-blur-md shadow-lg" : ""}
             ${isHome && !scrolled ? "bg-transparent" : ""}`}>
            <section className="max-w-7xl mx-auto flex items-center justify-between h-full px-6 w-full">
                <Logo />
                {!isMobile && <Navgation />}
                {isMobile && <SideBar />}
            </section>
        </header >
    )
}