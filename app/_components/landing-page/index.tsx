"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
    return (
        <main className="min-h-screen">
            <section id="landing" className="relative h-screen bg-[#12192b] overflow-hidden">
                {/* WhatsApp Floating Button */}
                {/* <motion.a
                    href="https://wa.me/918057235806"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-8 right-8 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <MessageCircle className="w-6 h-6 text-white" />
                </motion.a> */}

                {/* Animated Background Shapes */}
                <motion.div
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-20 right-20 w-64 h-64 rounded-full border border-[#edc135]/10"
                />
                <motion.div
                    animate={{
                        rotate: [360, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full border border-[#edc135]/10"
                />
                <motion.div
                    animate={{
                        x: [-10, 10, -10],
                        y: [-10, 10, -10],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#edc135]/5 rounded-lg"
                />

                {/* Hero Content */}
                <div className="relative h-full flex items-center">
                    <div className="container mx-auto px-6 md:px-24">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            {/* Left Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-8"
                            >
                                <motion.span 
                                    className="inline-block text-[#edc135] text-base font-medium px-6 py-2 border border-[#edc135]/20 rounded-full bg-[#edc135]/5"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    Premium Real Estate Agency
                                </motion.span>
                                <div className="space-y-6">
                                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                                        Your Dream Home <span className="text-[#edc135]">Awaits</span>
                                    </h1>
                                    <p className="text-lg text-gray-300">
                                        From luxurious penthouses to cozy family homes, we help you find the perfect property 
                                        that matches your lifestyle and aspirations.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-6">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-[#edc135] text-[#12192b] rounded-full font-semibold text-base hover:bg-[#d4ab2b] transition-all focus:outline-none focus:ring-2 focus:ring-[#edc135]/20"
                                    >
                                        Search Properties
                                    </motion.button>
                                    <Link href="/projects">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-8 py-4 bg-transparent text-[#edc135] border-2 border-[#edc135] rounded-full font-semibold text-base hover:bg-[#edc135]/10 transition-all focus:outline-none focus:ring-2 focus:ring-[#edc135]/20"
                                    >
                                       Explore Ongoing Projects
                                    </motion.button>
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Right Image */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative h-[600px] hidden md:block"
                            >
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}