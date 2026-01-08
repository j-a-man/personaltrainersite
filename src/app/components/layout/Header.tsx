
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'About us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Client Login', href: '/login' },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-6 inset-x-0 z-50 mx-auto max-w-7xl px-6">
            <nav
                className="flex items-center justify-between p-4 lg:px-8 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-lg ring-1 ring-white/5"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <span className="font-display text-xl font-bold tracking-wider text-white">
                            UNIVERSAL <span className="text-primary">FITNESS</span>
                        </span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-gray-300 hover:text-primary transition-colors uppercase tracking-wide font-sans"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Button variant="primary" size="sm" onClick={() => window.location.href = '#transformation'}>
                        Start Training
                    </Button>
                </div>
            </nav>
            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-base font-semibold leading-7 text-gray-300 hover:text-primary block"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button className="w-full mt-4" onClick={() => { window.location.href = '#transformation'; setMobileMenuOpen(false); }}>
                        Start Training
                    </Button>
                </div>
            )}
        </header>
    );
}
