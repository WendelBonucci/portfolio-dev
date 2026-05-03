import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header/Header";
import Messenger from "@/components/layout/Messeger/Messeger";
import Footer from "@/components/layout/Footer/Footer";

export const metadata = {
  title: "Wendell Bonucci | Software Developer & Web Designer",

  description:
    "Desenvolvedor de software especializado em Next.js, React e TypeScript. Focado em criar interfaces premium, SaaS financeiros e soluções de e-commerce personalizadas.",

  keywords: [
    "Software Developer",
    "Web Designer",
    "Next.js Developer",
    "React Specialist",
    "TypeScript",
    "Tailwind CSS",
    "UI/UX Design Premium",
    "Desenvolvimento SaaS",
    "Medalhas Brasil",
    "Korivo Finance"
  ],

  authors: [{ name: "Wendel Bonucci", url: "https://wendellbonucci.vercel.app/" }],

  icons: {
    icon: "/logoHeader.png",
  },

  openGraph: {
    title: "Wendell Bonucci | Portfolio - Software Developer",
    description:
      "Explore projetos de alta performance, de sistemas de gestão financeira a e-commerces institucionais, desenvolvidos com as tecnologias mais modernas do mercado.",
    url: "https://wendellbonucci.vercel.app/",
    siteName: "WendellBonucci",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Portfolio de Desenvolvimento de Software",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR">
      <Header />
      <body className="min-h-full flex flex-col">{children}</body>
      <Messenger />
      <Footer />
    </html>
  );
}
