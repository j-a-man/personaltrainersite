
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import * as Avatar from '@radix-ui/react-avatar';

export function ReachBestSelf() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-2xl mb-16">
                    <h2 className="text-4xl font-sans font-light tracking-tight text-black sm:text-6xl uppercase">
                        Reach Your <br />
                        <span className="font-bold">Best Self</span>
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Transform your <span className="font-bold text-black">body, mind, and performance</span> with a fully personalized approach.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                    {/* Card 1: Real Results */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-3xl p-8 flex flex-col justify-between shadow-xl ring-1 ring-gray-900/5 col-span-1 min-h-[350px]"
                    >
                        <div>
                            <h3 className="text-3xl font-display font-bold text-primary mb-4">Real Results</h3>
                            <p className="text-gray-600 font-medium leading-relaxed text-base">
                                Unlock your full potential with custom workouts, nutrition plans, and expert coaching backed by real data. All designed to optimize your health from the inside out.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2: Supplements Testimonial */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-zinc-50 rounded-3xl p-10 flex flex-col justify-center shadow-xl ring-1 ring-gray-900/5 col-span-1 md:col-span-2 relative overflow-hidden min-h-[350px] group"
                    >
                        {/* Subtle Background Texture */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply transition-opacity duration-500 group-hover:opacity-20" />
                        <div className="absolute inset-0 bg-linear-to-br from-white via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                            <p className="text-4xl sm:text-5xl font-display font-bold text-black leading-tight mb-8 tracking-tight">
                                “The Supplements are making a <span className="text-primary">big difference!</span>“
                            </p>
                            <div className="flex items-center justify-end gap-3">
                                <Avatar.Root className="inline-flex h-12 w-12 select-none items-center justify-center overflow-hidden rounded-full bg-primary/10 ring-2 ring-primary">
                                    <Avatar.Fallback className="text-sm font-bold text-primary">JY</Avatar.Fallback>
                                </Avatar.Root>
                                <div>
                                    <div className="text-xl text-black font-bold font-display tracking-wide uppercase">Jade Y.</div>
                                    <div className="flex text-orange-500 text-sm">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3 h-3 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative background element moved/resized */}
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-700 group-hover:bg-primary/10" />
                    </motion.div>

                    {/* Card 3: Precision Through Science */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 flex flex-col justify-end shadow-xl ring-1 ring-gray-900/5 col-span-1 relative overflow-hidden group min-h-[400px]"
                    >
                        <div className="absolute inset-0 bg-linear-to-b from-primary/20 via-gray/40 to-black/50 z-5" />
                        <img
                            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
                            alt="Science"
                            className="absolute inset-0 w-full h-2/3 object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                        />

                        <div className="relative z-20 mt-auto pt-48">
                            <h3 className="text-3xl font-display font-bold text-primary mb-4">Precision <br /> Through <br /> Science</h3>
                            <p className="text-sm text-gray-200 font-medium leading-relaxed">
                                We use <span className="font-bold text-white">bloodwork, CGMs, and supplements</span> tailored to your needs, optimizing every aspect of your health.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 4: Coach/Testimonial Center */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-black rounded-3xl shadow-xl ring-1 ring-gray-900/5 col-span-1 relative overflow-hidden group min-h-[400px]"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                            alt="Trainers"
                            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                            <div className="flex items-center gap-3 mb-2">
                                <Avatar.Root className="inline-flex h-10 w-10 select-none items-center justify-center overflow-hidden rounded-full bg-gray-600 ring-2 ring-white">
                                    <Avatar.Image
                                        className="h-full w-full object-cover"
                                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
                                        alt="Shaina"
                                    />
                                    <Avatar.Fallback className="text-xs flex h-full w-full items-center justify-center bg-white text-black font-medium">S</Avatar.Fallback>
                                </Avatar.Root>
                                <div>
                                    <p className="text-white font-bold">Shaina</p>
                                    <div className="flex text-orange-500">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3 h-3 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-white/90 text-sm italic">
                                "No fr, God's timing is so perfect. Like you don't even know this is exactly what I prayed for..."
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 5: Aesthetic/Gym */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-gray-100 rounded-3xl shadow-xl ring-1 ring-gray-900/5 col-span-1 relative overflow-hidden min-h-[400px] group hover:shadow-2xl hover:ring-1 hover:ring-primary/20 transition-all duration-500"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" // Updated working Gym Aesthetic Image
                            alt="Gym Aesthetic"
                            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
