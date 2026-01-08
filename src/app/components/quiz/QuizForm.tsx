"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "../ui/Button";

const questions = [
    {
        id: "goal",
        title: "What is your primary goal?",
        options: [
            { label: "Lose Fat & Lean Out", value: "weight_loss" },
            { label: "Build Muscle & Strength", value: "muscle_gain" },
            { label: "Athletic Performance", value: "performance" },
            { label: "Overall Health & Longevity", value: "health" },
        ],
    },
    {
        id: "experience",
        title: "What represents your experience level?",
        options: [
            { label: "Beginner (0-1 years)", value: "beginner" },
            { label: "Intermediate (1-3 years)", value: "intermediate" },
            { label: "Advanced (3+ years)", value: "advanced" },
        ],
    },
    {
        id: "struggle",
        title: "What is your biggest obstacle?",
        options: [
            { label: "Nutrition & Diet", value: "nutrition" },
            { label: "Consistency & Motivation", value: "consistency" },
            { label: "Time Management", value: "time" },
            { label: "Lack of Knowledge/Plan", value: "knowledge" },
        ],
    },
];

export function QuizForm() {
    const router = useRouter();
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [email, setEmail] = useState("");

    const handleSelect = (value: string) => {
        setAnswers((prev) => ({ ...prev, [questions[step].id]: value }));
        if (step < questions.length - 1) {
            setTimeout(() => setStep(step + 1), 300); // Small delay for better UX
        } else {
            setStep(step + 1); // Move to email step
        }
    };

    const getCustomAdvice = () => {
        const { struggle, goal } = answers;
        if (struggle === "nutrition") return "Your biggest lever is fueling. We'll build a macro strategy that fits your lifestyle without banning your favorite foods.";
        if (struggle === "time") return "Efficiency is key for you. We'll use high-intensity minimalist programming to get maximum results in minimum time.";
        if (struggle === "consistency") return "Accountability is the missing piece. Our daily check-ins and community support will ensure you never fall off track again.";
        if (goal === "muscle_gain") return "To build size, you need precision progressive overload. We'll design a hypertrophy block specifically for your biomechanics.";
        return "We'll build a data-driven roadmap tailored specifically to your body and lifestyle constraints.";
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        router.push("/resources");
    };

    if (isCompleted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto text-center"
            >
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white mb-4">Your Action Plan is Ready!</h2>
                <p className="text-gray-400 text-lg mb-8">
                    Based on your answers, we've identified a key focus area for you:
                </p>

                <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/10">
                    <h3 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Strategy Snippet</h3>
                    <p className="text-white text-xl font-medium leading-relaxed">"{getCustomAdvice()}"</p>
                </div>

                <p className="text-gray-400 mb-8">
                    We've sent the full breakdown and starter guide to <span className="text-white font-semibold">{email}</span>.
                </p>

                <Link href="/">
                    <Button variant="outline" className="w-full sm:w-auto border-white/20 hover:bg-white/10 text-white">
                        Back to Homepage
                    </Button>
                </Link>
            </motion.div>
        );
    }

    const progress = ((step + 1) / (questions.length + 1)) * 100;

    return (
        <div className="max-w-xl mx-auto">
            {/* Progress Bar */}
            <div className="w-full bg-white/10 h-1.5 rounded-full mb-8 overflow-hidden">
                <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            <AnimatePresence mode="wait">
                {step < questions.length ? (
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 text-center leading-tight">
                            {questions[step].title}
                        </h2>
                        <div className="space-y-4">
                            {questions[step].options.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => handleSelect(option.value)}
                                    className="w-full text-left p-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 transition-all group flex items-center justify-between"
                                >
                                    <span className="text-lg font-medium text-white group-hover:pl-2 transition-all">
                                        {option.label}
                                    </span>
                                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="email"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 text-center">
                            Where should we send your plan?
                        </h2>
                        <p className="text-gray-400 text-center mb-8">
                            Enter your email to receive your personalized roadmap and starter guide.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="email"
                                    required
                                    placeholder="name@example.com"
                                    className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 text-lg"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full h-16 text-lg font-bold bg-primary hover:bg-orange-600 text-white rounded-2xl"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                ) : (
                                    <>
                                        Unlock My Plan <ArrowRight className="ml-2 w-5 h-5" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
