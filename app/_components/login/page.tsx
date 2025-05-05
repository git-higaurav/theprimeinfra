"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();

    return (
        <section className="relative h-screen bg-[#12192b] overflow-hidden">
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

            <div className="flex items-center justify-center h-full">
                <div className="w-96 text-white p-8 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
                    <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
                    <div className="space-y-4">
                        <div className="text-center p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                            <p className="text-yellow-400">Login functionality is temporarily disabled.</p>
                            <p className="text-sm text-yellow-400/80 mt-1">Please check back later.</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => router.push('/')}
                            className="w-full py-2 px-4 bg-transparent border border-white/20 rounded-lg font-medium hover:bg-white/10 transition-colors"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}