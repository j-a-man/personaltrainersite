
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

const navigation = {
    main: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ],
    social: [
        { name: 'Facebook', href: '#', icon: Facebook },
        { name: 'Instagram', href: '#', icon: Instagram },
        { name: 'Twitter', href: '#', icon: Twitter },
    ],
}

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6">
                            <Link href={item.href} className="text-sm leading-6 text-gray-400 hover:text-primary transition-colors">
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </nav>
                <div className="mt-10 flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="font-display text-2xl font-bold tracking-wider text-white">
                            UNIVERSAL <span className="text-primary">FITNESS</span>
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs text-center">
                        Science-based training for elite results. Join the club that prioritizes your potential.
                    </p>
                </div>
                <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Universal Fitness Club. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
