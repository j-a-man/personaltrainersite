"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { Button } from './ui/Button';
import { useRouter } from 'next/navigation';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

const BUSINESS_INFO = {
    hours: "Monday-Wednesday: 6:30–10 PM, Thursday: 6:30–10 PM, Saturday: 6:30–11:30 AM, Sunday: 6:30–10 PM. We are closed on Fridays.",
    location: "2111 Hillside Ave., New Hyde Park, NY 11040",
    phone: "(516) 253-1387",
    email: "UniversalFitClub@gmail.com",
    contact: "You can reach Patrick D. at the number or email provided."
};

const FAQ_KNOWLEDGE_BASE = {
    "hours": `Our hours are: ${BUSINESS_INFO.hours}`,
    "open": `Our hours are: ${BUSINESS_INFO.hours}`,
    "location": `We are located at ${BUSINESS_INFO.location}.`,
    "address": `We are located at ${BUSINESS_INFO.location}.`,
    "where": `We are located at ${BUSINESS_INFO.location}.`,
    "phone": `You can call us at ${BUSINESS_INFO.phone}.`,
    "email": `You can email us at ${BUSINESS_INFO.email}.`,
    "contact": `You can contact us via phone at ${BUSINESS_INFO.phone} or email at ${BUSINESS_INFO.email}.`,
    "price": "Our pricing depends on your specific goals and needs. We offer individualized strategy, personalized nutrition, and elite performance training. Please check our pricing section or contact us for a consultation.",
    "cost": "Our pricing depends on your specific goals and needs. We offer individualized strategy, personalized nutrition, and elite performance training. Please check our pricing section or contact us for a consultation.",
    "services": "We offer individualized strategy, personalized nutrition, mindset development, and strength & elite performance coaching.",
    "training": "We offer individualized strategy, personalized nutrition, mindset development, and strength & elite performance coaching.",
    "quiz": "You can start your journey by taking our quiz! Just ask me to 'take the quiz'.",
    "start": "You can start your journey by taking our quiz! Just ask me to 'take the quiz'.",
    "blog": "Check out our blog for the latest fitness tips and science-based articles.",
    "patrick": `Patrick D. is our head coach. ${BUSINESS_INFO.contact}`,
};

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi! I'm the Universal Fitness assistant. How can I help you today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const userInput = inputValue.toLowerCase();
        setInputValue("");

        // Simulate bot thinking
        setTimeout(() => {
            let botResponseText = "I'm not sure about that. Could you please call us at (516) 253-1387 for more specific questions?";

            // Navigation Commands
            if (userInput.includes("quiz") || userInput.includes("start")) {
                botResponseText = "Taking you to the quiz now to start your transformation!";
                setTimeout(() => router.push('/quiz'), 1500);
            } else if (userInput.includes("blog")) {
                botResponseText = "Heading over to the blog.";
                setTimeout(() => router.push('/blog'), 1500);
            } else if (userInput.includes("about")) {
                botResponseText = "Let's learn more about us.";
                setTimeout(() => router.push('/about'), 1500);
            } else {
                // Knowledge Base Search
                for (const [key, value] of Object.entries(FAQ_KNOWLEDGE_BASE)) {
                    if (userInput.includes(key)) {
                        botResponseText = value;
                        break;
                    }
                }
            }

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponseText,
                sender: 'bot',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botMessage]);
        }, 600);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-black rounded-full shadow-lg hover:shadow-primary/50 transition-shadow"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-50 w-full max-w-sm bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]"
                    >
                        {/* Header */}
                        <div className="p-4 bg-white/5 border-b border-white/10 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black">
                                <Bot size={18} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm">Universal Assistant</h3>
                                <p className="text-xs text-green-400 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                    Online
                                </p>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                            ? 'bg-primary text-black rounded-tr-none'
                                            : 'bg-zinc-800 text-gray-200 rounded-tl-none border border-white/5'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white/5 border-t border-white/10">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask a question..."
                                    className="flex-1 bg-zinc-800 border-none rounded-xl px-4 py-2 text-sm text-white focus:ring-1 focus:ring-primary placeholder-gray-500"
                                />
                                <Button
                                    size="sm"
                                    onClick={handleSend}
                                    className="px-3 rounded-xl bg-primary hover:bg-primary/90 text-black"
                                >
                                    <Send size={18} />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
