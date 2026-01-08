
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        content: "Universal Fitness Club changed my life. The data-driven approach allowed me to break through plateaus I've been stuck at for years.",
        author: "John Doe",
        handle: "@johndoe",
        role: "Software Engineer",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80"
    },
    {
        content: "The best investment I've made in myself. The nutrition plan was easy to follow and the workouts were challenging but fun.",
        author: "Sarah Smith",
        handle: "@sarahfit",
        role: "Marketing Director",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
    },
    {
        content: "I never thought I could get in this kind of shape at my age. The coaches are knowledgeable and supportive.",
        author: "Michael Brown",
        handle: "@mikeb",
        role: "Business Owner",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
    },
    {
        content: "Detailed analytics and constant feedback kept me on track. I've lost 20lbs and gained muscle in just 3 months.",
        author: "Emily Davis",
        handle: "@emilyd",
        role: "Nurse",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
    },
    {
        content: "Professional, personalized, and effective. Highly recommend for anyone serious about their fitness.",
        author: "David Wilson",
        handle: "@dwilson",
        role: "Architect",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
    },
    {
        content: "Finally a program that understands my lifestyle. No impossible diets, just real sustainable changes.",
        author: "Jessica Taylor",
        handle: "@jtaylor",
        role: "Teacher",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80"
    },
    {
        content: "The community aspect is amazing. Seeing others win motivates me to push harder every day.",
        author: "Ryan Martinez",
        handle: "@ryanm",
        role: "Sales Manager",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&q=80"
    },
    {
        content: "Coach Shaina really cares. She checked in on me constantly and adjusted my plan when I got busy.",
        author: "Olivia Anderson",
        handle: "@oliviaa",
        role: "Designer",
        image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?w=100&q=80"
    }
];

// Duplicate for infinite scroll
const marqueeContent = [...testimonials, ...testimonials];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-zinc-900 border-y border-white/5 overflow-hidden relative">
            {/* Background Gradient for distinct look */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-zinc-800/50 via-zinc-900 to-zinc-950 -z-10" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">Testimonials</h2>
                <p className="mt-2 text-4xl font-display font-bold tracking-tight text-white sm:text-5xl uppercase">
                    Lives Transformed
                </p>
            </div>

            <div className="relative flex flex-col gap-8">
                {/* Row 1: Left to Right */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-8 pl-8"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, i) => (
                            <div
                                key={`${testimonial.author}-${i}`}
                                className="relative flex-none w-[350px] md:w-[450px] rounded-3xl bg-zinc-900/50 p-8 border border-white/10 backdrop-blur-sm"
                            >
                                <div className="flex gap-1 text-orange-500 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
                                    />
                                    <div>
                                        <div className="font-bold text-white">{testimonial.author}</div>
                                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Right to Left (Optional) - or just one strong row. Let's do a second slower row for aesthetics */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-8 pl-8"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
                    >
                        {[...testimonials, ...testimonials].reverse().map((testimonial, i) => (
                            <div
                                key={`${testimonial.author}-rev-${i}`}
                                className="relative flex-none w-[350px] md:w-[450px] rounded-3xl bg-zinc-900/50 p-8 border border-white/10 backdrop-blur-sm"
                            >
                                <div className="flex gap-1 text-orange-500 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                    "{testimonial.content}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
                                    />
                                    <div>
                                        <div className="font-bold text-white">{testimonial.author}</div>
                                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Gradient Fade Edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-zinc-950 to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-zinc-950 to-transparent z-10" />

            </div>
        </section>
    );
}
