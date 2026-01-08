import { GroceryList } from "../components/resources/GroceryList";
import { MobilityRoutine } from "../components/resources/MobilityRoutine";
import { Button } from "../components/ui/Button";
import { ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-800 via-black to-black -z-10" />

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                {/* Header */}
                <div className="mb-12 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-bold uppercase tracking-widest text-[#de5c00] mb-6">
                        <Lock className="w-3 h-3" />
                        The Vault Unlocked
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
                        Welcome to the <span className="text-white">Inner Circle</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        You've taken the first step. Here are some exclusive resources to get you started while we prepare your personalized roadmap.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">
                    <GroceryList />
                    <MobilityRoutine />
                </div>

                {/* CTA Section */}
                <div className="bg-linear-to-r from-zinc-900 to-black border border-white/10 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-display font-bold mb-4">Ready for the full experience?</h2>
                        <p className="text-gray-400 mb-8">
                            These resources are just a taste. Unlock your full potential with our 1:1 coaching program.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/#transformation">
                                <Button variant="primary" className="px-8">
                                    Start Your Transformation
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button variant="outline" className="border-white/20 hover:bg-white/10">
                                    Back to Home
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
