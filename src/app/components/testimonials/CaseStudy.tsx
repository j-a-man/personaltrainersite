"use client";

import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { motion } from "framer-motion";

interface Stat {
    label: string;
    before: string; // e.g. "185lbs"
    after: string; // e.g. "165lbs"
    progress: number; // 0-100 for bar width
    type: "increase" | "decrease"; // determines color/direction logic if needed
}

interface CaseStudyProps {
    name: string;
    role: string;
    story: string;
    beforeImage: string;
    afterImage: string;
    stats: Stat[];
    reverseLayout?: boolean;
}

export function CaseStudyCard({ name, role, story, beforeImage, afterImage, stats, reverseLayout = false }: CaseStudyProps) {
    return (
        <div className={`flex flex-col lg:flex-row gap-12 items-center ${reverseLayout ? 'lg:flex-row-reverse' : ''}`}>
            {/* Visual Side */}
            <div className="w-full lg:w-1/2">
                <BeforeAfterSlider beforeImage={beforeImage} afterImage={afterImage} alt={name} />
            </div>

            {/* Story & Data Side */}
            <div className="w-full lg:w-1/2 space-y-8">
                <div>
                    <h3 className="text-3xl font-display font-bold text-white mb-2">{name}</h3>
                    <p className="text-primary font-medium uppercase tracking-widest text-sm">{role}</p>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg italic border-l-4 border-primary/50 pl-6 bg-linear-to-r from-white/5 to-transparent py-2 pr-4 rounded-r-xl">
                    "{story}"
                </p>

                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl shadow-black/50 space-y-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-700" />

                    <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-4 text-primary/90">The Data</h4>

                    {stats.map((stat, i) => (
                        <div key={i} className="space-y-2">
                            <div className="flex justify-between text-sm font-medium">
                                <span className="text-gray-400">{stat.label}</span>
                                <div className="flex gap-3">
                                    <span className="text-gray-500 line-through decoration-red-500/50">{stat.before}</span>
                                    <span className="text-white">→</span>
                                    <span className="text-primary">{stat.after}</span>
                                </div>
                            </div>
                            {/* Interactive Bar Chart */}
                            <div className="h-4 bg-zinc-900 rounded-full overflow-hidden relative">
                                {/* Base Bar */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }} // Just fill background slightly? No, let's show growth
                                    className="absolute left-0 top-0 bottom-0 bg-zinc-700 w-1/2 opacity-20"
                                />
                                {/* Progress Bar */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${stat.progress}%` }}
                                    transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                                    className={`h-full rounded-full ${stat.type === 'increase' ? 'bg-linear-to-r from-primary to-orange-400' : 'bg-linear-to-r from-green-500 to-emerald-400'}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
