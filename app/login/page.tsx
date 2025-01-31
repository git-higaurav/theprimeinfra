"use client"
import React from 'react';
import { motion } from 'framer-motion';

export default function Login() {
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

            <div className="flex items-center justify-center h-full">
                <div className="text-center text-white p-8 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10">
                    <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
                    <p className="text-lg text-gray-300">
                        We are currently working on this page.<br/>
                        It will be live soon!
                    </p>
                </div>
            </div>
        </section>
    );
}