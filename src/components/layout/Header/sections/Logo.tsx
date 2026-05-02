import Image from "next/image"
import Link from "next/link"

export default function Logo() {
    return (
        <section className="flex items-center justify-center">
            <Link href="/" className="relative group block transition-all duration-500 ease-in-out transform hover:scale-105">
                <div className="absolute inset-0 bg-blue/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                    height={40}
                    width={120}
                    alt="logo"
                    src='/logoHeader.png'
                    className="relative z-10 object-contain brightness-100 group-hover:brightness-110 transition-all"
                    priority
                />
            </Link>
        </section>
    )
}