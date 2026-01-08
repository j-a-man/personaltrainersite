"use client";

import { motion } from "framer-motion";
import { Coaches } from "../components/home/Coaches"; // Reusing Ben's section
import { Target, Users, Zap } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="bg-black min-h-screen pt-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay" />

            {/* Hero Section */}
            <section className="px-6 lg:px-8 max-w-7xl mx-auto mb-32 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-8 uppercase tracking-tight">
                        Built on <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-orange-400">Science.</span> <br />
                        Driven by <span className="text-white">Results.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                        Pivot Gym wasn't founded to sell supplements or quick fixes. It was born from a frustration with the fitness industry's noise. We exist to provide clarity, community, and coaching that actually works.
                    </p>
                </motion.div>
            </section>

            {/* Values Grid */}
            <section className="bg-zinc-900 border-y border-white/5 py-24 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                    {[
                        {
                            icon: Target,
                            title: "Precision",
                            desc: "No guessing. We use data to track every rep, every meal, and every metric that matters."
                        },
                        {
                            icon: Users,
                            title: "Community",
                            desc: "You're not alone. Join a tribe of high-performers who push each other to be better every single day."
                        },
                        {
                            icon: Zap,
                            title: "Intensity",
                            desc: "We train hard. Not to break you, but to build you. Adaptation only happens when you step outside your comfort zone."
                        }
                    ].map((item, i) => (
                        <div key={i} className="text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-black border border-white/10 mb-6 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(234,88,12,0.2)] transition-all">
                                <item.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Head Coach Section (Reused) */}
            <div className="relative z-10">
                <Coaches />
            </div>

            {/* Story / Context */}
            <section className="py-32 px-6 lg:px-8 max-w-5xl mx-auto text-center relative z-10">
                <h2 className="text-3xl font-display font-bold text-white mb-8">The Origin Story</h2>
                <div className="prose prose-invert prose-lg mx-auto text-gray-400">
                    <p>
                        It started in a garage gym with a single squat rack. Josh realized that most people weren't failing because they lacked effort; they were failing because they lacked a <strong>plan</strong>.
                    </p>
                    <p>
                        After helping hundreds of clients manually, we decided to scale that philosophy. Pivot Gym matches the intimacy of 1-on-1 coaching with the scalability of digital tools. We are not an algorithm. We are coaches, powered by technology.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-zinc-900 border-t border-white/5 py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h2 className="text-4xl font-display font-bold text-white">Contact Us</h2>
                            <div className="space-y-6 text-gray-300">
                                <div>
                                    <h3 className="text-white font-bold mb-2 text-xl">Head Coach</h3>
                                    <p>Josh</p>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2 text-xl">Location</h3>
                                    <p>465 Jericho Tpke</p>
                                    <p>Mineola, NY 11501</p>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2 text-xl">Contact</h3>
                                    <p>Phone: (516) 513-0139</p>
                                    <p>Email: UniversalFitClub@gmail.com</p>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-2 text-xl">Hours</h3>
                                    <ul className="space-y-1">
                                        <li>Thursday: 6:30–10 PM</li>
                                        <li>Tuesday: 5 AM–10 PM</li>
                                        <li>Saturday: 6:30–11:30 AM</li>
                                        <li>Sunday: 6:30–10 PM</li>
                                        <li>Monday: 6:30–10 PM</li>
                                        <li>Tuesday: 6:30–10 PM</li>
                                        <li>Wednesday: 6:30–10 PM</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-black/50 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-zinc-800 border-none rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-zinc-800 border-none rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full bg-zinc-800 border-none rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full bg-zinc-800 border-none rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-primary"
                                        placeholder="Tell us more..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-black font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors uppercase tracking-wide"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
