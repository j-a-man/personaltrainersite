"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export function Coaches() {
    return (
        <section className="bg-white py-24 md:py-32 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Visual Side (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="aspect-3/4 relative rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200 border border-zinc-100">
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                                alt="Head Coach Josh"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Decorative Badge */}
                            <div className="absolute bottom-8 left-8 z-20 bg-white/80 backdrop-blur-md border border-white/40 p-4 rounded-xl shadow-lg">
                                <p className="text-zinc-900 font-bold text-lg">Josh</p>
                                <p className="text-primary text-sm uppercase tracking-wider">Head Performance Coach</p>
                            </div>
                        </div>
                        {/* Decorative background element behind image */}
                        <div className="absolute -top-10 -left-10 w-full h-full border-2 border-primary/20 rounded-3xl -z-10 hidden lg:block" />
                    </motion.div>

                    {/* Content Side (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 space-y-8"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-widest text-primary mb-6">
                                The Architect
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display text-zinc-900 mb-4">
                                Obsessed with <span className="bg-clip-text font-bold -=bg-linear-to-r from-primary to-orange-400">Human Potential.</span>                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                "I spent a decade tired of seeing potential wasted on generic programs. Real transformation happens when science meets psychology. My goal isn't just to make you sweat—it's to rebuild your engine from the inside out."
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-zinc-900 font-bold uppercase tracking-wider text-sm border-b border-zinc-200 pb-2 mb-4">
                                Credentials & Philosophy
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    "NSCA Certified Strength & Conditioning Specialist",
                                    "Precision Nutrition Level 2 Master Coach",
                                    "Data-Driven Programming (No Guesswork)",
                                    "Focus on Longevity & Functional Strength"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-primary" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-4">
                            <Button className="pl-8 pr-2 py-6 text-lg group bg-black text-white hover:bg-zinc-800 border-none">
                                <span className="mr-4">Train with Josh</span>
                                <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white text-white group-hover:text-black transition-all">
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
