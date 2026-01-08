"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { InlineWidget } from "react-calendly";
import { useEffect } from "react";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-100 transition-all duration-300"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 z-101 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="bg-zinc-900 border border-white/10 w-full max-w-4xl h-[85vh] rounded-3xl overflow-hidden shadow-2xl relative pointer-events-auto flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-zinc-900/50 backdrop-blur-xl absolute top-0 left-0 right-0 z-10">
                                <div>
                                    <h3 className="text-xl font-display font-bold text-white">
                                        Book Your Consultation
                                    </h3>
                                    <p className="text-sm text-gray-400">
                                        Select a time that works best for you.
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Calendly Widget Container */}
                            <div className="flex-1 w-full bg-zinc-900 mt-20">
                                <InlineWidget
                                    url="https://calendly.com/spyderstack/30min" // Placeholder URL
                                    styles={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                    pageSettings={{
                                        backgroundColor: '#18181b', // matching zinc-900
                                        hideEventTypeDetails: false,
                                        hideLandingPageDetails: false,
                                        primaryColor: '#de5c00', // brand primary
                                        textColor: '#ffffff'
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
