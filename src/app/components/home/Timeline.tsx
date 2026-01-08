"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Utensils, Brain, Trophy } from "lucide-react";

const steps = [
    {
        name: 'Step 1: Consultation & Strategy',
        description: 'We start with a deep dive into your lifestyle, goals, and limitations. Includes comprehensive bloodwork analysis to build a truly data-driven roadmap.',
        icon: ClipboardList,
        image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=800&q=80" // Consultation/Meeting
    },
    {
        name: 'Step 2: Nutrition & Fueling',
        description: 'No generic meal plans. We design a macronutrient protocol that fits your schedule, ensuring you burn fat while building lean muscle.',
        icon: Utensils,
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80" // Nutrition/Food
    },
    {
        name: 'Step 3: Mindset & Habits',
        description: 'Transformation is mental first. We install the daily habits and discipline required to make your results permanent, not just a phase.',
        icon: Brain,
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80" // Mindset/Focus
    },
    {
        name: 'Step 4: Elite Performance',
        description: 'As you progress, we increase the intensity. Advanced programming techniques to refine your physique and push your athletic limits.',
        icon: Trophy,
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80" // Performance/Gym
    },
];

export function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="py-24 bg-zinc-900 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-orange-500/10 via-zinc-900 to-zinc-950 -z-10" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-20">
                    <h2 className="text-4xl font-display tracking-tight text-white sm:text-5xl uppercase">
                        The <span className="text-primary font-bold">Process</span>
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-400 font-medium">
                        A systematic approach to building your best self.
                    </p>
                </div>

                <div className="relative mx-auto max-w-5xl">
                    {/* Central Line */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 -translate-x-1/2">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="bg-linear-to-b from-primary via-orange-400 to-primary w-full shadow-[0_0_15px_rgba(222,92,0,0.6)]"
                        />
                    </div>

                    <div className="space-y-16">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-50px", once: false }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center md:justify-between group ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Icon/Marker */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-zinc-800 border-4 border-zinc-900 shadow-xl z-10 group-hover:scale-110 group-hover:bg-zinc-700 transition-all duration-300">
                                    <step.icon className="w-6 h-6 text-primary" />
                                </div>

                                {/* Content Card */}
                                <div className={`w-[calc(100%-80px)] md:w-[45%] ml-20 md:ml-0 p-8 bg-zinc-800/50 backdrop-blur-sm rounded-3xl shadow-xl border border-white/5 hover:border-primary/30 transition-all duration-300 relative z-20`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="text-xs font-bold text-orange-400 tracking-wider uppercase bg-orange-900/30 px-2 py-1 rounded-md border border-orange-500/20">
                                            Phase 0{index + 1}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 font-display tracking-wide">{step.name.split(': ')[1]}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Image Card (Replaces empty space) */}
                                <div className={`hidden md:block w-[45%] rounded-3xl overflow-hidden shadow-lg border-4 border-zinc-800 transform transition-transform duration-500 hover:scale-[1.02] ${index % 2 === 0 ? "pr-8" : "pl-8"
                                    }`}>
                                    <div className="relative aspect-4/3 w-full">
                                        <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors duration-300 z-10" />
                                        <img
                                            src={step.image}
                                            alt={step.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
