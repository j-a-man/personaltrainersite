import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";

export default function NutritionPage() {
    return (
        <main className="bg-black min-h-screen pt-32 pb-24 relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay" />

            <article className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
                <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-primary transition-colors mb-8 text-sm font-medium uppercase tracking-wider">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Articles
                </Link>

                <header className="mb-12">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-widest text-primary mb-6">
                        Nutrition Science
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                        Nutrition Myths Debunked: <span className="text-gray-500">Stop Stressing the Details</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 border-b border-white/10 pb-8">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-primary" />
                            <span>Shaina K., Lead Nutritionist</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>5 min read</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>Aug 15, 2024</span>
                        </div>
                    </div>
                </header>

                <div className="aspect-21/9 rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl shadow-primary/5">
                    <img
                        src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80"
                        alt="Healthy Food"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <p className="lead text-xl text-gray-200 font-light leading-relaxed mb-8">
                        The fitness industry loves to overcomplicate food. Proprietary blends, magic detoxes, and strict timing rules. It's enough to make anyone give up and order pizza. Let's clear the fog and focus on what actually matters.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-12 mb-6">Myth 1: The Anabolic Window</h2>
                    <p>
                        <strong>The Claim:</strong> You MUST consume protein within 30 minutes of working out, or your gains will wither away.
                        <br />
                        <strong>The Reality:</strong> Total daily protein intake is far more important than timing. Your body stays sensitive to amino acids for hours after training. Eat a good meal when you can. Don't stress if you forgot your shake at home.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-12 mb-6">Myth 2: Carbs Make You Fat</h2>
                    <p>
                        <strong>The Claim:</strong> Insulin spikes from carbohydrates cause fat storage, so you should avoid them at all costs.
                        <br />
                        <strong>The Reality:</strong> A calorie surplus makes you fat. Carbs are the body's preferred fuel source for high-intensity training. If you train hard, you need carbs to perform. Cut them out, and your gym performance usually tanks.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-12 mb-6">Myth 3: You Need a "Detox"</h2>
                    <p>
                        <strong>The Claim:</strong> You need expensive juices to cleanse toxins from your system.
                        <br />
                        <strong>The Reality:</strong> You have a liver and kidneys. They do this for free, 24/7. "Detoxes" are usually just laxatives in disguise or severe caloric restriction that leads to temporary water weight loss.
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h3 className="text-2xl font-bold text-white mb-4">The Truth</h3>
                    <p>
                        Consistency beats perfection. Eat mostly whole foods, hit your protein target, fuel your workouts, and enjoy a treat now and then. Your relationship with food should be sustainable, not a source of anxiety.
                    </p>
                </div>
            </article>
        </main>
    );
}
