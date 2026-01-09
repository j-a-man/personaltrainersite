import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";

export default function HypertrophyPage() {
    return (
        <main className="bg-black min-h-screen pt-32 pb-24 relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay" />

            <article className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
                <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-primary transition-colors mb-8 text-sm font-medium uppercase tracking-wider">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Articles
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-widest text-primary mb-6">
                        Training Methodology
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                        The Science of Hypertrophy: <span className="text-gray-500">More Than Just "Lifting Heavy"</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 border-b border-white/10 pb-8">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-primary" />
                            <span>Joe, Head Coach</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>8 min read</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>Oct 12, 2024</span>
                        </div>
                    </div>
                </header>

                {/* Main Image */}
                <div className="aspect-21/9 rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl shadow-primary/5">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80"
                        alt="Weight Training"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <p className="lead text-xl text-gray-200 font-light leading-relaxed mb-8">
                        Most people think growing muscle is just about eating protein and lifting heavy weights until you drop. While not entirely wrong, this oversimplification leads to plateaus, injuries, and generic results. To truly optimize hypertrophy, we need to look at the three mechanisms of muscle growth.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-12 mb-6">1. Mechanical Tension</h2>
                    <p>
                        This is the most important driver of growth. Mechanical tension is created effectively when you move heavy loads through a full range of motion. But "heavy" is relative. The key is that the muscle fibers must be recruited and generate high levels of force.
                    </p>
                    <p>
                        <strong>Practical Tip:</strong> Focus on progressive overload. If you aren't adding weight, reps, or improving technique over time, you aren't increasing mechanical tension.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-12 mb-6">2. Metabolic Stress</h2>
                    <p>
                        Ever felt "the pump"? That's metabolic stress. It's the accumulation of metabolites (lactate, hydrogen ions) in the muscle cell during exercise. This signals the body to adapt by swelling the cell and triggering hormonal responses that aid growth.
                    </p>
                    <p>
                        <strong>Practical Tip:</strong> Don't just stick to sets of 5. Incorporate higher repetition work (12-20 reps) with shorter rest periods to drive metabolic stress.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-12 mb-6">3. Muscle Damage</h2>
                    <p>
                        Slight micro-tears in the muscle fibers elicit an inflammatory response that leads to repair and growth. However, this is a double-edged sword. Too much damage (being so sore you can't walk) actually impairs training frequency and performance.
                    </p>
                    <p>
                        <strong>The Sweet Spot:</strong> Aim for feeling "worked" but not decimated. You should be able to train that muscle group again within 48-72 hours.
                    </p>

                    <hr className="border-white/10 my-12" />

                    <h3 className="text-2xl font-bold text-white mb-4">Conclusion</h3>
                    <p>
                        A well-rounded program hits all three of these mechanisms. If you're only chasing 1-rep maxes (Tension) or only chasing the pump (Stress), you're leaving gains on the table. At Legacy Strength, we periodize your training to maximize each pathway without burning you out.
                    </p>
                </div>

                {/* CTA */}
                <div className="mt-16 bg-zinc-900 rounded-3xl p-8 md:p-12 border border-white/5 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to apply the science?</h3>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto">Get a customized program that balances tension, stress, and recovery for your specific body type.</p>
                    <a href="/quiz" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-bold text-white hover:bg-orange-700 transition-all shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                        Build My Program
                    </a>
                </div>
            </article>
        </main>
    );
}
