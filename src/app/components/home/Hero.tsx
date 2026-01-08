"use client";

import { Button } from "../ui/Button";
import { ArrowUpRight, ClipboardList, Dumbbell, Brain, Award } from "lucide-react";
import * as Avatar from '@radix-ui/react-avatar';
import { motion } from "framer-motion";

const features = [
    {
        name: 'INDIVIDUALIZED STRATEGY',
        icon: ClipboardList,
    },
    {
        name: 'PERSONALIZED NUTRITION',
        icon: Award,
    },
    {
        name: 'MINDSET DEVELOPMENT',
        icon: Brain,
    },
    {
        name: 'STRENGTH & ELITE PERFORMANCE',
        icon: Dumbbell,
    },
];

export function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-black pt-14 h-screen flex items-center">
            {/* Background Image / Gradient */}
            <img
                src="/hero.jpg"
                alt="Hero background"
                className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
            />
            <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/40 to-black/60" />

            {/* Glow Effect */}
            <div className="absolute inset-x-0 -z-20 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                    {/* Social Proof Badge */}
                    <div className="inline-flex items-center gap-x-2 rounded-full bg-linear-to-r from-orange-900/80 to-primary/80 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-inset ring-white/10 mb-8 backdrop-blur-sm">
                        <div className="flex -space-x-2 mr-2">
                            {[1, 2, 3].map((i) => (
                                <Avatar.Root key={i} className="inline-flex h-6 w-6 select-none items-center justify-center overflow-hidden rounded-full align-middle bg-gray-600 ring-2 ring-black">
                                    <Avatar.Image
                                        className="h-full w-full object-cover"
                                        src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=64&h=64&q=80&fit=crop`} // Placeholder, will update with real or diverse avatars
                                        alt="User"
                                    />
                                    <Avatar.Fallback className="text-[10px] leading-1 flex h-full w-full items-center justify-center bg-white text-black font-medium">U</Avatar.Fallback>
                                </Avatar.Root>
                            ))}
                        </div>
                        <span className="font-bold">1000+ people</span> already seeing results.
                    </div>

                    <h1 className="text-5xl font-sans font-light tracking-tight text-white sm:text-6xl mb-8">
                        DATA-DRIVEN COACHING <br />
                        THAT DELIVERS <span className="font-bold">RESULTS</span>
                    </h1>

                    <p className="mt-6 text-xl leading-8 text-gray-300 font-sans max-w-2xl text-left">
                        Universal Fitness training and nutrition, built around your life by certified experts.
                    </p>

                    <div className="mt-10 flex items-center justify-start gap-x-6">
                        <Button
                            size="lg"
                            className="rounded-xl px-8 bg-zinc-900 border border-white/10 hover:bg-zinc-800 text-white flex gap-2 group font-sans normal-case tracking-normal"
                            onClick={() => window.location.href = '/quiz'}
                        >
                            Start seeing results
                            <span className="bg-white/10 rounded-full p-0.5 group-hover:bg-white/20 transition-colors">
                                <ArrowUpRight className="w-4 h-4" />
                            </span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Animated Feature Strip */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md border-t border-white/10 py-8 z-10"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-row items-center gap-4">
                                <feature.icon className="h-8 w-8 text-primary shrink-0" strokeWidth={1.5} />
                                <span className="text-sm font-bold text-white uppercase tracking-wider leading-tight">
                                    {feature.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div >
    );
}
