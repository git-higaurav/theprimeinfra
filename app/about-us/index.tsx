"use client"
import { motion } from 'framer-motion';

export default function AboutUs() {
    return (
        <section className="relative py-24 px-4 bg-gradient-to-b from-[#12192b] to-[#1a2338] overflow-hidden min-h-screen">
            {/* Animated Background Elements */}
            <motion.div
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-20 right-20 w-72 h-72 rounded-full bg-gradient-to-r from-[#edc135]/5 to-transparent blur-2xl"
            />
            <motion.div
                animate={{
                    rotate: [360, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-r from-[#edc135]/10 to-transparent blur-2xl"
            />

            <div className="container mx-auto relative z-10 max-w-7xl">
                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <span className="text-[#edc135] text-lg font-medium mb-4 block">Welcome to Prime Infra</span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        Transforming Dreams Into Addresses
                    </h1>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        With over a decade of excellence in Dehradun's real estate market, we bring expertise, trust, and personalized service to every client relationship.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-24">
                    {/* Why Choose Us Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col space-y-8"
                    >
                        <div className="flex items-center space-x-4 mb-2">
                            <div className="h-1 w-12 bg-[#edc135]"></div>
                            <h2 className="text-3xl font-bold text-white">Why Choose Us</h2>
                        </div>
                        <div className="bg-white/[0.03] backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-[#edc135]/30 transition-all duration-500 flex-1 group">
                            <div className="space-y-8">
                                <div className="group-hover:translate-x-2 transition-transform duration-300">
                                    <h3 className="text-xl font-semibold text-[#edc135] mb-3">Local Market Mastery</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Unparalleled understanding of Dehradun's real estate dynamics, ensuring optimal investment decisions.
                                    </p>
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-300 delay-100">
                                    <h3 className="text-xl font-semibold text-[#edc135] mb-3">Client-First Approach</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Dedicated to understanding your unique needs and delivering personalized solutions.
                                    </p>
                                </div>
                                <div className="group-hover:translate-x-2 transition-transform duration-300 delay-200">
                                    <h3 className="text-xl font-semibold text-[#edc135] mb-3">Transparent Process</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Clear communication and honest guidance throughout your property journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Our Services Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col space-y-8"
                    >
                        <div className="flex items-center space-x-4 mb-2">
                            <div className="h-1 w-12 bg-[#edc135]"></div>
                            <h2 className="text-3xl font-bold text-white">Our Services</h2>
                        </div>
                        <div className="bg-gradient-to-br from-[#1a2338]/50 to-[#1f2b4d]/50 p-8 rounded-2xl shadow-lg border border-white/10 hover:border-[#edc135]/30 transition-all duration-500 flex-1 group">
                            <ul className="space-y-8">
                                {[
                                    {
                                        title: "Property Valuation",
                                        description: "Data-driven analysis for accurate property valuations"
                                    },
                                    {
                                        title: "Portfolio Management",
                                        description: "Strategic handling of diverse property investments"
                                    },
                                    {
                                        title: "Transaction Support",
                                        description: "Comprehensive assistance from listing to closing"
                                    }
                                ].map((service, index) => (
                                    <li key={index} className="flex items-start space-x-4 group-hover:translate-x-2 transition-transform duration-300" style={{ transitionDelay: `${index * 100}ms` }}>
                                        <span className="w-2 h-2 bg-[#edc135] rounded-full mt-2.5 flex-shrink-0"></span>
                                        <div>
                                            <h3 className="text-xl font-semibold text-[#edc135] mb-2">{service.title}</h3>
                                            <p className="text-gray-300">{service.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-16">Our Impact in Numbers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: "10+", label: "Years of Excellence" },
                            { value: "500+", label: "Successful Deals" },
                            { value: "1000+", label: "Properties Listed" },
                            { value: "98%", label: "Client Satisfaction" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/[0.03] backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-[#edc135]/30 transition-all duration-300"
                            >
                                <div className="text-4xl font-bold text-[#edc135] mb-3">{stat.value}</div>
                                <p className="text-gray-300 text-lg">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};