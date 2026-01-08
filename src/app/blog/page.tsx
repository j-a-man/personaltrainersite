import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";

const articles = [
    {
        title: "The Science of Hypertrophy",
        excerpt: "Understanding the mechanisms of muscle growth: mechanical tension, metabolic stress, and muscle damage.",
        author: "Patrick D.",
        readTime: "8 min read",
        category: "Training",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
        slug: "science-of-hypertrophy"
    },
    {
        title: "Mastering Mobility",
        excerpt: "Why flexibility isn't enough. Learn how to build usable range of motion to bulletproof your joints.",
        author: "Alex M.",
        readTime: "6 min read",
        category: "Recovery",
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80",
        slug: "mastering-mobility"
    },
    {
        title: "Nutrition Myths Debunked",
        excerpt: "Carbs aren't the enemy, and you don't need protein shakes 5 minutes after your workout. Let's look at the data.",
        author: "Shaina K.",
        readTime: "5 min read",
        category: "Nutrition",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
        slug: "nutrition-myths"
    }
];

export default function BlogPage() {
    return (
        <main className="bg-black min-h-screen pt-24 pb-24 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-30" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 uppercase tracking-tight">
                        The <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-orange-400">Knowledge</span> Base
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        No fluff. No pseudoscience. Just evidence-based strategies to optimize your training, nutrition, and mindset.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <Link href={`/blog/${article.slug}`} key={article.slug} className="group relative flex flex-col h-full bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
                            {/* Image */}
                            <div className="aspect-video overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{article.category}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col grow">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <User className="w-3 h-3" />
                                        {article.author}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {article.readTime}
                                    </div>
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {article.title}
                                </h2>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 grow line-clamp-3">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group/link">
                                    Read Article
                                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
