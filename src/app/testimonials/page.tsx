import { ReviewFunnel } from "../components/testimonials/ReviewFunnel";
import { CaseStudyCard } from "../components/testimonials/CaseStudy";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
    return (
        <main className="bg-black min-h-screen">
            {/* Header Section */}
            <section className="relative pt-32 pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-zinc-800/80 via-black to-black -z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-30" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8 shadow-lg shadow-primary/5">
                        <Star className="w-4 h-4 text-primary fill-primary animate-pulse" />
                        <span className="text-sm font-bold tracking-wide text-white uppercase">Trusted by 500+ Clients</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 uppercase tracking-tight leading-tight">
                        Real People.<br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-orange-400 to-yellow-500 animate-gradient-x">
                            Real Results.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Don't just take our word for it. See the data, read the stories, and explore the transformations that define our community.
                    </p>
                </div>
            </section>

            {/* Case Studies Section - Dark Zinc Background */}
            <section className="py-24 relative bg-zinc-900 border-t border-white/5">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay" />

                <div className="px-6 md:px-8 space-y-32 max-w-7xl mx-auto relative z-10">
                    <CaseStudyCard
                        name="Sarah J."
                        role="Busy Professional"
                        story="I tried everything—keto, paleo, crossfit. Nothing stuck because it didn't fit my 60-hour work week. The Pivot Gym protocol wasn't just a workout plan; it was a lifestyle design. I'm eating more than ever and dropping dress sizes."
                        beforeImage="https://images.unsplash.com/photo-1574680096141-1cddd32e0340?w=800&q=80"
                        afterImage="https://images.unsplash.com/photo-1549476464-37392f717541?w=800&q=80"
                        stats={[
                            { label: "Body Fat %", before: "32%", after: "18%", progress: 85, type: "decrease" },
                            { label: "Energy Levels", before: "Low", after: "All Day", progress: 95, type: "increase" },
                        ]}
                    />

                    <CaseStudyCard
                        reverseLayout
                        name="Mike T."
                        role="Former Athlete"
                        story="After college sports, I let myself go. I thought I knew how to train, but my body wasn't responding anymore. The data-driven approach opened my eyes. We adjusted my volume and macros, and my strength exploded."
                        beforeImage="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80"
                        afterImage="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80"
                        stats={[
                            { label: "Deadlift", before: "315lbs", after: "455lbs", progress: 90, type: "increase" },
                            { label: "Muscle Mass", before: "180lbs", after: "192lbs", progress: 75, type: "increase" },
                        ]}
                    />
                </div>
            </section>

            {/* Google Review Funnel - True Black Background */}
            <section className="py-24 px-6 relative bg-black border-t border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
                    <h2 className="text-4xl font-display font-bold text-white mb-4">Join the Success Stories</h2>
                    <p className="text-gray-400">Ready to write your own chapter? Start by reviewing us or joining the team.</p>
                </div>
                <div className="relative z-10">
                    <ReviewFunnel />
                </div>
            </section>

            {/* Footer CTA - Deep Zinc Background */}
            <section className="py-24 text-center bg-zinc-950 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none mix-blend-overlay" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />

                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-8">Ready to be our next case study?</h2>
                    <a href="/quiz" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-bold text-white hover:bg-orange-700 transition-all shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                        Start Your Transformation
                    </a>
                </div>
            </section>
        </main>
    );
}
