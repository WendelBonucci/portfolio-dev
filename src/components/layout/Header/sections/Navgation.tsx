import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();

    type ItemType = {
        id: number;
        label: string;
        href: string;
    }

    const links: ItemType[] = [
        { id: 1, label: 'Home', href: '/' },
        { id: 2, label: 'Sobre', href: '#about' },
        { id: 3, label: 'Projetos', href: '#projects' },
        { id: 4, label: 'Skills', href: '#skills' },
        { id: 5, label: 'Trajetória', href: '#trajectory' },
    ];

    const buttons: ItemType[] = [
        { id: 1, label: 'Contato', href: '/Contact' },
        { id: 2, label: 'EN', href: '/en' },
    ];

    return (
        <nav className="flex items-center justify-end gap-12">
            <ul className="flex items-center gap-8">
                {links.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <li key={item.id} className="relative group">
                            <Link href={item.href} className={`text-[12px] font-medium uppercase tracking-[0.2em] transition-all duration-300 
                            ${isActive ? "text-blue" : "text-white group-hover:text-white"}`}>
                                {item.label}
                            </Link>
                            <span className={`absolute -bottom-1 left-0 h-px bg-blue transition-all duration-300 
                                ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}>
                            </span>
                        </li>
                    );
                })}
            </ul>

            <ul className="flex items-center gap-4">
                {buttons.map((item) => (
                    <li key={item.id}>
                        <Link href={item.href} className={`text-[11px] uppercase tracking-widest font-bold px-6 py-2.5 rounded-sm border transition-all duration-500
                                ${item.label === 'Contato' ? 'bg-blue border-blue text-black hover:shadow-[0_0_20px_rgba(35,183,217,0.4)]'
                                : 'border-white/10 text-white hover:bg-white hover:text-black'}`}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}