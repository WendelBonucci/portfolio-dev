import Image from "next/image"
import Link from "next/link"

export default function Logo() {
    return (
        <section className="">
            <Image
                height={150}
                width={150}
                alt="logo"
                src='/logoHeader.png'
            />
        </section>
    )
}
