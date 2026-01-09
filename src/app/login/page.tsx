"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-20" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 opacity-20" />

            <div className="w-full max-w-md px-6 relative z-10">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block mb-8">
                        <span className="font-display text-2xl font-bold tracking-wider text-white">
                            LEGACY <span className="text-primary">STRENGTH</span>
                        </span>
                    </Link>
                    <h1 className="text-2xl font-bold text-white mb-2">Welcome Back.</h1>
                    <p className="text-gray-400">Enter the portal to track your progress.</p>
                </div>

                <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 shadow-2xl shadow-primary/5 backdrop-blur-md">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-wider">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="email"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-400 mb-2 tracking-wider">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-12 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-gray-600"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                            <label className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-white transition-colors">
                                <input type="checkbox" className="rounded border-white/20 bg-black/50 text-primary focus:ring-primary/20" />
                                Remember me
                            </label>
                            <a href="#" className="text-primary hover:text-orange-400 transition-colors">Forgot Password?</a>
                        </div>

                        <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 group">
                            Sign In to Portal
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>

                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm">
                        Don't have an account? <Link href="/#transformation" className="text-white hover:text-primary transition-colors font-bold">Apply for Coaching</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
