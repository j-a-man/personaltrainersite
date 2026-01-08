
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Lock, Calendar, CreditCard, Activity, Utensils, Zap, Users, ShieldCheck } from "lucide-react";
import { Button } from "../ui/Button";
import { BookingModal } from "./BookingModal";

const plans = [
    {
        name: '1:1 coaching',
        description: 'Our 1:1 coaching with our world class coaches. Application only. Get the program for you (our elite coaching team)',
        image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800&q=80', // Athlete jumping/dynamic
        buttonText: 'Book your 1-1 Consultation',
        buttonIcon: Calendar,
        isComingSoon: false,
        features: [
            { name: 'Personalized workouts', icon: Activity },
            { name: 'Habit Tracking', icon: ShieldCheck },
            { name: 'Workout tracking', icon: Zap },
            { name: 'Personalized nutrition', icon: Utensils },
        ],
        checkmarks: [
            'Advanced bloodwork and analysis',
            'Tailored supplement plan',
            '& More'
        ]
    },
    {
        name: 'Monthly Membership',
        description: 'Stay challenged. Stay consistent. Access new workouts, programs, and challenges each month designed to keep you progressing. Cancel anytime.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', // Fit couple/gym
        buttonText: 'Coming soon',
        buttonIcon: Lock,
        isComingSoon: true,
        features: [
            { name: 'Access new workouts', icon: Activity },
            { name: 'Habit Tracking', icon: ShieldCheck },
            { name: 'Monthly Nutrition Guidance', icon: Utensils },
            { name: 'Access to private community', icon: Users },
        ],
        checkmarks: [
            'New challenges every month',
            'Keep leveling up all year',
            'Flexible subscription'
        ]
    },
];

export function Pricing() {
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    return (
        <section id="transformation" className="bg-black py-24 sm:py-32">
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-4xl font-sans font-medium tracking-tight text-white sm:text-5xl">
                        Transformation is easier than ever
                    </h2>
                    <p className="mt-4 text-sm font-semibold tracking-wide text-gray-400 uppercase">
                        Enroll to one of our training programs
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative flex flex-col overflow-hidden rounded-3xl bg-zinc-900/50 ring-1 ring-white/10"
                        >
                            {/* Background Image with Gradient */}
                            <div className="absolute inset-0 h-[300px] z-0">
                                <img
                                    src={plan.image}
                                    alt={plan.name}
                                    className="h-full w-full object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-linear-to-b from-transparent via-zinc-900/80 to-zinc-900" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8 flex flex-col h-full">
                                {/* Logo Placeholder */}
                                <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 ring-1 ring-white/20">
                                    <span className="font-display font-bold text-white text-xl">B</span>
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-4">{plan.name}</h3>
                                <p className="text-gray-300 mb-8 leading-relaxed h-24">
                                    {plan.description}
                                </p>

                                <div className="mb-10">
                                    <Button
                                        className={`w-full h-12 text-base font-semibold ${plan.isComingSoon
                                            ? 'bg-orange-800/80 text-white hover:bg-orange-800 cursor-not-allowed opacity-80'
                                            : 'bg-primary hover:bg-orange-600 text-white'
                                            }`}
                                        disabled={plan.isComingSoon}
                                        onClick={() => {
                                            if (plan.name === '1:1 coaching') {
                                                setIsBookingOpen(true);
                                            }
                                        }}
                                    >
                                        {plan.buttonText}
                                        {plan.buttonIcon && <plan.buttonIcon className="ml-2 w-4 h-4" />}
                                    </Button>
                                </div>

                                {/* Features List */}
                                <div className="flex-1 space-y-8">
                                    <ul className="space-y-4">
                                        {plan.features.map((feature) => (
                                            <li key={feature.name} className="flex items-center text-gray-400">
                                                <feature.icon className="w-5 h-5 mr-3 text-gray-500" />
                                                {feature.name}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="border-t border-white/10 pt-8">
                                        <ul className="space-y-3">
                                            {plan.checkmarks.map((item) => (
                                                <li key={item} className="flex items-center text-white font-medium">
                                                    <div className="shrink-0 w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center mr-3">
                                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                                    </div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
