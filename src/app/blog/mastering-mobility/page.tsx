import Link from "next/link";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";

export default function MobilityPage() {
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
                        Mobility & Recovery
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                        Mastering Mobility: <span className="text-gray-500">Why Stretching Isn't Enough</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 border-b border-white/10 pb-8">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-primary" />
                            <span>Alex M., Mobility Specialist</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>6 min read</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span>Sep 28, 2024</span>
                        </div>
                    </div>
                </header>

                <div className="aspect-21/9 rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl shadow-primary/5">
                    <img
                        src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=1200&q=80"
                        alt="Mobility Training"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <p className="lead text-xl text-gray-200 font-light leading-relaxed mb-8">
                        "I'm feeling tight, I should stretch more." If I had a dollar for every time I heard this, I'd have my own island. The truth is, passive stretching often provides only temporary relief. To truly move better, you need **Mobility**.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-12 mb-6">Flexibility vs. Mobility</h2>
                    <p>
                        Flexibility is the ability of a muscle to lengthen passively (think: someone pushing your leg up). Mobility is the ability to move a joint through a full range of motion with *control* (think: lifting your leg up yourself). Mobility assumes flexibility, but it adds strength and motor control.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-12 mb-6">The "Use It or Lose It" Principle</h2>
                    <p>
                        Your body is efficient. If you spend 10 hours a day sitting in a chair (hips flexed, spine rounded), your brain starts to view that as your "normal" state. It lays down collagen fibers to make that position easier to hold—literally stiffening you into a chair shape.
                    </p>
                    <p>
                        To reverse this, you don't just need to stretch; you need to teach your nervous system that it is *safe* and *strong* in other positions.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-12 mb-6">Daily Essentials</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>CARs (Controlled Articular Rotations):</strong> Moving your joints through their full outer limits daily to maintain range health.</li>
                        <li><strong>LoadedStretching:</strong> Using weights at the end range of motion to build strength where you are weakest.</li>
                        <li><strong>Spinal Segmentation:</strong> Learning to move your vertebrae independently, like a bike chain rather than a solid rod.</li>
                    </ul>

                    <hr className="border-white/10 my-12" />

                    <h3 className="text-2xl font-bold text-white mb-4">The Verdict</h3>
                    <p>
                        Stop treating mobility as a cooldown or an afterthought. It is a prerequisite for strength. You cannot load a position you cannot access. Prioritize your joint health, and your strength numbers will skyrocket.
                    </p>
                </div>
            </article>
        </main>
    );
}
