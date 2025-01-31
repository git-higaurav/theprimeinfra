"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import manojImage from '../assets/agents/manoj.png';
import deepakImage from "../assets/agents/deepak.png"
import sweetyImage from "../assets/agents/sweety.png"

const teamMembers = [
    {
        name: "Manoj Jayant",
        role: "Sales Manager",
        description: "10+ years of experience in Dehradun real estate market",
        image: manojImage
    },
    {
        name: "Deepak", 
        role: "Sales Executive",
        description: "Specializes in residential properties and client relations",
        image: deepakImage
    },
    {
        name: "Sweety Sharma",
        role: "Sales Executive",
        description: "Expert in property valuation and market analysis",
        image: sweetyImage
    }
];

export default function Agent() {
    return (
        <section className="relative py-16 px-4 bg-gray-50 overflow-hidden">
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
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our experienced team of real estate professionals is here to help you find your perfect property in Dehradun.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden text-center"
                        >
                            <div className="relative w-48 h-48 mx-auto mt-8 overflow-hidden rounded-full">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={false}
                                    quality={75}
                                    unoptimized={true}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                <p className="text-[#edc135] font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600">{member.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <motion.a
                        href="https://wa.me/918057235806"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#edc135] text-white px-8 py-3 rounded-full font-medium hover:bg-[#d4ac2d] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Our Team
                    </motion.a>
                </div>
            </div>
        </section>
    );
}