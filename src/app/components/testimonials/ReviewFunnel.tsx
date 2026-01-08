"use client";

import { useState } from "react";
import { Star, MessageSquare } from "lucide-react";
import { Button } from "../ui/Button";
import { motion, AnimatePresence } from "framer-motion";

export function ReviewFunnel() {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Link to your actual Google Review page
    // Link to your actual Google Review page
    const GOOGLE_REVIEW_LINK = "https://www.google.com/search?sca_esv=f89fcfca3c07c5e0&rlz=1C1OPNX_enUS983US983&sxsrf=ANbL-n4YV2CP5SAiCKDkdXBQCJDBSes8hw:1767862230651&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOber07f1c9CgnmPYQpjBGM-I9rAFpRzeGMOzkksEHS_L6bnOwBfxeRbVXb6IBIptvDt2v-2T5SLRCrDhJsmAAfjGGrsRm_avb6QZoGlxnlNEGrR4rg%3D%3D&q=UniversalFitClub+Reviews&sa=X&ved=2ahUKEwimgJSCyPuRAxXxk4kEHeBCMjIQ0bkNegQIIxAE&biw=1536&bih=730&dpr=1.25&aic=0#lrd=0x89c28953e3dface7:0x11d5d5945a0fc975,3,,,,";

    const handleRate = (star: number) => {
        setRating(star);
        if (star >= 4) {
            window.open(GOOGLE_REVIEW_LINK, "_blank");
        }
    };

    const handleInternalSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to send feedback to API
        console.log("Feedback submitted:", feedback);
        setIsSubmitted(true);
    }

    return (
        <div className="bg-zinc-900/80 backdrop-blur-xl rounded-4xl p-8 md:p-14 text-center max-w-3xl mx-auto border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            {/* Decorative ambient light */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent -z-10 blur-xl" />

            <h2 className="text-3xl font-display font-bold text-white mb-2">How was your experience?</h2>
            <p className="text-gray-400 mb-8">We value your feedback and use it to improve our coaching.</p>

            {!isSubmitted && rating === 0 && (
                <div className="flex justify-center gap-2 md:gap-4 mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            onClick={() => handleRate(star)}
                            className="p-2 transition-transform hover:scale-110 focus:outline-none"
                        >
                            <Star
                                className={`w-10 h-10 md:w-12 md:h-12 transition-colors ${star <= (hoveredRating || rating)
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-zinc-600"
                                    }`}
                            />
                        </button>
                    ))}
                </div>
            )}

            {/* High Rating Logic (4-5 Stars) */}
            <AnimatePresence>
                {rating >= 4 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <div className="flex justify-center gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                        <h3 className="text-2xl font-bold text-white">We're thrilled to hear that!</h3>
                        <p className="text-gray-300 max-w-lg mx-auto">
                            It would mean the world to us if you could share your experience on Google. It helps others find their path to transformation.
                        </p>
                        <div className="pt-4">
                            <Button
                                onClick={() => window.open(GOOGLE_REVIEW_LINK, "_blank")}
                                className="bg-[#4285F4] hover:bg-[#3367D6] text-white border-none py-6 px-8 text-lg"
                            >
                                Review on Google <Star className="w-4 h-4 ml-2 fill-white" />
                            </Button>
                        </div>
                        <button onClick={() => setRating(0)} className="text-zinc-500 hover:text-white text-sm mt-4 underline">
                            Change rating
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Low Rating Logic (1-3 Stars) */}
            <AnimatePresence>
                {rating > 0 && rating <= 3 && !isSubmitted && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6 max-w-lg mx-auto"
                    >
                        <h3 className="text-xl font-bold text-white">How can we do better?</h3>
                        <p className="text-gray-400">
                            Please let us know what we could improve. Your message goes directly to our management team.
                        </p>
                        <form onSubmit={handleInternalSubmit} className="space-y-4 text-left">
                            <textarea
                                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                                placeholder="Tell us about your experience..."
                                required
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            />
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setRating(0)}
                                    className="flex-1 py-3 text-zinc-400 hover:text-white font-medium"
                                >
                                    Cancel
                                </button>
                                <Button type="submit" className="flex-1">
                                    Send Feedback <MessageSquare className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Success State for Internal Feedback */}
            {isSubmitted && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Thank you!</h3>
                    <p className="text-gray-400">Your feedback has been received and we will review it shortly.</p>
                    <button onClick={() => { setIsSubmitted(false); setRating(0); setFeedback(""); }} className="text-zinc-500 hover:text-white text-sm mt-6 underline">
                        Close
                    </button>
                </motion.div>
            )}

        </div>
    );
}
