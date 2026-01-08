
"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Button } from "../ui/Button";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const transformations = [
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
    "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&q=80",
]; // Placeholder images, replace with transformation photos

function Counter({ from, to }: { from: number; to: number }) {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView || !nodeRef.current) return;

        const node = nodeRef.current;
        const controls = {
            value: from
        };

        const duration = 2000; // 2 seconds
        const start = performance.now();

        const animate = (time: number) => {
            const elapsed = time - start;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4);

            const currentValue = Math.floor(from + (to - from) * ease);
            node.textContent = currentValue.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                node.textContent = to.toLocaleString() + "+";
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, from, to]);

    return <span ref={nodeRef} className="tabular-nums">{from}</span>;
}


export function Transformations() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % transformations.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-white py-24 sm:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">

                    {/* Carousel / Cards Stack */}
                    <div className="relative h-[400px] w-full max-w-md mx-auto lg:mx-0 perspective-1000 group">
                        <AnimatePresence mode='popLayout'>
                            {transformations.map((img, i) => {
                                // Creating a simplified stack logic for visual effect
                                // We cycle through 3 active indices for simplicity 
                                const offset = (i - index + transformations.length) % transformations.length;
                                if (offset > 2) return null; // Only show top 3

                                return (
                                    <motion.div
                                        key={`${img}-${i}`}
                                        initial={{ opacity: 0, scale: 0.9, x: 20, z: -100 }}
                                        animate={{
                                            opacity: 1,
                                            scale: offset === 0 ? 1 : 1 - offset * 0.05,
                                            x: offset * 20,
                                            y: offset * -10,
                                            zIndex: transformations.length - offset,
                                            rotate: offset * 2
                                        }}
                                        exit={{ opacity: 0, scale: 0.9, x: -20, rotate: -5 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden bg-gray-100 border-4 border-white"
                                        style={{
                                            transformOrigin: "bottom center",
                                        }}
                                    >
                                        <img src={img} alt="Body transformation" className="h-full w-full object-cover" />
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                        {/* Fallback/Background cards to maintain stack visual if animation gaps occur */}
                        <div className="absolute inset-0 bg-gray-200 rounded-2xl -z-10 rotate-3 scale-95 translate-x-4 opacity-50" />
                        <div className="absolute inset-0 bg-gray-300 rounded-2xl -z-20 rotate-6 scale-90 translate-x-8 opacity-30" />

                        {/* Navigation Controls */}
                        <div className="absolute -bottom-16 left-0 right-0 flex justify-center gap-4">
                            <button
                                onClick={() => setIndex((prev) => (prev - 1 + transformations.length) % transformations.length)}
                                className="p-3 bg-white rounded-full shadow-lg text-gray-800 hover:bg-orange-50 hover:text-primary transition-all ring-1 ring-gray-200"
                                aria-label="Previous transformation"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => setIndex((prev) => (prev + 1) % transformations.length)}
                                className="p-3 bg-white rounded-full shadow-lg text-gray-800 hover:bg-orange-50 hover:text-primary transition-all ring-1 ring-gray-200"
                                aria-label="Next transformation"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:pl-10">
                        <h2 className="text-6xl font-display font-bold tracking-tight text-black sm:text-8xl mb-2">
                            <Counter from={0} to={1000} />
                        </h2>
                        <h3 className="text-3xl font-display font-bold tracking-tight text-primary sm:text-4xl uppercase mb-6">
                            Lives Transformed
                        </h3>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Every client's journey is unique, but the results speak for themselves. We combine data, science, and personal support to help you build the physique you've always wanted.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link href="/quiz" className="block">
                                <Button
                                    size="lg"
                                    className="rounded-xl px-8 bg-primary hover:bg-orange-700 text-white flex gap-2 group font-sans normal-case tracking-normal shadow-lg shadow-orange-500/30"
                                >
                                    Find Your Ideal Program
                                    <span className="bg-white/20 rounded-full p-0.5 group-hover:bg-white/30 transition-colors">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
