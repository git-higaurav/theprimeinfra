"use client"
import { motion } from 'framer-motion';

export default function AboutUs() {
    return (
        <section className="relative py-16 px-4 bg-[#12192b] overflow-hidden">
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

            <div className="container mx-auto relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
                    <p className="text-lg text-gray-300 mb-8">
                        Your trusted partner in Dehradun's real estate market, specializing in property buying and selling with over a decade of expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Expertise</h2>
                        <p className="text-gray-300 mb-6">
                            We specialize in connecting buyers with their dream properties and helping sellers get the best value for their real estate investments in Dehradun.
                        </p>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Commitment</h2>
                        <p className="text-gray-300">
                            We are committed to providing transparent, professional, and personalized real estate services, ensuring smooth transactions for both buyers and sellers.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-[#1a2338] p-6 rounded-lg shadow-md border border-[#edc135]/20">
                            <h3 className="text-xl font-bold text-white mb-2">Property Valuation</h3>
                            <p className="text-gray-300">Expert market analysis and fair property valuation services for informed decision-making.</p>
                        </div>
                        <div className="bg-[#1a2338] p-6 rounded-lg shadow-md border border-[#edc135]/20">
                            <h3 className="text-xl font-bold text-white mb-2">Property Portfolio</h3>
                            <p className="text-gray-300">Extensive portfolio of residential and commercial properties across prime locations in Dehradun.</p>
                        </div>
                        <div className="bg-[#1a2338] p-6 rounded-lg shadow-md border border-[#edc135]/20">
                            <h3 className="text-xl font-bold text-white mb-2">Transaction Support</h3>
                            <p className="text-gray-300">Complete assistance with documentation, legal verification, and transaction processing.</p>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-6">Our Track Record</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-3xl font-bold text-[#edc135] mb-2">10+</div>
                            <p className="text-gray-300">Years in Real Estate</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-[#edc135] mb-2">500+</div>
                            <p className="text-gray-300">Successful Deals</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-[#edc135] mb-2">1000+</div>
                            <p className="text-gray-300">Properties Listed</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-[#edc135] mb-2">98%</div>
                            <p className="text-gray-300">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};