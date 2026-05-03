"use client";
import { useEffect, useState } from "react";
import { HiOutlineTerminal } from "react-icons/hi";

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true);
    const [isExpanding, setIsExpanding] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setIsExpanding(true);
                setTimeout(() => setLoading(false), 400);
            }, 700);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    if (!loading) return;

    return (
        <div className={`fixed inset-0 flex flex-col items-center justify-center bg-background z-9999 transition-all duration-500 
            ${isExpanding ? "opacity-0 scale-105 blur-sm" : "opacity-100"}`}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue/5 rounded-full blur-[80px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-green/5 rounded-full blur-[100px] animate-pulse-slow" />
            </div>

            <div className="relative flex flex-col items-center gap-12">
                <div className={`relative transition-all duration-700 ease-in-out ${isExpanding ? "scale-150 opacity-0" : "scale-100 opacity-100"}`}>
                    <div className="relative z-10">
                        <HiOutlineTerminal className="text-blue text-6xl md:text-7xl drop-shadow-[0_0_25px_rgba(35,183,217,0.4)] animate-glitch" />
                    </div>
                    <div className="absolute inset-0 bg-blue/20 rounded-full blur-3xl animate-pulse-slow" />
                </div>
                <div className={`flex flex-col items-center gap-5 transition-all duration-500 ${isExpanding ? "opacity-0 translate-y-4" : "opacity-100"}`}>
                    <div className="flex flex-col items-center text-center">
                        <p className="text-white font-bold text-[11px] tracking-[0.6em] uppercase">Iniciando Ambiente</p>
                        <span className="text-blue/60 text-[9px] mt-2 tracking-[0.3em] font-mono uppercase">Wendell Bonucci || Dev Engine</span>
                    </div>

                    <div className="w-48 h-0.5 bg-white/5 relative overflow-hidden rounded-full">
                        <div className="absolute inset-0 bg-linear-to-r from-blue to-green origin-left animate-loading-bar" />
                    </div>
                </div>
            </div>

            <style jsx>{` @keyframes loading-bar { 0% { transform: scaleX(0); } 100% { transform: scaleX(1); }}
                        @keyframes glitch {
                        0%, 100% { transform: translate(0); }
                        20% { transform: translate(-2px, 1px); }
                        40% { transform: translate(-2px, -1px); }
                        60% { transform: translate(2px, 1px); }
                        80% { transform: translate(2px, -1px); }
                        }
                        @keyframes pulse-slow {
                        0%, 100% { opacity: 0.2; transform: scale(1); }
                        50% { opacity: 0.5; transform: scale(1.1); }
                        }
                        .animate-loading-bar {
                        animation: loading-bar 1.5s cubic-bezier(0.85, 0, 0.15, 1) forwards;
                        }
                        .animate-glitch {
                        animation: glitch 2s infinite ease-in-out;
                        }
                        .animate-pulse-slow {
                        animation: pulse-slow 3s infinite ease-in-out;
                        }`}</style>
        </div>
    );
}